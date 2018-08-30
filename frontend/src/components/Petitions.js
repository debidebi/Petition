import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Petitions extends Component {
  constructor() {
    super();
    this.state = {
      petitions: []
    };
  }


    componentDidMount() {
      axios.get("/petitions").then(data => {
        console.log("data", data);
        this.setState({
          petitions: data.data.petitions
        });
      });
    }

  // handleSelect = e => {
  //   this.setState({ selectedMovie: e.target.value });
 // };

  render() {
    //const { petitions, selectedMovie} = this.state;
    return (
      <div className="Movies">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/petitions"> Petitions </Link>
          <Link to="/petitions/:id"> Signature Count </Link>
        </nav>

        <h2>All Petitions </h2>
        <ul>
          {petitions.map(el => {
            return <li>{el.title}</li>;
          })};
        </ul>
       </div>
    );
  }
}

export default Petitions;
