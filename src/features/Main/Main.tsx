import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearPhotosAC, DomainPhotoType} from "../../bll/photos-reducer";
import {showErrorAC} from "../../bll/app-reducer";
import {AppRootStateType} from "../../bll/store";
import {SearchField} from "../../components/SearchField/SearchField";
import {PhotoGallery} from "../../components/PhotoGalery/PhotoGallery";
import styles from "./Main.module.css"
import {Pagination} from "../../components/Pagination/Pagination";

export const Main: React.FC = () => {

    const photos = useSelector<AppRootStateType, Array<DomainPhotoType>>(state => state.photos.photos)
    const error = useSelector<AppRootStateType, string | null>(state => state.app.error)
    const status = useSelector<AppRootStateType, string | null>(state => state.app.status)
    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            dispatch(clearPhotosAC())
            dispatch(showErrorAC(null))
        }
    }, [])

    const haveImages = photos.length !== 0
    const showImages = !error && haveImages
    const showCommonInfo = status !== "loading" && !error && !haveImages

    return (
        <div className={styles.mainContainer}>
            <SearchField/>
            {status === "loading" && <div>"loading..."</div>}

            {showCommonInfo &&
            <p className={styles.message}>
                No images here. Would you try to search for anything else?
            </p>
            }

            {!showImages
                ? <p className={styles.message}>{error}</p>
                : <>
                    <Pagination/>
                    <PhotoGallery photos={photos}/>
                </>
            }
        </div>
    )
}