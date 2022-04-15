import React, { useState } from "react";
import { createPlaylists } from "../services/createPlaylist";
import styled from "styled-components";
import AddIcon from "../assets/plus.png";
import SendIcon from "../assets/send-arrow.png";
import CloseIcon from "../assets/close.png";

const StyleButtonNewPlaylist = styled.button`
  background-color: transparent;
  border: none;
`;

const StyleAddIcon = styled.img`
  height: 1.5rem;
`;

const StyleSendIcon = styled.img`
  height: 1.5rem;
`;

const StyleSendButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 3rem 1.5rem;
`;

const PlaylistCreationInpput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
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

const StyleCloseIcon = styled.img`
  height: 1.5rem;
`

const StyleCloseButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0rem 1.5rem;
`

const ContainerButtons = styled.div`
  align-items: center;
  justify-content: center;
`


export function NewPlaylist(props) {
  const [playlistCreation, setPlaylistCreation] = useState(false);
  const [input, setInput] = useState("");

  const handleClick = () => {
    setPlaylistCreation(!playlistCreation);
    props.handleStatePlaylist()
    // será que eu tenho que atualizar o componente Playlists aqui?
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleCancel = () => {
    setPlaylistCreation(false)
  }

  let formPlaylist;
  if (playlistCreation) {
    formPlaylist = (
      <FormContainer>
        <PlaylistCreationInpput
          placeholder="Nome da Playlist"
          onChange={handleChange}
          value={input}
        />
        <ContainerButtons>
          <StyleCloseButton onClick={handleCancel}>
            <StyleCloseIcon src={CloseIcon} />
          </StyleCloseButton>

          <StyleSendButton
            onClick={() => {
              createPlaylists(input);
              handleClick();
            }}
          >
            <StyleSendIcon src={SendIcon} />
          </StyleSendButton>
        </ContainerButtons>
      </FormContainer>
    );
  }

  return (
    <div>
      <StyleButtonNewPlaylist onClick={handleClick}>
        <StyleAddIcon src={AddIcon} />
      </StyleButtonNewPlaylist>
      {formPlaylist}
    </div>
  );
}

// voltar para a página de Playlists
