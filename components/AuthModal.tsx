"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import useAuthModal from "@/hooks/useAuthModal";

import Modal from './Modal';
import Button from './Button';

const AuthModal = () => {
  const router = useRouter();
  const { onClose, isOpen } = useAuthModal();

  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  }

  const handleLogin = () => {
    toast.success('Logged in! (Demo mode)');
    onClose();
    router.refresh();
  };

  return (
    <Modal
      title="Welcome back"
      description="Login to your account."
      isOpen={isOpen}
      onChange={onChange}
    >
      <div className="flex flex-col gap-4">
        <p className="text-neutral-400 text-sm">
          This is demo mode. Click below to continue.
        </p>
        <Button onClick={handleLogin}>
          Continue as Demo User
        </Button>
      </div>
    </Modal>
  );
}

export default AuthModal;