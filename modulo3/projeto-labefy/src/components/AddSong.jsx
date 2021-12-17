import React from "react";
import styled from "styled-components";
import CloseIcon from "../images/close_white_24dp.svg";

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  opacity: 0.7;
  height: 100vh; 
  /* queria usar 100%, mas ainda não consegui */
`;

const CloseButton = styled.button`
  align-self: end;
  background-color: transparent;
  border: none;
  padding: 1rem;
`

const InputNewPlaylist = styled.input`
  color: white;
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  text-align: center;
  outline: none;
  padding-top: 4rem;

`

const ButtonCreatePlaylist = styled.button`
  background-color: #4c4cde;
  border: none;
  border-radius:10px;
  color: white;
  margin-top: 4rem;
  padding: 0.5rem 1rem;
  font-weight: bold;

`

export class AddSong extends React.Component {
  state={
    playlistSelectedID: "",
  }

  onChangeSongName = (event) => {
    this.props.onChangeSongName(event);
  };

  onChangeArtistName = (event) => {
    this.props.onChangeArtistName(event);
  };

  onChangesongURL = (event) => {
    this.props.onChangesongURL(event)
  }

  onChangePlaylistSelection = (event) => {
    this.setState({
      playlistSelectedID: event.target.value
    })
    console.log("Entrou no playlistSelectedID", this.state.playlistSelectedID)
  }

// CRIAR FUNÇÃO DE BOTAO ADICIONAR MÚSICA


  render() {


    const selectionPlaylist = this.props.playlistList.map((playlist) => {
      return (
        <option value={playlist.id} key={playlist.id}>{playlist.name}</option>
      )
    })

    return (
      <StyleContainer>
        <CloseButton onClick={this.props.onClickCloseComponent}>
          <img src={CloseIcon}></img>
        </CloseButton>
        <InputNewPlaylist
          placeholder="Name of the Song"
          value={this.props.songName}
          onChange={this.onChangeSongName}
        />
        <InputNewPlaylist
          placeholder="Name of the Artist"
          value={this.props.artistName}
          onChange={this.onChangeArtistName}
        />
        <InputNewPlaylist
          placeholder="Song URL"
          value={this.props.songURL}
          onChange={this.onChangesongURL}
        />
        <select name="Playlist" onChange={this.onChangePlaylistSelection}>
          <option>Playlist</option>
          {selectionPlaylist}
        </select>
        <ButtonCreatePlaylist onClick={() => this.props.onClickCreateSong(this.state.playlistSelectedID)}>Create</ButtonCreatePlaylist>
      </StyleContainer>
    );
  }
}
