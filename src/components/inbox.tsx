'use client';

import Image from "next/image";
import SearchIconBlack from "./assets/searchiconb.png";
import MessageItem from "./message";
import { useState } from "react";
import { Chat } from "./types";  // Pastikan Chat diimpor dari file yang sesuai

const Inbox: React.FC = () => { 
    const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

    const handleSelectChat = (chat: Chat) => {
        setSelectedChat(chat);
    };

    return (
        <div className="bg-white w-[40%] h-3/4 rounded-md bottom-16 mr-7 right-0 absolute px-3">
            <input 
                type="text" 
                placeholder="Search" 
                className="border border-[#4F4F4F] mt-5 rounded-md pl-3 text-xs w-full h-8 placeholder:text-gray-800 placeholder:text-[14px]" 
            />
            <button className="absolute mt-[28px] right-6"> 
                <Image src={SearchIconBlack} alt="search" className="h-4 w-4" />
            </button>
            {!selectedChat ? (
                <MessageItem onSelectChat={handleSelectChat} />
            ) : (
                <div>
                    <h1 className="text-lg font-bold">{selectedChat.title}</h1>
                    {selectedChat.messages.map((message, index) => (
                        <div key={index} className="mt-4">
                            <strong>{message.sender}</strong>
                            <div className="bg-[#F8F8F8] max-w-64 px-5 py-5 mt-2">
                                {message.content}
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{message.timestamp}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Inbox;
