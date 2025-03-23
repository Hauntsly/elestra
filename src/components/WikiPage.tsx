import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchWikiPage, WikiPageData } from '../api/wikiApi'; // Import the API function and type
import ReactMarkdown from 'react-markdown';

const WikiPage = () => {
    const { category, subcategory, page } = useParams();
    const currentPath = `/${category}/${subcategory}/${page}`;
    
    const [pageData, setPageData] = useState<WikiPageData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPage = async () => {
            console.log(currentPath);
            const data = await fetchWikiPage(currentPath);
            setPageData(data);
            setLoading(false);
        };

        loadPage();
    }, [currentPath]);

    if (loading) {
        return <div className="p-8 text-gray-600 dark:text-gray-300">Loading...</div>;
    }

    if (!pageData) {
        return (
            <div className="p-8">
                <h1 className="text-2xl font-bold text-red-600">Page Not Found</h1>
                <p className="mt-4">The requested page does not exist in the Elestra Wiki.</p>
            </div>
        );
    }

    return (
        <div className="p-8 max-w-4xl mx-auto">
          <div className="prose dark:prose-invert sepia:prose-amber max-w-full lg:max-w-4xl mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sepia:text-amber-900 mb-6">
              {pageData.title}
            </h1>
            <ReactMarkdown>{pageData.content}</ReactMarkdown>
          </div>
        </div>
      );
};

export default WikiPage;
