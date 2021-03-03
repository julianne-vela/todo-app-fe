import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute.js';
import Header from './Components/Header/Header.js';
import Home from './Home/Home.js';
import TodoList from './Todos/TodoList.js';
import './App.css';
import {
	getLocalStorage,
	setLocalStorage,
} from './Components/Utils/ls-utils.js';
import LoginForm from './Home/AuthPages/LoginForm.js';
import SignupForm from './Home/AuthPages/SignupForm.js';
export default class App extends Component {
	state = {
		token: getLocalStorage(),
	};

	handleTokenChange = (token) => {
		this.setState({ token });

		setLocalStorage(token);
	};

	render() {
		const { token } = this.state;

		return (
			<Router>
				<Header />
				<Switch>
					<Route
						path='/'
						exact
						token={token}
						render={(routerProps) => <Home {...routerProps} />}
					/>
					<Route
						path='/create-account'
						exact
						token={token}
						render={(routerProps) => (
							<SignupForm
								handleRedirect={this.handleRedirect}
								handleTokenChange={this.handleTokenChange}
								{...routerProps}
							/>
						)}
					/>
					<Route
						path='/signin'
						exact
						token={token}
						render={(routerProps) => (
							<LoginForm
								handleRedirect={this.handleRedirect}
								handleTokenChange={this.handleTokenChange}
								{...routerProps}
							/>
						)}
					/>
					<ProtectedRoute
						path='/todos'
						exact
						token={token}
						render={(routerProps) => <TodoList {...routerProps} />}
					/>
				</Switch>
			</Router>
		);
	}
}
