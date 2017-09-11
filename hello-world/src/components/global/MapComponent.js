// Import react and component method
import React, {Component} from 'react';

// Import Style 
import './css/MapComponent.css';


// Method for render the HTML tags
class MapComponent extends Component { 
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
				<h2> Map Use </h2>
				<ul>
					{this.state.users.map((user, i) => 
						<li key={i}>{user.name}</li>
					)}
				</ul>
			</div>
		);
	}
}

export default MapComponent;