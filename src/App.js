import './App.css';
import Home from './elements/home';
import Forms from './elements/forms/index';

import { BrowserRouter as Router, Route } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-center fixed w-full  text-xl font-bold h-12 shadow-md bg-gray-700 text-gray-50">
      UI Elements
    </div>
  )
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
