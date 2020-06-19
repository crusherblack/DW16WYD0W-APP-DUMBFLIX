import React from "react";

import ReactPlayer from "react-player/lazy";

import "./VideoThumbnail.css";

const VideoThumbnail = ({ thumbnail }) => {
  let type = "";

  return (
    <div className="video">
      <div className="player-wrapper ">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          width="100%"
          height="100%"
          controls={true}
          light={thumbnail}
        />
      </div>
    </div>
  );
};

export default VideoThumbnail;
