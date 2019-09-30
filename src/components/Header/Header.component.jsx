import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link className="navbar-brand" to="/">
      Todo App
    </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <Link class="nav-link" to="/">
            Home <span class="sr-only">(current)</span>
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/addtodo">
            Add Todo
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
