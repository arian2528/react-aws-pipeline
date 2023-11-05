export enum StatusE {
    New = 'new',
    InProgress = 'in progress',
    Resolved = 'resolved'
}

export interface TicketI {
    id?: string;
    name: string;
    email: string;
    description: string;
    status?: StatusE;
    responses?: string[];
}

export enum TicketFieldsE {
    Name = 'Name',
    Email = 'Email',
    Description = 'Description',
    Status = 'Status',
    Response = 'Response'
}