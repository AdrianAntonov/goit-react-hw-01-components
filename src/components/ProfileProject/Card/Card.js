import React from "react";
import PropTypes from "prop-types";
import style from "./Card.module.css";

const Card = ({ label, quantity }) => {
  return (
    <ul className={style.list}>
      <li>
        <span className={style.label}>{label}</span>
        <br />
        <span className={style.quantity}>{quantity}</span>
      </li>
    </ul>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
};

export default Card;
