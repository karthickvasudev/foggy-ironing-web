import React from "react";

function SearchSection(props) {
  const { link } = props;
  return (
    <>
      <div className="search-section justify-content-center row">
        <span className="search-input col-8">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Search
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
        </span>
        <span className="create-btn col-1">
          <a className="btn btn-primary" href={link}>
            Create
          </a>
        </span>
      </div>
    </>
  );
}

export default SearchSection;
