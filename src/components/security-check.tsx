import React, { memo } from "react";
import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

interface Ticket {
  guests: { age: number }[];
}

const SecurityCheck: React.FC<{
  ticket: Ticket;
  approveTicket: VoidFunction;
}> = ({ ticket, approveTicket }) => {
  return (
    <Paper
      elevation={3}
      style={{
        margin: "auto",
        padding: "20px",
        maxWidth: "400px",
      }}
    >
      <Typography variant="h5">Security Check</Typography>

      <List>
        {ticket.guests.map((guest, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Guest ${index + 1} (age: ${guest.age})`} />
          </ListItem>
        ))}
      </List>

      <Button variant="outlined" color="success" onClick={approveTicket}>
        Approve
      </Button>
    </Paper>
  );
};

export default memo(SecurityCheck);
