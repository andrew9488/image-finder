import React from "react";
import {Route, Switch} from "react-router-dom";
import {Main} from "../../features/Main/Main";
import {Bookmarks} from "../../features/Bookmarks/Bookmarks";

const PATH = {
    main: "/",
    bookmarks: "/bookmarks"
}

export const Routes: React.FC = React.memo(() => {
    return (
        <Switch>
            <Route exact path={PATH.main} render={() => <Main/>}/>
            <Route path={PATH.bookmarks} render={() => <Bookmarks/>}/>
        </Switch>
    )
})