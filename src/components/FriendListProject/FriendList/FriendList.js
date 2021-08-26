import React from "react";
import friends from "./friends.json";
import FriendCard from "../FriendCard/FriendCard";

const FriendList = () => {
  return (
    <div>
      <FriendCard friends={friends} />
    </div>
  );
};

export default FriendList;
