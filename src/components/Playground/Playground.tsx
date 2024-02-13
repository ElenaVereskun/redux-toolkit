import { useState, useEffect, useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep } from "./store/slices"
import Controls from "./components/Controls"
import RandomKeys from "./components/RandomKeys"
import { INTERVAL_TIME } from "./constants"

const Playground: React.FC = () => {
  const state = useAppSelector(state => state.playground)
  const dispatch = useAppDispatch()

  const refreshIntervalId = useRef<ReturnType<typeof setInterval> | null>(null)

  const [isTimerActive, setIsTimerActive] = useState<boolean>(false)

  useEffect(() => {
    if (isTimerActive) {
      refreshIntervalId.current = setInterval(() => {
        dispatch(setCurrentStep())
      }, INTERVAL_TIME)
    } else {
      clearInterval(refreshIntervalId.current as Node.Timeout)
    }
    return () => {
      clearInterval(refreshIntervalId.current as Node.Timeout)
    }
  }, [isTimerActive, dispatch])

  return (
    <div>
      {state.currentStep}
      <Controls
        isTimerActive={isTimerActive}
        setIsTimerActive={setIsTimerActive}
      />
      <RandomKeys isTimerActive={isTimerActive} />
    </div>
  )
}
export default Playground
