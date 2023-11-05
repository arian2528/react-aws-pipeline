import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StatusE, TicketI } from '../types';
import StatusDropDown from './StatusDropDown';

interface BasicTableProps {
  tickets: TicketI[];
  ticketSelected: TicketI | null;
  handleStatusChange: (ticketId: string, status: StatusE) => void;
  handleSelectTicket: (ticketId: string) => void;
}  

export default function BasicTable({tickets, ticketSelected, handleStatusChange, handleSelectTicket}: BasicTableProps) {
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickets.map((ticket: TicketI) => (
            <TableRow
              key={ticket.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={() => handleSelectTicket(ticket.id ?? '')}
              selected={ticketSelected?.id === ticket.id}
            >
              <TableCell component="th" scope="row">{ticket.name}</TableCell>
              <TableCell align="right">{ticket.email}</TableCell>
              <TableCell align="right">
                <StatusDropDown 
                  ticketId={ticket.id ?? ''}
                  status={ticket.status ?? StatusE.New}
                  handleStatusChange={handleStatusChange}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}