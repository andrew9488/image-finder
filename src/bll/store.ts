import {applyMiddleware, combineReducers, createStore} from "redux";
import {photosReducer} from "./photos-reducer";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    photos: photosReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
