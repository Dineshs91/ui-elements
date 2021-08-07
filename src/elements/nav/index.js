import { CashIcon, MenuIcon, CogIcon, LogoutIcon } from '@heroicons/react/outline';
import avatarImg from '../../images/navbar/avatar.svg';
import { Menu } from '@headlessui/react';


function ProfileDropdown() {
  return (
    <Menu as="div">
      <Menu.Button><img className="h-7 w-7 cursor-pointer rounded-full" src={avatarImg} /></Menu.Button>
      <Menu.Items className="py-3 mr-5 w-28 absolute right-0 text-left font-light text-sm bg-purple-600 text-gray-100 rounded-md shadow-md">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${active && 'bg-purple-300 text-black'} pl-3 py-1 w-full`}
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
            className={`${active && 'bg-purple-300 text-black'} pl-3 py-1 w-full`}
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
    </Menu>
  )
}


export default function Nav() {
  return (
    <div className="pt-20 p-4">
      <div className="flex items-center">
        <div>
          <MenuIcon className="h-5 w-5 text-gray-600"></MenuIcon>
        </div>
        <div className="pl-2 flex flex-grow">
          <CashIcon className="h-6 w-6 text-yellow-500"></CashIcon>
          <h2 className="pl-2 font-bold tracking-wide text-yellow-500">Cryptcoin</h2>
        </div>

        <div className="hidden md:block">
          <a href="#">Dashboard</a>
          <a href="#">Trade</a>
        </div>

        <div>
          <div className="text-right">
            <ProfileDropdown></ProfileDropdown>
          </div>
        </div>
      </div>
    </div>
  )
};
