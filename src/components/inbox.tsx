import Image from "next/image";
import SearchIconBlack from "./assets/searchiconb.png"
import MessageItem from "./message"

const Inbox: React.FC = () => { 
    return (
        <div className="bg-white w-[40%] h-3/4 rounded-md  bottom-16 mr-7 right-0 absolute px-3">
            <input type="text" placeholder="Search" className="border border-[#4F4F4F] mt-5  rounded-md pl-3 text-xs w-full h-8 placeholder:text-gray-800 placeholder:text-[14px]"/>
            <button className="absolute mt-[28px] right-6"> <Image src={SearchIconBlack} alt="search" className="h-4 w-4"></Image></button>


            <MessageItem/>
        </div>
)}


export default Inbox;