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

const Message: React.FC = () => {
  const router = useRouter();
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      const res = await fetch("https://my-json-server.typicode.com/nadyaangel/fake-api/chats");
      const fetchedChats: Chat[] = await res.json();
      setChats(fetchedChats);
    };

    fetchChats();
  }, []);

  const handleClick = (id: string) => {
    if(id) {
      router.push(`/chat/${id}`);
    } else {
      console.error("ID TIDAK AKTIF");
    }
  };

  return (
    <div>
      {chats.map((chat) => {
        const lastMessage = chat.messages[chat.messages.length - 1];
      return (
        
        <div key={chat.id}
          className="mt-5 flex mb-10 pb-8 border-b border-black"
          onClick={() => handleClick(chat.id)}
        >
          <div className="mr-4">
            <Image src={GroupIcon} alt="Group" className="w-16" />
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