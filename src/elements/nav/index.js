import { CashIcon, MenuIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline';
import avatarImg from '../../images/navbar/avatar.svg';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react'


function ProfileDropdown() {
  return (
    <Menu as="div">
      <Menu.Button><img className="h-7 w-7 mt-1 cursor-pointer rounded-full" src={avatarImg} /></Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="py-3 mr-3 md:mr-5 w-28 absolute right-0 text-left font-light text-sm bg-yellow-300 text-black rounded-md shadow-md">
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${active && 'bg-yellow-500 text-black'} pl-3 py-1 w-full`}
                href="#"
              >
                <div className="flex items-center">
                  <CogIcon className="h-4 w-4 block"></CogIcon>
                  <div className="pl-1">Settings</div>
                </div>
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
              className={`${active && 'bg-yellow-500 text-black'} pl-3 py-1 w-full`}
                href="#"
              >
                <div className="flex items-center">
                  <LogoutIcon className="h-4 w-4 block"></LogoutIcon>
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
    <div className="pt-20">
      <div className="px-4 flex items-center bg-gray-800">
        <div>
          <MenuIcon className="h-5 w-5 text-gray-200"></MenuIcon>
        </div>
        <div className="pl-2 flex flex-grow">
          <CashIcon className="h-6 w-6 text-yellow-500"></CashIcon>
          <h2 className="pl-2 font-bold tracking-wide text-yellow-500">Cryptcoin</h2>
        </div>

        <div className="hidden md:block text-gray-200">
          <a href="#">Dashboard</a>
          <a href="#">Trade</a>
        </div>

        <div className="h-10 flex items-center">
          <ProfileDropdown></ProfileDropdown>
        </div>
      </div>
    </div>
  )
};
