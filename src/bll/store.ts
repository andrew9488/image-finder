import {applyMiddleware, combineReducers, createStore} from "redux";
import {photosReducer, PhotosReducerActionsType} from "./photos-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {BookmarkReducerActionsType, bookmarksReducer} from "./bookmarks-reducer";
import {appReducer, AppReducerActionsType} from "./app-reducer";
import {loadState, saveState} from "../utils/localStorage";
import {authReducer, AuthReducerActionsType} from "./auth-reducer";

export const rootReducer = combineReducers({
    photos: photosReducer,
    bookmarks: bookmarksReducer,
    app: appReducer,
    auth: authReducer
})

const persistedState = loadState()
export const store = createStore(rootReducer, persistedState, applyMiddleware(thunk))

store.subscribe(() => {
    saveState(store.getState())
})

type ActionsType = BookmarkReducerActionsType | PhotosReducerActionsType
    | AppReducerActionsType | AuthReducerActionsType
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>