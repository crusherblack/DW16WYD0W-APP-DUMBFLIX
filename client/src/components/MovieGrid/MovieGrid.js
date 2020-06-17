import React, { useEffect } from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './MovieGrid.css';
import { connect } from 'react-redux';
import { getFilms } from '../../actions/film';
import PropTypes from 'prop-types';

const MovieGrid = ({
	getFilms,
	film: { loading, films },
	title,
	limit,
	type: categoryTypeId
}) => {
	useEffect(
		() => {
			getFilms(limit, categoryTypeId);
		},
		[ getFilms ]
	);

	const list = films.map((movie) => <MovieCard movie={movie} key={movie.id} />);

	return (
		<div className="movie-grid">
			<div className="movie-type">
				<label>{title}</label>
			</div>
			<div className="movie-list">{list}</div>
		</div>
	);
};

MovieGrid.propTypes = {
	getFilms: PropTypes.func.isRequired,
	film: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	film: state.film
});

export default connect(mapStateToProps, { getFilms })(MovieGrid);
