// Import react and component method
import React, {Component} from 'react';

// Import Style
import './Map.css';


// Method for render the HTML tags
class Map extends Component {
	constructor() {
		super();

		this.state = {
			users: [
				{
					id: 1,
					name: 'cristina'
				},
				{
					id: 2,
					name: 'carlos'
				}
			]
		};
	}

	render() {
		return(
			<div className="wrapper-map">
				<h1>Example of use of Map</h1>
				<ul>
					{this.state.users.map((user, i) =>
						<li key={i}>{user.name}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default Map;
