import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate";
import Transaction from "./Transaction";

const Transactionlist = () => {
  const { transaction } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};

export default Transactionlist;
