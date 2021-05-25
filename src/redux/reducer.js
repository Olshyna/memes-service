import { ADD_UP_VOTE } from "./actions";
import { ADD_DOWN_VOTE } from "./actions";
import { CHANGE_FAVORITE } from "./actions";
import { memes } from "./states";

const newArray = (array, action, value) =>
  array.map((meme) => {
    if (meme.id === action.payload.id) {
      return (meme = {
        ...meme,
        [value]: action.payload[value],
      });
    }
    return meme;
  });

function transfer(fromArr, toArr, action) {
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
      const hot = newArray(prevHot, action, "upvotes");
      const regular = newArray(prevRegular, action, "upvotes");

      transfer(regular, hot, action);

      return { memes: { hot, regular } };
    }

    case ADD_DOWN_VOTE: {
      const hot = newArray(prevHot, action, "downvotes");
      const regular = newArray(prevRegular, action, "downvotes");

      transfer(hot, regular, action);

      return { memes: { hot, regular } };
    }

    case CHANGE_FAVORITE: {
      const hot = newArray(prevHot, action, "favorite");
      const regular = newArray(prevRegular, action, "favorite");

      return { memes: { hot, regular } };
    }

    default:
      return prevState;
  }
};
