import {makeStyles, createStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles(() =>
    createStyles({
        root: {
            padding: "8px 8px",
            marginBottom: 15,
            width: "100%"
        },
        input: {
            width: "100%"
        }
    })
)