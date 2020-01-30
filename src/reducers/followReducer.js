import ACTION from "../actions";
import { follow } from "../components/Spotify";

const initialState = {
	searchs: []
};

const followReducer = (action, state = initialState) => {
	if (!action) return state;
	switch (action.type) {
		case ACTION.TYPES.ADD_SEARCH:
			const increasedState = {
				searchs: [
					...state.searchs,
					{ textInput: action.textInput, items: action.items }
				]
			};
			return increasedState;
		default:
			return state;
	}
};

export default followReducer;
