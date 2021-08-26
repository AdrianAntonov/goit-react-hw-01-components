import React from "react";
import style from "./FriendCard.module.css";

const FriendCard = (props) => {
  return (
    <div className={style.card}>
      {props.friends.map((item) => (
        <li key={item.id} className={style.item}>
          <span
            className={
              item.isOnline === true ? style.statusOn : style.statusOff
            }
          />
          <img
            className={style.avatar}
            src={item.avatar}
            alt="avatar"
            width="48"
          />
          <p className={style.name}>{item.name}</p>
        </li>
      ))}
    </div>
  );
};

export default FriendCard;
