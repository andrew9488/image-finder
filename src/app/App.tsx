import React from 'react';
import './App.module.css';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "../utils/themeMaterialUI";
import {Header} from '../components/Header/Header';
import {Route, Switch} from 'react-router-dom';
import {Bookmarks} from "../features/Bookmarks/Bookmarks";
import {Main} from "../features/Main/Main";
import {Menu} from "../components/Menu/Menu";
import styles from "./App.module.css"
import {Footer} from "../components/Footer/Footer";

export const App: React.FC = () => {
    return (
        <div className={styles.App}>
            <MuiThemeProvider theme={theme}>
                <Header/>
                <div className={styles.mainBlock}>
                    <Menu/>
                    <Switch>
                        <Route exact path="/" render={() => <Main/>}/>
                        <Route path="/bookmarks" render={() => <Bookmarks/>}/>
                    </Switch>
                </div>
                <Footer/>
            </MuiThemeProvider>
        </div>
    )
}

