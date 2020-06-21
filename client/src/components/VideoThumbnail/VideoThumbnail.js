import React from 'react';

import ReactPlayer from 'react-player/lazy';

import './VideoThumbnail.css';
import thumbnail from '../../img/videothumbnail/playnow.png';

const VideoThumbnail = ({ playNow }) => {
	let type = '';

	return !playNow ? (
		<div
			style={{
				width: '100%',
				height: '500px',
				background: `linear-gradient(to bottom, rgba(0,0, 0, 0), black), url('${thumbnail}'), #1c1c1c`
			}}
			className="video-image"
		/>
	) : (
		<div className="video">
			<div className="player-wrapper ">
				<ReactPlayer
					className="react-player"
					url={playNow}
					width="100%"
					height="100%"
					controls={true}
					light={true}
				/>
			</div>
		</div>
	);
};

export default VideoThumbnail;
