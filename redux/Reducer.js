function getId(state) {
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1
}

let Reducer = function(state, action) {
	switch(action.type) {
		case 'ADD_TODO':
			return Object.assign({}, state, {
				todos: [{
					// add new todo info
					text: action.text,
					completed: false,
					id: getId(state)
				}, ...state.todos] //this appends all the existing todos at the end of the new array
			})
		default:
			return state;
	}
}

export default Reducer