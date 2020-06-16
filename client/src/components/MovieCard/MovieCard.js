import React from "react";
import { useHistory } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie: { id, name, year, img } }) => {
  let history = useHistory();

  return (
    <div>
      <img
        className="card"
        src={img}
        onClick={() => history.push(`/detail/${id}`)}
        style={{ height: "auto" }}
      />
      <span className="movie-title">{name}</span>
      <span className="movie-year">{year}</span>
    </div>
  );
};

export default MovieCard;
