import { useEffect, useState } from "react";
import { ColorSwatchIcon } from '@heroicons/react/solid';

export default function Home() {
  const headingWords = [
    "Project",
    "Side Project",
    "Learning"
  ];
  const [headingWordIndex, setHeadingWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = 0;
      let currentWordIndex = headingWords.indexOf(headingWords[headingWordIndex]);
      if(currentWordIndex < headingWords.length - 1) {
        nextIndex = currentWordIndex + 1;
      } else {
        nextIndex = 0;
      }
      setHeadingWordIndex(nextIndex)
    }, 3000);
              
    return () => clearInterval(timer);
  })

  return (
    <div className="mt-4">
      <div className="flex mx-4 text-purple-700">
        <ColorSwatchIcon className="h-6 w-6 text-left"></ColorSwatchIcon>
        <p className="ml-2 text-xl font-semibold text-gray-700">UI Elements</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <section className="mt-16">
          <h1 className="font-bold text-3xl text-gray-900">Design inspiration <br/> for your <br/> <span className="text-purple-600 transition delay-100">{headingWords[headingWordIndex]}</span></h1>
          <h2 className="mt-8 text-base text-left text-gray-700">
            A gallery of all the popular components <br/> to help you with your next endeavour.
          </h2>
          <button className="cursor-pointer mt-10 p-2 font-bold tracking-wider rounded-lg bg-purple-600 shadow-md hover:bg-purple-700 transition delay-100 text-white w-full">
            <a href="/home">Browse</a>
          </button>
        </section>

        <section className="mt-16 px-4 py-8 bg-gray-50">
          There are times where you just wanted to glance at existing designs to bake your own ideas.
        </section>
      </div>
    </div>
  )
}
