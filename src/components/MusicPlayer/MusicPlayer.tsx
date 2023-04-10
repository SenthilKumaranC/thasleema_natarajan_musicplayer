import { useState } from "react";
import Body from "../Body/Body";
import Header from "../Header/Header";
import MusicControls from "../MusicControls/MusicControls";
import { ISong } from "../PlayList/PlayList";
import "./MusicPlayer.css";

const MusicPlayer = () => {

  const [playlist, setPlaylist] = useState<ISong[]>([]);
  const [currentId, setCurrentId] = useState<number>(-1);
  const [playingStatus, setPlayingStatus] = useState<string>("pause");

  return (
    <div className="MusicPlayer">
      <Header></Header>
      <Body playlist={playlist} currentId={currentId} setPlayingStatus={setPlayingStatus} playingStatus={playingStatus} setPlaylist={setPlaylist} setCurrentId={setCurrentId}></Body>
      <MusicControls setPlayingStatus={setPlayingStatus}  playingStatus={playingStatus} setCurrentId={setCurrentId} currentId={currentId} playlist={playlist}></MusicControls>
    </div>
  );
};

export default MusicPlayer;
