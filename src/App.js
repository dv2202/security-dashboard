import React from 'react';
import Dashboard from './components/Dashboard';
import data from './eve.json'





const App = () => (
  <div className='w-full bg-black'>
    <Dashboard data={data} />
  </div>

);

export default App;
