import React from "react";
import PropTypes from "prop-types";
import transactions from "./transactions.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const Transactions = () => {
  return (
    <div>
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

Transactions.propTypes = {
  transactions: PropTypes.array,
};

export default Transactions;
