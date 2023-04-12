import { useCallback, useContext, useEffect, useState } from "react";
import { MusicPlayerContext, ThemeContext } from "../MusicPlayer/MusicPlayer";
import Song from "../Song/Song";
import "./PlayList.css";

export interface ISong {
  id: number;
  songTitle: string;
  songPath: string;
  coverPhoto: string;
}
const PlayList = () => {
  const {
    setPlaylist,
    playlist,
  } = useContext(MusicPlayerContext);

  const {buttonColor} = useContext(ThemeContext);

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
      <button style={{backgroundColor:buttonColor}}>Shuffle Songs</button>
      {serverError && <span style={{fontSize:"30px",color:"red",backgroundColor:"white"}}>Please Start Server</span>}
      {playlist?.map((song: ISong) => {
        return (
          <Song
            key={song.id}
            {...song}
          ></Song>
        );
      })}
    </div>
  );
};

export default PlayList;
