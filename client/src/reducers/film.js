import { GET_FILMS, ERROR } from '../actions/types';

const initialState = {
	loading: true,
	films: [],
	error: ''
};

export default function(state = initialState, actions) {
	const { type, payload } = actions;

	switch (type) {
		case GET_FILMS:
			return {
				...state,
				films: payload,
				loading: false
			};
		case ERROR:
			return {
				...state,
				error: payload,
				loading: false
			};
		default:
			return state;
	}
}
