import './App.css'
import Finder from './finder/steps/Finder'
import FinderResult from './finder/steps/FinderResult'

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
    <>
      <div>
        {/* {finderSteps[currentStep]} */}
      </div>
    </>
  )
}

export default App
