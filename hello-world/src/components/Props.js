// Import react and component method
import React, {Component} from 'react';

// Import Style
import './Props.css';

// Method for render the HTML tags
class Props extends Component {
	render() {

		const title = "Cristina title";

		console.log('this.props:', this.props);

		return(
			<div className="wrapper">
				<h1>Example of Props</h1>
				<h1>{this.props.title}</h1>
				<h1>{this.props.theattrs.id}</h1>
				<h1 style={this.props.thestyle}>{this.props.thestyle.fontSize}</h1>
				<h1>{title}</h1>
				<h1>{this.props.theTitle}</h1>
			</div>
		);
	}
}

export default Props;
