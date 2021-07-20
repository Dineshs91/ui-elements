import { LoginIcon, LogoutIcon, EmojiHappyIcon } from '@heroicons/react/outline';
import { CloudDownloadIcon, BeakerIcon, CogIcon, ArrowSmRightIcon } from '@heroicons/react/solid';

function SimpleButtons() {
  return (
    <div>
      <h3 className="text-xl font-normal text-center">Simple Buttons</h3>
      <div className="flex pt-8 items-center justify-center space-x-8">
        <div className="cursor-pointer px-4 py-2 rounded-lg bg-blue-600 text-base font-medium transform transition hover:shadow-lg hover:bg-blue-500 hover:-translate-y-px">
          <button className="flex items-center text-white">
            <p className="tracking-wide">Sign In</p>
            <LoginIcon className="ml-3 h-6 w-6" />
          </button>
        </div>

        <div className="cursor-pointer px-4 py-2 rounded-lg bg-yellow-500 text-base font-medium transform transition hover:shadow-lg hover:translate-x-1">
          <button className="flex items-center text-white">
            <p className="tracking-wide">Log Out</p>
            <LogoutIcon className="ml-3 h-6 w-6" />
          </button>
        </div>
      </div>

      <div className="flex pt-8 items-center justify-center space-x-8">
        <div className="cursor-not-allowed px-4 py-2 rounded-lg bg-red-400 text-base font-medium shadow-deep-inner">
          <button className="flex items-center text-white cursor-not-allowed">
            <p className="tracking-wide cursor-not-allowed">Download</p>
            <CloudDownloadIcon className="ml-3 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

function AnimatedButtons() {
  return (
    <div className="pt-12">
      <h3 className="text-center text-xl font-normal">Animated Buttons</h3>
      <div className="flex flex-col space-y-8 space-x-0 md:space-y-0 md:flex-row pt-8 items-center justify-center md:space-x-8">
        <div className="cursor-pointer px-4 py-2 rounded-lg bg-red-600 text-base font-medium shadow-lg hover:bg-red-500">
          <button type="button" className="flex items-center text-white">
            <EmojiHappyIcon className="mr-3 transition duration-700 animate-spin-fast text-white h-6 w-6"></EmojiHappyIcon>
            <p className="tracking-wide">Processing</p>
          </button>
        </div>

        <div className="cursor-pointer px-4 py-2 rounded-lg bg-gray-800 text-base font-medium shadow-lg hover:bg-gray-700">
          <button type="button" className="flex items-center text-gray-50">
            <BeakerIcon className="mr-3 absolute filter blur-sm h-6 w-6 animate-pulse-slow text-green-200 drop-shadow-2xl"></BeakerIcon>
            <BeakerIcon className="mr-3 h-6 w-6 animate-pulse-slow text-green-300 drop-shadow-2xl"></BeakerIcon>
            <p className="tracking-wide">Processing</p>
          </button>
        </div>

        <div className="flex space-x-8">
          <div className="cursor-pointer px-4 py-2 rounded-lg bg-indigo-600 text-base font-medium shadow-lg hover:bg-indigo-500">
            <button type="button" className="flex items-center text-white">
              <p className="tracking-wide">Settings</p>
              <CogIcon className="ml-2 animate-ping-pong h-5 w-5"></CogIcon>
            </button>
          </div>
          <div className="cursor-pointer px-4 py-2 rounded-lg bg-blue-600 text-base font-medium shadow-lg translate hover:-translate-y-1 hover:bg-blue-500">
            <button type="button" className="flex items-center text-white">
              <p className="tracking-wide">Sign In</p>
              <ArrowSmRightIcon className="ml-2 h-6 w-6 animate-horizontal-bounce"></ArrowSmRightIcon>
            </button>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default function Buttons() {
  return (
    <div className="py-20">
      <SimpleButtons />
      <AnimatedButtons />
    </div>
  )
}
