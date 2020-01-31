export const TYPES = {
	ADD_SEARCH: "ADD_SEARCH",
	ADD_TOKEN: "ADD_TOKEN",
	TOGGLE_ERROR: "TOGGLE_ERROR",
	SET_ERROR: "SET_ERROR"
};

export const ADD_SEARCH = (textInput, items) => ({
	type: TYPES.ADD_SEARCH,
	textInput,
	items
});

export const ADD_TOKEN = token => ({
	type: TYPES.ADD_TOKEN,
	token
});

export const TOGGLE_ERROR = () => ({
	type: TYPES.TOGGLE_ERROR
});

export const SET_ERROR = error => ({
	type: TYPES.SET_ERROR,
	error
});
