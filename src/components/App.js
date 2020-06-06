import React from 'react';

import Profile from './UserProfile/Profile/Profile';
import Statistics from './StatisticSection/Statistics';
import FriendList from './FriendsList/FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <>
    <Profile/>
    <Statistics/>
    <FriendList/>
    <TransactionHistory/>
  </>
);

export default App;