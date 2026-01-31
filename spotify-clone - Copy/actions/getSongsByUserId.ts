import { Song } from "@/types";
import songsData from "@/data/songs.json";

const getSongsByUserId = async (): Promise<Song[]> => {
  // Demo mode: return songs for user_id "1"
  const userSongs = songsData.filter(song => song.user_id === "1");
  return userSongs as Song[];
};

export default getSongsByUserId;
