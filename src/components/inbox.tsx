'use client';

import Image from "next/image";
import SearchIconBlack from "./assets/searchiconb.png";
import MessageItem from "./message";
import { useState } from "react";
import { Chat } from "./types";
import BackButton from "./assets/backbutton.png"

const Inbox: React.FC = () => {
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

    const handleSelectChat = (chat: Chat) => {
        setSelectedChat(chat);
    };

    const handleBackToChatList = () => {
        setSelectedChat(null);
    }

    return (
        <div className="bg-white w-[40%] h-3/4 rounded-md bottom-16 mr-7 right-0 absolute px-3">

            {!selectedChat && (
                <>
                    <input
                        type="text"
                        placeholder="Search"
                        className="border border-[#4F4F4F] mt-5 rounded-md pl-3 text-xs w-full h-8 placeholder:text-gray-800 placeholder:text-[14px]"
                    />
                    <button className="absolute mt-[28px] right-6">
                        <Image src={SearchIconBlack} alt="search" className="h-4 w-4" />
                    </button>
                </>
            )}
            {!selectedChat ? (
                <MessageItem onSelectChat={handleSelectChat} />
            ) : (
                <div className="">
                    <div className="flex">
                        <button onClick={handleBackToChatList}>
                            <Image src={BackButton} alt="Back"></Image>
                        </button>
                        <h1 className="text-[#2F80ED] text-[14px] px-3 py-3 font-bold ">{selectedChat.title}</h1>

                    </div>
                    <div className="border-b border-gray-500"></div>
                    {selectedChat.messages.map((message, index) => (
                        <div key={index} className="mt-2 px-3 py-3">
                            <strong className="text-[12px] text-orange-400">{message.sender}</strong>
                            <div className="bg-orange-200 max-w-64 text-[#4F4F4F] text-[12px] px-2 py-2 text-start rounded-md">
                                {message.content}
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                        </div>
                    ))}
            <div className="">
                <input type="text" className="absolute bottom-3 text-[12px] left-5 w-96 h-8 border border-gray-500 rounded-md placeholder:text-[12px] px-3" placeholder="Type a new message" />
                <button className="absolute right-8 bottom-3 bg-[#2F80ED] text-[12px] text-white px-4 h-8 rounded-md">Send</button>
            </div>
                </div>
    
    )}
        
    
        </div>
    );
};

export default Inbox;
