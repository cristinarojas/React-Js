// Import react and component method
import React, {Component} from 'react';

// Global
import Header from '../components/global/Header';
import Footer from '../components/global/Footer';

// Components
import Props from '../components/Props';

// Data
import items from '../data/menu';

// Method for render the HTML tags
class PropsContainer extends Component {
	render() {
		const style = {
			color: 'purple',
			fontSize: '56px'
		};

		const attrs = {
			id: '1',
			className: 'nombre-clase'
		};

		const theTitle = "The title";

		return (
			<div>
				<Header title="CodeJobs" items={items} />
				<Props
					theTitle={theTitle}
					title="Passing this prop"
					name="cristina"
					thestyle={style}
					theattrs={attrs}
				/>
				<Footer/>
			</div>
		);
	}
}

export default PropsContainer;
