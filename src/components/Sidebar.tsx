import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Search } from 'lucide-react';
import { wikiData } from '../data/wikiData';

const Sidebar = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const location = useLocation();

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleSubcategory = (subcategory: string) => {
    setExpandedSubcategories(prev =>
      prev.includes(subcategory) ? prev.filter(s => s !== subcategory) : [...prev, subcategory]
    );
  };

  // Flatten wikiData to a searchable list of pages
  const allPages = wikiData.flatMap(category =>
    category.subcategories.flatMap(subcat =>
      subcat.pages.map(page => ({
        title: page.title,
        path: page.path,
      }))
    )
  );

  // Filter pages based on search query
  const filteredPages = allPages.filter(page =>
    page.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-64 h-screen overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 sepia:bg-amber-50">
      <div className="p-4">
        <Link to="/" className="text-2xl font-bold text-gray-800 dark:text-white sepia:text-amber-900">
          Elestra
        </Link>
      </div>
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-2 top-2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search pages..."
            className="w-full pl-10 p-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <nav className="px-4">
        {searchQuery ? (
          <div className="mt-4">
            {filteredPages.length > 0 ? (
              filteredPages.map(page => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="block py-2 px-4 text-gray-700 dark:text-gray-200 sepia:text-amber-900 hover:bg-gray-100 dark:hover:bg-gray-700 sepia:hover:bg-amber-100 rounded-lg"
                >
                  {page.title}
                </Link>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400">No results found</p>
            )}
          </div>
        ) : (
          wikiData.map(category => (
            <div key={category.name} className="mb-4">
              <button
                onClick={() => toggleCategory(category.name)}
                className="flex items-center w-full text-left py-2 text-gray-700 dark:text-gray-200 sepia:text-amber-900 hover:bg-gray-100 dark:hover:bg-gray-700 sepia:hover:bg-amber-100 rounded-lg px-2"
              >
                {expandedCategories.includes(category.name) ? (
                  <ChevronDown className="w-4 h-4 mr-2" />
                ) : (
                  <ChevronRight className="w-4 h-4 mr-2" />
                )}
                {category.name}
              </button>
              {expandedCategories.includes(category.name) && (
                <div className="ml-4">
                  {category.subcategories.map(subcategory => (
                    <div key={subcategory.name}>
                      <button
                        onClick={() => toggleSubcategory(subcategory.path)}
                        className="flex items-center w-full text-left py-2 text-gray-600 dark:text-gray-300 sepia:text-amber-800 hover:bg-gray-100 dark:hover:bg-gray-700 sepia:hover:bg-amber-100 rounded-lg px-2"
                      >
                        {expandedSubcategories.includes(subcategory.path) ? (
                          <ChevronDown className="w-4 h-4 mr-2" />
                        ) : (
                          <ChevronRight className="w-4 h-4 mr-2" />
                        )}
                        {subcategory.name}
                      </button>
                      {expandedSubcategories.includes(subcategory.path) && (
                        <div className="ml-4">
                          {subcategory.pages.map(page => (
                            <Link
                              key={page.path}
                              to={page.path}
                              className={`block py-2 px-4 rounded-lg ${
                                location.pathname === page.path
                                  ? 'bg-blue-100 dark:bg-blue-900 sepia:bg-amber-200 text-gray-800 dark:text-white sepia:text-amber-900'
                                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 sepia:hover:bg-amber-100 text-gray-600 dark:text-gray-300 sepia:text-amber-800'
                              }`}
                            >
                              {page.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
