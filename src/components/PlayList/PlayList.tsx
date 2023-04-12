import { useCallback, useEffect, useState } from "react";
import Song from "../Song/Song";
import "./PlayList.css";

export interface ISong {
  id: number;
  songTitle: string;
  songPath: string;
  coverPhoto: string;
}
const PlayList = (props: any) => {
  const {
    setPlaylist,
    playlist,
    playingStatus,
    currentId,
    setCurrentId,
    setPlayingStatus,
  } = props;

  const [serverError,setServerError] = useState(false);


  useEffect(() => {
    const loadPlayList = async () => {
      try{
        const response = await fetch("http://localhost:4444/playlist");
        const finalData = await response.json();
        setPlaylist(finalData);
      }catch(e){
        setServerError(true)
        
      }
     
    };
    loadPlayList();
  }, [setPlaylist]);

  return (
    <div className="PlayList">
      {serverError && <span style={{fontSize:"30px",color:"red",backgroundColor:"white"}}>Please Start Server</span>}
      {playlist?.map((song: ISong) => {
        return (
          <Song
            key={song.id}
            {...song}
            currentId={currentId}
            setCurrentId={setCurrentId}
            playingStatus={playingStatus}
            setPlayingStatus={setPlayingStatus}
          ></Song>
        );
      })}
    </div>
  );
};

export default PlayList;
