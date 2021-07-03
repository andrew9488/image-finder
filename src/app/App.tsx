import React from 'react';
import './App.module.css';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "../utils/themeMaterialUI";
import {Header} from '../components/Header/Header';
import {Menu} from "../components/Menu/Menu";
import styles from "./App.module.css"
import {Footer} from "../components/Footer/Footer";
import {Routes} from "../components/Routes/Routes";

export const App: React.FC = React.memo(() => {
    return (
        <div className={styles.App}>
            <MuiThemeProvider theme={theme}>
                <Header/>
                <div className={styles.mainBlock}>
                    <Menu/>
                    <Routes/>
                </div>
                <Footer/>
            </MuiThemeProvider>
        </div>
    )
})

