import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";

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

<HouseOutlinedIcon color="primary" fontSize="small" />;
<HouseOutlinedIcon>star</HouseOutlinedIcon>;
<Typography variant="srOnly">Create a user</Typography>;

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const Article = styled.article`
     {
      padding: 10px;
      margin: 10px;

      display: flex;
      flex-wrap: wrap;
    }
  `;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Button = styled.button`
    color: ${(props) => (props.primary ? "#4B0082" : "palevioletred")};
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    font-size: 20px;
    margin: 10px;
    padding: 5px 20px;
    border: 2px solid #000000;
    border-radius: 5px;
    width: 200px;
    height: 80px;
    flex: 1 0 21%;

    &:hover {
      color: #ff0000;
      background: #f0f8ff;
    }
  `;

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div>
            <section>
              <Article>
                <Button>Монеты РФ</Button>

                <Button color="inherit">Монеты СССР</Button>
                <Button color="inherit">Монеты РСФСР</Button>
                <Button color="inherit">Монеты Российской империи</Button>
                <Button color="inherit">Монеты Древней Руси</Button>
                <Button color="inherit">Монеты Античности</Button>
                <Button color="inherit">Монеты Средневековья </Button>

                <Button color="inherit">Наборы монеты</Button>
              </Article>
            </section>
          </div>
        </Toolbar>
      </AppBar>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="contained"
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
