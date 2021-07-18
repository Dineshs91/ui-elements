import lakeImg from '../../images/cards/lake.jpg';
import sunsetImg from '../../images/cards/sunset.jpg';

function CardOne() {
  return (
    <div className="flex flex-col pb-12 items-center p-6 w-full md:w-80 bg-gray-50 rounded-xl shadow-xl">
      <div>
        <img className="rounded-lg transform transition hover:shadow-lg hover:scale-105" src={lakeImg} />
      </div>
      <p className="mt-4 text-center italic word-space-2">Every sunset is an opportunity to reset</p>
    </div>
  )
}

function CardTwo() {
  return (
    <div className="flex flex-col pb-12 items-center p-6 w-full md:w-80 bg-gray-50 rounded-xl shadow-xl transform transition hover:scale-105">
      <div>
        <img className=" rounded-lg transform transition hover:shadow-lg" src={sunsetImg} />
      </div>
      <p className="mt-4 text-center italic word-space-2">Sunsets are proof that no matter what happens, every day can end beautifully</p>
    </div>
  )
}

function Cards() {
  return (
    <div className="pt-20 p-4 md:p-20 bg-gray-100">
      <div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
        <CardOne></CardOne>
        <CardTwo></CardTwo>
      </div>
    </div>
  )
}

export default Cards;