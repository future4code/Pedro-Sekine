import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "../App.css";

// const ImageContainer = styled.div`
//   width: 90%;
//   height: 30%;
// `;

const ImageProfile = styled.img`
  width: 90vw;
  height: 50vh;
  object-fit: contain;
`;

export function Choose(props) {
  const [profile, setProfile] = useState({});

  const onClickMatches = () => {
    console.log("profile", profile);

    props.page("matches");
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

  useEffect(() => {
    getProfile();
    console.log("profile", profile);
  }, []);

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
      <button onClick={onClickMatches}>Matches</button>
      {presentProfile}
    </div>
  );
}
