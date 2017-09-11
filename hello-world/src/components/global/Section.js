// Import react and component method
import React, {Component} from 'react';

// Import Style 
import './css/Section.css';

// Method for render the HTML tags
class Section extends Component { 
	render() {
		
		 /*const {
		 	title: 'hola'
		 } = this.props;*/

		console.log(this.props);
		//console.log(color, fontSize, name, title);

		return(
			<div className="wrapper">
				<h1 {...this.props.attrs}>{this.props.title}</h1>

				<h2></h2>
			</div>
		);
	}
}

export default Section;