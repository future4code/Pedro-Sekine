import axios from "axios";
import React from "react";
import styled from "styled-components";
import { LowerMenu } from "../components/LowerMenu";
import AddIcon from "../images/add_white_24dp.svg";
import DeleteIcon from "../images/delete_white_24dp.svg";
import { AddPlaylist } from "../components/AddPlaylist";
import { DetailsPlaylist } from "./DetailsPlaylist";

const StyleContainer = styled.div`
  height: 100%;
`;

const UpperMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  background-color: #434343e2;
`;

const AddPlaylistButton = styled.div`
  background-color: transparent;
  padding: 1rem 1.5rem;
`;

const StylePlaylistList = styled.div`
  display: flex;
  flex-direction: column;
`;

const StylePlaylist = styled.div`
  background-color: #2e2e2ee3;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

const BotaoDelete = styled.button`
  background-color: transparent;
  border: none;
`;

export class Playlists extends React.Component {
  state = {
    playlistList: [],
    whichComponentShow: "playlists",
    playlistName: "",
    playlistDetailsID: "",
  };

  componentDidMount() {
    this.getAllPlaylists();
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

  onClickNewPlaylist = () => {
    this.setState({
      whichComponentShow: "newPlaylist",
    });
  };
  
  onClickCloseComponent = () => {
    this.setState({
      whichComponentShow: "playlists",
    });
  };

  onChangePlaylistName = (event) => {
    this.setState({
      playlistName: event.target.value,
    });
  };

  onClickCreatePlaylist = () => {
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          name: this.state.playlistName,
        },
        {
          headers: {
            Authorization: "pedro-sekine-joy",
          },
        }
      )
      .then((response) => {
        this.setState({
          whichComponentShow: "playlists",
        });
        this.getAllPlaylists();
        console.log("Playlist Criada com sucesso eu acho", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onClickDelete = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "pedro-sekine-joy",
          },
        }
      )
      .then((response) => {
        this.getAllPlaylists();
      })
      .catch((error) => {
        console.log("Erro no DeletePlaylist", error);
      });
  };

  onClickDetailsPlaylist = (id) => {
    this.setState({
      whichComponentShow: "detailsPlaylist",
      playlistDetailsID: id,
    });
  };

  onClickBack = () => {
    this.setState({
      whichComponentShow: "playlists",
    });
  };

  render() {
    const renderedPlaylists = this.state.playlistList.map((playlist) => {
      return (
        <div>
          <StylePlaylist>
            <div onClick={() => this.onClickDetailsPlaylist(playlist.id)}>
              {playlist.name}
            </div>
            <BotaoDelete onClick={() => this.onClickDelete(playlist.id)}>
              <img src={DeleteIcon} />
            </BotaoDelete>
          </StylePlaylist>
        </div>
      );
    });

    let renderedComponent;

    if (this.state.whichComponentShow === "playlists") {
      renderedComponent = (
        <div>
          <UpperMenu>
            <AddPlaylistButton onClick={this.onClickNewPlaylist}>
              <img src={AddIcon} />
            </AddPlaylistButton>
          </UpperMenu>
          <StylePlaylistList>{renderedPlaylists}</StylePlaylistList>
          {/* <LowerMenu
            onClickSongs={this.props.onClickSongs}
            onClickPlaylists={this.props.onClickPlaylists}
            currentPage={this.props.currentPage}
          /> */}
        </div>
      );
    } else if (this.state.whichComponentShow === "newPlaylist") {
      renderedComponent = (
        <AddPlaylist
          onClickCloseComponent={this.onClickCloseComponent}
          playlistName={this.state.playlistName}
          onChangePlaylistName={this.onChangePlaylistName}
          onClickCreatePlaylist={this.onClickCreatePlaylist}
        />
      );
    } else if (this.state.whichComponentShow === "detailsPlaylist") {
      renderedComponent = (
        <DetailsPlaylist
          onClickBack={this.onClickBack}
          playlistDetailsID={this.state.playlistDetailsID}
          playlistList={this.state.playlistList}
          handleClickURL={this.props.handleClickURL}
        />
      );
    }

    return <StyleContainer>{renderedComponent}</StyleContainer>;
  }
}
