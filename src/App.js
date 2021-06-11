import { BrowserRouter as Router } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Page from "./components/Page";
import WelcomeMessage from "./components/WelcomeMessage";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#F5F0E7",
      middle: "#C8E6C9",
      main: "#4CAF50",
      dark: "#388E3C",
    },
    secondary: {
      main: "#03A9F4",
    },
    text: {
      main: "#FFF",
    },
  },
  typography: {
    fontFamily: "'Lato', sans-serif",
    h4: {
      fontFamily: "Comic Sans MS",
    },
  },
});

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.light,
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.root} style={{ minHeight: "100vh" }}>
          <Header />
          <main>
            <Grid container justify="center">
              <Grid item xs={12} md={3}>
                <Navigation />
                <WelcomeMessage />
              </Grid>

              <Grid item xs={12} md={8} lg={6}>
                <Page />
              </Grid>
            </Grid>
          </main>
        </div>
      </ThemeProvider>
    </Router>
  );
}
