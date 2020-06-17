import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getDetailsFilm } from "../actions/film";
import PropTypes from "prop-types";

import VideoThumbnail from "../components/VideoThumbnail/VideoThumbnail";
import Description from "../components/MovieDetail/Description";
import Episode from "../components/MovieDetail/Episode";
import Movie from "../components/MovieDetail/Movie";
import "./css/DetailMovie.css";

import moviesThumbnail from "../img/videothumbnail/video2.png";
import tvThumbnail from "../img/videothumbnail/video1.png";

const DetailMovie = ({
  getDetailsFilm,
  match,
  film: { filmDetails, loading },
}) => {
  useEffect(() => {
    getDetailsFilm(match.params.id);
  }, []);

  let history = useHistory();
  let role = "admin";

  const openAddEpisode = () => {
    history.push("/add-episode");
  };

  return loading == true ? (
    <>kosong</>
  ) : (
    <div style={{ marginTop: "70px" }}>
      <VideoThumbnail
        thumbnail={
          filmDetails.category.id === 1 ? tvThumbnail : moviesThumbnail
        }
      />
      {role == "admin" && filmDetails.category.id == "tv" ? (
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
        <Description filmDetails={filmDetails} />
        {filmDetails.category.id === 1 ? (
          <Episode name={filmDetails.title} />
        ) : (
          <Movie name={filmDetails.title} />
        )}
      </div>
    </div>
  );
};

DetailMovie.propTypes = {
  getDetailsFilm: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  film: state.film,
});

export default connect(mapStateToProps, { getDetailsFilm })(DetailMovie);
