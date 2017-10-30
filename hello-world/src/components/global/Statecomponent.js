// Import react and component method
import React, {Component} from 'react';

// Import Style
import './css/Statecomponent.css';

class Statecomponent extends Component {

  constructor() {
    super();

    this.state = {
      name: 'cristina',
      lastname: 'rojas',
      age: 28
    }
  }

  componentDidMount() {
    const self = this;
    setTimeout(function(){
      self.setState({
        name: 'carlos',
        lastname: 'santana',
        age: 29
      })
    }, 5000);
  }

  render() { return(
    <div className="wrapper-state">
      <h1>State</h1>
      <h1>{this.state.name}</h1>
      <h1>{this.state.lastname}</h1>
      <h1>{this.state.age}</h1>
    </div>
  ); }
}

export default Statecomponent;
