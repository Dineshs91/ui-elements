import uiImg from '../images/ui-code-pana.svg';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-smokey-blue-mesh absolute h-1/2 sm:h-4/5 opacity-70 w-full sm:bg-100%"></div>
      <div className="flex-grow relative text-center z-10">
        <h1 className="text-xs sm:text-2xl pt-2 tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r text-white sm:from-purple-900 sm:via-gray-50 sm:to-purple-900">UI ELEMENTS</h1>
        <div className="px-12 w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full mt-8 h-40 sm:w-1/2 sm:mt-24 md:h-64 lg:h-96 bg-light-smoke bg-opacity-20 bg-cover shadow-2xl rounded-xl">
            <img className="h-full w-full" src={uiImg} />
          </div>
          <div className="w-full text-2xl mt-7 sm:mt-40 sm:w-1/2 md:text-3xl lg:text-5xl text-center text-purple-50 font-bold tracking-wide leading-tight">
            <span className="font-hero-primary text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-700">Visual Inspiration</span><br/> 
            <span className="font-hero-secondary text-lg md:text-xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">for your next Project</span>
          </div>
        </div>
      </div>
      <div className="hidden text-center bg-pink-200">
        <a href="https://storyset.com/web">Web illustrations by Storyset</a>
      </div>
    </div>
  )
}
