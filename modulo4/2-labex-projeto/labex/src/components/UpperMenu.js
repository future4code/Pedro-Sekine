import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import Add from "@mui/icons-material/Add";
import ManageAccounts from "@mui/icons-material/ManageAccounts";
import Info from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkedinLink = styled.a`
  all:initial;
`

export const UpperMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon // divisor 👇 é beta
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuList sx={{ width: 320, maxWidth: "100%" }}>
                  <MenuItem component={Link} to="/trips/list">
                    <ListItemIcon>
                      <RocketLaunch fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Todas as Viagens</ListItemText>
                  </MenuItem>
                  <MenuItem component={Link} to="/admin/trips/create">
                    <ListItemIcon>
                      <Add fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Criar Viagem</ListItemText>
                  </MenuItem>
                  <MenuItem component={Link} to="/admin/trips/list">
                    <ListItemIcon>
                      <ManageAccounts fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>Área Administrativa</ListItemText>
                  </MenuItem>
                  <Divider />
                  <LinkedinLink
                    target="_blank"
                    href="https://www.linkedin.com/in/pedrosekine/"
                  >
                    <MenuItem>
                      <ListItemIcon>
                        <Info fontSize="small" />
                      </ListItemIcon>
                      <ListItemText>Quem Somos</ListItemText>
                    </MenuItem>
                  </LinkedinLink>
                </MenuList>
              </Menu>
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};
