import PlaygroundReducer, {
    initialState,
    setCurrentStep,
    setUnsuccess,
    setSteps
} from '../slices'

describe("reducer setUnsuccess", () => {
    it("check setUnsuccess", () => {
        const setCurrentStepState = PlaygroundReducer(
            initialState,
            setCurrentStep()
        )
        const setStepsState = PlaygroundReducer(
            setCurrentStepState,
            setSteps()
        )
        const setUnsuccessState = PlaygroundReducer(
            setStepsState,
            setUnsuccess()
        )
        expect(setUnsuccessState.totalUnsuccessful).toBe(1)
        expect(setUnsuccessState.steps[0].success).toBe(false)
    })
})