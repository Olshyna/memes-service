import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Mem from "./Mem";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 560,
  },
}));

export default function MemList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List>
        <h3>MemList</h3>
        <Mem />
        <Mem />
        <Mem />
      </List>
    </div>
  );
}
