import { Song } from "@/types";
import songsData from "@/data/songs.json";

const getSongs = async (): Promise<Song[]> => {
  return songsData as Song[];
};

export default getSongs;
