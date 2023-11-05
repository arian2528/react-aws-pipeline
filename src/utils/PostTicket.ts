import { TicketI } from "../types";

export async function PostTicket(ticket: TicketI): Promise<string|undefined> {
    try {
        const response = await fetch('http://localhost:3001/tickets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ticket)
        })
        const data = await response.json();

        if (data.status === 'success') {
            return data.status
        } else {
            return data.message
        }
    } catch (error: any) {
        throw new Error(error)
    }
}