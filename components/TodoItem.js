import React, { Component } from "react";

class TodoItem extends Component {

	handleComplete() {
		this.props.actions.completeTodo(this.props.todo.id)
	}

	handleDelete() {
		this.props.actions.deleteTodo(this.props.todo.id)
	}

	render() {
		const { completed, id, text } = this.props.todo;

		const icon = completed ? "\u2714" : "\u2716"

		return (
			<li style={{listStyleType: 'none'}}>
			    <span>{text}</span>
			    <a href="#"><span onClick={this.handleComplete.bind(this)}>{icon}</span></a>
			    <br/>
			    <button onClick={this.handleDelete.bind(this)}>Delete</button>
			</li>
		)
	}

}

export default TodoItem