import React from 'react';


import Descriptions from './../Description/Description';
import Stats from './../Stats/Stats';

import {name, tag, location, avatar, stats} from './../../../data/user.json';

import s from './Profile.module.css';

const Profile = () => {
  return (
    <div className={s.profile}>
      <Descriptions
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <Stats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
      />
    </div>
  );
};

export default Profile;
