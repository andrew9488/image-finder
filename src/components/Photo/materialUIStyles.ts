import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            minWidth: 240,
            maxWidth: 318,
            width: "100%",
            margin: "10px 20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "#8080801f",
            "&:hover": {
                boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.4)"
            }
        },
        title: {
            margin: "20px 3px 0 3px",
            fontSize: 16,
            fontWeight: 700,
            textAlign: "center"
        },
        media: {
            height: 180,
            width: 275,
            marginTop: 15
        },
        inputContainer: {
            width: "80%",
            padding: "0 5px",
            borderRadius: 4,
            margin: "auto auto 10px auto",
            background: theme.palette.secondary.light
        },
        button: {
            margin: "10px auto 10px auto",
            width: 135,
            height: 32,
            color: theme.palette.secondary.light
        },
        tags:{
            margin: "auto auto 10px auto",
            fontSize: 16,
            fontWeight: 700,
            textAlign: "center"
        }
    })
)