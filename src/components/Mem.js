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
    maxWidth: "100%",
    marginBottom: "20px",
  },
  media: {
    height: 540,
  },
});

export default function Mem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader title="hmmmm" subheader="September 14, 2016" />
      <Divider />
      <CardMedia
        className={classes.media}
        image="https://i.imgflip.com/57bo8b.jpg"
        title="hmmmm"
      />

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
}
