'use client'
import  { createContext, useContext, useState, ReactNode } from 'react';

// Define types for the context value
interface AppSettings {
  theme: 'light' | 'dark';
  language: 'en' | 'es';
}

interface AppContextType {
  settings: AppSettings;
  updateTheme: (theme: 'light' | 'dark') => void;
  updateLanguage: (language: 'en' | 'es') => void;
}

// Create the AppContext
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AppSettings>({
    theme: 'light',
    language: 'en',
  });

  const updateTheme = (theme: 'light' | 'dark') => {
    setSettings((prev) => ({ ...prev, theme }));
  };

  const updateLanguage = (language: 'en' | 'es') => {
    setSettings((prev) => ({ ...prev, language }));
  };

  return (
    <AppContext.Provider value={{ settings, updateTheme, updateLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook for using the AppContext
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};