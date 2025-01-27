import React, { useEffect } from 'react';
import { Sun, Moon, BookOpen } from 'lucide-react';
import { ThemeMode } from '../types/wiki';

interface ThemeToggleProps {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  
  useEffect(() => {
    // Load theme from localStorage on component mount
    const savedTheme = localStorage.getItem('theme') as ThemeMode | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, [setTheme]);

  const handleThemeChange = (newTheme: ThemeMode) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Save to localStorage
  };

  return (
    <div className="fixed top-4 right-4 flex gap-2 bg-white dark:bg-gray-800 sepia:bg-amber-50 p-2 rounded-lg shadow-md">
      <button
        onClick={() => handleThemeChange('light')}
        className={`p-2 rounded-lg ${
          theme === 'light'
            ? 'bg-blue-100 text-blue-600'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 sepia:text-amber-800 sepia:hover:bg-amber-100'
        }`}
      >
        <Sun className="w-5 h-5" />
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={`p-2 rounded-lg ${
          theme === 'dark'
            ? 'bg-blue-100 text-blue-600'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 sepia:text-amber-800 sepia:hover:bg-amber-100'
        }`}
      >
        <Moon className="w-5 h-5" />
      </button>
      <button
        onClick={() => handleThemeChange('sepia')}
        className={`p-2 rounded-lg ${
          theme === 'sepia'
            ? 'bg-amber-200 text-amber-800'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 sepia:text-amber-800 sepia:hover:bg-amber-100'
        }`}
      >
        <BookOpen className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ThemeToggle;
