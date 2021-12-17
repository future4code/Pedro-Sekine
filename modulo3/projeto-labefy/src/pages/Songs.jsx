import React from "react";
import styled from "styled-components";
import axios from "axios";
import { AddSong } from "../components/AddSong";
import { LowerMenu } from "../components/LowerMenu";
import AddIcon from "../images/add_white_24dp.svg";

const UpperMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-color: black;
  opacity: 0.7;
`;

const AddSongButton = styled.div`
  background-color: transparent;
  padding: 1rem 1.5rem;
`;

const StyleSong = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
`;

const StyleTrackName = styled.p`
  font-weight: bold;
`

export class Songs extends React.Component {
  state = {
    whichComponentShow: "songs",
    songName: "",
    songList: [],
    artistName: "",
    playlistList: [],
    songURL: "",
  };

  componentDidMount() {
    this.getAllPlaylists();

    this.setState({
      songList: JSON.parse(localStorage.getItem("songListStorage")),
    });

    console.log("localStorage funcionou?", this.state.songList);
  }

  getAllPlaylists = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "pedro-sekine-joy",
          },
        }
      )
      .then((response) => {
        this.setState({
          playlistList: response.data.result.list,
        });
        console.log("this.state.playlistList", this.state.playlistList);
        console.log("response GET", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onClickNewSong = () => {
    this.setState({
      whichComponentShow: "newSong",
    });
  };

  onClickCloseComponent = () => {
    this.setState({
      whichComponentShow: "songs",
    });
  };

  onChangeSongName = (event) => {
    this.setState({
      songName: event.target.value,
    });
  };

  onChangeArtistName = (event) => {
    this.setState({
      artistName: event.target.value,
    });
  };

  onChangesongURL = (event) => {
    this.setState({
      songURL: event.target.value,
    });
  };

  onClickCreateSong = async (id) => {
    // aqui fazer requisição da API addTrackToPlaylist e tb criar uma lista de todas músicas
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;
    const body = {
      name: this.state.songName,
      artist: this.state.artistName,
      url: this.state.songURL,
    };

    try {
      const response = await axios.post(url, body, {
        headers: {
          Authorization: "pedro-sekine-joy",
        },
      });
      console.log("Response do createSong", response);
    } catch (error) {
      console.log(error);
    }

    this.setState({
      whichComponentShow: "songs",
      // songList: [body, ...this.state.songList],
    });

    localStorage.setItem(
      "songListStorage",
      JSON.stringify(this.state.songList)
    );

    console.log("songList", this.state.songList);
  };

  render() {
    // const renderedSongList = this.state.songList.map((song) => {
    //   return (
    //     <StyleSong>
    //       <StyleTrackName>{song.name}</StyleTrackName>
    //       <p>{song.artist}</p>
    //     </StyleSong>
    //   );
    // });

    let renderedComponent;

    if (this.state.whichComponentShow === "songs") {
      renderedComponent = (
        <div>
          <UpperMenu>
            <AddSongButton onClick={this.onClickNewSong}>
              <img src={AddIcon} />
            </AddSongButton>
          </UpperMenu>
          {/* <div>{renderedSongList}</div> */}
          <LowerMenu
            onClickSongs={this.props.onClickSongs}
            onClickPlaylists={this.props.onClickPlaylists}
            currentPage={this.props.currentPage}
          />
        </div>
      );
    } else if (this.state.whichComponentShow === "newSong") {
      renderedComponent = (
        <AddSong
          onClickCloseComponent={this.onClickCloseComponent}
          songName={this.state.songName}
          onChangeSongName={this.onChangeSongName}
          onClickCreateSong={this.onClickCreateSong}
          artistName={this.state.artistName}
          onChangeArtistName={this.onChangeArtistName}
          getAllPlaylists={this.getAllPlaylists}
          playlistList={this.state.playlistList}
          songURL={this.state.songURL}
          onChangesongURL={this.onChangesongURL}
        />
      );
    }

    return <div>{renderedComponent}</div>;
  }
}
