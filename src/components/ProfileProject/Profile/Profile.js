import React from "react";
import Description from "../Description/Description";
import Statistics from "../Statistics/Statistics";
import style from "./Profile.module.css";
import user from "../user.json";

const Profile = () => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <div className={style.profile}>
      <Description name={name} tag={tag} location={location} avatar={avatar} />
      <Statistics stats={stats} />
    </div>
  );
};

export default Profile;
