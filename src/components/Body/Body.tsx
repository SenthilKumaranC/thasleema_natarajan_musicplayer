import PlayList from "../PlayList/PlayList";
import "./Body.css"

const Body = (props:any) => {
    const {setPlaylist,playlist,setCurrentId, playingStatus,currentId, setPlayingStatus} = props;

    return (
        <div className="Body">
            <PlayList playlist={playlist} currentId={currentId} playingStatus={playingStatus} setPlayingStatus={setPlayingStatus} setPlaylist={setPlaylist}  setCurrentId={setCurrentId}></PlayList>
        </div>
    )
}

export default Body;