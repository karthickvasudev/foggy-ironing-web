import React from "react";

function MoreOptions(props) {
  props = props.data;
  return (
    <div className="menu-options d-flex justify-content-end">
      <div className="dropstart">
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
        </button>
        <ul className="dropdown-menu">
          {props.map((prop, key) => getMenuItems(prop, key))}
        </ul>
      </div>
    </div>
  );
}

const getMenuItems = (prop, key) => {
  const { name, type, link, action } = prop;
  if (type === "link") {
    return (
      <li key={key}>
        <a className="dropdown-item" href={link}>
          {name}
        </a>
      </li>
    );
  }
  if (type === "action") {
    return (
      <li key={key} onClick={action}>
        <span className="dropdown-item">{name}</span>
      </li>
    );
  }
};
export default MoreOptions;
