import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsFilm } from "../redux/actions/film";
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
  }, [getDetailsFilm]);

  let history = useHistory();
  let role = "admin";

  const openAddEpisode = () => {
    history.push("/add-episode");
  };

  const { category } = filmDetails;

  return loading == true ? (
    <div style={{ top: "500px" }}>rendering...</div>
  ) : category.id ? (
    <div style={{ marginTop: "70px" }}>
      <VideoThumbnail
        thumbnail={category.id == 1 ? tvThumbnail : moviesThumbnail}
      />
      {role == "admin" && category.id == 1 ? (
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
        {category.id == 1 ? (
          <Episode name={filmDetails.title} />
        ) : (
          <Movie name={filmDetails.title} />
        )}
      </div>
    </div>
  ) : null;
};

DetailMovie.propTypes = {
  getDetailsFilm: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  film: state.film,
});

export default connect(mapStateToProps, { getDetailsFilm })(DetailMovie);
