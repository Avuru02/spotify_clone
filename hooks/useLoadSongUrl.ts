import { Song } from "@/types";

const useLoadSongUrl = (song: Song) => {
  if (!song) {
    return '';
  }

  // Return the song path directly (demo mode)
  return song.song_path;
};

export default useLoadSongUrl;
