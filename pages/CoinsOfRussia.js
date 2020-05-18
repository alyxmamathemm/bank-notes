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
import styled from "styled-components";

import MenuIcon from "@material-ui/icons/Menu";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Button = styled.button`
    color: ${(props) => (props.primary ? "white" : "palevioletred")};
    background: ${(props) => (props.primary ? "palevioletred" : "white")};

    font-size: 20px;
    margin: 10px;
    padding: 5px 20px;
    border: 2px solid palevioletred;
    border-radius: 9px;
    width: 200px;
    height: 80px;
    display: table-cell;
    vertical-align: middle;

    align-items: stretch;
  `;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6">Выберите категорию. </Typography>

          <div>
            <Button color="inherit">Монеты РФ</Button>
            <Button color="inherit">Монеты СССР</Button>
            <Button color="inherit">Монеты РСФСР</Button>
            <Button color="inherit">Монеты Российской империи</Button>
            <Button color="inherit">Монеты Древней Руси</Button>
            <Button color="inherit">Монеты Античности</Button>
            <Button color="inherit">Монеты Средневековья </Button>
            <Button color="inherit">Интересные монеты</Button>
            <Button color="inherit">Наборы монеты</Button>
          </div>
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
