import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import People from "@mui/icons-material/People";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

export const UpperMenu = (props) => {
  const [changePageIcon, setChangePageIcon] = useState();

  useEffect(() => {
    if (props.page === "match") {
      setChangePageIcon(<People onClick={() => handleClick("list")} />);
    } else {
      setChangePageIcon(
        <VolunteerActivismIcon onClick={() => handleClick("match")} />
      );
    }
  });

  const handleClick = (clickValue) => {
    props.handleChangePage(clickValue);
    console.log("clickValue", clickValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            astromatch - {props.page}
          </Typography>
          <Button color="inherit">{changePageIcon}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
