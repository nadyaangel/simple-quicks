'use client';

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type Message = {
    sender: string;
    content: string;
    timestamp: string;
};

type Chat = {
    id: string;
    title: string;
    message: Message[];
}

const Chat: React.FC = () => {
    const { id } = useParams();
    const [chat, setChat] = useState<Chat | null>(null);

    useEffect(() => {
        const fetchChatDetail = async () => {
            const res = await fetch(`https://my-json-server.typicode.com/nadyaangel/fake-api/chats/${id}`);
            const fetchedChats: Chat = await res.json();
            setChat(fetchedChats)
        }

        if (id) {
            fetchChatDetail
        }
    }, [id]);

    if(!chat) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>{chat.title}</h1>
            {chat.message.map((message, index) =>
            <div key={index} className="chat-messages">
                <strong>{message.sender}</strong>
                <div className="bg-[#F8F8F8] max-w-64 px-5 py-5">
                    {message.content}
                </div>
                <p>{message.timestamp}</p>
            </div>
            
            )}
        </div>
    )
}

export default Chat;