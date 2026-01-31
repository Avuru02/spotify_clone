import { Song } from "@/types";
import songsData from "@/data/songs.json";

const getSongsByTitle = async (title: string): Promise<Song[]> => {
  if (!title) {
    return songsData as Song[];
  }

  const filteredSongs = songsData.filter(song =>
    song.title.toLowerCase().includes(title.toLowerCase())
  );

  return filteredSongs as Song[];
};

export default getSongsByTitle;
