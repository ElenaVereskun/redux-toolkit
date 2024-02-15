// import styles from "./Modal.module.css"
import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"

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
      <button onClick={handleClose}>Start New Game</button>
    </>
  )
}

export default Modal
