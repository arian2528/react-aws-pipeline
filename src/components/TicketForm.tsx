import React from 'react';
import { FormGroup, Stack, TextField, Button } from "@mui/material"
import { TicketI } from '../types';

export interface TicketFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (field: string, value: string) => void;
    ticket: TicketI;
}

const TicketForm = ({handleSubmit, handleChange, ticket}: TicketFormProps) => {
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Stack gap={6}>
                    <Stack spacing={4} alignItems="center">
                        <TextField
                            role='nameInput'
                            data-testid='nameInput'
                            label="Name"
                            variant="standard"
                            type="text"
                            value={ticket.name}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleChange('name', event.target.value)}}
                            required
                        />
                    
                        <TextField
                            role='emailInput'
                            data-testid='emailInput'
                            label="Email"
                            type="email"
                            variant="standard"
                            value={ticket.email}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleChange('email', event.target.value)}}
                            required
                        />
                    </Stack>
                    <Stack spacing={4} alignItems="center">
                        <TextField
                            role='descriptionInput'
                            data-testid='descriptionInput'
                            label="Description"
                            type="text"
                            variant="outlined"
                            multiline maxRows={5} minRows={3} fullWidth
                            sx={{width: '150%'}}
                            value={ticket.description}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {handleChange('description', event.target.value)}}
                            required
                        />
                    </Stack>
                    <Stack spacing={4} alignItems="center">
                        <Button data-testid='buttonSubmit' variant="contained" type="submit">Submit Ticket</Button>
                    </Stack>
                </Stack>    
            </FormGroup>
        </form>
    )
}

export default TicketForm;