import React, { Component } from "react";
import { Link } from "react-router-dom";
import Counter from './Counter';

//This is a mess. My computer is very buggy and acting up, etc.. 
// I did the best I could at the moment.


class SignatureCount extends Component {
  constructor() {
    super();
    this.state = {
      petitons: [],
      count: 0
    };
  }



  // componentDidMount() {
  //   fetch("https://ghibliapi.herokuapp.com/films")
  //     .then(res => res.json())
  //     .then(data => {
  //       const petiton = data.map(petition => {
  //         let movieObj = {
  //           title: movie.title,
  //           description: movie.description,
  //           release: movie.release_date
  //         };
  //         return movieObj;
  //       });
  //       this.setState({ movies });
  //     })
  //     .catch(err => {
  //       console.log("Error:", err);
  //     });
  // }

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

        <h2>Petitions {"  "} Signature Count</h2>
        <p>petitions= {petitions} {"  "} <button onClick={this.handleIncClick}> 
          INC
        </button></p> 
    </div>
    );
  }
}

export default SignatureCount;