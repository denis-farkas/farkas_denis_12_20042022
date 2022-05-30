import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  let id = JSON.parse(sessionStorage.getItem('idUser'));

  if (id !== null) {
    return (
      <div className="navbar navbar-dark">
        <div className="container">
          <ul className="navbar-nav">
            <NavLink
              to={`/`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              <li className="nav-item">Accueil</li>
            </NavLink>
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              <li className="nav-item">Profil</li>
            </NavLink>
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              <li className="nav-item">Réglage</li>
            </NavLink>
            <NavLink
              to={`/${id.id}`}
              className={(nav) =>
                nav.isActive ? 'nav-item active' : 'nav-item'
              }
            >
              <li className="nav-item">Communauté</li>
            </NavLink>
          </ul>
        </div>
      </div>
    );
  }
};

export default Navigation;
