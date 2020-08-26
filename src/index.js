import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import data from './autos.json';

import { Server } from 'miragejs';

new Server({
	routes() {
		this.namespace = '/api';
		this.get('/autos', () => data);
	},
});

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

module.hot.accept();
