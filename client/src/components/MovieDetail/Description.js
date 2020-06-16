import React from 'react';
import './MovieDetails.css';

const Description = ({ movie: { img, year, type, name } }) => {
	return (
		<div className="description-container">
			<div className="movie">
				<div className="movie-image">
					<img src={img} alt={name} />
				</div>
				<div className="movie-description">
					<h1>{name}</h1>
					<label className="year">{year}</label>
					<label className="tipe">
						{type == 'tv' ? 'TV Series' : 'Movies'}
					</label>
					<p className="description">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has
						survived not only five centuries, but also the leap into
						electronic typesetting, remaining essentially unchanged.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Description;
