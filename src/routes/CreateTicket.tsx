import React from "react";
import { FormControl, FormLabel } from '@mui/material';
import styled from '@emotion/styled';


const Wrapper = styled.div({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: '10%',
    gap: '10px',
});


const CreateTicket = () => {

    // There are some good libraries for dynamic froms like React Hook Form, Formik, etc
    return (
        <React.Fragment>
            <Wrapper>
            <FormControl>
                <FormLabel><h2>Create Ticket</h2></FormLabel>
            </FormControl>
            </Wrapper>
        </React.Fragment>
    )
}

export default CreateTicket;