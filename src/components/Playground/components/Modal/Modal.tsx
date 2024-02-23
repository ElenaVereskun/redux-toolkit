// import styles from "./Modal.module.css"
import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"
import { Button } from "../../../UI"

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
    <>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <Button onClick={handleClose}>Start New Game</Button>
    </>
  )
}

export default Modal
