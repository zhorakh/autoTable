import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './redux/reducers';

const initialState = {};
const enhancers = [];
const middleware = [thunk];

const composedEnhancers = compose(
	applyMiddleware(...middleware),
	...enhancers,
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

export default createStore(rootReducer, initialState, composedEnhancers);
