// Import react and component method
import React, {Component} from 'react';

// Import Style 
import './css/Section.css';

// Method for render the HTML tags
class Section extends Component { 
	render() {
		
		// const {
		// 	style: {
		// 		color: a = "green",
		// 		fontSize: b = "16px"
		// 	}
		// } = this.props;

		//console.log(a, b);

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