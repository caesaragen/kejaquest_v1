"use client";
import { useState, useCallback } from 'react'
import Avatar from "../Avatar";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from './MenuItem';

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value)
    }, [])
    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div
                    // onClick={()=> {console.log("cl")}}
                    className="hidden md:block text-sm font-semibold py-3 rounded-full px-4 hover:bg-neutral-100 transition cursor-pointer"
                >
                    KejaQuest Find your Home
                </div>
                <div
                    onClick={toggleOpen}
                    className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hove:shadow-md transition"
                >
                    <AiOutlineMenu />
                    <div className="hidden md:block">
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem
                                onClick={() => { }}
                                label='login'
                            />
                            <MenuItem
                                onClick={() => { }}
                                label='signup'
                            />
                        </>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserMenu;
