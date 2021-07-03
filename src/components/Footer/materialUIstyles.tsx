import {createStyles, makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            width: "100%",
            height: "50px"
        },
        title: {
            flexGrow: 1,
            fontSize: "32px"
        }
    })
)