import React from 'react';
import { Home, Corona, Converter } from 'pages';
import { Navbar, Footer } from 'components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { store } from 'redux/store';
import { Provider } from 'react-redux';
import './index.css';

function App() {
	return (
		<Provider store={ store }>
			<Router>
				<Navbar />
					<div className="container">
						<Switch>
							<Route exact path="/" component={ Home } />
							<Route path="/about" component={ Corona } />
							<Route path="/topic" component={ Converter } />
						</Switch>
					</div>
				<Footer />
			</Router>
		</Provider>
	);
}

export default App;