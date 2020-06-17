import axios from 'axios';

import { GET_FILMS, ERROR } from './types';

//Get Films
export const getFilms = () => async (dispatch) => {
	try {
		let res = await axios.get('/api/v1/film?page=1&limit=6');

		dispatch({
			type: GET_FILMS,
			payload: res.data.data
		});
	} catch (err) {
		dispatch({
			type: ERROR,
			payload: 'error'
		});
	}
};
