import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  root: {
    maxWidth: 512,
    minHeight: 200,
  },
});

export default function NoMatch() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader title={`Oops!`} />
      <CardHeader title={`404`} />
      <CardHeader title={`Not Found`} />
    </Card>
  );
}
