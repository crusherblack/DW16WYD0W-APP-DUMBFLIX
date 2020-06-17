import React, { useEffect } from "react";

import HeroImage from "../components/HeroImage/HeroImage";
import MovieGrid from "../components/MovieGrid/MovieGrid";

import { heroImage1 } from "../fakedata/heroimage";

import { connect } from "react-redux";
import { getFilmsMovies, getFilmsTVSeries } from "../redux/actions/film";
import PropTypes from "prop-types";

const Home = ({
  getFilmsMovies,
  getFilmsTVSeries,
  films: { filmsMovies, filmsTVSeries, loading },
}) => {
  useEffect(() => {
    getFilmsMovies(6);
    getFilmsTVSeries(6);
  }, [getFilmsMovies, getFilmsTVSeries]);

  return loading ? (
    <>
      <p>KOSONG</p>
    </>
  ) : (
    <div>
      <HeroImage heroImage={heroImage1} />
      <MovieGrid title="TV Series" films={filmsTVSeries} />
      <MovieGrid title="Movies" films={filmsMovies} />
    </div>
  );
};

Home.propTypes = {
  getFilmsMovies: PropTypes.func.isRequired,
  getFilmsTVSeries: PropTypes.func.isRequired,
  films: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.film,
});

export default connect(mapStateToProps, { getFilmsMovies, getFilmsTVSeries })(
  Home
);
