import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {useStyles} from "./materialUIstyles";


export const Preloader: React.FC = React.memo(() => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress style={{width: "100px", height: "100px"}}/>
        </div>
    )
})