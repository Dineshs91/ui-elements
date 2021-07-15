import uiImg from '../images/ui-code-pana.svg';

export default function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-smokey-blue-mesh absolute h-4/5 opacity-70 w-full bg-100%"></div>
      <div className="flex-grow relative text-center z-10">
        <h1 className="text-3xl pt-4 tracking-wide font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-gray-50 to-purple-900">UI ELEMENTS</h1>
        <div className="px-12 w-full flex">
          <div className="w-1/2 mt-24 h-96 bg-light-smoke bg-opacity-20 bg-cover shadow-2xl rounded-xl">
            <img className="h-full" src={uiImg} />
          </div>
          <div className="mt-40 w-1/2 text-center text-purple-50 font-bold tracking-wide leading-tight text-5xl">
            <span className="font-hero-primary text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-700">Visual Inspiration</span><br/> 
            <span className="font-hero-secondary text-3xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">for your next Project</span>
          </div>
        </div>
      </div>
      <div className="hidden text-center bg-pink-200">
        <a href="https://storyset.com/web">Web illustrations by Storyset</a>
      </div>
    </div>
  )
}
