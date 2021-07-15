import './App.css';
import Home from './elements/home';
import Forms from './elements/forms/index';
import { useLocation } from "react-router";

import { BrowserRouter as Router, Route } from "react-router-dom";

function Header() {
  let location = useLocation();

  if(location.pathname !== "/") {
    return (
      <div className="flex items-center justify-center fixed w-full text-xl font-bold h-12 shadow-md bg-gradient-to-r from-purple-600 to-indigo-400 text-gray-50">
        UI Elements
      </div>
    )
  } else {
    return null;
  }
}

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/forms" exact component={Forms} />
      </div>
    </Router>
  );
}

export default App;
