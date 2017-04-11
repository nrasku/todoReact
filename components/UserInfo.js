import React, { Component } from "react";

class UserInfo extends Component {

	handleNewId() {
		this.props.actions.createNewUserId()
	}

	handleNewIdIfOdd() {
		this.props.actions.createNewUserIdIfOdd()
	}

	handleNewIdIAsync() {
		this.props.actions.createNewUserIdAsync()
	}

	render() {
		return (
			<div>
			    <div>User Name: {this.props.user.username}</div>
			    <div>ID: {this.props.user.id}</div>
			    <button onClick={this.handleNewId.bind(this)}>Generate Random Id</button>
			    <button onClick={this.handleNewIdIfOdd.bind(this)}>Generate Random Id If Odd</button>
			    <button onClick={this.handleNewIdIAsync.bind(this)}>Generate Random Id Async</button>
			</div>
		)
	}

}

export default UserInfo