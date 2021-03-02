import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute.js';
import Header from './Components/Header/Header.js';
import Home from './Home/Home.js';
import Login from './Home/AuthPages/Login.js';
import Signup from './Home/AuthPages/Signup.js';
import TodoList from './Todos/TodoList.js';
import './App.css';
export default class App extends Component {
    state = {
        user: {
            email: '',
            id: '',
            token: '',
        }
    }

    render() {
        const { user } = this.state;

        return (
            <Router>
                <Header />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(routerProps) => <Home {...routerProps} /   >}
                    />
                    <Route
                        path="/login"
                        exact
                        render={(routerProps) => <Login {...routerProps} /  >}
                    />
                    <Route
                        path="/signup"
                        exact
                        render={(routerProps) => <Signup {...routerProps}   />}
                    />
                    <ProtectedRoute
                        path="/todos"
                        exact
                        token={user && user.token}
                        render={(routerProps) => 
                            <TodoList
                                user={user} 
                                {...routerProps} 
                            />}
                    />
                </Switch>
            </Router>
        )
    }
}
