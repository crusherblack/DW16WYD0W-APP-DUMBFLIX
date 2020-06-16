import React, { useState } from 'react';
import './MovieDetails.css';
import episodeThumbnail from '../../img/videothumbnail/smallvideo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Episode = ({ name }) => {
	const [ imageIndex, setImageIndex ] = useState(0);

	return (
		<div className="episode-container">
			<div className="play-now">
				<img src={episodeThumbnail} alt="episode" className="mini-img" />
				<label className="img-play-now">In Play Now</label>
				<p className="small-desc">{name}: Episode 1</p>
				<div className="arrow-right">
					<FontAwesomeIcon icon={faChevronRight} />
				</div>
			</div>
		</div>
	);
};

export default Episode;
