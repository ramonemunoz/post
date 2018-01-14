import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import './css/style.css';
import App from './App';
import About from './components/About';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route exact path="/about" component={About} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
