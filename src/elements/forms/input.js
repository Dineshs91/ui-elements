import { UserIcon } from '@heroicons/react/solid';
import { useState } from 'react';

export default function Input() {
  const [inputThreeActive, setInputThreeActive] = useState(false);

  return (
    <div className="pt-20 max-w-sm md:max-w-md lg:max-w-lg mx-auto px-6">
      <div className="space-y-8 border rounded-md shadow-md p-4 md:p-8 w-full">
        <h3 className="text-xl font-normal text-center">Input Fields</h3>

        <div className="border border-gray-300 rounded-lg px-4 py-1 focus-within:border-2 focus-within:border-purple-500">
          <input className="w-full font-normal text-sm outline-none" placeholder="Username"></input>
        </div>

        <div className="border border-gray-300 rounded-lg px-2 py-1 flex space-x-2 items-center text-gray-300 focus-within:border-2 focus-within:text-gray-500 focus-within:border-purple-500">
          <UserIcon className="h-6 w-6"></UserIcon>
          <input className="w-full font-normal text-sm outline-none focus:text-gray-700" placeholder="Username"></input>
        </div>

        <div className="border z-10 border-gray-300 rounded-lg flex space-x-0 group text-gray-300 focus-within:border-2 focus-within:text-gray-500 focus-within:border-purple-500">
          <input onFocus={() => setInputThreeActive(true)} onBlur={() => setInputThreeActive(false)} className="flex-grow ml-2 h-8 font-normal text-sm outline-none border-r focus:text-gray-700 focus:border-purple-500" placeholder="Username"></input>
          <div className={"pl-2 h-8 flex items-center rounded-r-lg w-10 " + (inputThreeActive ? "bg-purple-200": "bg-gray-100")}>
            <UserIcon className="h-6 w-6"></UserIcon>
          </div>
        </div>
      </div>
      
    </div>
  )
}
