import { useDispatch } from "react-redux";
import { addUpVote, addDownVote, changeFavorite } from "../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/Button";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";

const useStyles = makeStyles({
  root: {
    maxWidth: 560,
    marginBottom: "20px",
  },
  cardActions: {
    justifyContent: "space-evenly",
    marginTop: 5,
    marginBottom: 5,
  },
  b: {
    fontSize: 20,
    paddingLeft: 10,
  },
  favoriteIcon: {
    fontSize: 30,
  },
  isActiveFavoriteIcon: {
    color: "#FF2400",
  },
  notActiveFavoriteIcon: {
    color: "#00000042",
  },
});

const Meme = ({ title, img, upvotes, downvotes, id, author, favorite }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={`by ${author}`} />
      <Divider />
      <CardMedia component="img" alt={title} image={img} />

      <CardActions className={classes.cardActions}>
        <IconButton
          aria-label="add up vote"
          color="primary"
          onClick={() => dispatch(addUpVote({ upvotes, id, type: "upvotes" }))}
        >
          <ThumbUpRoundedIcon />
          <b className={classes.b}>{upvotes}</b>
        </IconButton>

        <IconButton
          aria-label="favorites"
          onClick={() => {
            dispatch(changeFavorite({ favorite, id }));
          }}
        >
          <FavoriteRoundedIcon
            className={
              favorite === false
                ? `${classes.favoriteIcon} ${classes.notActiveFavoriteIcon}`
                : `${classes.favoriteIcon} ${classes.isActiveFavoriteIcon}`
            }
          />
        </IconButton>

        <IconButton
          aria-label="add down vote"
          color="secondary"
          onClick={() =>
            dispatch(addDownVote({ downvotes, id, type: "downvotes" }))
          }
        >
          <ThumbDownRoundedIcon />
          <b className={classes.b}>{downvotes}</b>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Meme;
