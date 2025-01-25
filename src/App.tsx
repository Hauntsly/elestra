import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeMode } from './types/wiki';
import Sidebar from './components/Sidebar';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import WikiPage from './components/WikiPage';

function App() {
  const [theme, setTheme] = React.useState<ThemeMode>('light');

  React.useEffect(() => {
    document.documentElement.classList.remove('dark', 'light', 'sepia');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <div className={`flex min-h-screen bg-gray-50 dark:bg-gray-900 sepia:bg-amber-50`}>
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:category/:subcategory/:page" element={<WikiPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;