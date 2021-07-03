import React from "react";
import {PhotoGallery} from "../../components/PhotoGalery/PhotoGallery";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import styles from "./Bookmarks.module.css";
import {PhotoType} from "../../api/api";

export const Bookmarks: React.FC = () => {

    const bookmarks = useSelector<AppRootStateType, Array<PhotoType>>(state => state.bookmarks.bookmarks)
    const haveBookmarks = bookmarks && bookmarks.length !== 0

    return (
        <div className={styles.bookmarksContainer}>
            {haveBookmarks
                ? <PhotoGallery photos={bookmarks}/>
                : <p className={styles.message}>You haven’t added a bookmark yet.</p>}
        </div>
    )
}