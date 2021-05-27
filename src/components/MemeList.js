import { useEffect } from "react";

import List from "@material-ui/core/List";

import Meme from "./Meme";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const MemeList = ({ array }) => {
  const memeElement = (array) =>
    array.map((meme) => <Meme key={meme.id} {...meme} />);

  return (
    <>
      <ScrollToTopOnMount />
      <List>{memeElement(array)}</List>
    </>
  );
};

export default MemeList;
