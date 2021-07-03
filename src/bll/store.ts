import {applyMiddleware, combineReducers, createStore} from "redux";
import {photosReducer, PhotosReducerActionsType} from "./photos-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {bookmarkReducer, BookmarkReducerActionsType} from "./bookmark-reducer";
import {appReducer, AppReducerActionsType} from "./app-reducer";
import {loadState, saveState} from "../utils/localStorage";

export const rootReducer = combineReducers({
    photos: photosReducer,
    bookmarks: bookmarkReducer,
    app: appReducer
})

const persistedState = loadState()
export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
    saveState(store.getState())
})

type ActionsType = BookmarkReducerActionsType | PhotosReducerActionsType | AppReducerActionsType
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>