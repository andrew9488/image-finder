import {loadState} from "../utils/localStorage";
import {PhotoType} from "../api/api";

export type BookmarkReducerActionsType = | ReturnType<typeof addBookmarkAC> | ReturnType<typeof deleteBookmarkAC>

const initialState = {
    bookmarks: [] as Array<PhotoType>
}

type InitialStateType = typeof initialState

const loadedState = loadState()?.bookmarks
let init: InitialStateType = loadedState ? loadedState : initialState

export const bookmarkReducer = (state: InitialStateType = init, action: BookmarkReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "BOOKMARK-REDUCER/ADD-BOOKMARK":
            return {
                ...state,
                bookmarks: [...state.bookmarks,
                    {...action.bookmark, tags: action.tags}]
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
export const addBookmarkAC = (bookmark: PhotoType, tags: string) =>
    ({type: "BOOKMARK-REDUCER/ADD-BOOKMARK", bookmark, tags} as const)
export const deleteBookmarkAC = (id: string,) =>
    ({type: "BOOKMARK-REDUCER/DELETE-BOOKMARK", id} as const)
