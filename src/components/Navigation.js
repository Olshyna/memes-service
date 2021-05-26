import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 275,
    minHeight: 300,
    marginTop: 64,
    marginLeft: "auto",
    marginRight: "auto",
    position: "sticky",
    top: 128,
    [theme.breakpoints.down("sm")]: {
      marginTop: 0,
      width: "100%",
      minHeight: "auto",
      borderRadius: 0,
      position: "fixed",
      top: 64,
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.down("xs")]: {
      top: 48,
    },
  },
  wrap: {
    padding: "10%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
      justifyContent: "space-around",
      height: 64,
      padding: 0,
      backgroundColor: theme.palette.primary.middle,
    },
  },
  button: {
    marginBottom: 25,
    [theme.breakpoints.down("sm")]: {
      margin: "auto",
      minWidth: 100,
    },
  },

  notActiveButton: {
    "&:hover": {
      background: theme.palette.primary.middle,
      color: theme.palette.text.main,
      borderColor: theme.palette.primary.middle,
      [theme.breakpoints.down("sm")]: {
        background: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
      },
    },
  },

  isActiveButton: {
    background: theme.palette.primary.main,
    color: theme.palette.text.main,
    borderColor: theme.palette.primary.main,

    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [isActiveButton, setActiveButton] = useState("regular");
  const buttons = ["regular", "hot", "favorites"];

  const handleClick = (name) => {
    setActiveButton(name);
  };

  const ButtonRoute = buttons.map((name) => (
    <Button
      key={name}
      name={name}
      onClick={() => handleClick(name)}
      component={Link}
      to={`/${name}`}
      variant="outlined"
      className={
        isActiveButton === name
          ? `${classes.button} ${classes.isActiveButton}`
          : `${classes.button} ${classes.notActiveButton}`
      }
    >
      {name}
    </Button>
  ));

  return (
    <Card className={classes.root} style={{ zIndex: "3000" }}>
      <Grid container direction="column" className={classes.wrap}>
        {ButtonRoute}
      </Grid>
    </Card>
  );
}
