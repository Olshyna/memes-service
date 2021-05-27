import { BrowserRouter as Router } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Page from "./components/Page";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f5f0e7",
      middle: "#ffd96f",
      main: "#ff5722",
      dark: "#e64a19",
    },
    secondary: {
      main: "#03a9f4",
    },
    text: {
      light: "#ffccbc",
      main: "#fff",
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
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <div className={classes.root} style={{ minHeight: "100vh" }}>
            <Header />
            <main>
              <Grid container justify="center">
                <Grid item xs={12} md={3}>
                  <Navigation />
                </Grid>

                <Grid item xs={12} md={8} lg={6}>
                  <Page />
                </Grid>
              </Grid>
            </main>
          </div>
        </ThemeProvider>
      </Router>
    </>
  );
}
