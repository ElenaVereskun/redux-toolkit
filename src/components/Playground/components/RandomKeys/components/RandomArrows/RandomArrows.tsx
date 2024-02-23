import styles from "./RandomArrows.module.css"
import { MAP_ARROW_CODES } from "../../../../constants"
import type { IPlayGroundStepsState } from "../../../../store/types"
import { useAppSelector } from "../../../../../../app/hooks"
import type { IMapArrowCodes } from "../../../../types"
import { TypographyText } from "../../../../../UI"

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
        <TypographyText key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </TypographyText>
      ))}
    </div>
  )
}

export default RandomArrows