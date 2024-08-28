'use client';

import Image from "next/image";
import {useState} from 'react';
import SearchIcon from "../components/assets/searchicon.png"
import MenuButton from "../components/assets/menubutton.png"
import ChatButtonDisable from "../components/assets/chatbuttondisable.png"
import TaskButtonDisable from "../components/assets/taskbuttondisable.png"
import Inbox from "@/components/inbox";

const Home: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <main className="flex min-h-screen justify-end bg-[#4F4F4F]">
      <div className="min-h-screen w-5/6 bg-[#4F4F4F] border border-l-white">
        <div className="w-full h-10 bg-[#828282]">
          <Image src={SearchIcon} alt="search" className="w-3 pt-3 ml-5"></Image>
        </div>

      <Inbox/>
        <div className="fixed right-5 bottom-3">
          <div className="flex justify-end">
            {isMenuOpen && (
            <div className={`text-center transition-transform duration-500 ease-in-out transform ${ isMenuOpen? 'translate-x-0' : 'translate-x-full'}`}
            style={{marginRight: isMenuOpen? '1rem': '0'}}>
              <p className="text-white mb-2 text-[12px] font-bold">Inbox</p>
              <a href="">
                <Image src={ChatButtonDisable} alt="Chat" className="w-10"></Image>
              </a>
            </div>
            )}
            {isMenuOpen && (
            <div className="text-center transition-transform duration-500 transform translate-x-0">
              <p className="text-white mb-2 text-[12px] font-bold text-center">Task</p>
              <a href="">
                <Image src={TaskButtonDisable} alt="Task" className="w-10"></Image>
              </a>
            </div>
            )}
            <div className="ml-4">
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
