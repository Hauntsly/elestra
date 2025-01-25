export type ThemeMode = 'light' | 'dark' | 'sepia';

export interface WikiCategory {
  name: string;
  icon: string;
  subcategories: {
    name: string;
    path: string;
    pages: WikiPage[];
  }[];
}

export interface WikiPage {
  title: string;
  path: string;
  content: string;
}