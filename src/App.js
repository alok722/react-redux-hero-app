import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootswatch/dist/zephyr/bootstrap.min.css";
import "./App.css";

import Hero from "./components/Hero";
import HeroList from "./components/HeroList";

function App() {
  return (
    <Router>
      <nav className="navbar navbar-collapse navbar-dark bg-primary">
        <a href="/hero" className="navbar-brand ms-2">
          React Academy
        </a>
        <div className="navbar-nav">
          <li className="nav-item">
          </li>
          <li className="nav-item me-2">
            <Link to={"/add"} className="nav-link px-3">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/hero"]} component={HeroList} />
          <Route exact path="/add" component={Hero} />
          <Route path="/hero/:id" component={Hero} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
