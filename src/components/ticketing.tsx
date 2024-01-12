import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { type Ticket, type Guest } from "../model/interface";

const TicketingSystem: React.FC<{
  onTicketIssued: (ticket: Ticket) => void;
}> = ({ onTicketIssued }) => {
  const [ageInput, setAgeInput] = useState<number | any>("");
  const [guests, setGuests] = useState<Guest[]>([]);
  const [totalCharges, setTotalCharges] = useState<number>(0);

  const handleAddGuest = () => {
    if (!ageInput) return;
    const newGuests = [...guests, { age: ageInput }];
    setGuests(newGuests);
    calculateTotalCharges(newGuests);
    setAgeInput("");
  };

  const handleRemoveGuest = (index: number) => {
    if (isNaN(index) || index < 0) return;
    const newGuests = [...guests];
    newGuests.splice(index, 1);
    setGuests(newGuests);
    calculateTotalCharges(newGuests);
  };

  const calculateTotalCharges = (guestList: Guest[]) => {
    const total = guestList.reduce((acc, guest) => {
      if (guest.age <= 2) return acc + 0;
      else if (guest.age >= 3 && guest.age < 18) return acc + 100;
      else if (guest.age >= 18 && guest.age < 60) return acc + 500;
      else return acc + 300;
    }, 0);
    setTotalCharges(total);
  };

  return (
    <Paper
      elevation={3}
      style={{
        margin: "auto",
        padding: "20px",
        maxWidth: "400px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <Typography variant="h5">Ticketing System</Typography>

      <TextField
        type="number"
        label="Guest Age"
        fullWidth
        value={ageInput}
        onChange={(e) => setAgeInput(Number(e.target.value))}
      />
      <Button
        variant="contained"
        color="primary"
        disabled={!ageInput}
        onClick={handleAddGuest}
      >
        Add Guest
      </Button>

      <List
        style={{ maxHeight: "300px", minHeight: "50vh", overflowY: "auto" }}
      >
        {guests.map((guest, index) => (
          <ListItem key={index}>
            <ListItemText primary={`Guest ${index + 1} (age: ${guest.age})`} />
            <DeleteIcon
              color="error"
              style={{ cursor: "pointer" }}
              onClick={() => handleRemoveGuest(index)}
            />
          </ListItem>
        ))}
      </List>

      <Typography variant="h6">Total Charges: ₹ {totalCharges}</Typography>

      <Button
        variant="contained"
        color="primary"
        disabled={!guests?.length}
        onClick={() => onTicketIssued({ guests: guests })}
      >
        Issue Ticket
      </Button>
    </Paper>
  );
};

export default TicketingSystem;
