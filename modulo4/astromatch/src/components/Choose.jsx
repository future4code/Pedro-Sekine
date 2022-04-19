import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";
import MathchesIcons from "../images/groups_black_24dp.svg";
import IconButton from "@mui/material/IconButton";
import GroupsIcon from "@mui/icons-material/Groups";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4rem;
  background-color: #749c75;
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  justify-items: center;
`;

const StyleAstromatch = styled.p`
  color: #e9d985;
  grid-column: 2/3;
  font-size: 1.7rem;
  font-weight: 650;
  margin: 0;
  /* background: linear-gradient(to right, #e9d985 0%, #b2bd7e 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
`;

const StyleMatchesIcon = styled.button`
  grid-column: 3/4;
  background-color: transparent;
  border: none;
`;

const ImageProfile = styled.img`
  width: 90vw;
  height: 50vh;
  object-fit: contain;
`;

export function Choose(props) {
  const [profile, setProfile] = useState({});
  const [nextPerson, setNextPerson] = useState(false);

  const onClickMatches = () => {
    console.log("profile", profile);

    props.page("matches");
  };

  const handleAccept = () => {
    choosePerson(true);
    setNextPerson(!nextPerson);
    console.log("entrou no handle Accept");
  };

  const handleDeny = () => {
    choosePerson(false);
    setNextPerson(!nextPerson);
  };

  const getProfile = async () => {
    try {
      const profileAPI = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:pedro-sekine-joy/person"
      );
      setProfile(profileAPI.data.profile);
      console.log("profile", profile);
      console.log("profileAPI", profileAPI);
    } catch (error) {
      console.log(error);
    }
  };

  const choosePerson = async (answer) => {
    try {
      const choiceAPI = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:pedro-sekine-joy/choose-person",
        {
          id: `${profile.id}`,
          choice: answer,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(profile.id);
      console.log("answer", answer);
      console.log(choiceAPI);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
    console.log("profile useEffect nextPerson", profile);
  }, [nextPerson]);

  const presentProfile = (
    <div>
      <ImageProfile src={profile.photo} />
      <h3>
        {profile.name}, {profile.age}
      </h3>
      <p>{profile.bio}</p>
    </div>
  );

  return (
    <div>
      <Header>
        <StyleAstromatch>astromatch</StyleAstromatch>
        <IconButton
          onClick={onClickMatches}
          color="primary"
          aria-label="Ver Matches"
        >
          <GroupsIcon />
        </IconButton>
      </Header>

      {presentProfile}
      <button onClick={handleDeny}>NÃO</button>
      <button onClick={handleAccept}>SIM</button>
    </div>
  );
}
