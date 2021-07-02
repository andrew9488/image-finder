import React, {useState, MouseEvent} from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import {useStyles} from "./materialUIStyles";
import {bookmarksManagerTC, BookmarkType, deleteBookmarkTC} from "../../bll/bookmark-reducer";
import imageNotFound from "../../assets/images/imageNotFound.png";
import {useDispatch} from "react-redux";

type PhotoPropsType = {
    photo: BookmarkType
}

export const Photo: React.FC<PhotoPropsType> = ({photo}) => {

    const styles = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = useState("")
    const isBookmarksGallery = !!photo.tags
    const colorButton = photo.isBookmark ? "gray" : "#dc004e"

    const actionBookmark = (e: MouseEvent, id: string, isBookmark: boolean) => {
        e.preventDefault()
        if (!isBookmarksGallery) {
            isBookmark
                ? dispatch(bookmarksManagerTC("delete", id, isBookmark, value))
                : dispatch(bookmarksManagerTC("add", id, isBookmark, value))
        } else {
            dispatch(deleteBookmarkTC(id))
        }
    }

    return (
        <Card className={styles.root}>
            {!isBookmarksGallery && (
                <Typography variant="h5" component="h1" className={styles.title}>
                    {photo.title === "" ? "No title" : photo.title}
                </Typography>
            )}
            <CardMedia
                title={photo.title}
                className={styles.media}
                image={photo.url ? photo.url : imageNotFound}
            />
            {isBookmarksGallery ? (
                <Typography variant="h6" component="h6" className={styles.title}>
                    {photo.tags}
                </Typography>
            ) : (
                <InputBase
                    className={styles.inputContainer}
                    placeholder="Enter tags"
                    inputProps={{"aria-label": "Enter tags", maxLength: 28}}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                    value={value}
                />
            )}
            <Button
                size="small"
                style={{background: colorButton}}
                className={styles.button}
                onClick={(e) => actionBookmark(e, photo.id, photo.isBookmark)}
            >
                {photo.isBookmark ? "Remove it" : "Bookmark it!"}
            </Button>
        </Card>
    )
}