import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
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
  auth: { user },
}) => {
  useEffect(() => {
    getDetailsFilm(match.params.id);
  }, [getDetailsFilm]);

  let history = useHistory();
  let role = "admin";

  const openAddEpisode = () => {
    history.push("/add-episode");
  };

  return (
    <>
      {filmDetails === null || loading ? (
        <>
          <p>Loading</p>
        </>
      ) : user.subscribe ? (
        <>
          <div style={{ marginTop: "70px" }}>
            <VideoThumbnail
              thumbnail={
                filmDetails.category.id == 1 ? tvThumbnail : moviesThumbnail
              }
              filmDetails
            />
            {role == "admin" && filmDetails.category.id == 1 ? (
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
              {filmDetails.category.id == 1 ? (
                <Episode name={filmDetails.title} />
              ) : (
                <Movie name={filmDetails.title} />
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            style={{ marginTop: "300px", color: "white", textAlign: "center" }}
          >
            <p>Anda belum daftar</p>
            <p
              className="pointer"
              onClick={() => {
                history.push("/payment");
              }}
            >
              Klik disini untuk mendaftar
            </p>
          </div>
        </>
      )}
    </>
  );
};

DetailMovie.propTypes = {
  getDetailsFilm: PropTypes.func.isRequired,
  film: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  film: state.film,
  auth: state.auth,
});

export default connect(mapStateToProps, { getDetailsFilm })(DetailMovie);
