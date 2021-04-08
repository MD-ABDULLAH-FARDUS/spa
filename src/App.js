import { render } from "@testing-library/react";
import React, {component} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";


export default function App() {
  return (
    <div>
      <Router>
    <div>
      <div className="container">
        <h1 className="text-center p-5 bg-secondary text-white display-4">Single Page Application</h1>
      </div>
      <div className="container">
        <div className="row">
          <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                  <Link className="nav-link active" id="home" to="/">Home</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" id="about" to="/about">About</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" id="contact" to="/contact">Contact</Link>
              </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </div>
   
    
    </div>
       
    </Router>
    </div>
  )
}




