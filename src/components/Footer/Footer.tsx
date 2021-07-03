import {AppBar, Toolbar, Typography} from '@material-ui/core';
import React from 'react';
import {useStyles} from "./materialUIstyles";

export const Footer: React.FC = React.memo(() => {

    const classes = useStyles()

    return (
        <div className={classes.root} >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Copyrights
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
})