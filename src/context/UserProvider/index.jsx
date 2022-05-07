import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      const url = `http://localhost:3000/user/12`;
      const { data } = await axios(url);
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
