import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {

	constructor() {
		super();
		this.state = {
			count: 0
		};
	}

	// Method to know if the component is load
	componentDidMount() {
		this.setState({
			count: 1
		}); 
	}

	render() {
		console.log('Ejecuta render()');
	    return (
	      <div className="Content">
	        <h1>Soy el contenido</h1>

	        <h2>Count: { this.state.count }</h2>
	      </div>
	    );
	}
}

export default Content;
