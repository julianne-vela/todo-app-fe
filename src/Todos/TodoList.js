import React, { Component } from 'react';
import {
	getTodos,
	addTodo,
	completeTodo,
} from '../Components/Utils/api-utils.js';

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

		console.log(todo);
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input value={todo} onChange={this.handleTodoChange} />
					<button>Add Todo</button>
				</form>
				{!todos.length && <p>Woohoo! You've completed your tasks!</p>}
				{todos.map((todo) => (
					<p
						key={`${todo.todo}-${todo.id}`}
						onClick={() => this.handleComplete(todo.id)}
						className={`
                            todo ${todo.completed ? 'completed' : ''}`}>
						{todo.todo}
					</p>
				))}
			</div>
		);
	}
}
