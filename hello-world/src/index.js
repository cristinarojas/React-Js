import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// Provider for Redux
import { Provider } from 'react-redux';

// Importing configureStore
import configureStore from './store/configureStore';

// Store
const store = configureStore();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'));

registerServiceWorker();
