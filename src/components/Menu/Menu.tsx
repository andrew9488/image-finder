import {Paper, Tab, Tabs} from '@material-ui/core';
import React from 'react';
import {Bookmarks, Cloud} from "@material-ui/icons";
import {NavLink} from 'react-router-dom';
import {useStyles} from "./materialUIstyles";

export const Menu: React.FC = () => {

    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div className={classes.root}>
            <Paper square>
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
                        to="/"
                        icon={<Cloud/>}
                    />
                    <Tab
                        aria-label="bookmarks"
                        className={classes.tab}
                        component={NavLink}
                        to="/bookmarks"
                        icon={<Bookmarks/>}
                    />
                </Tabs>
            </Paper>
        </div>
    )
}