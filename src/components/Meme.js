import { useDispatch } from "react-redux";
import { addUpVote, addDownVote } from "../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/Button";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";

const useStyles = makeStyles({
  root: {
    maxWidth: 560,
    marginBottom: "20px",
  },
  p: {
    fontSize: 20,
  },
});

const Meme = ({ title, img, upvotes, downvotes, id, author }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader={`by ${author}`} />
      <Divider />
      <CardMedia component="img" alt={title} image={img} />

      <CardActions>
        <IconButton
          size="small"
          color="primary"
          onClick={() => dispatch(addUpVote({ upvotes, id, type: "upvotes" }))}
        >
          <ThumbUpRoundedIcon />
        </IconButton>
        <p className={classes.p}>{upvotes}</p>
        <IconButton
          size="small"
          color="secondary"
          onClick={() =>
            dispatch(addDownVote({ downvotes, id, type: "downvotes" }))
          }
        >
          <ThumbDownRoundedIcon />
        </IconButton>
        <p className={classes.p}>{downvotes}</p>
      </CardActions>
    </Card>
  );
};

export default Meme;
