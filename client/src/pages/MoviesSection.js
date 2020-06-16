import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import MovieGrid from '../components/MovieGrid/MovieGrid';
import { heroImage3 } from '../fakedata/heroimage';
import { movieList } from '../fakedata/movie';

const MoviesSection = () => {
	return (
		<div>
			<HeroImage heroImage={heroImage3} />
			<MovieGrid movieList={movieList} title="Movies" filter={12} type="movies" />
		</div>
	);
};

export default MoviesSection;
