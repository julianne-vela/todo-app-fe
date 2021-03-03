import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<main className='homePage'>
				<h1>
					Welcome! Please sign in or create an account to get started!
				</h1>
				<NavLink to={'/signin'}>Sign In</NavLink>
				<NavLink to={'/create-account'}>Create an Account</NavLink>
			</main>
		);
	}
}
