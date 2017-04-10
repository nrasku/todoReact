import React, { Component } from "react";
import { connect } from "react-redux";

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

class App extends Component {
	render() {
		return (
			<div>
				<h1>Todo List!</h1>	
				<TodoInput dispatch={this.props.dispatch} />
				<TodoList todos={this.props.todos}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state
}

export default connect(mapStateToProps)(App)