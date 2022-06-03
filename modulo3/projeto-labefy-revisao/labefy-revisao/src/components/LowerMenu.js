import React from "react";
import styled from "styled-components";

import PlaylistsIcon from "../assets/library.png";
import TracksIcon from "../assets/music-note.png";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: #D8B08C;
  padding: 1rem 0 ;
`

const Playlists = styled.button`
  background-color: transparent;
  border: none;
`;

const Tracks = styled.button`
  background-color: transparent;
  border: none;
`;

const StylePlaylistIcon = styled.img`
  height: 1.5rem;
`;

const StyleTracksIcon = styled.img`
  height: 1.5rem;
`;

export function LowerMenu(props) {
  const handleClick = (page) => {
    props.changePage(page);
  };

  return (
    <Container>
      <Playlists onClick={() => handleClick("playlists")}>
        <StylePlaylistIcon src={PlaylistsIcon} />
      </Playlists>
      <Tracks onClick={() => handleClick("playlistSongs")}>
        <StyleTracksIcon src={TracksIcon} />
      </Tracks>
    </Container>
  );
}

// Para colocar o menu colado lá embaixo, eu posso colocar ele dentro
// de um flex e colar lá embaixo. Na outra extremidade, um meno superior