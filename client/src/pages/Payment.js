import React, { useRef, useState } from "react";
import "./css/Payment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { API } from "../config/api";

const Payment = () => {
  const [formData, setFormData] = useState({
    accountNumber: "",
  });

  const [previewSrc, setPreviewSrc] = useState(null);
  const [file, setFile] = useState(null);

  const { accountNumber } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onChangeFiles = (e) => {
    let fileInfo = e.target.files[0];
    setFile(fileInfo);
    let reader = new FileReader();

    if (e.target.files.length === 0) {
      return;
    }

    reader.onloadend = (e) => {
      setPreviewSrc([reader.result]);
    };

    reader.readAsDataURL(fileInfo);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    uploadBukti();
  };

  const uploadBukti = async () => {
    try {
      const formData = new FormData();

      formData.append("startDate", "06-30-2020");
      formData.append("dueDate", "06-30-2020");
      formData.append("userId", 11);
      formData.append("attache", file);
      formData.append("status", "Pending");

      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const res = await API.post("/transaction", formData, config);
      console.log(res);
    } catch (e) {
      console.log(e.response.data);
    }
  };

  const inputFileRef = useRef(null);

  const onBtnClick = () => {
    inputFileRef.current.click();
  };

  return (
    <div className="payment-container">
      <div className="payment-details">
        <div className="payment-desc">
          <h1
            style={{
              marginBottom: "60px",
            }}
          >
            Premium
          </h1>
          <p>
            Bayar sekarang dan nikmati streaming film-film yang kekinian dari{" "}
            <span className="red">DUMBFLIX </span> <br />{" "}
            <span className="red">DUMBFLIX </span> : 0981312323
          </p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-payment">
              <div className="form-group">
                <input
                  type="text"
                  name="accountNumber"
                  value={accountNumber}
                  className="custom-input"
                  placeholder="Input Your Account Number"
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group">
                <button
                  type="button"
                  onClick={onBtnClick}
                  className="btn-light"
                  style={{
                    width: "100%",
                    height: "50px",
                    fontSize: "18px",
                    textAlign: "left",
                    padding: "0 10px",
                  }}
                >
                  Attach proof of transfer{" "}
                  <div
                    style={{
                      float: "right",
                      display: "inline",
                      fontSize: "20px",
                    }}
                  >
                    <FontAwesomeIcon icon={faPaperclip} />
                  </div>
                </button>
                <input
                  onChange={(e) => onChangeFiles(e)}
                  type="file"
                  name="file"
                  ref={inputFileRef}
                  style={{ display: "none" }}
                />
                <img src={previewSrc} className="preview-src" />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="button"
                  style={{
                    height: "35px",
                    fontSize: "16px",
                    marginTop: "25px",
                  }}
                >
                  Kirim
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
