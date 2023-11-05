import { TicketI } from "../types";

export async function GetTickets(): Promise<TicketI[] | undefined> {
  try {
    const response = await fetch('http://localhost:3001/tickets');
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}