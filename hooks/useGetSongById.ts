import { useEffect, useMemo, useState } from "react";
import { Song } from "@/types";
import songsData from "@/data/songs.json";

const useGetSongById = (id?: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [song, setSong] = useState<Song | undefined>(undefined);

  useEffect(() => {
    if (!id) {
      return;
    }

    setIsLoading(true);

    const foundSong = songsData.find(s => s.id === id);
    setSong(foundSong as Song);
    setIsLoading(false);
  }, [id]);

  return useMemo(
    () => ({
      isLoading,
      song
    }),
    [isLoading, song]
  );
};

export default useGetSongById;
