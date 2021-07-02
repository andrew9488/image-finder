import React from 'react';
import './App.css';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "../utils/themeMaterialUI";
import {Header} from '../components/Header/Header';
import {Route, Switch} from 'react-router-dom';
import {Bookmarks} from "../features/Bookmarks/Bookmarks";
import {Main} from "../features/Main/Main";
import {Menu} from "../components/Menu/Menu";

export const App: React.FC = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <div className="app">
                <Header/>
                <Menu/>
                <Switch>
                    <Route exact path="/" render={() => <Main/>}/>
                    <Route path="/bookmarks" render={() => <Bookmarks/>}/>
                </Switch>
            </div>
        </MuiThemeProvider>
    )
}

