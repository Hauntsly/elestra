import React from 'react';
import { Scroll } from 'lucide-react';

const Home = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Scroll className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400 sepia:text-amber-700" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sepia:text-amber-900 mb-4">
          Welcome to Elestra
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 sepia:text-amber-800">
          Explore the magical realm and uncover its secrets
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 sepia:border-amber-200">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sepia:text-amber-900 mb-4">
            Latest Updates
          </h2>
          <ul className="space-y-3">
            <li className="text-gray-600 dark:text-gray-300 sepia:text-amber-800">
              • New details added about the Crystal Caverns
            </li>
            <li className="text-gray-600 dark:text-gray-300 sepia:text-amber-800">
              • Updated information on Elder Moira
            </li>
            <li className="text-gray-600 dark:text-gray-300 sepia:text-amber-800">
              • Added Crystalwing Drake bestiary entry
            </li>
          </ul>
        </div>
        
        <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 sepia:border-amber-200">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white sepia:text-amber-900 mb-4">
            Quick Navigation
          </h2>
          <p className="text-gray-600 dark:text-gray-300 sepia:text-amber-800 mb-4">
            Use the sidebar to explore:
          </p>
          <ul className="space-y-2">
            <li className="text-gray-600 dark:text-gray-300 sepia:text-amber-800">
              • Characters (Players, NPCs, Monsters)
            </li>
            <li className="text-gray-600 dark:text-gray-300 sepia:text-amber-800">
              • Places (Towns, Mountains, Landmarks)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;