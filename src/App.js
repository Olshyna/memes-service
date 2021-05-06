import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MemeList from "./components/MemeList";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  container: {
    marginTop: 64,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f5f0e7",
      main: "#ec481f",
    },
    secondary: {
      main: "#1da1f2",
    },
  },
});

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Grid className={classes.container} container justify="center">
            <Grid item md={2}>
              <Navigation />
            </Grid>

            <Grid item xs={12} md={8} lg={6}>
              <MemeList />
            </Grid>
          </Grid>
        </main>
      </ThemeProvider>
    </div>
  );
}
