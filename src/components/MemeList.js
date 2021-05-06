import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";

import Meme from "./Meme";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 560,
  },
});

const MemeList = () => {
  const classes = useStyles();
  const memes = useSelector((state) => state);
  const memeElement = memes.map((meme) => <Meme key={meme.id} {...meme} />);

  return (
    <Container className={classes.root}>
      <List>{memeElement}</List>
    </Container>
  );
};

export default MemeList;
