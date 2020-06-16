import React from 'react';
import { useHistory } from 'react-router-dom';

import MovieGrid from '../../components/MovieGrid/MovieGrid';

import '../css/Movie.css';
import { movieList } from '../../fakedata/movie';

const ListMovie = ({}) => {
	let history = useHistory();

	const openAddMovie = () => {
		history.push('/add-movie');
	};

	return (
		<div className="list-movie">
			<div className="baris-category">
				<h1>List Movie</h1>
				<select name="" id="" className="select-category">
					<option value={''}>Category</option>
					<option value={'tv'}>TV Series</option>
					<option value={'movies'}>Movies</option>
				</select>
				<button className="btn-add-film" onClick={() => openAddMovie()}>
					Add Film
				</button>
			</div>
			<MovieGrid movieList={movieList} title="TV Series" filter={12} type="tv" />
		</div>
	);
};

export default ListMovie;
