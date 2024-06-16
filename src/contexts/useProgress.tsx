import React, { createContext, useContext, useState, ReactNode } from "react";


interface ProgressContextType {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  decreaseProgress: () => void;
}

interface ProgressContextType {
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

const ProgressContext = createContext<ProgressContextType | undefined>(
  undefined
);

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

export const ProgressProvider: React.FC<ProgressProviderProps> = ({
  children,
}) => {
  const [progress, setProgress] = useState<number>(20);

  const decreaseProgress = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 20, 0));
  };

  return (
    <ProgressContext.Provider value={{ progress, setProgress, decreaseProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};
