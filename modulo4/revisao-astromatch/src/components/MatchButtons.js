import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { choosePerson } from "../services/choosePerson";

const DivButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 70vw;
`;

export default function MatchButtons(props) {
  const handleClick = (bool) => {
    choosePerson(props.id, bool);
    props.setNewProfile(true);
    console.log(bool);
  };

  return (
    <Stack direction="row" spacing={1}>
      <DivButtons>
        <Button
          variant="contained"
          aria-label="No"
          color="error"
          size="large"
          onClick={() => handleClick(false)}
        >
          <DoNotDisturbIcon />
        </Button>
        <Button
          variant="contained"
          color="primary"
          aria-label="Match"
          size="large"
          onClick={() => handleClick(true)}
        >
          <FavoriteIcon />
        </Button>
      </DivButtons>
    </Stack>
  );
}
