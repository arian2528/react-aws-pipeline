import { TicketI } from "../types";

// There are some good libraries for form validation like Yup, Zod, etc
export const isValidData = (ticket: TicketI): boolean => {
    return ticket.name.length > 0 && ticket.email.length > 0 && ticket.description.length > 0;
}