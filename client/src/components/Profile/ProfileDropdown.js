import React from "react";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMoneyCheck,
  faEdit,
  faPowerOff,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const ProfileDropdown = ({ showProfileDropdown, handleLogout }) => {
  let history = useHistory();

  const openProfile = () => {
    history.push(`/profile`);
    showProfileDropdown();
  };

  const openPayment = () => {
    history.push(`/payment`);
    showProfileDropdown();
  };

  const openTranscation = () => {
    history.push(`/transaction`);
    showProfileDropdown();
  };

  const openListMovie = () => {
    history.push(`/movie-list`);
    showProfileDropdown();
  };

  const setLogout = () => {
    handleLogout();
    showProfileDropdown();
  };

  return (
    <div>
      <div className="profile-square">
        <div className="profile-arrow" />
        <div className="profile-dropdown-group">
          <div className="profile-dropdown-icon">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
          <div className="profile-dropdown-link">
            <span className="submenu" onClick={() => openProfile()}>
              Profile
            </span>
          </div>
        </div>

        <div className="profile-dropdown-group">
          <div className="profile-dropdown-icon">
            <FontAwesomeIcon icon={faMoneyCheck} className="icon" />
          </div>
          <div className="profile-dropdown-link">
            <span className="submenu" onClick={() => openPayment()}>
              Pay
            </span>
          </div>
        </div>

        <div className="profile-dropdown-group">
          <div className="profile-dropdown-icon">
            <FontAwesomeIcon icon={faEdit} className="icon" />
          </div>
          <div className="profile-dropdown-link">
            <span className="submenu" onClick={() => openTranscation()}>
              Transcation
            </span>
          </div>
        </div>

        <div className="profile-dropdown-group">
          <div className="profile-dropdown-icon">
            <FontAwesomeIcon icon={faVideo} className="icon" />
          </div>
          <div className="profile-dropdown-link">
            <span className="submenu" onClick={() => openListMovie()}>
              Film
            </span>
          </div>
        </div>

        <hr style={{ marginBottom: "18px" }} />
        <div className="profile-dropdown-group">
          <div className="profile-dropdown-icon">
            <FontAwesomeIcon icon={faPowerOff} className="icon" />
          </div>
          <div className="profile-dropdown-link">
            <span className="submenu" onClick={() => setLogout()}>
              LogOut
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
