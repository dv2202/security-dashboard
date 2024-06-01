import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Dashboard from './components/Dashboard';
import data from './eve.json'


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



const App = () => (
  <div className='w-full bg-black'>
    <Dashboard data={data} />
  </div>

);

export default App;
