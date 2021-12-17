import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import { LowerMenu } from "./components/LowerMenu";
import { Playlists } from "./pages/Playlists";
import { Songs } from "./pages/Songs";
import PauseButtom from "./images/pause_white_24dp.svg";
import PlayButtom from "./images/play_arrow_white_24dp.svg";

const StyleContainer = styled.div`
  height: 100%;
`;

const HidePlayer = styled.div`
  display: none;
`;

const SongPlayer = styled.div`
  position: fixed;
  bottom: 77px;
  background-color: #434343e2;
  width: 100%;
  padding: 1rem;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
`;

const ButtonPlayPause = styled.button`
  background-color: transparent;
  border: none;
`;

const InputStyle = styled.input`
  width: 18rem;
  -webkit-appearance: none;
  border-radius: 5px;
  height: 0.5rem;

  ::-webkit-slider-runnable-track {
    cursor: pointer;
    border: none;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    border: none;
    background: #4c4cde;
    cursor: pointer;
  }
`;

class App extends React.Component {
  state = {
    pagina: "playlists",
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  };

  onClickSongs = () => {
    this.setState({
      pagina: "songs",
    });
  };

  onClickPlaylists = () => {
    this.setState({
      pagina: "playlists",
    });
  };

  handleClickURL = (URL) => {
    this.setState({
      url: URL,
      playing: true,
    });
  };

  //aqui começa o copia cola

  load = (url) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleStop = () => {
    this.setState({ url: null, playing: false });
  };

  handleToggleControls = () => {
    const url = this.state.url;
    this.setState(
      {
        controls: !this.state.controls,
        url: null,
      },
      () => this.load(url)
    );
  };

  handleToggleLight = () => {
    this.setState({ light: !this.state.light });
  };

  handleToggleLoop = () => {
    this.setState({ loop: !this.state.loop });
  };

  handleVolumeChange = (e) => {
    this.setState({ volume: parseFloat(e.target.value) });
  };

  handleToggleMuted = () => {
    this.setState({ muted: !this.state.muted });
  };

  handleSetPlaybackRate = (e) => {
    this.setState({ playbackRate: parseFloat(e.target.value) });
  };

  handleOnPlaybackRateChange = (speed) => {
    this.setState({ playbackRate: parseFloat(speed) });
  };

  handleTogglePIP = () => {
    this.setState({ pip: !this.state.pip });
  };

  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  handleEnablePIP = () => {
    console.log("onEnablePIP");
    this.setState({ pip: true });
  };

  handleDisablePIP = () => {
    console.log("onDisablePIP");
    this.setState({ pip: false });
  };

  handlePause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };

  handleSeekMouseDown = (e) => {
    this.setState({ seeking: true });
  };

  handleSeekChange = (e) => {
    this.setState({ played: parseFloat(e.target.value) });
  };

  handleSeekMouseUp = (e) => {
    this.setState({ seeking: false });
    this.player.seekTo(parseFloat(e.target.value));
  };

  handleProgress = (state) => {
    console.log("onProgress", state);
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state);
    }
  };

  handleEnded = () => {
    console.log("onEnded");
    this.setState({ playing: this.state.loop });
  };

  handleDuration = (duration) => {
    console.log("onDuration", duration);
    this.setState({ duration });
  };

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip,
    } = this.state;

    let showPage;
    if (this.state.pagina === "playlists") {
      showPage = (
        <Playlists
          onClickSongs={this.onClickSongs}
          onClickPlaylists={this.onClickPlaylists}
          currentPage={this.state.pagina}
          handleClickURL={this.handleClickURL}
        />
      );
    } else if (this.state.pagina === "songs") {
      showPage = (
        <Songs
          onClickSongs={this.onClickSongs}
          onClickPlaylists={this.onClickPlaylists}
          currentPage={this.state.pagina}
        />
      );
    }

    let songPlayerContainer;
    if (this.state.url) {
      songPlayerContainer = (
        <SongPlayer>
          <ButtonPlayPause onClick={this.handlePlayPause}>
            {playing ? <img src={PauseButtom} /> : <img src={PlayButtom} />}
          </ButtonPlayPause>
          <InputStyle
            type="range"
            min={0}
            max={0.999999}
            step="any"
            value={played}
            onMouseDown={this.handleSeekMouseDown}
            onChange={this.handleSeekChange}
            onMouseUp={this.handleSeekMouseUp}
          />
        </SongPlayer>
      );
    }

    return (
      <StyleContainer>
        <HidePlayer>
          <ReactPlayer
            ref={this.ref}
            className="react-player"
            width="0%"
            height="0%"
            url={url}
            pip={pip}
            playing={playing}
            controls={controls}
            light={light}
            loop={loop}
            playbackRate={playbackRate}
            volume={volume}
            muted={muted}
            onReady={() => console.log("onReady")}
            onStart={() => console.log("onStart")}
            onPlay={this.handlePlay}
            onEnablePIP={this.handleEnablePIP}
            onDisablePIP={this.handleDisablePIP}
            onPause={this.handlePause}
            onBuffer={() => console.log("onBuffer")}
            onPlaybackRateChange={this.handleOnPlaybackRateChange}
            onSeek={(e) => console.log("onSeek", e)}
            onEnded={this.handleEnded}
            onError={(e) => console.log("onError", e)}
            onProgress={this.handleProgress}
            onDuration={this.handleDuration}
          />
        </HidePlayer>

        {/* <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={this.handleVolumeChange}
        /> */}
        {showPage}
        {songPlayerContainer}
        <LowerMenu
          onClickSongs={this.onClickSongs}
          onClickPlaylists={this.onClickPlaylists}
          currentPage={this.state.pagina}
        />
      </StyleContainer>
    );
  }
}

export default App;
