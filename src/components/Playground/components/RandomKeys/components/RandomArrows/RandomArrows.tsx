import styles from "./RandomArrows.module.css"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IPlayGroundStepsState } from "../../../../store/types"
import { useAppSelector } from "../../../../../../app/hooks"
import { IMapArrowCodes } from "../../../../types"

const RandomArrows: React.FC = () => {
  const getStylesRandomKeys = (element: IPlayGroundStepsState): string => {
    if (element.success && element.success !== null) {
      return styles.iconSuccess
    }
    if (!element.success && element.success !== null) {
      return styles.iconUnsuccess
    }
    return styles.icon
  }

  const state = useAppSelector(state => state.playground)

  return (
    <div>
      {state.steps.map(element => (
        <span key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
