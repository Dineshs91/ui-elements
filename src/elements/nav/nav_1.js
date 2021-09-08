import { CashIcon, MenuIcon, XIcon, ChevronDownIcon } from '@heroicons/react/outline';

import { Transition, Popover } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { MobileMenu, ProfileDropdown } from './index';


function TradePopover() {
  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()

  return (
    <Popover className="relative">
      <Popover.Button ref={setReferenceElement} className="hover:text-gray-50">
        Trade<ChevronDownIcon className="h-4 w-4 inline"></ChevronDownIcon>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel 
          ref={setPopperElement}
          className="absolute top-10 z-10 bg-gray-200 w-72 rounded-md"
        >
          <div className="flex flex-col py-4 space-y-4 text-black">
            <a href="#" className="px-4 hover:bg-gray-100">
              <div>
                <p className="text-base xl:text-xl">Buy</p>
                <p className="text-xs text-gray-600">Buy Cryptcoin at market rates</p>
              </div>
            </a>
            <a href="#" className="px-4 hover:bg-gray-100">
              <p className="text-base xl:text-xl">Sell</p>
              <p className="text-xs text-gray-600">Sell your Cryptcoins at the best price</p>
            </a>
            <a href="#" className="px-4 hover:bg-gray-100">
              <p className="text-base xl:text-xl">History</p>
              <p className="text-xs text-gray-600">History of your past transactions</p>
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default function Nav1() {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <div className="px-4 flex relative items-center bg-gray-800">
      <div className="h-5 w-5 md:hidden text-gray-300 cursor-pointer">
        <MenuIcon onClick={() => setIsMenuActive(!isMenuActive)} className={"" + (isMenuActive && "hidden")}></MenuIcon>
        <XIcon onClick={() => setIsMenuActive(!isMenuActive)} className={"" + (!isMenuActive && "hidden")}></XIcon>
      </div>
      <div className="pl-2 flex flex-grow md:flex-grow-0">
        <CashIcon className="h-6 w-6 text-yellow-500"></CashIcon>
        <h2 className="pl-2 font-bold tracking-wide text-yellow-500">Cryptcoin</h2>
      </div>

      <div className="hidden md:flex flex-grow text-left px-10 space-x-4 text-gray-300">
        <a className="hover:text-gray-50" href="#">Dashboard</a>
        <TradePopover></TradePopover>
      </div>

      <div className="h-10 flex items-center">
        <ProfileDropdown></ProfileDropdown>
      </div>
      <MobileMenu hoverTextColor={"text-gray-500"} textColor={"text-gray-300"} bgColor={"bg-gray-800"} isMenuActive={isMenuActive}></MobileMenu>
    </div>
  )
}
