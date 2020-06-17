import React from "react";
import "./MovieDetails.css";

const Description = ({
  filmDetails: { title, year, thumbnailFilm, category, description },
}) => {
  return (
    <div className="description-container">
      <div className="movie">
        <div className="movie-image">
          <img src={thumbnailFilm} alt={title} />
        </div>
        <div className="movie-description">
          <h1>{title}</h1>
          <label className="year">{year}</label>
          <label className="tipe">
            {category.id === 1 ? "TV Series" : "Movies"}
          </label>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
