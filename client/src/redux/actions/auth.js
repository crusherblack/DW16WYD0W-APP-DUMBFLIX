import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";

import { API, setAuthToken } from "../../config/api";
//Load User

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await API.get("/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register User
export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await API.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    //ambil data user
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Login User
export const handleLogin = (email, password, showModalLogin) => async (
  dispatch
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await API.post("/login", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    //ambil data user
    dispatch(loadUser());
    showModalLogin(); //close modal login
  } catch (err) {
    console.log(err.response.data.error.message);

    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.error.message,
    });
  }
};

//Log out / Clear Profile
export const handleLogout = () => (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  dispatch({
    type: LOGOUT,
  });
};
