import { useEffect } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";

import Meme from "./Meme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 560,
    paddingTop: 20,
    [theme.breakpoints.down("sm")]: {
      paddingTop: 84,
    },
  },
}));

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
      <Route path="/">
        <Redirect to="/regular" />
      </Route>
      <Route path="/regular" render={() => listElements(regular)} />
      <Route path="/hot" render={() => listElements(hot)} />
    </Container>
  );
};

export default MemeList;
