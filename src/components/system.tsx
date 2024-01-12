import React, { useState } from "react";
import Ticketing from "./ticketing";
import SecurityCheck from "./security-check";
import ZooBgImg from "../assets/img/zoo-bg.png";

import { type Ticket } from "../model/interface";

const System: React.FC = () => {
  const [issuedTicket, setIssuedTicket] = useState<Ticket | null>(null);

  const handleTicketIssued = (ticket: Ticket) => {
    setIssuedTicket(ticket);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${ZooBgImg})`,
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "none",
        backgroundSize: "cover",
        height: "100vh",
        padding: 50,
      }}
    >
      {!issuedTicket ? (
        <Ticketing onTicketIssued={handleTicketIssued} />
      ) : (
        <SecurityCheck
          ticket={issuedTicket}
          approveTicket={() => setIssuedTicket(null)}
        />
      )}
    </div>
  );
};

export default System;
