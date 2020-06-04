import React from 'react';
import user from './../data/user.json';
import Profile from './Task-1/Profile/Profile';
import Descriptions from './Task-1/Description/Description';
import Stats from './Task-1/Stats/Stats';

const App = () => (
  <>
    <Profile>
    <Descriptions name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}/>
    <Stats followers = {user.stats.followers} views = {user.stats.views} likes= {user.stats.likes}/>
    </Profile>
  </>
);

export default App;