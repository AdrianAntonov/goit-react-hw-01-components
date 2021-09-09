import React from 'react';
import style from './FriendCard.module.css';

const FriendCard = props => {
  return (
    <div>
      {
        <li key={props.id} className={style.card}>
          <span
            className={
              props.isOnline === true ? style.statusOn : style.statusOff
            }
          />
          <img
            className={style.avatar}
            src={props.avatar}
            alt="avatar"
            width="48"
          />
          <p className={style.name}>{props.name}</p>
        </li>
      }
    </div>
  );
};

export default FriendCard;
