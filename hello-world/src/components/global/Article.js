// Import react and component method
import React, {Component} from 'react';

// Import Style 
import './css/Article.css';

// Declaring a class component
class Article extends Component {

	// constructor initialize state and bind methods
	constructor() {		
		// super() for have access to the "this object" of Article class.
		// Call super(props) only if you want to access this.props inside the constructor.
		super();

		// The state if for dynamic information, when the state is updated the render() is executed.
		// state is an object with properties or nodes that we can uodate.
		this.state = {
			isToggleOn: true // node or property
		};

		// Bind the methods to use "this"
		this.handleClickMe = this.handleClickMe.bind(this);
		this.handlePreventClick = this.handlePreventClick.bind(this);
		this.handleToggleButton = this.handleToggleButton.bind(this);
	}

	// Function for clickMe
	handleClickMe() {
		alert('Click!');
	}

	// Function prevent default
	handlePreventClick(e) {
		e.preventDefault();
		console.log('The Link was clicked');
	}

	// Function for toggle the name of button
	handleToggleButton() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}
  
	// Method for render the HTML tags
	render() {
		return (
			//More than one HTML element need wrapper
			<div className="my-article" >
				<h1>Events and State</h1>
				<p>I'm the button with Event </p>
				<button className="my-button" onClick={this.handleClickMe}>Click me!</button>

				<p>Prevent default with React </p>
				<a href="https://www.w3schools.com" target="_blank" onClick={this.handlePreventClick}>Link</a>

				<p>Render a button to know toggle between "ON" and "OFF"</p>
				<button className="my-toggle-button" onClick={this.handleToggleButton}>
					{this.state.isToggleOn ? 'ON' : 'OFF'}
				</button>
			</div>
		);
	}
}

// Is used to export a single class
export default Article;

