import React from 'react';

import FriendListItem from '../FriendListItem/FriendListItem.js';
import friends from './../../../data/friends.json';
import s from './FriendList.module.css';

const FriendList = () => {
  return (
  <ul className={s.list}>
    {friends.map (friend => (
      <FriendListItem key = {(friend.id).toString()}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
)};

export default FriendList;
