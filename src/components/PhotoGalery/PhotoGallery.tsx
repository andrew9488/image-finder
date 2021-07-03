import React from "react";
import {Photo} from "../Photo/Photo";
import styles from "./PhotoGallery.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {PhotoType} from "../../api/api";
import {isBookmarksArr} from "../../utils/helpers/isBookmarksArr";

type PhotoGalleryPropsType = {
    photos: Array<PhotoType>
}

export const PhotoGallery: React.FC<PhotoGalleryPropsType> = React.memo(({photos}) => {
    const bookmarks = useSelector<AppRootStateType, Array<PhotoType>>(state => state.bookmarks.bookmarks)

    return (
        <div className={styles.galleryContainer}>
            {photos.map(item => {
                return <Photo key={item.id} photo={item} isBookmark={isBookmarksArr(item.id, bookmarks)}/>
            })}
        </div>
    )
})
