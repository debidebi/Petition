import React, { Component } from "react";
import { Link } from "react-router-dom";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }
  
  handleIncClick = () => {
    this.setState({ 
      count: this.state.count + 1 
    })
  }
}

export default Counter;