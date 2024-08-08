import './App.css'
import Finder from './finder/steps/Finder'
import FinderResult from './finder/steps/FinderResult'
import useSteps from './hooks/useSteps'
import { useLoading } from './hooks/useLoading'
import { CompanyProvider } from './contexts/Company/CompanyProvider'
import { BarLoader } from 'react-spinners'

function App() {
  const { isLoading } = useLoading();

  const finderSteps = [
    {
      id: 1,
      stepName: "Finder",
      component: Finder,
    },
    {
      id: 2,
      stepName: "Finder result",
      component: FinderResult,
    }
  ];

  const { currentStep, nextStep, prevStep } = useSteps({ steps: finderSteps, initialStep: 0 });

  const FinderCurrentStep = finderSteps[currentStep].component;

  return (
      <div>
        <CompanyProvider>
          { isLoading ? (
            <BarLoader />
          ) : (
            <FinderCurrentStep
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
        </CompanyProvider>
      </div>
  )
}

export default App
