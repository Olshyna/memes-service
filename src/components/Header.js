import { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: "5%",
    color: theme.palette.primary.light,
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },
  },

  menuButton: {
    marginLeft: "auto",
    color: theme.palette.primary.light,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    width: "200px",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Header = () => {
  const classes = useStyles();
  const buttons = ["regular", "hot", "favorites", "add_meme"];
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const MenuItem = buttons.map((name) => (
    <StyledMenuItem key={name} button="true" component={Link} to={`/${name}`}>
      <ListItemText primary={name.toUpperCase().replace(/_/g, " ")} />
    </StyledMenuItem>
  ));

  return (
    <AppBar position="sticky">
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title} variant="h4">
          MEME'S SERVICE
        </Typography>
        <IconButton
          edge="end"
          className={classes.menuButton}
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
        <StyledMenu
          id="customized-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {MenuItem}
        </StyledMenu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
