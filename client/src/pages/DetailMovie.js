import React from "react";
import { movieList } from "../fakedata/movie";
import { useHistory } from "react-router-dom";

import VideoThumbnail from "../components/VideoThumbnail/VideoThumbnail";
import Description from "../components/MovieDetail/Description";
import Episode from "../components/MovieDetail/Episode";
import Movie from "../components/MovieDetail/Movie";
import "./css/DetailMovie.css";

import moviesThumbnail from "../img/videothumbnail/video2.png";
import tvThumbnail from "../img/videothumbnail/video1.png";

const DetailMovie = ({ match }) => {
  let history = useHistory();
  let role = "admin";
  const movie = movieList.filter((detail) => {
    return detail.id == match.params.id;
  });

  const openAddEpisode = () => {
    history.push("/add-episode");
  };

  return (
    <div style={{ marginTop: "70px" }}>
      <VideoThumbnail
        thumbnail={movie[0].type == "tv" ? tvThumbnail : moviesThumbnail}
      />
      {role == "admin" && movie[0].type == "tv" ? (
        <div
          style={{
            height: "50px",
            position: "relative",
          }}
        >
          <button
            className="btn-merah"
            style={{
              float: "right",
              width: "12em",
              top: "1em",
              right: "2em",
              marginBottom: "3em",
            }}
            onClick={() => openAddEpisode()}
          >
            Add Episode
          </button>
        </div>
      ) : null}

      <div className="details">
        <Description movie={movie[0]} />
        {movie[0].type == "tv" ? (
          <Episode name={movie[0].name} />
        ) : (
          <Movie name={movie[0].name} />
        )}
      </div>
    </div>
  );
};

export default DetailMovie;
