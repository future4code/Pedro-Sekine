import React, { useState } from "react";
import styled from "styled-components";
import { LowerMenu } from "./components/LowerMenu";
import { Playlists } from "./pages/Playlists";
import { PlaylistSongs } from "./pages/PlaylistSongs";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Helvetica;
`;

const StyledPlaylistList = styled.div`
  flex-grow: 1;
`

const LoweMenuPostion = styled.div``;

function App() {
  const [page, setPage] = useState("playlists");
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [id, setId] = useState("");
  const [playlistName, setPlaylistName] = useState("");

  const changePage = (pageClicked) => {
    setPage(pageClicked);
  };

  const changePlaylistDetails = (idClicked, nameClicked, responseAPI) => {
    console.log("responseAPI", responseAPI); // está funcionando ✅
    setPlaylistTracks(responseAPI);
    setId(idClicked);
    setPlaylistName(nameClicked);
  };

  let renderedComponent;
  page === "playlists"
    ? (renderedComponent = (
        <Playlists
          changePage={changePage}
          changePlaylistDetails={changePlaylistDetails}
        />
      ))
    : (renderedComponent = (
        <PlaylistSongs
          playlistTracks={playlistTracks}
          playlistId={id}
          playlistName={playlistName}
        />
      ));

  return (
    <Container>
      <StyledPlaylistList>
        {renderedComponent}
      </StyledPlaylistList>
      <LoweMenuPostion>
        <LowerMenu changePage={changePage} />
      </LoweMenuPostion>
    </Container>
  );
}

export default App;
