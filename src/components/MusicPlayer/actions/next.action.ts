import { IMusicPlayer } from "../MusicPlayer";

export const nextAction = (draft: IMusicPlayer) => {
  const currentIndex = draft.playlist.findIndex((element) => {
    return element.id === draft.currentId;
  });
  if (currentIndex >= 0) {
    const nextIndex = currentIndex + 1;
    const nextSong = draft.playlist[nextIndex];
    draft.currentId = nextSong.id;
  }
};
