import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import {Button, ButtonGroup} from "@material-ui/core";
import {useStyles} from "./materialUIstyles";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {setCurrentPageAC} from "../../bll/photos-reducer";

type ActionPaginationType = "back" | "forward"

export const Pagination: React.FC = () => {

    const currentPage = useSelector<AppRootStateType, number>(state => state.photos.currentPage)
    const numberOfPages = useSelector<AppRootStateType, number | null>(state => state.photos.numberOfPages)
    const dispatch = useDispatch()

    const classes = useStyles()
    const disabledBtnBack = currentPage === 1
    const disabledBtnForward = currentPage === numberOfPages

    const handlePage = (action: ActionPaginationType) => {
        if (action === "back") {
            dispatch(setCurrentPageAC(currentPage - 1))
        } else {
            dispatch(setCurrentPageAC(currentPage + 1))
        }
    }

    return (
        <div className={classes.root}>
            <ButtonGroup aria-label="outlined primary button group">
                <Button
                    className={classes.button}
                    startIcon={<ArrowBackIosIcon/>}
                    disabled={disabledBtnBack}
                    onClick={() => handlePage("back")}
                >
                    Back
                </Button>
                <Button
                    style={{color: "gray", textTransform: "capitalize"}}
                    disabled={true}
                >
                    Page {currentPage} of {numberOfPages}
                </Button>
                <Button
                    className={classes.button}
                    endIcon={<ArrowForwardIosIcon/>}
                    disabled={disabledBtnForward}
                    onClick={() => handlePage("forward")}
                >
                    Forward
                </Button>
            </ButtonGroup>
        </div>
    );
};