import React, { useContext } from "react";

import { NavLink } from "react-router-dom";

import { ThemeContext } from "../../context/theme.context";

import { AuthContext } from "../../context/auth.context";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#a234c6", width: "100vw" }}
    >
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li
            className="nav-item active"
            style={{ display: "flex", marginRight: "0.5rem" }}
          >
            <NavLink to={"/"} className="nav-link">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          {loggedIn && (
            <>
              <li className="nav-item active">
                <NavLink to={`/new-event`} className="nav-link">
                  Add Event
                </NavLink>
              </li>

              <li className="nav-item dropdown">
                <NavLink to={"/profile"}>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "1rem" }}
                  >
                    Profile
                  </button>
                </NavLink>

                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <NavLink className="dropdown-item" to={"/profile"}>
                    Profile
                  </NavLink>
                </div>
              </li>

              <li className="nav-item">
                <NavLink to={"/"}>
                  <button
                    onClick={logoutUser}
                    style={{ cursor: "pointer" }}
                    className="btn btn-danger"
                  >
                    Logout
                  </button>
                </NavLink>
              </li>
            </>
          )}

          {!loggedIn && (
            <>
              <NavLink to="/signup">
                <button
                  style={{
                    cursor: "pointer",
                    marginRight: "1rem",
                    backgroundColor: "#008294",
                  }}
                  className="btn btn-primary"
                >
                  Signup
                </button>
              </NavLink>

              <NavLink to="/login">
                <button
                  style={{ cursor: "pointer" }}
                  className="btn btn-success"
                >
                  Login
                </button>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
