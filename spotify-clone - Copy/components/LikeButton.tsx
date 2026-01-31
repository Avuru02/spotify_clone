"use client";

import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

import { useUser } from "@/hooks/useUser";
import useAuthModal from "@/hooks/useAuthModal";

interface LikeButtonProps {
  songId: string;
};

const LikeButton: React.FC<LikeButtonProps> = ({
  songId
}) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const { user } = useUser();

  const [isLiked, setIsLiked] = useState<boolean>(false);

  const Icon = isLiked ? AiFillHeart : AiOutlineHeart;

  const handleLike = () => {
    if (!user) {
      return authModal.onOpen();
    }

    // Demo mode: toggle like state
    if (isLiked) {
      setIsLiked(false);
      toast.success('Removed from liked songs');
    } else {
      setIsLiked(true);
      toast.success('Added to liked songs');
    }

    router.refresh();
  }

  return (
    <button
      className="
        cursor-pointer
        hover:opacity-75
        transition
      "
      onClick={handleLike}
    >
      <Icon color={isLiked ? '#22c55e' : 'white'} size={25} />
    </button>
  );
}

export default LikeButton;
