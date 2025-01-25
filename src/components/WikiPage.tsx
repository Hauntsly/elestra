import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { wikiData } from '../data/wikiData';

const WikiPage = () => {
  const { category, subcategory, page } = useParams();
  const currentPath = `/${category}/${subcategory}/${page}`;
  
  const pageData = wikiData
    .flatMap(cat => cat.subcategories)
    .flatMap(subcat => subcat.pages)
    .find(p => p.path === currentPath);

  if (!pageData) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Page Not Found</h1>
        <p className="mt-4">The requested page does not exist in the Elestra Wiki.</p>
      </div>
    );
  }

  // Convert markdown-style links [text](/path) to React Router Links
  const content = pageData.content.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (match, text, path) => `<Link to="${path}">${text}</Link>`
  );

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white sepia:text-amber-900 mb-6">
        {pageData.title}
      </h1>
      <div 
        className="prose dark:prose-invert sepia:prose-amber max-w-none"
        dangerouslySetInnerHTML={{
          __html: content.replace(
            /<Link to="([^"]+)">([^<]+)<\/Link>/g,
            (match, path, text) => 
              `<a href="${path}" class="text-blue-600 dark:text-blue-400 sepia:text-amber-800 hover:underline">${text}</a>`
          )
        }}
      />
    </div>
  );
};

export default WikiPage;