import { Song } from "@/types";

const useLoadImage = (song: Song) => {
  if (!song) {
    return null;
  }

  // Return the image path directly (demo mode)
  return song.image_path;
};

export default useLoadImage;
