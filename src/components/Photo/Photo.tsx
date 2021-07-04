import React, {ChangeEvent, useState} from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "./materialUIStyles";
import {addBookmarkAC, deleteBookmarkAC} from "../../bll/bookmarks-reducer";
import imageNotFound from "../../assets/images/imageNotFound.png";
import {useDispatch} from "react-redux";
import {PhotoType} from "../../api/api";

type PhotoPropsType = {
    photo: PhotoType
    isBookmark: boolean
}

export const Photo: React.FC<PhotoPropsType> = React.memo(({photo, isBookmark}) => {

    const styles = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>("")
    const isBookmarksGallery = isBookmark
    const colorButton = isBookmark ? "#757575" : "#e53935"

    const actionBookmark = (photo: PhotoType, id: string) => {
        isBookmark
            ? dispatch(deleteBookmarkAC(id))
            : dispatch(addBookmarkAC(photo, value))
    }

    const tagsChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return (
        <Card className={styles.root}>
            <Typography variant="h5" component="h1" className={styles.title}>
                {photo.title || photo.title.length > 30 ? photo.title.slice(0, 30) : "No title"}
            </Typography>
            <CardMedia
                title={photo.title}
                className={styles.media}
                image={photo.url_c ? photo.url_c : imageNotFound}
            />
            <Button
                size="small"
                style={{background: colorButton}}
                className={styles.button}
                onClick={() => actionBookmark(photo, photo.id)}
            >
                {isBookmark ? "Remove it!" : "Bookmark it!"}
            </Button>
            {isBookmarksGallery
                ? <Typography variant="h5" component="h1" className={styles.tags}>
                    {photo.tags ? photo.tags : "No tags"}
                </Typography>
                : <InputBase
                    className={styles.inputContainer}
                    placeholder="some tags?"
                    inputProps={{"aria-label": "some tags", maxLength: 25}}
                    onChange={tagsChangeHandler}
                    value={value}
                />}
        </Card>
    )
})

