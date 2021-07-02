import {PhotoType} from "../api/api";
import {togglePhotoBookmark} from "../utils/actions-utils/togglePhotoBookmark";
import {AppThunkType} from "./store";
import {addPhotosAC} from "./photos-reducer";

export type BookmarkReducerActionsType = | ReturnType<typeof addBookmarkAC> | ReturnType<typeof deleteBookmarkAC>
type FlagType = "add" | "delete"
export type BookmarkType = PhotoType & { isBookmark: boolean , tags: string, url: string}

const initialState = {
    bookmarks: [] as Array<BookmarkType>
}

type InitialStateType = typeof initialState

export const bookmarkReducer = (state: InitialStateType = initialState, action: BookmarkReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "BOOKMARK-REDUCER/ADD-BOOKMARK":
            return {
                ...state,
                bookmarks: [...state.bookmarks, ...action.bookmarks],
            }
        case "BOOKMARK-REDUCER/DELETE-BOOKMARK":
            return {
                ...state,
                bookmarks: [...action.bookmarks],
            }
        default:
            return state
    }
}

//action creators
export const addBookmarkAC = (bookmarks: Array<BookmarkType>) =>
    ({type: "BOOKMARK-REDUCER/ADD-BOOKMARK", bookmarks} as const)
export const deleteBookmarkAC = (bookmarks: Array<BookmarkType>) =>
    ({type: "BOOKMARK-REDUCER/DELETE-BOOKMARK", bookmarks} as const)

//thunks
//thunks
export const deleteBookmarkTC = (id: string): AppThunkType => async (dispatch, getState) => {
    const bookmarks = getState().bookmark.bookmarks
    const bookmarkArr = [...bookmarks].filter((item) => item.id !== id)
    dispatch(deleteBookmarkAC(bookmarkArr))
}

export const bookmarksManagerTC = (flag: FlagType, id: string, isBookmark: boolean, valueUserTags: string): AppThunkType => async (dispatch, getState) => {
    const bookmarks = getState().bookmark.bookmarks
    const newPhotos = togglePhotoBookmark(bookmarks, isBookmark, id);
    if (flag === "delete") {
        dispatch(deleteBookmarkTC(id));
    }
    if (flag === "add") {
        const bookmarkObj = newPhotos.find((item) => item.id === id);
        dispatch(
            //@ts-ignore
            addBookmarkAC([{
                ...bookmarkObj,
                tags: valueUserTags ? valueUserTags : "No tags",
            }])
        )
    }
    dispatch(addPhotosAC(newPhotos));
}