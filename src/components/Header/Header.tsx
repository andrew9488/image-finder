import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import React from 'react';
import {useStyles} from "./materialUIstyles";
import {useDispatch} from "react-redux";
import {authTC} from "../../bll/auth-reducer";

export const Header: React.FC = React.memo(() => {

    const classes = useStyles()
    const dispatch = useDispatch()

    //generate oauth_timestamp and oauth_nonce for request for token
    const date = new Date().getTime()
    const randomStr = Math.random().toString(36).substring(2)
    const auth = () => {
        dispatch(authTC(date, randomStr))
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h1" className={classes.title}>
                        Image Finder
                    </Typography>
                    <IconButton color="inherit" aria-label="icon" onClick={() => auth()}>
                        <AccountCircle fontSize="large" className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
})