import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <NavLink exact to={'/'}>Home</NavLink>
                <NavLink exact to={'/login'}>Login</NavLink>
                <NavLink exact to={'/signup'}>Create Account</NavLink>
                <NavLink exact to={'/todos'}>Todo List</NavLink>
            </header>
        )
    }
}
