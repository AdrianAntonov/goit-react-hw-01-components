import React from "react";
import PropTypes from "prop-types";
import TransactionItem from "../TransactionItem/TransactionItem";
import style from "./TransactionHistory.module.css";

const TransactionHistory = (props) => {
  return (
    <div>
      <table className={style.transactionHistory}>
        <thead>
          <tr className={style.head}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <TransactionItem transaction={props} />
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  props: PropTypes.array,
};

export default TransactionHistory;
