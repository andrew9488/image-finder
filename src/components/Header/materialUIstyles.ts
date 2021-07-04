import {makeStyles, createStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1
        },
        title: {
            flexGrow: 1,
            fontSize: 42
        },
        icon:{
            color: theme.palette.secondary.light
        }
    })
)