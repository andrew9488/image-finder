import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearPhotosAC, setCurrentPageAC} from "../../bll/photos-reducer";
import {showAppErrorAC} from "../../bll/app-reducer";
import {AppRootStateType} from "../../bll/store";
import {SearchField} from "../../components/SearchField/SearchField";
import {PhotoGallery} from "../../components/PhotoGalery/PhotoGallery";
import styles from "./Main.module.css"
import {Pagination} from "../../components/Pagination/Pagination";
import {Preloader} from "../../components/Preloader/Preloader";
import {PhotoType} from "../../api/api";

export const Main: React.FC = React.memo(() => {

    const photos = useSelector<AppRootStateType, Array<PhotoType>>(state => state.photos.photos)
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error)
    const status = useSelector<AppRootStateType, string | null>(state => state.app.status)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(setCurrentPageAC(1))
            dispatch(clearPhotosAC())
            dispatch(showAppErrorAC(null))
        }
    }, [])

    const havePhotos = photos.length !== 0
    const showPhotos = !error && havePhotos
    const showCommonInfo = status !== "loading" && !error && !havePhotos

    return (
        <div className={styles.mainContainer}>
            <SearchField/>
            {status === "loading" && <Preloader/>}
            {showCommonInfo &&
            <p className={styles.message}>
                No images here. Would you try to search for anything else?
            </p>
            }
            {!showPhotos
                ? <p className={styles.error}>{error}</p>
                : <>
                    <Pagination/>
                    <PhotoGallery photos={photos}/>
                </>
            }
        </div>
    )
})