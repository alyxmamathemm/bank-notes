import React from "react";
import {
  Button,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6">Новости</Typography>
          <Button color="inherit">Вход</Button>
        </Toolbar>
      </AppBar>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        ОТКРООООООЙ
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Раз</MenuItem>
        <MenuItem onClick={handleClose}>Два</MenuItem>
        <MenuItem onClick={handleClose}>Три</MenuItem>
      </Menu>
    </div>
  );
}
