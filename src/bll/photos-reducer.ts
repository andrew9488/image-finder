import {photoAPI, PhotoType} from "../api/api";
import {AppThunkType} from "./store";
import {showErrorAC, showLoaderAC} from "./app-reducer";

export type PhotosReducerActionsType = ReturnType<typeof setPhotosAC> | ReturnType<typeof clearPhotosAC>
    | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setNumberOfPagesAC>


const initialState = {
    photos: [] as Array<PhotoType>,
    numberOfPages: null as number | null,
    currentPage: 1,
}

type InitialStateType = typeof initialState

export const photosReducer = (state: InitialStateType = initialState, action: PhotosReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "PHOTOS-REDUCER/SET-PHOTOS":
            return {
                ...state,
                photos: action.photos
            }
        case "PHOTOS-REDUCER/CLEAR-PHOTOS":
            return {
                ...state,
                photos: [],
            }
        case "PHOTOS-REDUCER/SET-CURRENT-PAGE":
            return {
                ...state,
                currentPage: action.currentPage,
            }
        case "PHOTOS-REDUCER/SET-NUMBERS-OF-PAGES":
            return {
                ...state,
                numberOfPages: action.numberOfPages,
            }
        default:
            return state
    }
}

//action creators
export const setPhotosAC = (photos: Array<PhotoType>) =>
    ({type: "PHOTOS-REDUCER/SET-PHOTOS", photos} as const)
export const clearPhotosAC = () =>
    ({type: "PHOTOS-REDUCER/CLEAR-PHOTOS"} as const)
export const setCurrentPageAC = (currentPage: number) =>
    ({type: "PHOTOS-REDUCER/SET-CURRENT-PAGE", currentPage} as const)
export const setNumberOfPagesAC = (numberOfPages: number | null) =>
    ({type: "PHOTOS-REDUCER/SET-NUMBERS-OF-PAGES", numberOfPages} as const)

//thunks
export const getPhotosTC = (value: string, currentPage: number): AppThunkType => async (dispatch) => {
    dispatch(showLoaderAC("loading"))
    try {
        const response = await photoAPI.getPhotos(value, currentPage)
        const {photo, pages} = response.photos
        dispatch(showLoaderAC("succeeded"))
        dispatch(setPhotosAC(photo))
        dispatch(setNumberOfPagesAC(pages))
    } catch (error) {
        dispatch(showErrorAC(error.message))
        dispatch(showLoaderAC("failed"))
    }
}