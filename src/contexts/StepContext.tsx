import { createContext, useState, ReactNode, useContext } from 'react';

interface StepContextType {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

interface StepProviderProps {
  stepsArray: [];
  children: ReactNode;
}

export const StepContext = createContext({} as StepContextType);

export const useStep = () => {
    return useContext(StepContext);
};

export function StepProvider({ stepsArray, children }: StepProviderProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep(prevStep => {
      if (prevStep < stepsArray.length - 1) {
        return prevStep + 1;
      }
      return prevStep;
    });
  };

  const prevStep = () => {
    setCurrentStep(prevStep => {
      if (prevStep > 0) {
        return prevStep - 1;
      }
      return prevStep;
    });
  };

  return (
    <StepContext.Provider value={{currentStep, prevStep, nextStep}}>
      {children}
    </StepContext.Provider>
  );
}