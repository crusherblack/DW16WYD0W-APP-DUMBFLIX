import React, { useState } from "react";

import Modal from "../Modal/Modal";

const Register = ({ showModalRegister, modalRegister }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
    gender: "",
    phone: "",
    address: "",
  });

  const { email, password, fullname, gender, phone, address } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      {modalRegister ? (
        <div onClick={() => showModalRegister()} className="back-drop" />
      ) : null}

      <Modal
        className="modal"
        show={modalRegister}
        close={() => showModalRegister()}
      >
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 style={{ marginBottom: "40px" }}>REGISTER</h1>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Email"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Password"
              value={password}
              name="password"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Fullname"
              value={fullname}
              name="fullname"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Gender"
              value={gender}
              name="gender"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Phone"
              value={phone}
              name="phone"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Address"
              value={address}
              name="address"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group" style={{ marginTop: "50px" }}>
            <button className="button-register">Register</button>
          </div>
        </form>
        <p style={{ color: "#B1B1B1", fontSize: "18px" }}>
          Already have an account ? Klik{" "}
          <span style={{ fontWeight: "900", cursor: "pointer" }}>Here</span>
        </p>
      </Modal>
    </div>
  );
};

export default Register;
