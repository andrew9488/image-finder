import React from "react";
import {Photo} from "../Photo/Photo";
import styles from "./PhotoGallery.module.css"
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {PhotoType} from "../../api/api";

type PhotoGalleryPropsType = {
    photos: Array<PhotoType>
}

export const PhotoGallery: React.FC<PhotoGalleryPropsType> = ({photos}) => {
    const bookmarks = useSelector<AppRootStateType, Array<PhotoType>>(state => state.bookmarks.bookmarks)

    const isBookmarkArr = (id: string, arr: Array<PhotoType>) => {
        return arr && arr.some(item => item.id === id)
    }

    return (
        <div className={styles.galleryContainer}>
            {photos.map(item => {
                return <Photo key={item.id} photo={item} isBookmark={isBookmarkArr(item.id, bookmarks)}/>
            })}
        </div>
    )
}
