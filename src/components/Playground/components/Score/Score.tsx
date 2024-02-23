import styles from "./Score.module.css"

import { useAppSelector } from "../../../../app/hooks"
import { TypographyHeader, TypographyText } from "../../../UI"
import { Chip, Stack } from "@mui/material"

const Score: React.FC = () => {
  const state = useAppSelector(state => state.playground)
  return (
    <>
      <TypographyHeader>Score</TypographyHeader>
      <TypographyText>dddddddddddddd</TypographyText>
      <Stack direction='row' spacing={1}>
        <Chip
          className={styles.chipUnsuccess}
          label={
            <>
              Errors:<span className={styles.counter}>
                {state.totalUnsuccessful}</span>
            </>}
          variant="outlined" />
        <Chip
          className={styles.chipSuccess}
          label={
            <>
              Successful:<span className={styles.counter}>
                {state.totalSuccessful}</span>
            </>}
          variant="outlined" />
      </Stack>
    </>
  )
}

export default Score
