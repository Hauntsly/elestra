import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vlcvuhegrznrdplfwvel.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsY3Z1aGVncnpucmRwbGZ3dmVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4MDgyOTAsImV4cCI6MjA1NTM4NDI5MH0.L_2ybanthV73qyD6_qfU3EVCqfg5vK8wwasIvGTvkwE';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Define a TypeScript interface for the page structure
export interface WikiPageData {
    id: string;
    title: string;
    path: string;
    content: string;
    category: string;
    subcategory: string;
    created_at: string;
    updated_at: string;
}

export const fetchWikiPage = async (path: string): Promise<WikiPageData | null> => {
    const { data, error } = await supabase
        .from('page')
        .select('*')
        .eq('path', path)
        .single();

    if (error) {
        console.error('Error fetching wiki page:', error);
        return null;
    }

    return data;
};

export const updateWikiPage = async (
  path: string,
  updates: { title: string; content: string }
) => {
  const { data, error } = await supabase
    .from('page') // Replace with your actual table name
    .update(updates)
    .eq('path', path)
    .single();

  if (error) throw error;
  return data;
};

export const createWikiPage = async (
  newPage: Omit<WikiPageData, 'id' | 'created_at' | 'updated_at'>
): Promise<WikiPageData> => {
  const { data, error } = await supabase
    .from('page')
    .insert(newPage)
    .select()
    .single(); // <-- this ensures it returns the inserted row

  if (error || !data) {
    console.error('Error creating wiki page:', error);
    throw error;
  }

  return data;
};


export interface WikiSubcategory {
  name: string;
  path: string;
  pages: WikiPageData[];
}

export interface WikiCategory {
  name: string;
  icon: string; // optional if your DB tracks icons
  subcategories: WikiSubcategory[];
}

export const fetchWikiStructure = async (): Promise<WikiCategory[]> => {
  const { data: pages, error } = await supabase.from('page').select('*');

  if (error || !pages) {
    console.error('Error fetching wiki structure:', error);
    return [];
  }

  const structure: Record<string, Record<string, WikiPageData[]>> = {};

  for (const page of pages) {
    if (!structure[page.category]) {
      structure[page.category] = {};
    }
    if (!structure[page.category][page.subcategory]) {
      structure[page.category][page.subcategory] = [];
    }
    structure[page.category][page.subcategory].push(page);
  }

  // Convert flat grouped object into structured array
  return Object.entries(structure).map(([categoryName, subcats]) => ({
    name: categoryName,
    icon: 'map', // or derive icon from DB if stored
    subcategories: Object.entries(subcats).map(([subName, pages]) => ({
      name: subName,
      path: `/${categoryName}/${subName}`, // adjust if path is stored differently
      pages,
    })),
  }));
};

