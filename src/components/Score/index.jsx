import React from 'react';
import { useContext } from 'react';
import UserContext from '../../context/UserProvider';
import './score.css';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';

/**
 * @description Global today score for user
 * @returns (React.ReactElement)
 */

function Score() {
  const { user } = useContext(UserContext);
  let scoreData = user && user.data.todayScore;

  //correction error in API
  if (scoreData === undefined) {
    scoreData = user && user.data.score;
  }

  const pieData = [
    { name: 'completed', value: scoreData, fillColor: `#ff0000` },
  ];
  const style = {
    top: '50%',
    right: 0,
    transform: 'translate(-2%, -40%)',
    lineHeight: '24px',
  };

  function renderLegend() {
    return (
      <div>
        <div className="Legend">
          <span>{scoreData * 100}%</span>
          <p>de votre objectif</p>
        </div>
      </div>
    );
  }

  return (
    <div className="averageScore">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie
            data={pieData}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={210}
            endAngle={210 - 450 * scoreData}
          >
            {pieData.map((entry) => (
              <Cell key={`cell-0`} fill={entry.fillColor} cornerRadius="50%" />
            ))}
          </Pie>
          <text
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            style={{
              padding: '20px',
              transform: 'translate(15%, 10%)',
              color: '#000',
              fontWeight: '500',
            }}
          >
            Score
          </text>
          <Legend
            content={renderLegend}
            layout="horizontal"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Score;
