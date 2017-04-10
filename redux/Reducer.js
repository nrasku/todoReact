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
		case 'COMPLETE_TODO':
			return Object.assign({}, state, {
				todos: state.todos.map((todo) => {
					return todo.id === action.id ? 
						Object.assign({}, todo, {completed: !todo.completed}) : todo
				})
			})
		case 'DELETE_TODO':
			return Object.assign({}, state, {
				todos: state.todos.filter((todo) => {
					return todo.id !== action.id
				})
			})
		default:
			return state;
	}
}

export default Reducer