import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Typography } from '@mui/material';

const BarChartComponent = ({ data }) => (
  <>
    <Typography variant="h6" gutterBottom>
      Alerts by Category
    </Typography>
    <BarChart
      width={1000}
      height={600}
      data={data}
      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="0 0" />
      <XAxis dataKey="category" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#82ca9d" />
    </BarChart>
  </>
);

export default BarChartComponent;
