import React from "react";
import PropTypes from "prop-types";
import style from "./Title.module.css";

const Title = (props) => {
  return props.title && <div className={style.title}>{props.title}</div>;
};

Title.defaultProps = {
  title: null,
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
