import React from "react";
import styled from "styled-components";
import MusicIcon from "../images/music_note_white_24dp.svg";
import PlaylistIcon from "../images/playlist_white_24dp.svg";

const ButtonLowerMenu = styled.button`
  margin: 1rem;
  background-color: transparent;
  border: none;
`;
const StyleIcons = styled.img`
  background-color: transparent;
`;
const StyleSelectedIcon = styled.img`
  background-color: #4c4cde;
  opacity: 0.9;
  border-radius: 50%;
  padding: 0.5rem;
`;

const StyleLowerMenu = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: black;
  opacity: 0.7;
`;

export class LowerMenu extends React.Component {
  render() {
    const selectedPage = this.props.currentPage;

    let renderedMenu;

    switch (selectedPage) {
      case "songs":
        console.log("case songs");
        renderedMenu = (
          <StyleLowerMenu>
            <ButtonLowerMenu>
              <StyleSelectedIcon src={MusicIcon} onClick={this.props.onClickSongs} />
            </ButtonLowerMenu>
            <ButtonLowerMenu>
              <StyleIcons
                src={PlaylistIcon}
                onClick={this.props.onClickPlaylists}
              />
            </ButtonLowerMenu>
          </StyleLowerMenu>
        );
        break;
      case "playlists":
        console.log("case playlists");
        renderedMenu = (
          <StyleLowerMenu>
            <ButtonLowerMenu>
              <StyleIcons src={MusicIcon} onClick={this.props.onClickSongs} />
            </ButtonLowerMenu>
            <ButtonLowerMenu>
              <StyleSelectedIcon
                src={PlaylistIcon}
                onClick={this.props.onClickPlaylists}
              />
            </ButtonLowerMenu>
          </StyleLowerMenu>
        );
        break;
      default:
        console.log("caiu no default no case switch");
    }

    return <div>{renderedMenu}</div>;
  }
}
