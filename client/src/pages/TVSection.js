import React from "react";
import HeroImage from "../components/HeroImage/HeroImage";
import MovieGrid from "../components/MovieGrid/MovieGrid";
import { heroImage2 } from "../fakedata/heroimage";
import { movieList } from "../fakedata/movie";

const TVSection = () => {
  return (
    <div>
      <HeroImage heroImage={heroImage2} />
      <MovieGrid
        movieList={movieList}
        title="TV Series"
        filter={12}
        type="tv"
      />
    </div>
  );
};

export default TVSection;
