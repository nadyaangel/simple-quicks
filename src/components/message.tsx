import Image from "next/image";
import GroupIcon from "./assets/groupicon.png";


const Message: React.FC = () => {
    return (

        <div className="mt-5 flex mb-10 pb-8 border-b border-black">
            <div className="mr-4">
                <Image src={GroupIcon} alt="Group" className="w-16"></Image>
            </div>
            <div>
                <h6 className="text-[#2F80ED] text-[16px] font-semibold">109220-Naturalization</h6>
                <p className="font-semibold text-[14px] text-[#4F4F4F]">Cameron Phillips: </p>
                <p className="text-[#4F4F4F] text-[14px]">Please check this out!</p>
            </div>
            <div>
                <p className="text-[#4F4F4F] text-[16px] ml-5">January 1,2021, 19:10</p>
            </div>
        </div>

    )
}

export default Message;