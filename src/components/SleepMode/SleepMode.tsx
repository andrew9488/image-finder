import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {useStyles} from "./materialUIstyles";

type SleepModePropsType = {
    isSleep: boolean
}

export const SleepMode: React.FC<SleepModePropsType> = React.memo(({isSleep}) => {

    const classes = useStyles()
    const [open, setOpen] = React.useState(isSleep)

    return (
        <div onMouseMove={() => setOpen(!open)}>
            <Modal
                aria-labelledby="modal-title"
                className={classes.modal}
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="modal-title">Sleep mode has activated...zzzZZZ</h2>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
})