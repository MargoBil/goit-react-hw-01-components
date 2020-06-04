import React from 'react';
import styles from './Profile.module.css';

const Profile = ({children}) => {
  const divClass = [styles.profile];
  return (
    <div className={divClass.join (' ')}>
      {children}
    </div>
  );
};

export default Profile;
