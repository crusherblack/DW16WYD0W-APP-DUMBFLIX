import React, { useRef, useState } from "react";
import "../css/Movie.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import AddEpisode from "../../components/AddEpisode/AddEpisode";

const AddMovie = () => {
  const [categoryType, setCategoryType] = useState("");

  const inputFileRef = useRef(null);

  const onBtnClick = () => {
    inputFileRef.current.click();
  };

  return (
    <div className="container">
      <div className="list-movie">
        <h2>Add Film</h2>
        <br />
        <div className="satuline">
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Title"
              style={{
                width: "160%",
              }}
            />
          </div>
          <div className="form-group">
            <button
              onClick={onBtnClick}
              className="btn-grey"
              style={{
                width: "40%",
                height: "50px",
                fontSize: "18px",
                textAlign: "left",
                float: "right",
              }}
            >
              Attach Thumbnail{" "}
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
            <input type="file" ref={inputFileRef} style={{ display: "none" }} />
          </div>
        </div>
        <div className="form-group">
          <input type="text" className="custom-input" placeholder="Year" />
        </div>
        <div className="form-group">
          <select
            name="category"
            className="custom-select"
            onChange={(e) => {
              setCategoryType(e.target.value);
            }}
          >
            <option value="">Category</option>
            <option value="tv">TV Series</option>
            <option value="movie">Movie</option>
          </select>
        </div>
        <div className="form-group">
          <textarea type="text" className="custom-textarea" />
        </div>
        {categoryType === "movie" ? (
          <div className="form-group">
            <input
              type="text"
              className="custom-input"
              placeholder="Url / Link Film"
            />
          </div>
        ) : null}

        {categoryType === "tv" ? <AddEpisode /> : null}

        <div className="form-group">
          <button
            className="btn-merah"
            style={{ width: "10em", float: "right", position: "relative" }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
