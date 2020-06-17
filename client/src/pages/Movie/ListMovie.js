import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import MovieGrid from "../../components/MovieGrid/MovieGrid";

import "../css/Movie.css";

import { connect } from "react-redux";
import { getFilmsAll } from "../../redux/actions/film";
import PropTypes from "prop-types";

const ListMovie = ({ getFilmsAll, films: { filmsAll, loading }, match }) => {
  useEffect(() => {
    getFilmsAll(100);
  }, [getFilmsAll]);

  let history = useHistory();

  const openAddMovie = () => {
    history.push("/add-movie");
  };

  return (
    <div className="list-movie">
      <div className="baris-category">
        <h1>List Movie</h1>
        <select name="" id="" className="select-category">
          <option value={""}>Category</option>
          <option value={"tv"}>TV Series</option>
          <option value={"movies"}>Movies</option>
        </select>
        <button className="btn-add-film" onClick={() => openAddMovie()}>
          Add Film
        </button>
      </div>
      <MovieGrid title="All Films" films={filmsAll} />
    </div>
  );
};

ListMovie.propTypes = {
  getFilmsAll: PropTypes.func.isRequired,
  films: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.film,
});

export default connect(mapStateToProps, { getFilmsAll })(ListMovie);
