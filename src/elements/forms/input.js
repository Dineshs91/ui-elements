import { UserIcon, EyeIcon, EyeOffIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useEffect, useRef, useState } from 'react';

export default function Input() {
  const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ] 
  }

  const [inputThreeActive, setInputThreeActive] = useState(false);
  const [showOnePassword, setShowOnePassword] = useState(false);
  const [passwordOneRef, setInputFocus] = useFocus();
  const [primaryLanguageDropdownActive, setPrimaryLanguageDropdownActive] = useState(false);

  const [primaryLanguageDropdownValue, setPrimaryLanguageDropdownValue] = useState("Please choose");

  const languages = {
    javascript: <i class="devicon-javascript-plain"></i>,
    python: <i class="devicon-python-plain"></i>,
    java: <i class="devicon-java-plain"></i>,
    rust: <i class="devicon-rust-plain"></i>
  };

  const primaryLanguageRef = useRef();

  const handlePrimaryLanguageClickOutside = e => {
    if (!primaryLanguageRef.current.contains(e.target)) {
      setPrimaryLanguageDropdownActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handlePrimaryLanguageClickOutside);
    return () => document.removeEventListener('mousedown', handlePrimaryLanguageClickOutside);
  });

  const onClickShowPassword = (value) => {
    setInputFocus();
    setShowOnePassword(value);
  }

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

        <div>
          <label className="px-1 text-gray-600">Password</label>
          <div className="mt-1 border border-gray-300 rounded-lg px-2 h-8 flex space-x-2 items-center text-gray-300 focus-within:border-2 focus-within:text-gray-500 focus-within:border-purple-500">
            <input ref={passwordOneRef} type={showOnePassword ? "text": "password"} className="w-full font-normal text-sm outline-none focus:text-gray-700"></input>
            <EyeIcon onClick={() => onClickShowPassword(true)} className={"h-6 w-6 cursor-pointer " + (showOnePassword && "hidden")}></EyeIcon>
            <EyeOffIcon onClick={() => onClickShowPassword(false)} className={"h-6 w-6 cursor-pointer " + (!showOnePassword && "hidden")}></EyeOffIcon>
          </div>
        </div>

        <div>
          <label className="px-1 text-gray-600">Programming Language</label>
          <div className="mt-1 border border-gray-300 focus-within:border-purple-500 rounded-lg px-2 h-8 flex space-x-2 items-center">
            <select className="bg-white w-full cursor-pointer outline-none text-gray-600">
              <option>Please Choose</option>
              {
                Object.entries(languages).map(function(languageObj, index) {
                  let [language, _] = languageObj;
                  return <option key={index}>{language}</option>;
                })
              }
            </select>
          </div>
        </div>

        <div ref={primaryLanguageRef} className="relative">
          <label className="px-1 text-gray-600">Primary Language</label>
          <div onClick={() => setPrimaryLanguageDropdownActive(!primaryLanguageDropdownActive)} className="mt-1 relative border border-gray-300 cursor-pointer focus-within:border-purple-500 rounded-lg px-2 h-8 space-x-2 flex items-center">
            <span className="text-gray-600 capitalize">{primaryLanguageDropdownValue}</span>
            <ChevronDownIcon className="absolute right-2 h-4 w-5 inline text-right"></ChevronDownIcon>
          </div>

          <div className={"absolute bg-white w-full shadow-md rounded-md text-gray-700 border-2 border-purple-400 top-auto mt-1 " + (primaryLanguageDropdownActive ? "block": "hidden") }>
              <ul>
                {
                  Object.entries(languages).map(function(languageObj, index) {
                    let [language, languageIcon] = languageObj;
                    return <li onClick={() => setPrimaryLanguageDropdownValue(language)} className={"px-4 py-0.5 cursor-pointer capitalize hover:bg-purple-500 hover:text-gray-50 " + (primaryLanguageDropdownValue == language ? "bg-purple-600 text-gray-50": "") } key={index}>{languageIcon} {language}</li>;
                  })
                }
              </ul>
          </div>
        </div>
      </div>

    </div>
  )
}
