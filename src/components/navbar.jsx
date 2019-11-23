import React from "react";

function navbar(props) {
  return (
    <div>
      <nav
        className="navbar navbar-dark navbar-expand-lg bg-dark"
        style={{
          backgroundColor: "#2C3531",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px"
        }}
      >
        <a className="navbar-brand" href="#">
          MiniList
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a
                href="#"
                className="nav-link"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                About <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="https://github.com/daqch/todolist">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default navbar;
