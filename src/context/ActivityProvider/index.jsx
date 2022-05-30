import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [activityData, setActivityData] = useState();

  let idUser = JSON.parse(sessionStorage.getItem('idUser'));
  let env = JSON.parse(sessionStorage.getItem('env'));
  let url = null;

  if (env !== 'local') {
    url = process.env.REACT_APP_API_URL + `/${idUser.id}/activity`;
  } else if (env === 'local' && (idUser.id === '12' || idUser.id === '18')) {
    url = `data/activity_${idUser.id}.json`;
  } else {
    url = `data/activity_12.json`;
  }

  const getActivity = async () => {
    try {
      const { data } = await axios.get(url);
      setActivityData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <ActivityContext.Provider value={{ activityData }}>
      {children}
    </ActivityContext.Provider>
  );
};

export { ActivityProvider };

export default ActivityContext;

ActivityProvider.propType = {
  children: PropTypes.node.isRequired,
};
