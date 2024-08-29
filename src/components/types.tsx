export type Message = {
    sender: string;
    content: string;
    timestamp: string;
}

export type Chat = {
    id: string;
    title: string;
    messages: Message[];
}