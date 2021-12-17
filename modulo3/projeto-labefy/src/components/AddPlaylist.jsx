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

export class AddPlaylist extends React.Component {
  onChangePlaylistName = (event) => {
    this.props.onChangePlaylistName(event);
  };

  render() {
    return (
      <StyleContainer>
        <CloseButton onClick={this.props.onClickCloseComponent}>
          <img src={CloseIcon}></img>
        </CloseButton>
        <InputNewPlaylist
          placeholder="Name your Playlist"
          value={this.props.playlistName}
          onChange={this.onChangePlaylistName}
        />
        <ButtonCreatePlaylist onClick={this.props.onClickCreatePlaylist}>Create</ButtonCreatePlaylist>
      </StyleContainer>
    );
  }
}
