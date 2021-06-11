import { ADD_UP_VOTE } from "./actions";
import { ADD_DOWN_VOTE } from "./actions";
import { CHANGE_FAVORITE } from "./actions";
import { ADD_MEME } from "./actions";
import { memes } from "./states";

const updateMeme = (array, action, value) =>
  array.map((meme) => {
    if (meme.id === action.payload.id) {
      return (meme = {
        ...meme,
        [value]: action.payload[value],
      });
    }
    return meme;
  });

function transferMeme(fromArr, toArr, action) {
  fromArr.map((meme, index) => {
    if (
      (action.payload.type === "upvotes" &&
        meme.upvotes - meme.downvotes > 5) ||
      (action.payload.type === "downvotes" &&
        meme.upvotes - meme.downvotes <= 5)
    ) {
      const deleteElement = fromArr.splice(index, 1);
      toArr.push(deleteElement[0]);
    }
    return meme;
  });
}

export const reducer = (prevState = { memes }, action) => {
  const prevHot = [...prevState.memes.hot];
  const prevRegular = [...prevState.memes.regular];

  switch (action.type) {
    case ADD_UP_VOTE: {
      const hot = updateMeme(prevHot, action, "upvotes");
      const regular = updateMeme(prevRegular, action, "upvotes");

      transferMeme(regular, hot, action);

      return { memes: { hot, regular } };
    }

    case ADD_DOWN_VOTE: {
      const hot = updateMeme(prevHot, action, "downvotes");
      const regular = updateMeme(prevRegular, action, "downvotes");

      transferMeme(hot, regular, action);

      return { memes: { hot, regular } };
    }

    case CHANGE_FAVORITE: {
      const hot = updateMeme(prevHot, action, "favorite");
      const regular = updateMeme(prevRegular, action, "favorite");

      return { memes: { hot, regular } };
    }

    case ADD_MEME: {
      const id =
        [...prevState.memes.hot, ...prevState.memes.regular].length + 1;
      const meme = { id, ...action.payload };
      const hot = [...prevHot];
      const regular = [...prevRegular, meme];

      return { memes: { hot, regular } };
    }

    default:
      return prevState;
  }
};
