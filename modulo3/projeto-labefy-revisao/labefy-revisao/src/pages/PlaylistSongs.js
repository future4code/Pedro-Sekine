import React, { useState } from "react";
import { AddSongToPlaylist } from "../services/AddSongToPlaylist";
import styled from "styled-components";
import AddIcon from "../assets/plus.png";
import SendIcon from "../assets/send-arrow.png";
import CloseIcon from "../assets/close.png";
import IconPlay from "../assets/play-button.png";

const UpperMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d8b08c;
  padding: 0.5rem 1.5rem;
`;

const FormContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  background-color: #b0b7cb;
  width: 100vw;
  height: 70vh;
  padding: 4rem 0rem;
  box-shadow: 5px 10px 8px #888888;
`;

const ButtonAddSong = styled.button`
  background-color: transparent;
  border: none;
`;

const ImgAddSong = styled.img`
  height: 1.5rem;
`;

const InputSongName = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  margin: 1rem 0rem;
`;

const InputSongArtist = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  margin: 1rem 0rem;
`;

const InputSongLink = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  margin: 1rem 0rem;
`;

const ContainerButtons = styled.div`
  align-items: center;
  justify-content: center;
`;

const IconSend = styled.img`
  height: 1.5rem;
`;

const ButtonSend = styled.button`
  background-color: transparent;
  border: none;
  padding: 3rem 1.5rem;
`;

const IconClose = styled.img`
  height: 1.5rem;
`;

const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  padding: 0rem 1.5rem;
`;

const SongContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
  border-top: 1px solid #d8b08c;
`


const DivSongArtist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

const StyleSong = styled.p`
  font-weight: 600;
  line-height: 0;
`;

const StyleArtist = styled.p`
  font-weight: 100;
  line-height: 0;
`;

const ImgPlay = styled.img`
  height: 1.5rem;
`;
const ButtonPlay = styled.button`
  background-color: transparent;
  border: none;
`;

export function PlaylistSongs(props) {
  const [addSong, setAddSong] = useState(false);
  const [songName, setSongName] = useState("");
  const [artist, setArtist] = useState("");
  const [link, setLink] = useState("");
  const [player, setPlayer] = useState("")

  // useEffect(() => {
  //   // função
  // }, [addSong]);

  const handleAddSong = () => {
    setAddSong(true);
  };

  const handleChangeSongName = (event) => {
    setSongName(event.target.value);
  };

  const handleChangeArtist = (event) => {
    setArtist(event.target.value);
  };

  const handleChangeLink = (event) => {
    setLink(event.target.value);
  };

  const handleClickAddTrack = () => {
    setAddSong(false);
    AddSongToPlaylist(props.playlistId, songName, artist, link);
  };

  const handleClose = () => {
    setAddSong(false);
  };

  const handlePlay = (link) => {
    console.log("track link", link)
    setPlayer(link)
  }

  const songComponent = props.playlistTracks.map((track) => {
    return (
      <SongContainer>
        <DivSongArtist>
          <StyleSong>{track.name}</StyleSong>
          <StyleArtist>{track.artist}</StyleArtist>
        </DivSongArtist>
        <ButtonPlay onClick={() => handlePlay(track.url)}><ImgPlay src={IconPlay} /></ButtonPlay>
        
      </SongContainer>
    );
  });

  let newSongForm;

  if (addSong) {
    newSongForm = (
      <FormContainer>
        <InputSongName
          placeholder="Nome da Música"
          value={songName}
          onChange={handleChangeSongName}
        />
        <InputSongArtist
          placeholder="Artista"
          value={artist}
          onChange={handleChangeArtist}
        />
        <InputSongLink
          placeholder="Link da música"
          value={link}
          onChange={handleChangeLink}
        />
        <ContainerButtons>
          <ButtonClose onClick={handleClose}>
            <IconClose src={CloseIcon} />
          </ButtonClose>
          <ButtonSend onClick={handleClickAddTrack}>
            <IconSend src={SendIcon} />
          </ButtonSend>
        </ContainerButtons>
      </FormContainer>
    );
  }

  let playerComponent

  if (player) {
    playerComponent = (
      <audio controls src={player}/>
    )
  }

  return (
    <div>
      <UpperMenu>
        {props.playlistName}
        <ButtonAddSong onClick={handleAddSong}>
          <ImgAddSong src={AddIcon} />
        </ButtonAddSong>
        {newSongForm}
      </UpperMenu>
      {songComponent}
      {playerComponent}
    </div>
  );
}
