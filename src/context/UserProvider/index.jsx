import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  let idUser = JSON.parse(sessionStorage.getItem('idUser'));
  let env = JSON.parse(sessionStorage.getItem('env'));
  let url = null;

  if (env !== 'local') {
    url = process.env.REACT_APP_API_URL + `/${idUser.id}`;
  } else if (env === 'local' && (idUser.id === '12' || idUser.id === '18')) {
    url = `data/user_${idUser.id}.json`;
  } else {
    url = `data/user_12.json`;
  }

  const getUser = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export { UserProvider };

export default UserContext;

UserProvider.propType = {
  children: PropTypes.node.isRequired,
};
