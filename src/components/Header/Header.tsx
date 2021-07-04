import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import React from 'react';
import {useStyles} from "./materialUIstyles";
import {NavLink} from 'react-router-dom';
import {PATH} from "../Routes/Routes";

export const Header: React.FC = React.memo(() => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h1" className={classes.title}>
                        Image Finder
                    </Typography>
                    <IconButton color="inherit" aria-label="icon">
                        <NavLink to={PATH.login}>
                            <AccountCircle fontSize="large" className={classes.icon}/>
                        </NavLink>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
})