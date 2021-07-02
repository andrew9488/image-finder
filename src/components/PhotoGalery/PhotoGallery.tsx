import React from "react";
import {Photo} from "../Photo/Photo";
import styles from "./PhotoGallery.module.css"
import {BookmarkType} from "../../bll/bookmark-reducer";

type PhotoGalleryPropsType = {
    photo: Array<BookmarkType>
}

export const PhotoGallery: React.FC<PhotoGalleryPropsType> = ({photo}) => {
    return (
        <div className={styles.galleryContainer}>
            {photo.map(item => {
                return <Photo key={item.id} photo={item}/>
            })}
        </div>
    )
}
