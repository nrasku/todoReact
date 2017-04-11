import React from "react"; //var React = require('react')
import { render } from "react-dom"; // var render = require('react-dom').render
import { Provider } from "react-redux";

import App from "../components/App";
import configureStore from "../redux/Store";

let initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'First TODO'
	}],
	user: {
		username: 'Niko',
		id: 69
	}
};

let store = configureStore(initialState);

render(
	<Provider store={store}>
 		<App/>
	</Provider>,	
 	document.getElementById("app")
)