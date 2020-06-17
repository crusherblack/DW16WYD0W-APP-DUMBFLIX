import React from 'react';

import HeroImage from '../components/HeroImage/HeroImage';
import MovieGrid from '../components/MovieGrid/MovieGrid';

import { heroImage1 } from '../fakedata/heroimage';

const Home = () => {
	return (
		<div>
			<HeroImage heroImage={heroImage1} />
			<MovieGrid title="TV Series" limit={6} type={1} />{' '}
			{/*Berdasarkan id category, Krn category cuma 2 baiknya sih static aja, tp krn dinamis terpaksa gini*/}
			<MovieGrid title="Movies" limit={6} type={2} />
		</div>
	);
};

export default Home;
