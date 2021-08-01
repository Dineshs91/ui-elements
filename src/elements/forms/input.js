import { UserIcon, EyeIcon, EyeOffIcon, ChevronDownIcon } from '@heroicons/react/solid';
import { useCallback, useEffect, useRef, useState } from 'react';

const useKeyPress = function(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  });

  return keyPressed;
};

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

  // Primary language variables.
  const downPress = useKeyPress("ArrowDown");
  const upPress = useKeyPress("ArrowUp");
  const enterPress = useKeyPress("Enter");
  const [cursor, setCursor] = useState(0);

  const [primaryLanguageDropdownValue, setPrimaryLanguageDropdownValue] = useState("Please choose");
  const [primaryLanguageDropdownInFocus, setPrimaryLanguageDropdownInFocus] = useState(false);

  const languages = {
    javascript: <i className="devicon-javascript-plain"></i>,
    python: <i className="devicon-python-plain"></i>,
    java: <i className="devicon-java-plain"></i>,
    rust: <i className="devicon-rust-plain"></i>
  };

  useEffect(() => {
    let itemsLength = Object.keys(languages).length;

    if (primaryLanguageDropdownActive && itemsLength && downPress) {
      setCursor(prevState =>
        prevState < itemsLength - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);

  useEffect(() => {
    let itemsLength = Object.keys(languages).length;
    if (primaryLanguageDropdownActive && itemsLength && upPress) {
      setCursor(prevState => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);

  useEffect(() => {
    let itemsLength = Object.keys(languages).length;
    if (itemsLength && enterPress) {
      let currentItem = Object.keys(languages)[cursor];
      setPrimaryLanguageDropdownValue(currentItem);
      setPrimaryLanguageDropdownActive(!primaryLanguageDropdownActive);
    }
  }, [cursor, enterPress]);

  useEffect(() => {
    let currentItem = Object.keys(languages)[cursor];
    setPrimaryLanguageDropdownValue(currentItem);
  }, [cursor]);

  const [primaryLanguageDivRef, setPrimaryLanguageDivFocus] = useFocus();
  const primaryLanguageDropdownRef = useRef();

  const handlePrimaryLanguageClickOutside = e => {
    if (!primaryLanguageDropdownRef.current.contains(e.target)) {
      setPrimaryLanguageDropdownActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handlePrimaryLanguageClickOutside);
    return () => document.removeEventListener('mousedown', handlePrimaryLanguageClickOutside);
  });

  const escFunction = useCallback((event) => {
    if(event.keyCode === 27) {
      setPrimaryLanguageDropdownActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const onClickShowPassword = (value) => {
    setInputFocus();
    setShowOnePassword(value);
  }

  const primaryLanguageClick = (e, language) => {
    e.stopPropagation();
    e.preventDefault();

    setPrimaryLanguageDropdownValue(language);
    let cursorIndex = Object.keys(languages).indexOf(language);
    setCursor(cursorIndex);
    setPrimaryLanguageDropdownActive(false);
    setPrimaryLanguageDivFocus();
  }

  const primaryLanguageDivFocus = () => {
    setPrimaryLanguageDropdownInFocus(true);
  }

  const primaryLanguageDivBlur = () => {
    setPrimaryLanguageDropdownInFocus(false);
  }

  const primaryLanguageDivClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setPrimaryLanguageDropdownActive(!primaryLanguageDropdownActive);
    setPrimaryLanguageDivFocus();
  }

  useEffect(() => {
    if(primaryLanguageDropdownInFocus) {
      setPrimaryLanguageDropdownActive(true);
    } else {
      setPrimaryLanguageDropdownActive(false);
    }
  }, [primaryLanguageDropdownInFocus]);

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

        <div className="relative">
          <label className="px-1 text-gray-600">Primary Language</label>
          <div tabIndex={0} ref={primaryLanguageDivRef} onFocus={primaryLanguageDivFocus} onBlur={primaryLanguageDivBlur} onMouseDown={primaryLanguageDivClick} className="mt-1 relative border border-gray-300 cursor-pointer outline-none focus:border-purple-500 focus-within:border-purple-500 rounded-lg px-2 h-8 space-x-2 flex items-center">
            <span className="text-gray-600 capitalize">{primaryLanguageDropdownValue}</span>
            <ChevronDownIcon className="absolute right-2 h-4 w-5 inline text-right"></ChevronDownIcon>
          </div>

          <div ref={primaryLanguageDropdownRef} className={"absolute bg-white w-full shadow-md rounded-md text-gray-700 border-2 border-purple-400 top-auto mt-1 " + (primaryLanguageDropdownActive ? "block": "hidden") }>
              <ul>
                {
                  Object.entries(languages).map(function(languageObj, index) {
                    let [language, languageIcon] = languageObj;
                    return <li onMouseDown={(e) => primaryLanguageClick(e, language)} className={"px-4 py-0.5 cursor-pointer capitalize hover:bg-purple-500 hover:text-gray-50 " + (primaryLanguageDropdownValue == language ? "bg-purple-600 text-gray-50": "") } key={index}>{languageIcon} {language}</li>;
                  })
                }
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
