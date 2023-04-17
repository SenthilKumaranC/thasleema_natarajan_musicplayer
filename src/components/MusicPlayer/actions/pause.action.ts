import { IMusicPlayer } from "../MusicPlayer";

export const pauseAction = (draft: IMusicPlayer) => {
  draft.playingStatus = "pause";
};
