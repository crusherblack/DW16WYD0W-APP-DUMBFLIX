import React, { useEffect } from "react";
import HeroImage from "../components/HeroImage/HeroImage";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { heroImage3 } from "../fakedata/heroimage";

import { connect } from "react-redux";
import { getFilmsMovies } from "../redux/actions/film";
import PropTypes from "prop-types";

const MoviesSection = ({ getFilmsMovies, films: { filmsMovies, loading } }) => {
  const limit = 12;

  useEffect(() => {
    getFilmsMovies(limit);
  }, [getFilmsMovies]);
  return loading ? (
    <>
      <p>KOSONG</p>
    </>
  ) : (
    <div>
      <HeroImage heroImage={heroImage3} />
      <MovieGrid title="Movies" films={filmsMovies} />
    </div>
  );
};

MoviesSection.propTypes = {
  getFilmsMovies: PropTypes.func.isRequired,
  films: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.film,
});

export default connect(mapStateToProps, { getFilmsMovies })(MoviesSection);
