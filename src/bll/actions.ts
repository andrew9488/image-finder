import {PhotoType} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppRootStateType} from "./store";

type FlagType = "add" | "delete"

export type ActionsType = ReturnType<typeof showLoader>
    | ReturnType<typeof showError>
    | ReturnType<typeof addPhotos>
    | ReturnType<typeof clearPhotos>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setNumberOfPages>
    | ReturnType<typeof addBookmark>
    | ReturnType<typeof deleteBookmark>

type AppThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>


//action creators
export const showLoader = (loading: boolean) =>
    ({type: "PHOTOS-REDUCER/SHOW-LOADER", loading} as const)
export const showError = (error: string | null) =>
    ({type: "PHOTOS-REDUCER/SHOW-ERROR", error} as const)
export const addPhotos = (photos: Array<PhotoType>) =>
    ({type: "PHOTOS-REDUCER/ADD-PHOTOS", photos} as const)
export const clearPhotos = () =>
    ({type: "PHOTOS-REDUCER/CLEAR-PHOTOS"} as const)
export const setCurrentPage = (currentPage: number) =>
    ({type: "PHOTOS-REDUCER/SET-CURRENT-PAGE", currentPage} as const)
export const setNumberOfPages = (numberOfPages: number | null) =>
    ({type: "PHOTOS-REDUCER/SET-NUMBERS-OF-PAGES", numberOfPages} as const)
export const addBookmark = (bookmarks: Array<PhotoType>) =>
    ({type: "PHOTOS-REDUCER/ADD-BOOKMARK", bookmarks} as const)
export const deleteBookmark = (bookmarks: Array<PhotoType>) =>
    ({type: "PHOTOS-REDUCER/DELETE-BOOKMARK", bookmarks} as const)

//thunks
export const deleteBookmarkTC = (id: string): AppThunkType => async (dispatch, getState) => {
    const bookmarks = getState().photos.bookmarks
    const bookmarkArr = [...bookmarks].filter((item) => item.id !== id)
    dispatch(deleteBookmark(bookmarkArr))
}


