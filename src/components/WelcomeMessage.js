import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 235,
    marginTop: 32,
    marginLeft: "auto",
    marginRight: "auto",
    position: "sticky",
    top: 434,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  header: {
    backgroundColor: "#ffd55b",
  },
}));

export default function WelcomeMessage() {
  const classes = useStyles();
  return (
    <Card className={classes.root} style={{ zIndex: "3000" }}>
      <CardHeader
        title="Welcome to Meme's service!"
        className={classes.header}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Links to amusing, interesting, or funny memes from the web! .png,
          .jpeg, .jpg, and .svg format submissions only, please!
        </Typography>
      </CardContent>
    </Card>
  );
}
