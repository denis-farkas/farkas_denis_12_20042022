import { useContext } from 'react';
import PerformanceContext from '../context/PerformanceProvider';

const usePerformance = () => {
  return useContext(PerformanceContext);
};

export default usePerformance;
