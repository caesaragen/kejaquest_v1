'use client';
import { useState, useCallback } from 'react';
import Avatar from '../Avatar';
import { AiOutlineMenu } from 'react-icons/ai';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          // onClick={()=> {console.log("cl")}}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold text-rose-500 transition hover:bg-neutral-100 md:block"
        >
          KejaQuest Find your Home
        </div>
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-2 md:py-1"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-xl bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            <>
              <MenuItem onClick={() => {}} label="login" />
              <MenuItem onClick={registerModal.onOpen} label="signup" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
