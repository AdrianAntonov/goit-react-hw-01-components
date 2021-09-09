import React from 'react';
import friends from './friends.json';
import FriendCard from '../FriendCard/FriendCard';

const FriendList = () => {
  return (
    <div>
      {friends.map(item => (
        <div key={item.id}>
          <FriendCard
            name={item.name}
            avatar={item.avatar}
            id={item.id}
            isOnline={item.isOnline}
          />
        </div>
      ))}
    </div>
  );
};

export default FriendList;
