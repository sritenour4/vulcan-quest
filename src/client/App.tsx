import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Details from './views/Details';
import Vulcandex from './views/Vulcandex';


const App: React.FC<AppProps> = (props) => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/details/:id">
					<Details />
				</Route>
				<Route exact path="/vulcandex/">
					<Vulcandex />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps { };

export default App;

