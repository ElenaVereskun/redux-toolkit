import styles from "./Controls.module.css"
import { PlayArrow, Pause } from '@mui/icons-material'
import { Button } from "../../../UI"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: React.FC<IControlsProps> = props => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div className={styles.container}>
      <Button onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        endIcon={<PlayArrow />}
        className={styles.button}>
        Play
      </Button>
      <Button onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        endIcon={<Pause />}
        className={styles.button}>
        Pause
      </Button>
    </div>
  )
}

export default Controls
