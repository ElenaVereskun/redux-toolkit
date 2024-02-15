// import styles from "./PandomKeys.module.css"

import { useAppDispatch, useAppSelector } from "../../../../app/hooks"
import { MAP_ARROW_CODES } from "../../constants"
import { IMapArrowCodes } from "../../types"

export interface IPandomKeysProps {
  isTimerActive: boolean
}

const PandomKeys: React.FC<IPandomKeysProps> = props => {
  const { isTimerActive } = props

  const state = useAppSelector(state => state.playground)
  return (
    <div>
      {state.steps.map((element, index) => (
        <span key={index}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default PandomKeys
