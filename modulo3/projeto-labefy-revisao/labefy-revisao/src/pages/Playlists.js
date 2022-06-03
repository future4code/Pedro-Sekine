import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NewPlaylist } from "../components/NewPlaylist";
import { deletePlaylist } from "../services/deletePlaylist";
import { getAllPlaylists } from "../services/getAllPlaylists";
import { getPlaylistTracks } from "../services/getPlaylistTracks";
import DeleteIcon from "../assets/trash.png";

const MainContainer = styled.div`
  /* padding: 0 1.5rem; */
`;

const UpperMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d8b08c;
  padding: 0.5rem 1.5rem;
`;

const PlaylistContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d8b08c;

  padding: 0.25rem 1.5rem;
`;

const StyleDeleteIcon = styled.img`
  height: 1.5rem;
`;
const ButtonDeleteIcon = styled.button`
  background-color: transparent;
  border: none;
`;

export function Playlists(props) {
  const [statePlaylist, setStatePlaylist] = useState([]);

  useEffect(() => {
    handleStatePlaylist();
  }, []);

  const handleStatePlaylist = async () => {
    setStatePlaylist(await getAllPlaylists());
  };

  const handleClick = (id) => {
    deletePlaylist(id);
    handleStatePlaylist();
  };

  const handlePageChange = async (id, name) => {
    // aqui eu entro com a props de mudança de página
    props.changePage("playlistSongs");

    // também entro com a função que vai atualizar o conteúdo da página de
    // informações da Playlist ✅
    const responseGetTracks = await getPlaylistTracks(id); // Colocar essa função aqui dentro de uma variável e trazer os props do App.js ✅
    props.changePlaylistDetails(id, name, responseGetTracks.data.result.tracks);

    // 🔴 levar o playlist id para o App.js
  };

  console.log("statePlaylist", statePlaylist);

  let printPlaylists;

  if (statePlaylist != 0) {
    printPlaylists = statePlaylist.data.result.list.map((playlist) => {
      return (
        <PlaylistContainer>
          <p onClick={() => handlePageChange(playlist.id, playlist.name)}>
            {playlist.name}
          </p>
          <ButtonDeleteIcon onClick={() => handleClick(playlist.id)}>
            <StyleDeleteIcon src={DeleteIcon} />
          </ButtonDeleteIcon>
        </PlaylistContainer>
      );
    });
  }

  return (
    <MainContainer>
      <UpperMenu>
        <p>Playlists</p>
        <NewPlaylist handleStatePlaylist={handleStatePlaylist} />
      </UpperMenu>
      {printPlaylists}
    </MainContainer>
  );
}
