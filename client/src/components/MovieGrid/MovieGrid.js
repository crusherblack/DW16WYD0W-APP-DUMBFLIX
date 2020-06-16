import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.css';

const MovieGrid = ({ movieList, title, filter, type }) => {
	const amount = filter - 1;

	const moviesType = movieList.filter((movie) => movie.type == type);
	const moviesTop = moviesType.filter((movie, index) => index <= amount);

	const list = moviesTop.map((movie) => <MovieCard movie={movie} key={movie.id} />);

	return (
		<div className="movie-grid">
			<div className="movie-type">
				<label>{title}</label>
			</div>
			<div className="movie-list">{list}</div>
		</div>
	);
};

export default MovieGrid;
