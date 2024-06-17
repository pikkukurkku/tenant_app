import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";


interface ProgressContextType {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  increaseProgress: () => void;
  decreaseProgress: () => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error("useProgress must be used within a ProgressProvider");
  }
  return context;
};

interface ProgressProviderProps {
  children: ReactNode;
}

export const ProgressProvider: React.FC<ProgressProviderProps> = ({ children }) => {
  const [progress, setProgress] = useState<number>(() => {
    const savedProgress = localStorage.getItem('progress');
    return savedProgress ? parseInt(savedProgress, 10) : 20;
  });

  useEffect(() => {
    localStorage.setItem('progress', progress.toString());
  }, [progress]);

  const increaseProgress = () => {
    setProgress((prevProgress) => (prevProgress >= 80 ? 100 : prevProgress + 20))
  };

  const decreaseProgress = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 20, 20));
  };

  const resetProgress = () => {
    setProgress(20);
    localStorage.removeItem('progress'); 
  };

  return (
    <ProgressContext.Provider value={{ progress, setProgress, increaseProgress, decreaseProgress, resetProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
