import React, { Component } from 'react';
import { signUpUser } from '../../Components/Utils/api-utils.js';
import UserForm from './UserForm.js';

export default class SignupForm extends Component {
	handleFormSubmit = (token) => {
		this.props.handleTokenChange(token);

		this.props.history.push('/todos');
	};

	render() {
		return (
			<main className='authPage'>
				<section className='wrapper'>
					<h1 className='title'>Create an Account</h1>
					<UserForm
						className='authForm'
						auth={signUpUser}
						handleFormSubmit={this.handleFormSubmit}
					/>
				</section>
			</main>
		);
	}
}
