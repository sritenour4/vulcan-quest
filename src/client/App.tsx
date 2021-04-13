import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './views/Home';
import Details from './views/Details';
import Vulcandex from './views/Vulcandex';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';


const App: React.FC<AppProps> = (props) => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route exact path="/signup">
					<SignUp />
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
				<Route exact path="/vulcandex">
					<Vulcandex />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

interface AppProps { };

export default App;

