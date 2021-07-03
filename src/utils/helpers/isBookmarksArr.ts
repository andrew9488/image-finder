import {PhotoType} from "../../api/api";

export const isBookmarksArr = (id: string, arr: Array<PhotoType>) => {
    return arr && arr.some(item => item.id === id)
}