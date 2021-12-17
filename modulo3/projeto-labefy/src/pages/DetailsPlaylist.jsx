import axios from "axios";
import React from "react";
import styled from "styled-components";
import BackIcon from "../images/arrow_back_ios_white_24dp.svg";
import IconPlay from "../images/play_arrow_white_24dp.svg";

const DetailsContainer = styled.div`
  background-color: #2e2e2ee3;
  color: white;
  padding: 1rem;
  height:100vh;
`;

const UpperMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background-color: black;
  opacity: 0.7;
`;

const BackButton = styled.div`
  background-color: transparent;
  padding: 1rem;
`;

const StyleSong = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
`;

const StyleTrackName = styled.p`
  font-weight: bold;
`

const StyleTrackCounter = styled.p`
  font-weight: 150;
`

const PlayButton = styled.div`
  background-color: transparent;
  
`

export class DetailsPlaylist extends React.Component {
  state = {
    trackCounter: "",
    trackList: [],
  };

  handleClickURL = (URL) => {
    console.log(URL)
    this.props.handleClickURL(URL)
  }

  componentDidMount() {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistDetailsID}/tracks`,
        {
          headers: {
            Authorization: "pedro-sekine-joy",
          },
        }
      )
      .then((response) => {
        this.setState({
          trackCounter: response.data.result.quantity,
          trackList: response.data.result.tracks,
        });
      });
  }

  render() {
    const renderedTrackList = this.state.trackList.map((track) => {
      return (
        <StyleSong>
          <div>
            <StyleTrackName>{track.name}</StyleTrackName>
            <p>{track.artist}</p>
          </div>
          <PlayButton onClick={() => this.handleClickURL(track.url)}>
            <img src={IconPlay} />
          </PlayButton>
        </StyleSong>
      );
    });

    const playlistName = this.props.playlistList.filter((playlist) => {
      if (playlist.id === this.props.playlistDetailsID) {
        return true;
      } else {
        return false;
      }
    });

    return (
      <div>
        <UpperMenu>
          <BackButton onClick={this.props.onClickBack}>
            <img src={BackIcon} />
          </BackButton>
        </UpperMenu>
        <DetailsContainer>
          <h1>{playlistName[0].name}</h1>
          <StyleTrackCounter>músicas: {this.state.trackCounter}</StyleTrackCounter>
          {renderedTrackList}
        </DetailsContainer>
      </div>
    );
  }
}

// Falta trazer o nome da Playlist por props
