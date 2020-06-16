import React from 'react';
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton, ControlBar } from 'video-react';
import './VideoThumbnail.css';
import YouTube from '@u-wave/react-youtube';

const VideoThumbnail = ({ thumbnail }) => {
	let type = '';

	return (
		<div className="video">
			{type == 'youtube' ? (
				<div
					style={{
						height: '536',
						width: '100%'
					}}
				>
					<YouTube
						video="ndl1W4ltcmg"
						width="100%"
						height={536}
						controls={false}
						autoplay
					/>
				</div>
			) : (
				<Player
					poster={thumbnail}
					height={536}
					width="100%"
					fluid={false}
					autoPlay={false}
				>
					<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
					<BigPlayButton position="center" />
					<ControlBar autoHide={true} />
				</Player>
			)}
		</div>
	);
};

export default VideoThumbnail;
