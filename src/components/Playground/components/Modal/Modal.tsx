import cn from 'classnames'
import styles from "./Modal.module.css"
import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"
import { Button } from "../../../UI"
import { Modal as MaterialModal } from "@mui/material"

export interface IModalProps {
  setIsSHowModal: React.Dispatch<React.SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: React.FC<IModalProps> = props => {
  const { setIsSHowModal, isSuccessEndGame } = props
  const dispatch = useAppDispatch()

  const handleClose = () => {
    setIsSHowModal(false)
    dispatch(resetStore())
  }

  return (
    <MaterialModal open onClose={handleClose} className={styles.wrapper}>
      <div className={cn(styles.container, isSuccessEndGame ? styles.modalSuccess : styles.modalUnsuccess)}>
        <ResultMessage isSuccessEndGame={isSuccessEndGame} />
        <Button onClick={handleClose}>Start New Game</Button>
      </div>
    </MaterialModal>
  )
}

export default Modal
