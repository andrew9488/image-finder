import {photoAPI, PhotoType} from "../api/api";
import {AppThunkType} from "./store";
import {showErrorAC, showLoaderAC} from "./app-reducer";
import {transformArrPhotos} from "../utils/actions-utils/transformArrPhotos";

export type PhotosReducerActionsType = ReturnType<typeof addPhotosAC> | ReturnType<typeof clearPhotosAC>
    | ReturnType<typeof setCurrentPageAC> | ReturnType<typeof setNumberOfPagesAC>

const initialState = {
    photos: [] as Array<PhotoType>,
    numberOfPages: null as number | null,
    currentPage: 1,
}

type InitialStateType = typeof initialState

export const photosReducer = (state: InitialStateType = initialState, action: PhotosReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "PHOTOS-REDUCER/ADD-PHOTOS":
            return {
                ...state,
                photos: [...action.photos],
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
export const addPhotosAC = (photos: Array<PhotoType>) =>
    ({type: "PHOTOS-REDUCER/ADD-PHOTOS", photos} as const)
export const clearPhotosAC = () =>
    ({type: "PHOTOS-REDUCER/CLEAR-PHOTOS"} as const)
export const setCurrentPageAC = (currentPage: number) =>
    ({type: "PHOTOS-REDUCER/SET-CURRENT-PAGE", currentPage} as const)
export const setNumberOfPagesAC = (numberOfPages: number | null) =>
    ({type: "PHOTOS-REDUCER/SET-NUMBERS-OF-PAGES", numberOfPages} as const)

//thunks
export const getPhotosTC = (value: string): AppThunkType => async (dispatch, getState) => {
    const bookmarks = getState().bookmark.bookmarks
    dispatch(showLoaderAC("loading"))
    try {
        const response = await photoAPI.getPhotos(value)
        const {photo, pages} = response.photos
        const resultTransformImages = await transformArrPhotos(photo, bookmarks)
        dispatch(showLoaderAC("succeeded"))
        // @ts-ignore
        dispatch(addPhotosAC(resultTransformImages))
        dispatch(setNumberOfPagesAC(pages))
    } catch (error) {
        dispatch(showErrorAC(error.message))
        dispatch(showLoaderAC("failed"))
    }
}