import React, { useEffect } from "react";
import HeroImage from "../components/HeroImage/HeroImage";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { heroImage2 } from "../fakedata/heroimage";

import { connect } from "react-redux";
import { getFilmsTVSeries } from "../redux/actions/film";
import PropTypes from "prop-types";

const TVSection = ({ getFilmsTVSeries, films: { filmsTVSeries, loading } }) => {
  const limit = 12;

  useEffect(() => {
    getFilmsTVSeries(limit);
  }, [getFilmsTVSeries]);

  return loading ? (
    <>
      <p>KOSONG</p>
    </>
  ) : (
    <div>
      <HeroImage heroImage={heroImage2} />
      <MovieGrid title="TV Series" films={filmsTVSeries} />
    </div>
  );
};

TVSection.propTypes = {
  getFilmsTVSeries: PropTypes.func.isRequired,
  films: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.film,
});

export default connect(mapStateToProps, { getFilmsTVSeries })(TVSection);
