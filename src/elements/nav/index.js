import Nav1 from './nav_1';
import Nav2 from './nav_2';
import Nav3 from './nav_3';
import {CogIcon, LogoutIcon} from '@heroicons/react/outline';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import avatarImg from '../../images/navbar/avatar.svg';

export function MobileMenu(props) {
  return (
    <div className={`absolute left-0 top-10 z-10 w-full rounded-b-sm px-4 pt-2 pb-4 ${props.textColor} ${props.bgColor} ` + (!props.isMenuActive && "hidden")}>
      <div className="space-y-2">
        <a className={`block hover:${props.hoverTextColor}`} href="#">Dashboard</a>
        <a className={`block hover:${props.hoverTextColor}`} href="#">Trade</a>
      </div>
    </div>
  )
}

export function ProfileDropdown() {
  return (
    <Menu as="div">
      <Menu.Button className="focus:outline-none"><img className="h-7 w-7 mt-1 cursor-pointer rounded-full" src={avatarImg} /></Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="z-10 py-3 mr-3 md:mr-5 w-28 lg:w-40 xl:w-48 absolute right-0 text-left font-light text-sm lg:text-lg bg-yellow-500 text-gray-900 rounded-md shadow-md focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${active && 'bg-yellow-400 text-black'} pl-3 py-1 w-full`}
                href="#"
              >
                <div className="flex items-center">
                  <CogIcon className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6  block"></CogIcon>
                  <div className="pl-1">Settings</div>
                </div>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
              className={`${active && 'bg-yellow-400 text-black'} pl-3 py-1 w-full`}
                href="#"
              >
                <div className="flex items-center">
                  <LogoutIcon className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6 block"></LogoutIcon>
                  <div className="pl-1">Logout</div>
                </div>
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default function Nav() {
  return (
    <div className="py-20">
      <h3 className="text-center mb-4 text-xl font-normal">Navbar</h3>

      <div className="space-y-16">
        <Nav1></Nav1>
        <Nav3></Nav3>
        <Nav2></Nav2>
      </div>
    </div>
  )
};
