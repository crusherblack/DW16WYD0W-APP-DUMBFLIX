import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilms } from '../actions/film';

import HeroImage from '../components/HeroImage/HeroImage';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { movieList } from '../fakedata/movie';
import { heroImage1 } from '../fakedata/heroimage';

const Home = ({ getFilms, film: { loading, films } }) => {
	console.log(films, loading);

	useEffect(
		() => {
			getFilms();
		},
		[ getFilms ]
	);

	return (
		<div>
			<HeroImage heroImage={heroImage1} />
			<MovieGrid movieList={movieList} title="TV Series" filter={6} type="tv" />
			<MovieGrid movieList={movieList} title="Movies" filter={6} type="movies" />
		</div>
	);
};

Home.propTypes = {
	getFilms: PropTypes.func.isRequired,
	film: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	film: state.film
});

export default connect(mapStateToProps, { getFilms })(Home);
