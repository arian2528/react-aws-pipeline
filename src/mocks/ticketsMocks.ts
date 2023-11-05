import { StatusE, TicketI } from "../types";

export const ticketsMocks: TicketI[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'eamil@email.net',
        status: StatusE.New,
        description: 'This is the description for Joe',
        responses: ['This is a response'],
    },
    {
        id: '2',
        name: 'Yanet Doe',
        email: 'yanet@gmail.net',
        status: StatusE.InProgress,
        description: 'This is the description for Yanet',
    },
]