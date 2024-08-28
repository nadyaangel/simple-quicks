'use client';

import Image from "next/image";
import {useState} from 'react';
import SearchIcon from "../components/assets/searchicon.png"
import MenuButton from "../components/assets/menubutton.png"
import ChatButtonDisable from "../components/assets/chatbuttondisable.png"
import TaskButtonDisable from "../components/assets/taskbuttondisable.png"
import ChatButtonActived from "../components/assets/chatactivebutton.png"
import Inbox from "@/components/inbox";

const Home: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isChatClicked, setIsChatClicked] = useState<boolean>(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleChatClick = (): void => {
    setIsChatClicked(true);
    setTimeout(() => {
      setIsTransitionComplete(true);
    }, 500);
  }

  return (
    <main className="flex min-h-screen justify-end bg-[#4F4F4F]">
      <div className="min-h-screen w-5/6 bg-[#4F4F4F] border border-l-white">
        <div className="w-full h-10 bg-[#828282]">
          <Image src={SearchIcon} alt="search" className="w-3 pt-3 ml-5"></Image>
        </div>

      {isTransitionComplete && <Inbox/> }
      
        <div className="fixed right-5 bottom-3">
          
          <div className="relative items-end">
            <div className={`${isChatClicked? 'translate-x-8' : ''} right-5 bottom-3 w-12 absolute text-center transition-transform duration-500 ease-in-out transform ${ isMenuOpen? '-translate-x-10' : 'hidden'}`}
            style={{marginRight: isMenuOpen? '1rem': '0'}}>

              <p className="text-white text-center mb-2 text-[12px] font-bold">Inbox</p>
              <a href="#" onClick={handleChatClick}>
                <Image src={isChatClicked? ChatButtonActived : ChatButtonDisable} alt="Chat" className="w-10"></Image>
              </a>
            </div>
            
            
            <div className={`right-5 bottom-3 w-12 absolute text-center transition-transform duration-500 ease-in-out transform ${isMenuOpen ? '-translate-x-28' : 'hidden'} ${isChatClicked? 'hidden' : ''}`}>
              <p className="text-white mb-2 text-[12px] font-bold text-center">Task</p>
              <a href="#">
                <Image src={TaskButtonDisable} alt="Task" className="w-10"></Image>
              </a>
            </div>
            
            <div className={`right-5 bottom-3 w-14 ml-12 absolute transition-transform duration-500 ease-in-out ${isMenuOpen? 'translate-x-0' : ''} ${isChatClicked? 'hidden' : ''}`}>
              <p className="invisible">Menu</p>
              <a href="#" onClick={toggleMenu}>
                <Image src={MenuButton} alt="Menu" className="w-12"></Image>
              </a>
             

            </div>
          </div>
        </div>

      </div>

    </main>
  );
}

export default Home;
