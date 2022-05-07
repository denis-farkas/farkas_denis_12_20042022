import { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const PerformanceContext = createContext();

const PerformanceProvider = ({ children }) => {
  const [performance, setPerformance] = useState();
  const getPerformance = async () => {
    try {
      const url = `http://localhost:3000/user/12/performance`;
      const { data } = await axios(url);
      setPerformance(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPerformance();
  }, []);

  return (
    <PerformanceContext.Provider value={{ performance }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export { PerformanceProvider };

export default PerformanceContext;
