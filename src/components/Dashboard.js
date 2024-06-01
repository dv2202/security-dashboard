import React from 'react';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import LineChartComponent from './LineChartComponent';
import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';

const StyledContainer = styled(Container)`
  background-color: black;
  width: 100%;
  color: white;
  padding:40px
  border-radius: 10px;
`;

const processDataForCharts = (data) => {
  const lineChartData = data.map(item => ({
    timestamp: new Date(item.timestamp).toLocaleTimeString(),
    severity: item.alert ? item.alert.severity : null,
  })).filter(item => item.severity !== null); // Filter out any entries with null severity

  const categoryCount = data.reduce((acc, item) => {
    if (item.alert && item.alert.category) {
      acc[item.alert.category] = (acc[item.alert.category] || 0) + 1;
    }
    return acc;
  }, {});

  const barChartData = Object.keys(categoryCount).map(key => ({
    category: key,
    count: categoryCount[key],
  }));

  const severityCount = data.reduce((acc, item) => {
    if (item.alert && item.alert.severity !== undefined) {
      acc[item.alert.severity] = (acc[item.alert.severity] || 0) + 1;
    }
    return acc;
  }, {});

  const pieChartData = Object.keys(severityCount).map(key => ({
    name: `Severity ${key}`,
    value: severityCount[key],
  }));

  return { lineChartData, barChartData, pieChartData };
};

const Dashboard = ({ data }) => {
  const { lineChartData, barChartData, pieChartData } = processDataForCharts(data);

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        Security Alerts Dashboard
      </Typography>
      <LineChartComponent data={lineChartData} />
      <BarChartComponent data={barChartData} />
      <PieChartComponent data={pieChartData} />
    </StyledContainer>
  );
};

export default Dashboard;
