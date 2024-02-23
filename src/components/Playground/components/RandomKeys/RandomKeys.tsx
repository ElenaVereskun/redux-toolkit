import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader } from "../../../UI"

import RandomArrows from "./components/RandomArrows"
import WelcomeText from "./components/WelcomeText"

export interface IPandomKeysProps {
  isTimerActive: boolean
}

const PandomKeys: React.FC<IPandomKeysProps> = props => {
  const { isTimerActive } = props

  const state = useAppSelector(state => state.playground)

  return (
    <div>
      <TypographyHeader>RandomKeys</TypographyHeader>
      {state.steps.length === 0 ? (
        <WelcomeText isTimerActive={isTimerActive} />
      ) : (
        <RandomArrows />
      )}
    </div>
  )
}

export default PandomKeys
