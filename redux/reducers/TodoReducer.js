function getId(todos) {
	return todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1
}

let TodoReducer = function(todos = [], action) {
	switch(action.type) {
		case 'ADD_TODO':
			return [{
					text: action.text,
					completed: false,
					id: getId(todos)
				}, ...todos] //this appends all the existing todos at the end of the new array
		case 'COMPLETE_TODO':
			return todos.map((todo) => {
				return todo.id === action.id ? 
					Object.assign({}, todo, {completed: !todo.completed}) : todo
			})
		case 'DELETE_TODO':
			return todos.filter((todo) => {
				return todo.id !== action.id
			})
		default:
			return todos;
	}
}

export default TodoReducer