interface Message {
    sender: string;
    content: string;
    timestamp: string;
}

interface Chat {
    id: string;
    title: string;
    messages: Message;
}

interface MessageProps {
    chats: Chat[];
}