import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import ThumbDownRoundedIcon from "@material-ui/icons/ThumbDownRounded";

const useStyles = makeStyles({
  root: {
    maxWidth: 560,
    marginBottom: "20px",
  },
});

const Meme = ({ title, img }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title={title} subheader="September 14, 2016" />
      <Divider />
      <CardMedia component="img" alt={title} image={img} />

      <CardActions>
        <Button size="small" color="primary">
          <ThumbUpRoundedIcon />
        </Button>
        <Button size="small" color="primary">
          <ThumbDownRoundedIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Meme;
