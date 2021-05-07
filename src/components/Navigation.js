import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    minHeight: 300,
    marginTop: 64,
  },
  column: {
    padding: "10%",
  },
});

export default function Navigation() {
  const classes = useStyles();

  return (
    <Router>
      <Card className={classes.root} style={{ position: "fixed" }}>
        <Grid container direction="column" className={classes.column}>
          <Button
            component={Link}
            to="/hot"
            variant="contained"
            color="primary"
            style={{ marginBottom: 25 }}
          >
            HOT
          </Button>

          <Button component={Link} to="/regular" variant="outlined">
            REGULAR
          </Button>
        </Grid>
      </Card>
    </Router>
  );
}
