import React, { Component } from 'react';
import LoginForm from './Login.js';
import SignupForm from './Signup.js';
import styles from './Signup.module.css';
export default class AuthPage extends Component {
	render() {
		const { token } = this.props;
		return (
			<>
				<SignupForm token={token} className={styles.label} />
				<LoginForm token={token} className={styles.label} />
			</>
		);
	}
}
