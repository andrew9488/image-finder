import {PhotoType} from "../../api/api";
import {BookmarkType} from "../../bll/bookmark-reducer";

export const transformArrPhotos = (arr: Array<PhotoType>, bookmarks: Array<BookmarkType>) => {
    return arr.map((item) => {
        const title = item.title
        const cutTitle = title && title.length > 30 ? title.slice(0, 30) + "..." : title
        const findBookmark = bookmarks.findIndex((bookmark) => {
            return bookmark.id === item.id;
        })
        return {
            id: item.id,
            title: cutTitle,
            url: item.url_c,
            isBookmark: findBookmark !== -1,
        }
    })
}