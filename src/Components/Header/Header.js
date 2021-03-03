import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
	render() {
		const { user } = this.props;
		return (
			<header className='header'>
				<NavLink exact to={'/'}>
					Home
				</NavLink>
				{user && user.token && (
					<>
						<NavLink exact to={'/todos'}>
							My Todos
						</NavLink>
						<button>Logout</button>
					</>
				)}
			</header>
		);
	}
}
