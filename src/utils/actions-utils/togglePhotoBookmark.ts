import {BookmarkType} from "../../bll/bookmark-reducer";

export const togglePhotoBookmark = (photos: BookmarkType, isBookmark: boolean, id: string) => {
    const bookmarkIndex = photos.findIndex((item) => item.id === id)
    const newPhotos = [...photos]
    newPhotos[bookmarkIndex].isBookmark = !isBookmark
    return newPhotos
};