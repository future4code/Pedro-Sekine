import React, { useEffect, useState } from "react";
import styled from "styled-components"
import { getMatches } from "../services/getMatches";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import { clearList } from "../services/clearList";


const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ButtonReset = styled.button`
  margin: 2rem;
  border: none;
  background-color: transparent;
`

export const ListMatches = () => {
  const [matchComponent, setMatchComponent] = useState([]);

  useEffect(() => {
    renderList();
  }, []);

  const renderList = async () => {
    const matchesList = await getMatches();
    console.log("matchesList", matchesList);

    const mapComponent = matchesList.map((match) => {
      return (
        <div>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={match.name} src={match.photo} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="h6"
                    color="text.primary"
                  >
                    {match.name},
                  </Typography>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="h6"
                    color="text.primary"
                  >
                    {` `}
                  </Typography>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="h6"
                    color="text.primary"
                  >
                    {match.age}
                  </Typography>
                </React.Fragment>
              }
              secondary={match.bio}
            />
          </ListItem>
          <Divider variant="inset" />
        </div>
      );
    });

    setMatchComponent(mapComponent);
  };

  const handleClick = () => {
    clearList()
  }

  return (
    <ListContainer>
      <div>
        {matchComponent}
      </div>
      <ButtonReset>
        <Button variant="contained" color="error" onClick={handleClick}>
          Resetar Lista
        </Button>
      </ButtonReset>
    </ListContainer>
  );
};