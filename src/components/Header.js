import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: "5%",
    color: theme.palette.primary.light,
  },
  toolBar: {
    [theme.breakpoints.only("xs")]: {
      minHeight: 48,
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title} variant="h4">
          MEME'S SERVICE
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
