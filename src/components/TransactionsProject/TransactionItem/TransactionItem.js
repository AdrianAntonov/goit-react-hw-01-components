import React from "react";
import PropTypes from "prop-types";
import style from "./TransactionItem.module.css";

const TransactionItem = ({ transaction: { transactions } }) => {
  return (
    <tbody>
      {transactions.map((item) => (
        <tr key={item.id}>
          <td className={style.type}>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  );
};

TransactionItem.propTypes = {
  transactions: PropTypes.array,
};

export default TransactionItem;
