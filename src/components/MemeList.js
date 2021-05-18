import React from "react";
import { useEffect } from "react";
import { Route } from "react-router-dom";
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

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const MemeList = () => {
  const classes = useStyles();

  const hot = useSelector((store) => store.memes.hot);
  const regular = useSelector((store) => store.memes.regular);

  const memeElement = (array) =>
    array.map((meme) => <Meme key={meme.id} {...meme} />);

  const listElements = (array) => (
    <>
      <ScrollToTopOnMount />
      <List>{memeElement(array)}</List>
    </>
  );

  return (
    <Container className={classes.root}>
      <Route path="/" exact render={() => listElements([...hot, ...regular])} />
      <Route path="/hot" render={() => listElements(hot)} />
      <Route path="/regular" render={() => listElements(regular)} />
    </Container>
  );
};

export default MemeList;
