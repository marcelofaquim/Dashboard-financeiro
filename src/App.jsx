import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

export default function App() {

  const [theme, setTheme] = useState('light');

  return (
    <div className={`app ${theme}`}>
      <Sidebar theme={theme} setTheme={setTheme} />
      <Dashboard />
    </div>
  );
}

