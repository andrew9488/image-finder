export type AppReducerActionsType = ReturnType<typeof showLoaderAC> | ReturnType<typeof showErrorAC>
export type AppStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: "idle" as AppStatusType,
    error: null as string | null,
}
type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "APP-REDUCER/SHOW-LOADER":
            return {
                ...state,
                status: action.status
            }
        case "APP-REDUCER/SHOW-ERROR":
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

//action creators
export const showLoaderAC = (status: AppStatusType) =>
    ({type: "APP-REDUCER/SHOW-LOADER", status} as const)
export const showErrorAC = (error: string | null) =>
    ({type: "APP-REDUCER/SHOW-ERROR", error} as const)