import React, { useState } from 'react';
import './MovieDetails.css';
import episodeThumbnail from '../../img/videothumbnail/smallvideo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Carousel from 'nuka-carousel';

const Episode = ({ name, episodes, handlePlayNow }) => {
	return (
		<div className="episode-container">
			<div className="play-now">
				<Carousel height="300px" width="500px">
					{episodes.map((episode, index) => (
						<img
							src={`http://localhost:5000/uploads/${episode.thumbnailFilm}`}
							alt="image"
							key={index}
							onClick={() => handlePlayNow(episode.linkFilm)}
						/>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Episode;
