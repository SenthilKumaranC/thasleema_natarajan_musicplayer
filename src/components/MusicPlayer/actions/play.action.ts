import { IMusicPlayer } from "../MusicPlayer";

export const playAction = (draft: IMusicPlayer) => {
  if (draft.currentId === -1) {
    if (draft.playlist.length > 0) {
      const selectedSongId = draft.playlist[0].id;
      draft.currentId = selectedSongId;
    }
  }
  draft.playingStatus = "play";
};
