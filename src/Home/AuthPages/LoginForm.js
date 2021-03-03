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
			<main>
				<h1>Sign In</h1>
				<UserForm
					auth={signInUser}
					handleFormSubmit={this.handleFormSubmit}
				/>
			</main>
		);
	}
}
