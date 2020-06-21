import React, { useState } from 'react';
import './MovieDetails.css';
import episodeThumbnail from '../../img/videothumbnail/smallvideo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import Carousel from 'nuka-carousel';

const Episode = ({ name, episodes, handlePlayNow }) => {
	const [ index, setIndex ] = useState(0);
	const [ episode, setEpisode ] = useState(episodes[0].title);
	let imageIndex = `image-${index}`;

	return (
		<div className="episode-container">
			<div className="play-now">
				<div className="icon-play">
					<FontAwesomeIcon
						icon={faPlayCircle}
						onClick={() => document.getElementsByName(imageIndex)[0].click()}
					/>
				</div>
				<Carousel>
					{episodes.map((episode, index) => (
						<img
							style={{
								height: '300px',
								width: '500px'
							}}
							src={`http://localhost:5000/uploads/${episode.thumbnailFilm}`}
							alt="image"
							name={`image-${index}`}
							key={index}
							onClick={() => {
								setEpisode(episode.title);
								handlePlayNow(episode.linkFilm);
							}}
							onMouseEnter={() => {
								setIndex(index);
							}}
							onMouseLeave={() => {
								setIndex(index);
							}}
						/>
					))}
				</Carousel>
				<p>
					Playing Now: {name}-{episode}
				</p>
			</div>
		</div>
	);
};

export default Episode;
