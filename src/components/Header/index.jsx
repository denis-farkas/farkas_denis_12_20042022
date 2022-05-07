import React from 'react';
import useUser from '../../hooks/useUser';
import './header.css';

const Header = () => {
  const { user } = useUser();

  return (
    <div className="header">
      <h1>
        Bonjour
        <span className="redTitle">
          {user && user.data.userInfos.firstName}
        </span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Header;
