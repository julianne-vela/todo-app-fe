import React, { Component } from 'react';
import {
	getTodos,
	addTodo,
	completeTodo,
} from '../Components/Utils/api-utils.js';
import './TodoList.css';

export default class TodoList extends Component {
	state = {
		todos: [],
		todo: '',
	};

	componentDidMount = async () => {
		await this.fetchTodos();
	};

	fetchTodos = async () => {
		const todos = await getTodos(this.props.token);
		this.setState({ todos });
	};

	handleSubmit = async (e) => {
		e.preventDefault();

		await addTodo(this.state.todo, this.props.token);
		await this.fetchTodos();
		this.setState({ todo: '' });
	};

	handleTodoChange = (e) => this.setState({ todo: e.target.value });
	handleComplete = async (todoId) => {
		await completeTodo(todoId, this.props.token);

		this.fetchTodos();
	};
	render() {
		const { todos, todo } = this.state;
		return (
			<main className='todoPage'>
				<h1 className='todoTitle'>TODO</h1>
				<form className='todoAdd' onSubmit={this.handleSubmit}>
					<label className='oval'></label>
					<input
						className='formInput default'
						value={todo}
						placeholder='Create a new todo...'
						onChange={this.handleTodoChange}
					/>
					{/* <button>Add Todo</button> */}
				</form>
				{!todos.length && <p>Woohoo! You've completed your tasks!</p>}
				<aside className='todoList'>
					{todos.map((todo) => (
						<div
							className={`
                            todo ${todo.completed ? 'completed' : ''}`}>
							<label
								key={`label + ${todo.todo}`}
								className='oval'></label>
							<p
								key={`${todo.todo}-${todo.id}`}
								onClick={() => this.handleComplete(todo.id)}>
								{todo.todo}
							</p>
						</div>
					))}
				</aside>
			</main>
		);
	}
}
