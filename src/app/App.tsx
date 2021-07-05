import React, {useState} from 'react';
import './App.module.css';
import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "../utils/themeMaterialUI";
import {Header} from '../components/Header/Header';
import {Menu} from "../components/Menu/Menu";
import styles from "./App.module.css"
import {Footer} from "../components/Footer/Footer";
import {Routes} from "../components/Routes/Routes";
import {setSleepMode} from "../utils/helpers/setSleepMode";
import {SleepMode} from "../components/SleepMode/SleepMode";

export const App: React.FC = React.memo(() => {

        const [timeoutId, setTimeoutId] = useState<Array<NodeJS.Timeout>>([])
        const [isSleep, setIsSleep] = useState<boolean>(false)

        const onMouseMoveHandler = () => setSleepMode(timeoutId, setTimeoutId, setIsSleep)

        return (
            <div className={styles.App} onMouseMove={onMouseMoveHandler}>
                <MuiThemeProvider theme={theme}>
                    <Header/>
                    <div className={styles.mainBlock}>
                        <Menu/>
                        <Routes/>
                    </div>
                    <Footer/>
                </MuiThemeProvider>
                {isSleep && <SleepMode isSleep={isSleep}/>}
            </div>
        )
    }
)

