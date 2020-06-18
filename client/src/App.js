import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ModalLogin from "./components/Login/Login";
import ModalRegister from "./components/Register/Register";
import Home from "./pages/Home";
import TVSection from "./pages/TVSection";
import MoviesSection from "./pages/MoviesSection";
import DetailMovie from "./pages/DetailMovie";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import Transaction from "./pages/IncomingTransaction";
import ListMovie from "./pages/Movie/ListMovie";
import AddMovie from "./pages/Movie/AddMovie";
import AddEpisode from "./pages/Episode";

import PrivateRoute from "./components/Routing/PrivateRoute";
import NotFound from "./components/404/NotFound";

import ScrollToTop from "./components/utils/ScrollToTop";

import { loadUser } from "./redux/actions/auth";
import { setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  const [isLogin, setLogin] = useState(false);

  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

  const showModalLogin = () => {
    setModalLogin(!modalLogin);
    setModalRegister(false);
  };

  const showModalRegister = () => {
    setModalRegister(!modalRegister);
    setModalLogin(false);
  };

  return (
    <Provider store={store}>
      <div className="app">
        <Router>
          <Navbar
            showModalLogin={showModalLogin}
            showModalRegister={showModalRegister}
          />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/tv-series" component={TVSection} />
              <Route exact path="/movies" component={MoviesSection} />
              <Route exact path="/detail/:id" component={DetailMovie} />
              <PrivateRoute
                exact
                path="/profile"
                component={Profile}
                isLogin={isLogin}
              />
              <PrivateRoute
                exact
                path="/payment"
                component={Payment}
                isLogin={isLogin}
              />
              <PrivateRoute
                exact
                path="/transaction"
                component={Transaction}
                isLogin={isLogin}
              />
              <PrivateRoute
                exact
                path="/movie-list"
                component={ListMovie}
                isLogin={isLogin}
              />
              <PrivateRoute
                exact
                path="/add-movie"
                component={AddMovie}
                isLogin={isLogin}
              />
              <PrivateRoute
                exact
                path="/add-episode"
                component={AddEpisode}
                isLogin={isLogin}
              />
              <Route component={NotFound} />
            </Switch>
          </ScrollToTop>

          {modalLogin && (
            <ModalLogin
              showModalLogin={showModalLogin}
              modalLogin={modalLogin}
            />
          )}
          {modalRegister && (
            <ModalRegister
              showModalRegister={showModalRegister}
              modalRegister={modalRegister}
            />
          )}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
