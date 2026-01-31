import { Song } from "@/types";
import songsData from "@/data/songs.json";

const getSongById = async (id: string): Promise<Song> => {
  const song = songsData.find(song => song.id === id);
  return song as Song || songsData[0] as Song;
};

export default getSongById;
