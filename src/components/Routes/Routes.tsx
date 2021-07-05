import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {Main} from "../../features/Main/Main";
import {Bookmarks} from "../../features/Bookmarks/Bookmarks";
import {Error404} from "../Error404/Error404";

export const PATH = {
    main: "/",
    bookmarks: "/bookmarks",
    error: "/404",
}

export const Routes: React.FC = React.memo(() => {
    return (
        <Switch>
            <Route exact path={PATH.main} render={() => <Main/>}/>
            <Route path={PATH.bookmarks} render={() => <Bookmarks/>}/>
            <Route path={PATH.error} render={() => <Error404/>}/>
            <Redirect from={"*"} to={PATH.error}/>
        </Switch>
    )
})