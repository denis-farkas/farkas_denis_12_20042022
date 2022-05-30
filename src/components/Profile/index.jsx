import React from 'react';
import { useContext } from 'react';
import UserContext from '../../context/UserProvider';
import './profile.css';

/**
 * @description first name user  and incentive message
 * @returns (React.ReactElement)
 */

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div className="profile col-lg-10">
      <h1>
        Bonjour
        <span className="redTitle">
          {user && user.data.userInfos.firstName}
        </span>
      </h1>
      <p className="p_marge">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}

export default Profile;
