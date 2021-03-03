import React, { Component } from 'react';
import { signInUser } from '../../Components/Utils/api-utils.js';
import UserForm from './UserForm.js';

export default class LoginForm extends Component {
	handleFormSubmit = (token) => {
		this.props.handleTokenChange(token);

		this.props.history.push('/todos');
	};

	render() {
		return (
			<main className='authPage'>
				<section className='wrapper'>
					<h1 className='title'>Sign In</h1>
					<UserForm
						className='authForm'
						auth={signInUser}
						handleFormSubmit={this.handleFormSubmit}
					/>
				</section>
			</main>
		);
	}
}
