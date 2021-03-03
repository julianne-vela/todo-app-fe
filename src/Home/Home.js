import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<main className='homePage'>
				<h1>Sign in or Create a new Account!</h1>
				<NavLink to={'/myaccount/signin'}>Sign In</NavLink>
				<NavLink to={'/myaccount/create'}>Create Account</NavLink>
			</main>
		);
	}
}
