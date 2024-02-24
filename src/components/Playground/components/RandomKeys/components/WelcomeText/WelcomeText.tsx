import styles from "./WelcomeText.module.css"
import loader from './image/loader.svg'

import { TypographyText } from "../../../../../UI"
import stylesCommon from '../../PandomKeys.module.css'

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = props => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={loader} alt='loader' />
        </span>
      </div>
    )
  }

  return (
    <TypographyText>
      Нажмите "Play" для начала игры и ожидайте первую стрелку
    </TypographyText>
  )
}

export default WelcomeText
