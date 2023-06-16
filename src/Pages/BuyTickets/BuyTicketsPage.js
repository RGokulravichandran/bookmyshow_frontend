import React from "react";
import BuyTickets from "../../components/BuyTickets/BuyTickets";
import { useParams } from "react-router-dom";

const BuyTicketsPage = () => {
  const { id } = useParams();
  return (
    <div className="BuyTicketsPage">
      <BuyTickets id={id} />
    </div>
  );
};

export default BuyTicketsPage;
