import {
  useState,
  createContext,
  useMemo,
  useReducer,
  useCallback,
} from "react";
import Body from "../Body/Body";
import Header from "../Header/Header";
import MusicControls from "../MusicControls/MusicControls";
import { ISong } from "../PlayList/PlayList";
import "./MusicPlayer.css";

import { produce } from "immer";
import { playAction } from "./actions/play.action";
import { nextAction } from "./actions/next.action";
import { pauseAction } from "./actions/pause.action";

export type PlayingStatus = "play" | "pause";
export interface IMusicPlayer {
  playlist: ISong[];
  currentId: number;
  playingStatus: PlayingStatus;
}

const initialState: IMusicPlayer = {
  playlist: [],
  currentId: -1,
  playingStatus: "pause",
};

const mapping: any = {
  play: playAction,
  pause: pauseAction,
  next: nextAction,
};

const reducer = (currentState: IMusicPlayer, action: any) => {
  ///save currentState
  //const clonedCurrentState =  {...currentState}
  const newState = produce(currentState, (draft) => {
    mapping[action.type]();
    /* switch (action.type) {
      case "play":
        draft.playingStatus = "play";
        break;
      case "pause":
        draft.playingStatus = "pause";
        break;
      case "next":
        const currentIndex = draft.playlist.findIndex((element) => {
          return element.id === draft.currentId;
        });
        if (currentIndex >= 0) {
          const nextIndex = currentIndex + 1;
          const nextSong = draft.playlist[nextIndex];
          draft.currentId = nextSong.id;
        } 
        break;
    } */
  });
  return newState;
};

export const ThemeContext = createContext<any>({
  buttonColor: "#ff0000",
});

export const MusicPlayerContext = createContext<any>({
  state: initialState,
  dispatch: (data: any) => {},
});

const MusicPlayer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //const [playlist, setPlaylist] = useState<ISong[]>([]);
  //const [currentId, setCurrentId] = useState<number>(-1);
  //const [playingStatus, setPlayingStatus] = useState<string>("pause");

  const ui = useMemo(() => {
    return (
      <>
        <Header></Header>
        <Body></Body>
        <MusicControls></MusicControls>
      </>
    );
  }, []);

  const play = useCallback(() => {
    dispatch({ type: "play" });
  }, []);

  return (
    <ThemeContext.Provider value={{ buttonColor: "#00ff00" }}>
      <button onClick={play}>Play</button>
      <MusicPlayerContext.Provider
        value={{
          state,
          dispatch,
        }}
      >
        <div className="MusicPlayer">{ui}</div>
      </MusicPlayerContext.Provider>
    </ThemeContext.Provider>
  );
};

export default MusicPlayer;
