import { createSlice } from "@reduxjs/toolkit"

import { IPlaygroundState } from "./types"

export const initialState: IPlaygroundState = {
  currentStep: 0,
}

export const playgroundSiace = createSlice({
  name: "playground",
  initialState,
  reducers: {
    setCurrentStep: state => {
      state.currentStep += 1
    },
    setSteps: state => {
      const randomKeys = Math.floor(Math.random() * 4)
      console.log(randomKeys)
    },
  },
})
export const { setCurrentStep, setSteps } = playgroundSiace.actions
export default playgroundSiace.reducer
