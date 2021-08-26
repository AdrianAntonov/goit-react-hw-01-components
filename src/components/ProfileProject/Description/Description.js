import React from "react";
import PropTypes from "prop-types";
import style from "./Description.module.css";

const Description = (props) => {
  const { avatar, name, tag, location } = props;
  return (
    <div className={style.description}>
      <img src={avatar} alt="Аватар пользователя" className={style.avatar} />
      <p className={style.name}>{name}</p>
      <p className={style.tag}>{`@${tag}`}</p>
      <p className={style.location}>{location}</p>
    </div>
  );
};

Description.propTypes = {
  name: PropTypes.string,
  location: PropTypes.string,
  tag: PropTypes.string,
  avatar: PropTypes.node,
};

export default Description;
