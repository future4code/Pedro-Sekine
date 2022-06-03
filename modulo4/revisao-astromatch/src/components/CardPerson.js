import React, { useEffect, useState } from "react";
import styled from "styled-components"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { getProfileToChoose } from "../services/getProfileToChoose";
import MatchButtons from "./MatchButtons";

const MainComponent = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-around;
  align-items: center;
`

export const CardPerson = () => {
  const [profile, setProfile] = useState({});
  const [newProfile, setNewProfile] = useState(false)

  useEffect(() => {
    updateProfile();
  }, []);

  const updateProfile = async () => {
    const infoProfile = await getProfileToChoose();
    console.log("infoProfile", infoProfile);
    setProfile(infoProfile.data.profile);
    setNewProfile(false)
  };

  if (newProfile) {
    updateProfile()
    console.log("entrei no newProfile")
  }

  return (
    <MainComponent>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="400" image={`${profile.photo}`} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {profile.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.age} anos
          </Typography>
          <Typography variant="body2" color="text.secondary">
            -
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {profile.bio}
          </Typography>
        </CardContent>
      </Card>
      <MatchButtons id={profile.id} setNewProfile={setNewProfile} />
    </MainComponent>
  );
};