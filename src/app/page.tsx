import Image from "next/image";
import SearchIcon from "../components/assets/searchicon.png"
import MenuButton from "../components/assets/menubutton.png"

export default function Home() {
  return (
    <main className="flex min-h-screen justify-end bg-[#4F4F4F]">
      <div className="min-h-screen w-5/6 bg-[#4F4F4F] border border-l-white">
        <div className="w-full h-10 bg-[#828282]">
          <Image src={SearchIcon} alt="search" className="w-3 pt-3 ml-5"></Image>
        </div>

        <div className="flex justify-end m-5">
          <a href="">
            <Image src={MenuButton} alt="Menu" className="w-10"></Image>
            </a>
          
          <button>

          </button>
        </div>
      </div>
      
    </main>
  );
}
