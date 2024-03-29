export interface IPlayGroundStepsState {
  step: number
  currentValue: string | null
  enteredValue: string | null
  success: boolean | null
}
export interface IPlaygroundState {
  currentStep: number
  steps: IPlayGroundStepsState[]
  totalSuccessful: number
  totalUnsuccessful: number
}
