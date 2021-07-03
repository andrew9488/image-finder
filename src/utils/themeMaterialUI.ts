import {createMuiTheme} from "@material-ui/core/styles";
import createPalette from "@material-ui/core/styles/createPalette";

export const theme = createMuiTheme({
    palette: createPalette({
        primary: {
            main: "#0d47a1",
            light: "#e53935"
        },
        secondary: {
            main: "#757575",
            light: "#fff",
        }
    })
})