import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchWikiPage, WikiPageData } from '../api/wikiApi'; // Import the API function and type
import ReactMarkdown from 'react-markdown';
import { Pen } from 'lucide-react';
import { updateWikiPage } from '../api/wikiApi';


const WikiPage = () => {
    const { '*': pathParam } = useParams();
    const currentPath = `/${pathParam}`;
    
    const [pageData, setPageData] = useState<WikiPageData | null>(null);
    const [loading, setLoading] = useState(true);

    const [editing, setEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');

    useEffect(() => {
      const loadPage = async () => {
        const data = await fetchWikiPage(currentPath);
        setPageData(data);
        if (data) {
          setEditedTitle(data.title);       
          setEditedContent(data.content);
        }
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
      <div className="p-8 max-w-4xl mx-auto relative">
        {/* EDIT BUTTON */}
        {!editing && (
          <div className="absolute top-0 left-0">
            <button
              onClick={() => setEditing(true)}
              className="p-2 bg-white dark:bg-gray-800 sepia:bg-amber-50 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 sepia:hover:bg-amber-100"
              title="Edit Page"
            >
              <Pen className="w-5 h-5 text-gray-800 dark:text-white sepia:text-amber-900" />
            </button>
          </div>
        )}
    
        {/* EDIT MODE */}
        {editing ? (
          <div className="space-y-6">
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              className="w-full text-3xl font-bold p-2 border rounded"
            />
            <textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
              className="w-full h-96 p-2 border rounded font-mono"
            />
            <div className="flex gap-4">
            <button
              onClick={async () => {
                try {
                  const updated = await updateWikiPage(currentPath, {
                    title: editedTitle,
                    content: editedContent,
                  });

                  setPageData(updated);
                  setEditing(false);
                } catch (err) {
                  alert('Failed to save changes');
                  console.error(err);
                }
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={() => {
                setEditedTitle(pageData.title);
                setEditedContent(pageData.content);
                setEditing(false);
              }}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            </div>
          </div>
        ) : (
          <div className="prose dark:prose-invert sepia:prose-amber max-w-full lg:max-w-4xl mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white sepia:text-amber-900 mb-6">
              {pageData.title}
            </h1>
            <ReactMarkdown>{pageData.content}</ReactMarkdown>
          </div>
        )}
      </div>
    );
    
    
};

export default WikiPage;
