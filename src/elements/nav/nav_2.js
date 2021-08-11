import { useState } from 'react';
import { MobileMenu, ProfileDropdown } from './index';
import { CashIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

export default function Nav2() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  return (
    <div className="mt-8 px-4 flex relative items-center bg-gray-100">
      <div className="h-5 w-5 md:hidden text-gray-900 cursor-pointer">
        <MenuIcon onClick={() => setIsMenuActive(!isMenuActive)} className={"" + (isMenuActive && "hidden")}></MenuIcon>
        <XIcon onClick={() => setIsMenuActive(!isMenuActive)} className={"" + (!isMenuActive && "hidden")}></XIcon>
      </div>
      <div className="pl-2 flex flex-grow md:flex-grow-0">
        <CashIcon className="h-6 w-6 text-yellow-500"></CashIcon>
        <h2 className="pl-2 font-bold tracking-wide text-yellow-500">Cryptcoin</h2>
      </div>

      <div className="hidden md:flex flex-grow h-10 text-left px-10 space-x-4 text-gray-900">
        <div className={"flex items-center border-b-2 border-gray-100 " + (activeLink === "dashboard" && "border-purple-500")}>
          <a href="#" onClick={() => setActiveLink("dashboard")}>
            Dashboard
          </a>
        </div>
        <div className={"flex items-center border-b-2 border-gray-100 " + (activeLink === "trade" && "border-purple-500")}>
          <a href="#" onClick={() => setActiveLink("trade")}>
            Trade
          </a>
        </div>
      </div>

      <div className="h-10 flex items-center">
        <ProfileDropdown></ProfileDropdown>
      </div>
      <MobileMenu hoverTextColor={"text-gray-600"} textColor={"text-gray-900"} bgColor={"bg-gray-100"} isMenuActive={isMenuActive}></MobileMenu>
    </div>
  )
}