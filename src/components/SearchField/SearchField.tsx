import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearPhotosAC, getPhotosTC} from "../../bll/photos-reducer";
import {Paper, TextField} from "@material-ui/core";
import {useDebounce} from "../../utils/useDebounce";
import {AppRootStateType} from "../../bll/store";
import {useStyles} from "./materialUIstyles";

export const SearchField: React.FC = () => {

    const currentPage = useSelector<AppRootStateType, number>(state => state.photos.currentPage)
    const classes = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebounce(value, 500)

    const searchChangeHandler = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    useEffect(() => {
        dispatch(clearPhotosAC())
        if (value.trim() !== "") {
            dispatch(getPhotosTC(value, currentPage))
        }
    }, [debouncedValue, currentPage])

    return (
        <Paper component="form" className={classes.root}>
            <TextField
                id="outlined-basic"
                variant="outlined"
                label="Find photos"
                className={classes.input}
                inputProps={{"aria-label": "Find photos"}}
                autoFocus={true}
                onChange={searchChangeHandler}
                value={value}
                error
                autoComplete="off"
            />
         </Paper>
    )
}