export const TYPES = {
	ADD_SEARCH: "ADD_SEARCH"
};

export const ADD_SEARCH = (textInput, items) => ({
	type: TYPES.ADD_SEARCH,
	textInput,
	items
});
