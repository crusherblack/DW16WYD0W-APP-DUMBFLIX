import React from 'react';
import { useHistory } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie: { id, title, year, thumbnailFilm } }) => {
	let history = useHistory();

	return (
		<div>
			<img
				className="card"
				src="https://lh3.googleusercontent.com/TBRwjS_qfJCSj1m7zZB93FnpJM5fSpMA_wUlFDLxWAb45T9RmwBvQd5cWR5viJJOhkI=s180-rw"
				onClick={() => history.push(`/detail/${id}`)}
				style={{ height: 'auto' }}
			/>
			<span className="movie-title">{title}</span>
			<span className="movie-year">{year}</span>
		</div>
	);
};

export default MovieCard;
