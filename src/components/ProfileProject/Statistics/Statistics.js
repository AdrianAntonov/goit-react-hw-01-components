import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import style from "./Statistics.module.css";

const Stats = (props) => {
  const [[, followersQuantity], [, viewsQuantity], [, likesQuantity]] =
    Object.entries(props.stats);
  return (
    <ul className={style.stats}>
      <Card
        label="Followers"
        quantity={followersQuantity}
        className={style.firstChild}
      />
      <Card label="Views" quantity={viewsQuantity} />
      <Card label="Likes" quantity={likesQuantity} />
    </ul>
  );
};

Stats.propTypes = {
  followers: PropTypes.string,
  views: PropTypes.string,
  likes: PropTypes.string,
  followersQuantity: PropTypes.number,
  viewsQuantity: PropTypes.number,
  likesQuantity: PropTypes.number,
};

export default Stats;
