import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<main className='homePage'>
				<div className='wrapper'>
					<h1 className='title'>Welcome!</h1>
					<h2 className='subTitle'>
						Please Sign in or Create an Account
					</h2>
					<>
						<NavLink className='signIn' to={'/signin'}>
							Sign In
						</NavLink>
						<NavLink className='create' to={'/create-account'}>
							Create an Account
						</NavLink>
					</>
				</div>
			</main>
		);
	}
}
