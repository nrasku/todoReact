import React, { Component } from "react";
import Actions from '../redux/Actions';

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
		this.props.dispatch(Actions.addTodo(this.state.inputText))
	}

	render() {
		return (
			<div>
				<input type="text" placeholder="What should you todo?" value={this.state.inputText} 
				onChange={this.handleChange.bind(this)} />
				<button onClick={this.handleSubmit.bind(this)}>Add Todo</button>
			</div>
		)
	}

}

export default TodoInput