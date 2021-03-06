import React from 'react';
import { useContext } from 'react';
import ActivityContext from '../../context/ActivityProvider';
import './histogramme.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

/**
 * @description Weight and  burned calories  for each session, in a week
 * @returns (React.ReactElement)
 */

function Histogramme() {
  const { activityData } = useContext(ActivityContext);

  const CustomTooltip = ({ payload }) => {
    if (payload && payload.length) {
      return (
        <div
          style={{
            padding: '3px 5px',
            borderRadius: '2px',
            background: 'red',
            margin: '10px',
            color: '#FFF',
          }}
        >
          <p className="custom-p">{`${payload[0].value} ${payload[0].unit}`}</p>
          <p className="custom-p">
            {`${payload[1].value} ${payload[1].unit}`}{' '}
          </p>
        </div>
      );
    }
    return null;
  };

  if (activityData !== undefined) {
    return (
      <div className="activity">
        <ResponsiveContainer width="95%" height="95%" aspect={600 / 150}>
          <BarChart
            data={activityData && activityData.data.sessions}
            margin={{
              top: 0,
              right: 0,
              left: 30,
              bottom: 0,
            }}
            barGap={9}
            stackOffset="expand"
            className="bar-chart"
            style={{
              padding: '65px 15px',
              height: 'auto',
            }}
          >
            <text
              textAnchor="middle"
              dominantBaseline="middle"
              className="progress-label"
            >
              Activité quotidienne
            </text>
            <XAxis
              axisLine={true}
              tickLine={false}
              tickMargin={16}
              domain={['minData', 'maxData']}
              tickFormatter={(number) => number + 1}
              scale="point"
              padding={{ left: 14, right: 14 }}
              style={{ fontSize: '13px' }}
            />
            <YAxis
              yAxisId="right"
              dataKey="kilogram"
              orientation="right"
              tickMargin={40}
              tickCount={3}
              allowDecimals={false}
              allowDataOverflow={false}
              axisLine={false}
              tickLine={false}
              ticks={[65, 70, 75, 80]}
              padding={{ left: 8, right: 8 }}
              domain={[65, 75]}
              type="number"
              scale="auto"
              style={{ fontSize: '13px' }}
            />
            <YAxis
              yAxisId="left"
              dataKey="calories"
              domain={['auto', 'auto']}
              scale="auto"
              hide
            />
            <Tooltip
              content={
                <CustomTooltip
                  payload={activityData && [activityData.data.sessions]}
                />
              }
            />
            <CartesianGrid
              vertical={false}
              strokeDasharray="1"
              style={{ padding: '0', margin: '0' }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize={8}
            />
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[5, 5, 0, 0]}
              name="Poids (kg)"
              unit={'kg'}
              style={{ margin: '0', padding: '0' }}
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
              fill="#E60000"
              barSize={6}
              radius={[5, 5, 0, 0]}
              name="Calories brulées (kCal)"
              unit={'kCal'}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default Histogramme;
