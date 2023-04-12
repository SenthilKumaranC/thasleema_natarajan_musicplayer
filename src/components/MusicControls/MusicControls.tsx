import { useCallback, useEffect, useMemo, useRef } from "react";
import { ISong } from "../PlayList/PlayList";
import "./MusicControls.css";
const MusicControls = (props: any) => {
  const {
    playlist,
    playingStatus: ps,
    setPlayingStatus: sps,
    currentId,
    setCurrentId,
  } = props;
  
  //Trigger Automatically and No 
  const songMp3Path = useMemo(() => {
    const songData = playlist.find((song: ISong) => song.id === currentId);
    if (songData) {
      return songData.songPath;
    } else {
      return "";
    }
  }, [playlist, currentId]);

  const playPercentage = 0.5;

  const songRelativePath = "assets/music/";

  const playSong = useCallback(() => {
    if (currentId === -1) {
      if (playlist.length > 0) {
        const selectedSongId = playlist[0].id;
        setCurrentId(selectedSongId);
      }
    }
    sps("play");
  }, [currentId, playlist, setCurrentId, sps]);

  const pauseSong = useCallback(
    () => {
      sps("pause");
    },
    [sps]
  );

  const audioElement = useRef<any>();

  useEffect(() => {
    if (audioElement.current) {
      if (ps === "play") {
        if (currentId > -1) audioElement.current?.play();
      } else audioElement.current?.pause();
    }
  }, [ps, currentId]);

  return (
    <div className="MusicControls">
      <div style={{ width: "250px", height: "10px", backgroundColor: "black" }}>
        <div
          style={{
            width: `${playPercentage * 100}%`,
            height: "100%",
            backgroundColor: "pink",
          }}
        ></div>
      </div>

      {currentId !== -1 && (
        <audio
          ref={audioElement}
          src={`${songRelativePath}${songMp3Path}`}
        ></audio>
      )}
      <button>Prev</button>
      {ps === "play" && <button onClick={pauseSong}>pause</button>}
      {ps === "pause" && <button onClick={playSong}>play</button>}
      <button>Next</button>
    </div>
  );
};

export default MusicControls;
