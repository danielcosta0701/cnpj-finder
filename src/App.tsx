import './App.css'
import Finder from './finder/steps/Finder'
import FinderResult from './finder/steps/FinderResult'
import { StepProvider } from './contexts/StepContext'

function App() {
  const finderSteps = [
    {
      id: 1,
      stepName: "Finder",
      content: <Finder />,
    },
    {
      id: 2,
      stepName: "Finder result",
      content: <FinderResult />,
    }
  ]

  return (
    <StepProvider stepsArray={finderSteps}>
      <div>
        {/* {finderSteps[currentStep]} */}
      </div>
    </StepProvider>
  )
}

export default App
