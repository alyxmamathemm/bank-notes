import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import { makeStyles } from "@material-ui/core/styles";
import SvgIcon from "@material-ui/core/SvgIcon";
import { grey } from "@material-ui/core/colors";
import StarIcon from "@material-ui/icons/Star";
import FormHelperText from "@material-ui/core/FormHelperText";
import InputLabel from "@material-ui/core/InputLabel";

import React from "react";
import {
  Button,
  Menu,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Select,
  FormControl,
} from "@material-ui/core";
import styled from "styled-components";

const MuiButton = styled(Button)`
  background: black;
  color: white;

  &:hover {
    background: #000000c9;
    color: white;
  }
`;

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

  const handleChange = (events) => {
    window.location = events.target.value;
    const name1 = value1;
  };

  const Button = styled.button`
    color: ${(props) => (props.primary ? "#4B0082" : "palevioletred")};
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    font-size: 20px;
    margin: 10px;
    padding: 5px 20px;
    border: 2px solid #000000;
    border-radius: 5px;
    width: 240px;
    height: 75px;
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
                <div>
                  <div className="Icon">
                    <abbr title="Перейти в ваш личный кабинет.">
                      <div className="Test">
                        <HouseOutlinedIcon style={{ fontSize: 45 }} />
                      </div>
                    </abbr>
                  </div>
                  <div className="Icon">
                    <abbr title="Просмотреть избранные вами монеты.">
                      <StarIcon style={{ fontSize: 45 }} />
                    </abbr>
                  </div>
                </div>
                <wrapper> </wrapper>

                <Button color="inherit">Монеты Древней Руси</Button>

                <Button color="inherit">Монеты Античности</Button>
                <Button color="inherit">Монеты Средневековья </Button>

                <Button color="inherit">Наборы монеты</Button>
                <div className="Icon">
                  <abbr title="Предложить монету для публикации.">
                    <AddCircleOutlineRoundedIcon style={{ fontSize: 45 }} />
                  </abbr>
                </div>
              </Article>
            </section>
          </div>
        </Toolbar>
      </AppBar>
      <p> </p>

      <MuiButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Монеты 1991-2020 года
      </MuiButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Раз</MenuItem>
        <MenuItem onClick={handleClose}>Два</MenuItem>
        <MenuItem value="https://www.youtube.com/" onClick={handleClose}>
          Три
        </MenuItem>
      </Menu>
      <p></p>
      <MuiButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Памятные монеты
      </MuiButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>ава</MenuItem>
        <MenuItem onClick={handleClose}>ffffав</MenuItem>
        <MenuItem value="https://www.youtube.com/">Три</MenuItem>
      </Menu>

      <p></p>
      <MuiButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Пробные монеты
      </MuiButton>

      <p></p>
      <MuiButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Юбилейные монеты
      </MuiButton>
      <Menu>
        id="simple-menu" anchorEl={anchorEl}
        keepMounted open={Boolean(anchorEl)}
        onClose={handleClose}
        <MenuItem onClick={handleClose}>аfffffffffffffffffвcа</MenuItem>
        <MenuItem onClick={handleClose}>ав</MenuItem>
        <MenuItem value="https://www.youtube.com/">Три</MenuItem>
      </Menu>

      <style>
        {`
  .Icon{
  color: #000000;
  max-width: 100000px;
  max-height: 1000px;
  }

#cd-dropdown{
  color: #000000;
  border: 2px solid #e34761;
  background: #000000;
  padding: 5px 20px;
  width: 110px
  height: 200px;

}

 

  .abbr {
    border-bottom: 1px dashed MediumBlue; 
    color: #0000CD; 
    font-size: 11px;
    z-index: 1;
    display: inline-block;
    position: relative;
    font-variant: none
    width: 50px;
    top: 100%;  
    left: 50%;
    margin-left: -60px; 
   }
  
}
`}
      </style>
    </div>
  );
}
