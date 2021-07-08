export default function Buttons() {
  return (
    <div className="pt-12">
      <h3 className="text-center text-xl font-normal">Buttons</h3>
      <div className="flex h-full pt-8 items-center justify-center space-x-8">
        <div className="cursor-pointer px-4 py-2 rounded-lg bg-cover bg-red-600 text-base font-medium shadow-lg translate hover:-translate-y-1 hover:bg-red-500">
          <button type="button" className="flex items-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 transition duration-700 animate-spin-fast text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="tracking-wide">Processing</p>
          </button>
        </div>

        <div>
          <div className="cursor-pointer px-4 py-2 rounded-lg bg-cover bg-gray-800 text-base font-medium shadow-lg translate hover:-translate-y-1 hover:bg-gray-700">
            <button type="button" className="flex items-center text-gray-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 fixed filter blur-sm h-6 w-6 animate-pulse-slow text-green-200 drop-shadow-2xl" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-3 h-6 w-6 animate-pulse-slow text-green-300 drop-shadow-2xl" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z" clip-rule="evenodd" />
              </svg>
              <p className="tracking-wide">Processing</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}