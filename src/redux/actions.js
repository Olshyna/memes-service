export const ADD_UP_VOTE = "ADD_UP_VOTE";
export const ADD_DOWN_VOTE = "ADD_DOWN_VOTE";
export const CHANGE_FAVORITE = "CHANGE_FAVORITE";
export const ADD_MEME = "ADD_MEME";

export const addUpVote = ({ upvotes, id, type }) => ({
  type: "ADD_UP_VOTE",
  payload: {
    upvotes: upvotes + 1,
    id,
    type,
  },
});

export const addDownVote = ({ downvotes, id, type }) => ({
  type: "ADD_DOWN_VOTE",
  payload: {
    downvotes: downvotes + 1,
    id,
    type,
  },
});

export const changeFavorite = ({ favorite, id }) => ({
  type: "CHANGE_FAVORITE",
  payload: {
    favorite: !favorite,
    id,
  },
});

export const addMeme = ({ title, author, img }) => ({
  type: "ADD_MEME",
  payload: {
    title,
    author,
    upvotes: 0,
    downvotes: 0,
    favorite: false,
    img,
  },
});
