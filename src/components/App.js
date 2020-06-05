import React from 'react';
import user from './../data/user.json';
import Profile from './Task-1/Profile/Profile';
import Descriptions from './Task-1/Description/Description';
import Stats from './Task-1/Stats/Stats';
import Statistics from './Task-2/Statistics';
import statisticalData from './../data/statistical-data.json';
import FriendList from './Task-3/FriendList/FriendList';
import friends from './../data/friends.json';
import TransactionHistory from './Task-4/TransactionHistory';
import transactions from './../data/transaction.json';

const App = () => (
  <>
    <Profile>
    <Descriptions name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}/>
    <Stats followers = {user.stats.followers} views = {user.stats.views} likes= {user.stats.likes}/>
    </Profile>
    <Statistics title = "UPLOAD STATS" stats = {statisticalData} />
    <FriendList friends = {friends}/>
    <TransactionHistory items = {transactions}/>
  </>
);

export default App;