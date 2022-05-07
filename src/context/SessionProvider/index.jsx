import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const SessionContext = createContext();

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState();
  const getSession = async () => {
    try {
      const url = `http://localhost:3000/user/12/average-sessions`;
      const { data } = await axios(url);
      setSession(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionProvider };

export default SessionContext;
