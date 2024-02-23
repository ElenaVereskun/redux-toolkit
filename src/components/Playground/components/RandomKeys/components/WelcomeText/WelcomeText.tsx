// import styles from "./WelcomeText.module.css"

import { TypographyText } from "../../../../../UI"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: React.FC<IWelcomeTextProps> = props => {
  const { isTimerActive } = props

  if (isTimerActive) {
    return <TypographyText>Loading...</TypographyText>
  }

  return (
    <TypographyText>
      Press "Play" to start the game and wait for the first arrow to arrear
    </TypographyText>
  )
}

export default WelcomeText
