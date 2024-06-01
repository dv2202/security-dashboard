import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Typography } from '@mui/material';

const LineChartComponent = ({ data }) => (
  <>
    <Typography gutterBottom>
      Alerts Over Time
    </Typography>
    <LineChart
      width={900}
      height={400}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="0 0" />
      <XAxis dataKey="timestamp" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="severity" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </>
);

export default LineChartComponent;
