import {makeStyles, createStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            width: "100%",
        },
        title: {
            flexGrow: 1,
            fontSize: "32px"
        }
    })
)