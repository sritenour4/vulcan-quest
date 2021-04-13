import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Details from './views/Details';
import Vulcandex from './views/Vulcandex';
import Login from './views/Login';
import Signup from './views/Signup';


const App: React.FC<AppProps> = (props) => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/signup">
					<Signup />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/details/:statueid">
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

