import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { wikiData } from '../data/wikiData';
import ReactMarkdown from 'react-markdown';


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
      <div className="prose dark:prose-invert sepia:prose-amber max-w-full lg:max-w-4xl mx-auto p-4 md:p-8">
        <ReactMarkdown>{pageData.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default WikiPage;