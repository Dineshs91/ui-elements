import Buttons from './button';

export default function Forms () {
  return (
    <div className="flex flex-col justify-center space-y-8 pt-20 p-4 md:p-20 bg-gray-100 md:flex-row md:space-x-8 md:space-y-0">
      <a className="flex flex-col pb-8 items-center p-6 w-full md:w-80 bg-white rounded-xl shadow-xl" href="/forms/buttons">
        Buttons
      </a>
      <a className="flex flex-col pb-8 items-center p-6 w-full md:w-80 bg-white rounded-xl shadow-xl" href="/forms/inputs">
        Input Field
      </a>
    </div>
  )
}
