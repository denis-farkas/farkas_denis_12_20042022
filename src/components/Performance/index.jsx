import React from 'react';
import { useContext } from 'react';
import PerformanceContext from '../../context/PerformanceProvider';
import './performance.css';
import {
  Radar,
  RadarChart,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarGrid,
  PolarRadiusAxis,
} from 'recharts';

/**
 * @description Radar graph with intensity, cardio, energy, endurance, strength, speed values
 * @returns (React.ReactElement)
 */

function Performance() {
  const { performanceData } = useContext(PerformanceContext);

  if (performanceData !== undefined) {
    const data = performanceData.data.data;
    const kind = performanceData.data.kind;
    return (
      <div className="performance">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            outerRadius="65%"
            cx="52%"
            cy="52%"
            data={data}
            style={{ background: '#282D30' }}
            startAngle={390}
            endAngle={30}
          >
            <PolarAngleAxis
              dataKey="kind"
              tickFormatter={(kindNumber) => {
                return (
                  typeof kindNumber === 'number' &&
                  kind[kindNumber] &&
                  `${kind[kindNumber].substring(0, 1).toUpperCase()}${kind[
                    kindNumber
                  ].substring(1)}`
                );
              }}
              stroke="#FFF"
              tickLine={false}
            />
            <PolarGrid radialLines={false} />
            <PolarRadiusAxis axisLine={false} tick={false} />
            <Radar
              dataKey="value"
              stroke="#ff0000"
              fill="#ff0101b3"
              fillOpacity={0.6}
              width={100}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
export default Performance;
