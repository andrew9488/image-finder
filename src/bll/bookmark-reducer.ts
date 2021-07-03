import {DomainPhotoType} from "./photos-reducer";
import {loadState} from "../utils/localStorage";

export type BookmarkReducerActionsType = | ReturnType<typeof addBookmarkAC> | ReturnType<typeof deleteBookmarkAC>

const initialState = {
    bookmarks: [] as Array<DomainPhotoType>
}

type InitialStateType = typeof initialState

const loadedState = loadState()?.bookmarks
let init:InitialStateType = loadedState ? loadedState : initialState

export const bookmarkReducer = (state: InitialStateType = init, action: BookmarkReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "BOOKMARK-REDUCER/ADD-BOOKMARK":
            if (!action.bookmark) return state
            return {
                ...state,
                bookmarks: [...state.bookmarks,
                    {...action.bookmark, isBookmark: action.isBookmark, tags: action.tags}]
            }
        case "BOOKMARK-REDUCER/DELETE-BOOKMARK":
            return {
                ...state,
                bookmarks: state.bookmarks.filter((item) => item.id !== action.id)
            }
        default:
            return state
    }
}

//action creators
export const addBookmarkAC = (bookmark: DomainPhotoType, isBookmark: boolean, tags: string) =>
    ({type: "BOOKMARK-REDUCER/ADD-BOOKMARK", bookmark, isBookmark, tags} as const)
export const deleteBookmarkAC = (id: string, isBookmark: boolean) =>
    ({type: "BOOKMARK-REDUCER/DELETE-BOOKMARK", id, isBookmark} as const)
