import {Paper, Tab, Tabs} from '@material-ui/core';
import React from 'react';
import {Bookmarks, Cloud} from "@material-ui/icons";
import {NavLink} from 'react-router-dom';
import {useStyles} from "./materialUIstyles";
import {PATH} from "../Routes/Routes";

export const Menu: React.FC = React.memo(() => {

    const classes = useStyles()
    const [value, setValue] = React.useState(window.location.pathname === "/bookmarks" ? 1 : 0)

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div className={classes.root}>
            <Paper>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    orientation="vertical"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="menu"
                    centered={true}
                >
                    <Tab
                        aria-label="main"
                        className={classes.tab}
                        component={NavLink}
                        to={PATH.main}
                        icon={<Cloud/>}
                    />
                    <Tab
                        aria-label="bookmarks"
                        className={classes.tab}
                        component={NavLink}
                        to={PATH.bookmarks}
                        icon={<Bookmarks/>}
                    />
                </Tabs>
            </Paper>
        </div>
    )
})