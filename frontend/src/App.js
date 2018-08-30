import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Petitions from "./components/Petitions";
import SignatureCount from "./components/SignatureCount";
import Counter from './components/Counter';

import "./styles.css";

class App extends Component {
  renderHomepage = () => {
    return (
      <div>
        <nav className="Navbar">
          <Link to="/">
            Home
          </Link>
          <Link id="movies" to="/movies">
            {" "}
            Petitions{" "}
          </Link>
          <Link to="/petitions"> Petitions </Link>
          <Link to="/petitions/:id"> Signature Count </Link>
        </nav>
        <h2> Welcome to Difference.org </h2>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/petitions" component={Petitions} />
          <Route path="/petitions/:id" component={SignatureCount} />
          <Route path="/" render={this.renderHomepage} />
        </Switch>
      </div>
    );
  }
}

export default App;

