import { useState, createContext, useMemo } from "react";
import Body from "../Body/Body";
import Header from "../Header/Header";
import MusicControls from "../MusicControls/MusicControls";
import { ISong } from "../PlayList/PlayList";
import "./MusicPlayer.css";

export const ThemeContext = createContext<any>({
  buttonColor: "#ff0000",
});

export const MusicPlayerContext = createContext<any>({
  playlist: [],
  setPlaylist: (data: any) => {},
  currentId: [],
  setCurrentId: (data: any) => {},
  playingStatus: [],
  setPlayingStatus: (data: any) => {},
});

const MusicPlayer = () => {

  const [playlist, setPlaylist] = useState<ISong[]>([]);
  const [currentId, setCurrentId] = useState<number>(-1);
  const [playingStatus, setPlayingStatus] = useState<string>("pause");

  const ui = useMemo(() => {
    return (
      <>
        <Header></Header>
        <Body></Body>
        <MusicControls></MusicControls>
      </>
    );
  }, []);

  return (
    <ThemeContext.Provider value={{ buttonColor: "#00ff00" }}>
      <MusicPlayerContext.Provider
        value={{
          playlist,
          setPlaylist,
          currentId,
          setCurrentId,
          playingStatus,
          setPlayingStatus,
        }}
      >
        <div className="MusicPlayer">{ui}</div>
      </MusicPlayerContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MusicPlayer;
