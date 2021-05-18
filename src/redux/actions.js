export const ADD_UP_VOTE = "ADD_UP_VOTE";
export const ADD_DOWN_VOTE = "ADD_DOWN_VOTE";

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
