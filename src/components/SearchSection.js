import React, { useEffect, useState } from "react";

function SearchSection({ data, searchData }) {
  const { link } = data;
  return (
    <>
      <div className="search-section justify-content-center row">
        <span className="search-input col-md-8 col-9">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Search
            </span>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              onChange={(e) => {
                searchData(e.target.value);
              }}
            />
          </div>
        </span>
        <span className="create-btn col-md-1 col-3">
          <a className="btn btn-primary" href={link}>
            Create
          </a>
        </span>
      </div>
    </>
  );
}

export default SearchSection;
