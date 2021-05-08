import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    marginLeft: "10%",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          MemSerwis
        </Typography>
        <Button component={Link} to="/" variant="contained">
          MemSerwis
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
