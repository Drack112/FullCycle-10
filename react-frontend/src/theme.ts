import { createTheme, ThemeOptions } from "@material-ui/core"

const palette: ThemeOptions = {
  palette: {
    type: "dark",
    primary: {
      main: "#FFCD00",
      contrastText: "#242526",
    },
    background: {
      default: "#242526",
    },
  },
}

const theme = createTheme(palette)

export default theme
