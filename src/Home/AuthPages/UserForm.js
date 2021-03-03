import React, { Component } from 'react';
import './Auth.css';

export default class UserForm extends Component {
	state = {
		email: '',
		password: '',
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const user = await this.props.auth(
			this.state.email,
			this.state.password
		);
		const token = user.token;
		this.props.handleFormSubmit(token);
	};
	render() {
		return (
			<form className='authForm' onSubmit={this.handleSubmit}>
				<label className='label'>
					<span>Email: </span>
					<input
						type='email'
						placeholder='jane@doe.com'
						onChange={(e) =>
							this.setState({ email: e.target.value })
						}
					/>
				</label>
				<label className='label'>
					<span>Create a Password: </span>
					<input
						type='password'
						placeholder='Enter Password'
						onChange={(e) =>
							this.setState({ password: e.target.value })
						}
					/>
				</label>
				<button className='submitBtn' type='submit'>
					Submit
				</button>
			</form>
		);
	}
}
