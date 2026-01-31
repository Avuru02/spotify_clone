import { Song } from "@/types";
import songsData from "@/data/songs.json";

const getLikedSongs = async (): Promise<Song[]> => {
  // Demo mode: return first 2 songs as liked
  return [songsData[0], songsData[1]] as Song[];
};

export default getLikedSongs;
