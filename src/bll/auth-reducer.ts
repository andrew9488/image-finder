import {AppThunkType} from "./store";
import {setAppStatusAC, showAppErrorAC} from "./app-reducer";
import {authAPI, AuthExchangeTokenResponseType} from "../api/api";

export type AuthReducerActionsType = ReturnType<typeof setUserData>

const initialState = {
    data: {
        fullname: null as string | null,
        oauth_token: null as string | null,
        oauth_token_secret: null as string | null,
        user_nsid: null as string | null,
        username: null as string | null
    }
}

type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: AuthReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "AUTH-REDUCER/SET-USER-DATA": {
            return {
                ...state,
                data: action.data
            }
        }
        default:
            return state
    }
}

const setUserData = (data: AuthExchangeTokenResponseType) =>
    ({type: "AUTH-REDUCER/SET-USER-DATA", data} as const)

//thunk for authorization request
export const authTC = (date: number, random: string): AppThunkType => (dispatch) => {
    dispatch(setAppStatusAC("loading"))
    authAPI.getToken(date, random)
        .then((response) => {
            dispatch(setAppStatusAC("succeeded"))
            return response
        })
        .then((response) => {
            authAPI.getAuth(response.oauth_token)
                .then((response) => {
                    dispatch(setAppStatusAC("succeeded"))
                    return response
                })
                .then((response) => {
                    const {oauth_token, oauth_verifier} = response
                    authAPI.exchangeToken(date, random, oauth_verifier, oauth_token)
                        .then((response) => {
                            dispatch(setAppStatusAC("succeeded"))
                            dispatch(setUserData(response))
                        })
                })
        })
        .catch((error) => {
            dispatch(showAppErrorAC(error.message))
            dispatch(setAppStatusAC("failed"))
        })
}
