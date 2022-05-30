import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [sessionData, setSessionData] = useState();

  let idUser = JSON.parse(sessionStorage.getItem('idUser'));
  let env = JSON.parse(sessionStorage.getItem('env'));
  let url = null;

  if (env !== 'local') {
    url = process.env.REACT_APP_API_URL + `/${idUser.id}/average-sessions`;
  } else if (env === 'local' && (idUser.id === '12' || idUser.id === '18')) {
    url = `data/average_${idUser.id}.json`;
  } else {
    url = `data/average_12.json`;
  }

  const getSession = async () => {
    try {
      const { data } = await axios(url);
      setSessionData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSession();
  }, []);

  return (
    <SessionContext.Provider value={{ sessionData }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider };

export default SessionContext;

SessionProvider.propType = {
  children: PropTypes.node.isRequired,
};
