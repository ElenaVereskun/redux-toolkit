// import styles from "./PandomKeys.module.css"

import { useAppDispatch } from "../../../../app/hooks"
import { setSteps } from "../../store/slices"

export interface IPandomKeysProps {
  isTimerActive: boolean
}

const PandomKeys: React.FC<IPandomKeysProps> = props => {
  const { isTimerActive } = props

  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(setSteps())}>Click</button>
    </div>
  )
}

export default PandomKeys
