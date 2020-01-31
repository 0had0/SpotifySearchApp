import ACTION from "../actions";

const initialState = {
	token: null,
	error: null,
	showError: false,
	input: ''
};

const reducer = (state = initialState, action) => {
	if (!action) return state;
	switch (action.type) {
		case 'ADD_INPUT':
			return {...state, input: action.input}
		case ACTION.TYPES.ADD_TOKEN:
			return { token: action.token };
		case ACTION.TYPES.TOGGLE_ERROR:
			if (state.showError === false) return { ...state, showError: true };
			else return { ...state, showError: false };
		case ACTION.TYPES.SET_ERROR:
			if (action.error && action.error.status === 401) {
				console.log("REDUCERS_LOG: 401 error");
				localStorage.setItem("token", null);
				return { token: null, error: action.error, showError: true };
			} else return { ...state, error: action.error, showError: true };
		// console.log("set Error to :", action.error, action);
		// return { ...state, error: action.err, showError: true };
		default:
			return state;
	}
};

export default reducer;
