import {applyMiddleware, combineReducers, createStore} from "redux";
import {photosReducer, PhotosReducerActionsType} from "./photos-reducer";
import thunk, {ThunkAction} from "redux-thunk";
import {bookmarkReducer, BookmarkReducerActionsType} from "./bookmark-reducer";
import {appReducer, AppReducerActionsType} from "./app-reducer";

export const rootReducer = combineReducers({
    photos: photosReducer,
    bookmark: bookmarkReducer,
    app: appReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

type ActionsType = BookmarkReducerActionsType | PhotosReducerActionsType | AppReducerActionsType
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkType = ThunkAction<void, AppRootStateType, unknown, ActionsType>