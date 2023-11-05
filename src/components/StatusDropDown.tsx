import React, { useState, useEffect, useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { StatusE } from "../types";

interface StatusDropDownProps {
    ticketId: string;
    status: StatusE;
    handleStatusChange: (ticketdId: string, status: StatusE) => void;
}

const StatusDropDown = ({ticketId, status, handleStatusChange}: StatusDropDownProps) => {
        
    return (
        <FormControl fullWidth variant="standard">
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Age"
                onChange={(e) => handleStatusChange(ticketId, e.target.value as StatusE)}
            >
                <MenuItem value={StatusE.New}>New</MenuItem>
                <MenuItem value={StatusE.InProgress}>In progress</MenuItem>
                <MenuItem value={StatusE.Resolved}>Resolved</MenuItem>
            </Select>
        </FormControl>
    );
}

export default StatusDropDown;