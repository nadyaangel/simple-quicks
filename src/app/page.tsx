'use client';

import Image from "next/image";
import {useState} from 'react';
import SearchIcon from "../components/assets/searchicon.png";
import MenuButton from "../components/assets/menubutton.png";
import ChatButtonDisable from "../components/assets/chatbuttondisable.png";
import TaskButtonDisable from "../components/assets/taskbuttondisable.png";
import TaskButtonActived from "../components/assets/taskactivebutton.png";
import ChatButtonActived from "../components/assets/chatactivebutton.png";
import Inbox from "@/components/inbox";
import Task from "@/components/task";

const Home: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isChatClicked, setIsChatClicked] = useState<boolean>(false);
  const [isTaskClicked, setIsTaskClicked] = useState<boolean>(false);
  const [isTransitionComplete, setIsTransitionComplete] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>('');

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  }

  const handleChatClick = (): void => {
    if( activeTab === 'chat'){
        setIsTransitionComplete(false)
        setTimeout(() => {})
    } else {
      setActiveTab('chat');
      setIsChatClicked(true);
      setTimeout(() => {
        setIsTransitionComplete(true);
    }, 500);
  }
}


  const handleTaskClick = (): void => {
    setActiveTab('task')
    setIsTaskClicked(true);
    setTimeout(() => {
      setIsTransitionComplete(true);
    }, 500)
  }

  return (
    <main className="flex min-h-screen justify-end bg-[#4F4F4F]">
      <div className="min-h-screen w-5/6 bg-[#4F4F4F] border border-l-white">
        <div className="w-full h-10 bg-[#828282]">
          <Image src={SearchIcon} alt="search" className="w-3 pt-3 ml-5"></Image>
        </div>

      {/* <div className={`transition-opacity duration-500 ${isTransitionComplete ? 'opacity-100' : 'opacity-0'}`}>
        {activeTab === 'chat' && <Inbox/>}
        {activeTab === 'task' && <Task/>} 
      </div> */}

      {isTransitionComplete && (isChatClicked ? <Inbox/> : '')}
      {isTransitionComplete && (isTaskClicked ? <Task/> : '')}
      
        <div className="fixed right-5 bottom-3">
          
          <div className="relative items-end">

              {/* Inbox Button */}
            <div className={`
    
            ${activeTab === 'chat'? 'translate-x-8' : ''} ${isTaskClicked? '-translate-x-8' : ''} right-5 bottom-3 w-12 absolute text-center transition-transform duration-500 ease-in-out transform ${ isMenuOpen? '-translate-x-10' : 'hidden'} `}
            style={{marginRight: isMenuOpen? '1rem': '0'} }>

              <p className={`text-white text-center mb-2 text-[12px] font-bold ${isChatClicked? 'visible' : ''}`}>Inbox</p>
              <a href="#" onClick={handleChatClick}>
                <Image src={isChatClicked? ChatButtonActived : ChatButtonDisable} alt="Chat" className="w-10"></Image>
              </a>
            </div>
            
            {/* Task Button */}
            <div className={`
              ${activeTab === 'task' ?  'translate-x-0' : ''}
              right-5 bottom-3 w-12 absolute text-center transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'visible -translate-x-28' : 'hidden'} ${isChatClicked? '-translate-x-9' : ''}`}>
              <p className={`text-white mb-2 text-[12px] font-bold text-center ${isChatClicked? '' : ''} ${isTaskClicked? 'hidden': ''}`}>Task</p>
              <a href="#" onClick={handleTaskClick}>
                <Image src={isTaskClicked? TaskButtonActived : TaskButtonDisable} alt="Task" className={`w-10 ${isTaskClicked? 'w-11': ''}`}></Image>
              </a>
            </div>
            

            {/* Menu Button  */}
            <div className={`right-5 bottom-3 w-14 ml-12 absolute transition-transform duration-500 ease-in-out ${isMenuOpen? 'translate-x-0' : ''} ${isTaskClicked? 'hidden' : ''} ${isChatClicked? 'hidden' : ''}`}>
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
