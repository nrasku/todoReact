import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import actions from '../redux/Actions';
import UserInfo from './UserInfo';

class App extends Component {
	render() {
		return (
			<div className="text-center">
				<h1 className="jumbotron">Todo List!</h1>	
				<UserInfo user={this.props.user} actions={this.props.actions}/>
				<TodoInput addTodo={this.props.actions.addTodo} />
				<TodoList todos={this.props.todos} actions={this.props.actions}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)