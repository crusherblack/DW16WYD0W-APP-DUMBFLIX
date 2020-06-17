import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFilms } from '../actions/film';

import HeroImage from '../components/HeroImage/HeroImage';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { movieList } from '../fakedata/movie';
import { heroImage1 } from '../fakedata/heroimage';

const Home = ({ getFilms, film: { loading, films } }) => {
	useEffect(
		() => {
			getFilms();
		},
		[ getFilms ]
	);

	return (
		<div>
			<HeroImage heroImage={heroImage1} />
			<MovieGrid movieList={films} title="TV Series" filter={6} type="TV Shows" />
			<MovieGrid movieList={films} title="Movies" filter={6} type="Movies" />
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
