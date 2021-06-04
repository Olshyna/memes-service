import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 275,
    marginTop: 64,
    marginLeft: "auto",
    marginRight: "auto",
    position: "sticky",
    top: 128,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  wrap: {
    padding: "10%",
  },
  button: {
    marginBottom: 25,

    [theme.breakpoints.up("md")]: {
      "&:last-child": { marginBottom: 0 },
    },
  },

  notActiveButton: {
    "&:hover": {
      background: theme.palette.primary.dark,
      color: theme.palette.text.main,
      borderColor: theme.palette.primary.dark,
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
  const buttons = ["regular", "hot", "favorites", "add_meme"];

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
      {name.replace(/_/g, " ")}
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
