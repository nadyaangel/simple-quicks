'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import GroupIcon from "./assets/groupicon.png";

type Message = {
    sender: string;
    content: string;
    timestamp: string;
}

type Chat = {
    id: string;
    title: string;
    messages: Message[];
}

type MessageProps = {
  onSelectChat: (chat: Chat) => void;
}


const Message: React.FC<MessageProps> = ({ onSelectChat }) => {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      const res = await fetch("https://my-json-server.typicode.com/nadyaangel/fake-api/chats");
      const fetchedChats: Chat[] = await res.json();
      setChats(fetchedChats);
    };

    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => {
        const lastMessage = chat.messages[chat.messages.length - 1];
      return (
        
        <div key={chat.id}
          className="mt-5 flex mb-5 pb-8 border-b border-black"
          onClick={() => onSelectChat(chat)}
        >
          <div className="mr-4">
            <Image src={GroupIcon} alt="Group" className="w-14" />
          </div>
          <div>
            <h6 className="text-[#2F80ED] text-[16px] font-semibold">{chat.title} <span className="text-[#4F4F4F] font-normal text-[14px] ml-5">{lastMessage.timestamp}</span></h6>
          <p className="font-semibold text-[14px] text-[#4F4F4F]">{lastMessage.sender}:</p>
          <p className="text-[#4F4F4F] text-[14px]">{lastMessage.content}</p>
          </div>
         
        </div>

      )
    })}      
    </div>
  );
};

export default Message;