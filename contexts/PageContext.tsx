import React, { createContext, useContext, useState } from 'react';
import { Page } from '../types';

interface PageContextType {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setPage] = useState<Page>('home');

  return (
    <PageContext.Provider value={{ currentPage, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = (): PageContextType => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('usePageContext must be used within a PageProvider');
  }
  return context;
};
