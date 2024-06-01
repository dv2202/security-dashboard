import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Typography } from '@mui/material';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = ({ data }) => (
  <>
    <Typography gutterBottom>
      Alerts by Severity
    </Typography>
    <PieChart width={1000} height={600}>
      <Pie
        data={data}
        cx={500}
        cy={300}
        labelLine={false}
        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  </>
);

export default PieChartComponent;
