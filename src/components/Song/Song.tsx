import { useCallback } from "react";

//similar data like border radius - inside component
//differences like backgroundcolor - thru props
//common data across all component - currentId - props, best practice - context

const CustomButton = (props:any)=>{
    const {buttonText,onClick,color} = props;
    return  <button style={{borderRadius:"20px",backgroundColor:color}} onClick={onClick}>{buttonText}</button>
}

const Song = (props: any) => {
  const imageRelativePath = "assets/images/";
  const { id, songTitle, coverPhoto,playingStatus,currentId ,setCurrentId,setPlayingStatus} = props;
 
  const playSong = useCallback(()=>{
    setCurrentId(id)
    setPlayingStatus("play")
  },[id, setCurrentId, setPlayingStatus]);

  const pauseSong = useCallback(()=>{
   setPlayingStatus("pause")
  },[setPlayingStatus])
  return (
    <div key={id}>
      <h2>{songTitle}</h2>
      <img src={`${imageRelativePath}${coverPhoto}`} alt={songTitle}></img>

      {playingStatus === "pause" && currentId === id && (
       <CustomButton onClick={playSong} buttonText="Play" color="green"></CustomButton>
      )}
      {currentId !== id && (
        <CustomButton onClick={playSong} buttonText="Play" color="green"></CustomButton>
      )}
      {playingStatus === "play" && currentId === id && (
        <CustomButton onClick={pauseSong} buttonText="Pause" color="pink"></CustomButton>
      )}
    </div>
  );
};
export default Song;


