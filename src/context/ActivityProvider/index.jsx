import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState();
  const getActivity = async () => {
    try {
      const url = `http://localhost:3000/user/12/activity`;
      const { data } = await axios(url);
      setActivity(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <ActivityContext.Provider value={{ activity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export { ActivityProvider };

export default ActivityContext;
