import cn from 'classnames'
import styles from "./RandomArrows.module.css"
import { MAP_ARROW_CODES } from "../../../../constants"
import type { IPlayGroundStepsState } from "../../../../store/types"
import { useAppSelector } from "../../../../../../app/hooks"
import type { IMapArrowCodes } from "../../../../types"
import { TypographyText } from "../../../../../UI"
import stylesCommon from '../../PandomKeys.module.css'

const RandomArrows: React.FC = () => {

  const state = useAppSelector(state => state.playground)

  const getStylesRandomKeys = (element: IPlayGroundStepsState): string => {
    return cn(
      element.success && element.success !== null && styles.iconSuccess,
      !element.success && element.success !== null && styles.iconUnsuccess
    )
  }

  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((element: IPlayGroundStepsState) => (
        <TypographyText key={element.step} className={getStylesRandomKeys(element)}>
          {MAP_ARROW_CODES[element.currentValue as keyof IMapArrowCodes]}
        </TypographyText>
      ))}
    </div>
  )
}

export default RandomArrows
