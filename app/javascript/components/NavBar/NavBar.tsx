import * as React from "react";
import { UserProps } from "../../App";

import AppBar from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";

export const NavBar = ({ logged_in, name }: UserProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return <AppBar position="static" className="navbar">
    <Toolbar>
      {logged_in && (
        <Link href="/">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
        </Link>
      )}
      <Typography variant="h5" className="title">
        MiniGithub
      </Typography>
      {logged_in && (
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >

            <MenuItem disabled >{name}</MenuItem>
            <Link rel="nofollow" href="/users/sign_out" data-method="delete" >
              <MenuItem>Logout</MenuItem>
            </Link>
          </Menu>
        </div>
      )}
    </Toolbar>
  </AppBar>;
};
