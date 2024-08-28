import Image from "next/image";
import SearchIconBlack from "./assets/searchiconb.png"

const Inbox: React.FC = () => { 
    return (
        <div className="bg-white w-[40%] h-3/4 rounded-md  bottom-16 mr-7 right-0 absolute px-3">
            <input type="text" placeholder="Search" className="border border-[#4F4F4F] mt-5  rounded-md pl-3 text-xs w-full h-6 placeholder:text-gray-800"/>
            <button className="absolute mt-[26px] right-5"> <Image src={SearchIconBlack} alt="search" className="h-3 w-3"></Image></button>
        </div>
)}


export default Inbox;