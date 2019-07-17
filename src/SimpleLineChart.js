import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'רבעון 1/96', מכירות: 2200, הזמנות: 3400 ,מניה:3700 ,רווחים:1000 },
  { name: 'רבעון 2/96', מכירות: 1280, הזמנות: 2398 ,מניה:3456 ,רווחים:7400},
  { name: 'רבעון 3/96', מכירות: 5000, הזמנות: 4300 ,מניה:3654 ,רווחים:3000},
  { name: 'רבעון 4/96', מכירות: 4780, הזמנות: 2908 ,מניה:3898 ,רווחים:4689},
  { name: '5/96 רבעון', מכירות: 5890, הזמנות: 4800 ,מניה:4678 ,רווחים:7700},
  { name: 'רבעון 6/96', מכירות: 4390, הזמנות: 3800 ,מניה:4765 ,רווחים:3457},
  { name: 'רבעון 7/96', מכירות: 4490, הזמנות: 4300 ,מניה:5780 ,רווחים:7200},
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Tooltip />
        <Tooltip />

        <Legend />
        <Line type="monotone" dataKey="מכירות" stroke="#8884d8" />
        <Line type="monotone" dataKey="הזמנות" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="מניה" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="רווחים" stroke="#82ca9d" activeDot={{ r: 8 }} />

      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;