import React, { Component } from "react";

class TodoInput extends Component {

	constructor() {
		super();
		this.state = {
			inputText: ''
		}
	}

	handleChange(e) {
		this.setState({
			inputText: e.target.value
		})
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.addTodo(this.state.inputText)
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" placeholder="What should you do?" value={this.state.inputText} 
					onChange={this.handleChange.bind(this)} />
					<input className="btn btn-default" type="submit" value="Add Todo" />
				</form>
			</div>
		)
	}

}

export default TodoInput