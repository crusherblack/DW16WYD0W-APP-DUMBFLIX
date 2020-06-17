import axios from "axios";

import {
  GET_FILMS_ALL,
  GET_FILMS_MOVIES,
  GET_FILMS_TVSERIES,
  GET_FILMS_DETAILS,
  LOADING_TRUE,
  ERROR,
} from "./types";

//Get All Films
export const getFilmsAll = (limit) => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
  try {
    let res = await axios.get(`/api/v1/film?page=1&limit=${limit}`);

    dispatch({
      type: GET_FILMS_ALL,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "error",
    });
  }
};

//Get Films Movies
export const getFilmsMovies = (limit) => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
  try {
    let res = await axios.get(
      `/api/v1/film?page=1&limit=${limit}&categoryId=2`
    );

    dispatch({
      type: GET_FILMS_MOVIES,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "error",
    });
  }
};

//Get Films TVSeries
export const getFilmsTVSeries = (limit) => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
  try {
    let res = await axios.get(
      `/api/v1/film?page=1&limit=${limit}&categoryId=1`
    );

    dispatch({
      type: GET_FILMS_TVSERIES,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "error",
    });
  }
};

export const getDetailsFilm = (id) => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
  try {
    let res = await axios.get(`/api/v1/film/${id}`);

    dispatch({
      type: GET_FILMS_DETAILS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: "error",
    });
  }
};
