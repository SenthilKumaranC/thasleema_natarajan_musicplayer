import { useCallback, useEffect, useState, } from "react";
import "./PlayList.css";

export interface ISong {
  id: number;
  songTitle: string;
  songPath: string;
  coverPhoto: string;
}
const PlayList = (props: any) => {
  const { setPlaylist, playlist, playingStatus,currentId,setCurrentId,setPlayingStatus } = props;

  useEffect(() => {
    const loadPlayList = async () => {
      const response = await fetch("http://localhost:4444/playlist");
      const finalData = await response.json();
      setPlaylist(finalData);
    };
    loadPlayList();
  }, [setPlaylist]);

  const [src, setSrc] = useState<string>("");

  const imageRelativePath = "assets/images/";

  const playSong = useCallback((id:any) =>{

    setCurrentId(id)
    setPlayingStatus("play")
  },[setCurrentId, setPlayingStatus]);

  const pauseSong = useCallback((id:any) =>{
    setPlayingStatus("pause")
  },[ setPlayingStatus]);

  return (
    <div className="PlayList">
      {playlist?.map((song: ISong) => {
        return (
          <div key={song.id}>
            <h2>{song.songTitle}</h2>
            <img
              src={`${imageRelativePath}${song.coverPhoto}`}
              alt={song.songTitle}
            ></img>
            {playingStatus === "pause" && currentId === song.id && <button onClick={()=>playSong(song.id)}>Play</button>}
            { currentId !== song.id && <button onClick={()=>playSong(song.id)}>Play</button>}
            {playingStatus === "play" && currentId === song.id && <button onClick={()=>pauseSong(song.id)}>Pause</button>}
          </div>
        );
      })}
    </div>
  );
};

export default PlayList;
