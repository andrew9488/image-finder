import {AppRootStateType} from "../bll/store";

export const loadState = (): AppRootStateType | undefined  => {
    try {
        const serializedState = localStorage.getItem('bookmark')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined
    }
}

export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('bookmark', serializedState)
    } catch {
        // ignore write errors
    }
}