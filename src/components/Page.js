import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import MemeList from "./MemeList";
import FormAddMeme from "./FormAddMeme";

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

const Page = () => {
  const classes = useStyles();
  const hot = useSelector((state) => state.memes.hot);
  const regular = useSelector((state) => state.memes.regular);
  const favorites = useSelector((state) =>
    [...state.memes.hot, ...state.memes.regular].filter((meme) => meme.favorite)
  );

  return (
    <Container className={classes.root}>
      <Route path="/">
        <Redirect to="/regular" />
      </Route>
      <Route path="/regular" render={() => <MemeList array={regular} />} />
      <Route path="/hot" render={() => <MemeList array={hot} />} />
      <Route path="/favorites" render={() => <MemeList array={favorites} />} />
      <Route path="/add_meme" render={() => <FormAddMeme />} />
    </Container>
  );
};

export default Page;
