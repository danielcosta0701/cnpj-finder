import { useState } from 'react';

interface Step {
  id: number;
  stepName: string;
  component: unknown;
}

interface UseStepsProps {
  steps: Step[];
  initialStep?: number;
}

interface UseStepsReturn {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

function useSteps({ steps, initialStep = 0 }: UseStepsProps): UseStepsReturn {

  if (steps.length === 0) {
    throw new Error('O array de etapas não pode estar vazio.');
  }

  if (initialStep < 0 || initialStep >= steps.length) {
    throw new Error('O índice da etapa inicial está fora dos limites do array de etapas.');
  }

  const [currentStep, setCurrentStep] = useState(initialStep);

  const nextStep = () => {
    setCurrentStep((prevIndex) => Math.min(prevIndex + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return {
    currentStep,
    nextStep,
    prevStep,
  };
}

export default useSteps;
