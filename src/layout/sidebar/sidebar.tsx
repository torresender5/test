
import { useState } from "react";
import Navbar from "../navbar/navbar";
import { Outlet, Link } from "react-router-dom";
import { BiDetail } from "react-icons/bi";
// import Navar from "./navar";

type LiMenu = {
    title: string, 
    src: string,
    icon?: React.ReactNode
    gap?: boolean
    to: string
}
type MenuTypes = Array<LiMenu>

const Menus: MenuTypes = [
    { title: "Dashboard", src: "Chart_fill", to:"home"},
    { title: "Inbox", src: "Chat", to:"" },
    { title: "Accounts", src: "User", gap: true , to:""},
    { title: "Schedule ", src: "Calendar" ,to:""},
    { title: "Search", src: "Search", to:"" },
    { title: "Analytics", src: "Chart", to:"" },
    { title: "Files ", src: "Folder", gap: true, to:"" },
    { title: "Setting", src: "Setting", to:"" },
    { 
      title: "Evaluation", 
      src: "Setting",
      to:"create-evaluation",
      icon: <BiDetail className=" text-slate-300 dark:text-slate-400 font-bold text-2xl"/>},
  ];
//  type Props ={
//     children: React.ReactNode
//  }

const Sidebar = ( ) => {

  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-slate-50 dark:bg-slate-900 h-screen p-5 ${!open ? '':''} pt-8 relative duration-300`}
      >
       
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 ${!open ? '' : ''} top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
        
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`dark:text-slate-300 origin-left font-medium text-xl duration-500 ${
              !open && "scale-0"
            }`}
          >
            Ads Publication
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <Link
              to={Menu.to}
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:text-slate-50 hover:bg-violet-600 hover:text-white dark:hover:bg-violet-600 dark:text-slate-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.icon
              ? Menu.icon 
              : <img src={`./src/assets/${Menu.src}.png`} />
              }
              
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex flex-col w-full">
        <Navbar />
        <div className=" bg-slate-100 dark:bg-slate-800 h-full w-full items-center">
          <div className="ml-14 mr-14 mt-7">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;