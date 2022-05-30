import { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

export const PerformanceContext = createContext();

const PerformanceProvider = ({ children }) => {
  const [performanceData, setPerformanceData] = useState();

  let idUser = JSON.parse(sessionStorage.getItem('idUser'));
  let env = JSON.parse(sessionStorage.getItem('env'));
  let url = null;

  if (env !== 'local') {
    url = process.env.REACT_APP_API_URL + `/${idUser.id}/performance`;
  } else if (env === 'local' && (idUser.id === '12' || idUser.id === '18')) {
    url = `data/performance_${idUser.id}.json`;
  } else {
    url = `data/performance_12.json`;
  }
  const getPerformance = async () => {
    try {
      const { data } = await axios(url);
      setPerformanceData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPerformance();
  }, []);

  return (
    <PerformanceContext.Provider value={{ performanceData }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export { PerformanceProvider };

export default PerformanceContext;

PerformanceProvider.propType = {
  children: PropTypes.node.isRequired,
};
