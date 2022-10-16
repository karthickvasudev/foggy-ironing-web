import React from "react";

function ActionGear(props) {
  return (
    <>
      <div className="action-gear dropstart">
        <i
          className="fa fa-cog fa-lg "
          data-bs-toggle="dropdown"
          aria-hidden="true"
        ></i>
        <ul className="dropdown-menu">
          {props.map((prop, key) => (
            <li key={key}> {getActionItem(prop)} </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function getActionItem(props) {
  const { name, type, link, action } = props;
  if (type === "link") {
    return (
      <a className="dropdown-item action-link" type="button" href={link}>
        {name}
      </a>
    );
  }
  if (type === "action") {
    return (
      <button className="dropdown-item action-button" type="button" onClick={action}>
        {name}
      </button>
    );
  }
}

export default ActionGear;
