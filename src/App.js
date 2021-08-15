import './App.css';
import Home from './elements/home';
import Landing from './elements/landing';
import Forms from './elements/forms/index';
import Cards from './elements/cards/index';
import Buttons from './elements/forms/button';
import Input from './elements/forms/input';
import Nav from './elements/nav';
import NavSteps from './elements/navSteps';
import { useLocation } from "react-router";

import { BrowserRouter as Router, Route } from "react-router-dom";


function Header() {
  let location = useLocation();

  if(location.pathname !== "/") {
    return (
      <div className="flex items-center justify-center absolute z-10 w-full text-xl font-bold h-12 shadow-md bg-gradient-to-r from-purple-600 to-indigo-400 text-gray-50">
        <a href="/home">UI Elements</a>
      </div>
    )
  } else {
    return null;
  }
}

function App() {
  return (
    <Router>
      <div className="">
        <Header />
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />
        <Route path="/forms" exact component={Forms} />
        <Route path="/forms/buttons" exact component={Buttons} />
        <Route path="/forms/inputs" exact component={Input} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/navbar" exact component={Nav} />
        <Route path="/navsteps" exact component={NavSteps} />
      </div>
    </Router>
  );
}

export default App;
