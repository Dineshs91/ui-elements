import lakeImg from '../../images/cards/lake.jpg';
import sunsetImg from '../../images/cards/sunset.jpg';
import sunImg from '../../images/cards/sun.jpg';
import pathImg from '../../images/cards/path.jpg';

function CardOne() {
  return (
    <div className="flex flex-col pb-8 items-center p-6 w-full md:w-80 bg-white rounded-xl shadow-xl">
      <div>
        <img className="rounded-lg transform transition hover:shadow-lg hover:scale-105" src={sunsetImg} />
      </div>
      <p className="mt-4 text-center italic word-space-2">Every sunset is an opportunity to reset</p>
    </div>
  )
}

function CardTwo() {
  return (
    <div className="flex flex-col pb-8 items-center p-6 w-full md:w-80 bg-white rounded-xl shadow-xl transform transition hover:scale-105">
      <div>
        <img className=" rounded-lg transform transition hover:shadow-lg" src={lakeImg} />
      </div>
      <p className="mt-4 text-center italic word-space-2">Sunsets are proof that no matter what happens, every day can end beautifully</p>
    </div>
  )
}

function CardThree() {
  return (
    <div className="flex flex-col pb-8 items-center p-6 w-full md:w-80 bg-white rounded-xl shadow-xl">
      <div> 
        <div className="border bg-gray-200 transform -rotate-1 rounded-lg hover:rotate-0 hover:bg-transparent hover:border-opacity-0">
          <div className="border bg-gray-300 transform -rotate-1 rounded-lg hover:rotate-0 hover:bg-transparent hover:border-opacity-0">
            <img className="rounded-lg transform transition -rotate-2 hover:shadow-lg hover:rotate-0" src={sunImg} />
          </div>
        </div>
      </div>
      <p className="mt-4 text-center italic word-space-2">Sun is the source of all energy on the planet. Take a bow to the mighty star called Sun</p>
    </div>
  )
}

function CardFour() {
  return (
    <div className="flex flex-col pb-8 items-center p-6 w-full md:w-80 bg-white rounded-xl shadow-xl">
      <div className="bg-gray-100 p-1 rounded-lg">
        <img className=" rounded-lg shadow-2xl" src={pathImg} />
      </div>
      <p className="mt-4 text-center italic word-space-2">The lonely road to greatness is better than the crowded road to mediocrity</p>
    </div>
  )
}

function Cards() {
  return (
    <div className="pt-20 p-4 md:p-20 bg-gray-100">
      <div className="flex flex-col justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <CardOne></CardOne>
        <CardTwo></CardTwo>
        <CardThree></CardThree>
        <CardFour></CardFour>
      </div>
    </div>
  )
}

export default Cards;