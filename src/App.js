import React, { Component } from 'react';
import SwaggerUi from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
import {CustomLayout} from './CustomLayout';

// Create the plugin that provides our layout component
const CustomLayoutPlugin = () => {
	return {
		components: {
			CustomLayout: CustomLayout
		}
	}
};


class App extends Component {
	componentDidMount() {
		SwaggerUi({
			dom_id: '#swaggerContainer',
			url: "http://petstore.swagger.io/v2/swagger.json",
			plugins: [ CustomLayoutPlugin ],
			layout: "CustomLayout"
		});
	}

	render() {
		return (
		  <div className="App">
			  <div id="swaggerContainer"></div>
		  </div>
		);
	}
}

export default App;
