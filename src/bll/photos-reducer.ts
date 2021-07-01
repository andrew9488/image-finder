import {PhotoType} from "../api/api";
import {ActionsType} from "./actions";

const initialState = {
    photos: [] as Array<PhotoType>,
    bookmarks: [] as Array<PhotoType>,
    numberOfPages: null as number | null,
    currentPage: 1,
    loading: false,
    error: null as string | null,
}

type InitialStateType = typeof initialState

export const photosReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
        case "PHOTOS-REDUCER/ADD-BOOKMARK":
            return {
                ...state,
                bookmarks: [...state.bookmarks, ...action.bookmarks],
            }
        case "PHOTOS-REDUCER/DELETE-BOOKMARK":
            return {
                ...state,
                bookmarks: [...action.bookmarks],
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
        case "PHOTOS-REDUCER/SHOW-LOADER":
            return {
                ...state,
                loading: action.loading,
            }
        case "PHOTOS-REDUCER/SHOW-ERROR":
            return {
                ...state,
                error: action.error,
            }
        default:
            return state
    }
}