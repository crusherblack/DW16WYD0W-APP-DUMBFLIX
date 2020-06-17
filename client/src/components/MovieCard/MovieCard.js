import React from "react";
import { useHistory } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie: { id, title, year, thumbnailFilm, category } }) => {
  let history = useHistory();

  return (
    <div>
      <img
        className="card"
        src={thumbnailFilm}
        onClick={() => history.push(`/detail/${id}`)}
        style={{ height: "auto" }}
      />
      <span className="movie-title">
        {title}-{category.name}
      </span>
      <span className="movie-year">{year}</span>
    </div>
  );
};

export default MovieCard;
