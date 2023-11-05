import React from "react";
import { FormControl, FormLabel } from '@mui/material';
import { TicketI } from "../types";
import styled from '@emotion/styled';
import { PostTicket } from "../utils/PostTicket";
import TicketForm from "../components/TicketForm";
import { isValidData } from "../utils/utils";

const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: '10%',
    gap: '10px',
});


const CreateTicket = () => {
    const initialTicketState: TicketI = { name: '', email: '', description: '' };
    const [ticket, setTicket] = React.useState<TicketI>(initialTicketState);
    
    const handleChange = (field: string, value: string) => {
        console.log(field, value)
        setTicket({...ticket, [field]: value})
    }

    const handleSubmit = async () => {
        if (!isValidData(ticket)) return;
        console.log(ticket);
        const result = await PostTicket(ticket);
        if (!result || result !== 'success') {
            console.log('Error submitting ticket');
            // Here we can handle the error in a better way by identifying what fileds were wrong
            // or is there was a problem with the server
            return;
        }
        setTicket(initialTicketState);
    }

    // There are some good libraries for dynamic froms like React Hook Form, Formik, etc
    return (
        <React.Fragment>
            <Wrapper>
            <FormControl>
                <FormLabel><h2>Create Ticket</h2></FormLabel>
                <TicketForm handleSubmit={handleSubmit} handleChange={handleChange} ticket={ticket}/>
            </FormControl>
            </Wrapper>
        </React.Fragment>
    )
}

export default CreateTicket;