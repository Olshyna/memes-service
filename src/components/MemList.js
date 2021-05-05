import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Mem from "./Mem";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 560,
  },
});

const MemList = () => {
  const classes = useStyles();
  const mems = useSelector((state) => state);
  const memsElement = mems.map((mem) => <Mem key={mem.id} {...mem} />);

  return (
    <div className={classes.root}>
      <List>{memsElement}</List>
    </div>
  );
};

export default MemList;
