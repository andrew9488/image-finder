import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {clearPhotosAC, getPhotosTC} from "../../bll/photos-reducer";
import {InputBase, Paper} from "@material-ui/core";
import {useDebounce} from "../../utils/useDebounce";
import {AppRootStateType} from "../../bll/store";
import { useStyles } from "./materialUIstyles";

export const SearchField: React.FC = () => {

    const currentPage = useSelector<AppRootStateType, number>(state => state.photos.currentPage)
    const classes = useStyles()
    const dispatch = useDispatch()
    const [value, setValue] = useState<string>("")
    const debouncedValue = useDebounce(value, 500)

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        e.preventDefault()
        setValue(e.currentTarget.value)
    }

    useEffect(() => {
        dispatch(clearPhotosAC())
        if (value.trim() !== "") {
            dispatch(getPhotosTC(value))
        }
    }, [debouncedValue, currentPage])

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder="Find photos"
                inputProps={{ "aria-label": "Find photos" }}
                autoFocus={true}
                onChange={handleChange}
                value={value}
                error
            />
        </Paper>
    )
}