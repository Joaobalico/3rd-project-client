import React, { useContext } from "react";

import { NavLink, Link } from "react-router-dom";

import { ThemeContext } from "../../context/theme.context";

import { AuthContext } from "../../context/auth.context";

import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item key="0">
      <Link to={"/profile"}>
        Profile
      </Link>
    </Menu.Item>
    <Menu.Item key="1">
      <Link to={"/"}>
        2nd menu item
      </Link>
    </Menu.Item>
  </Menu>
);

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { loggedIn, user, logoutUser } = useContext(AuthContext);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#77002e", width: "100vw" }}
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
          <li className="nav-item active">
            <NavLink to={"/"} className="nav-link">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>

          {loggedIn && (
            <>
              <Dropdown overlay={menu}>
                <Link
                  to={"/"}
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Joao <DownOutlined />
                </Link>
              </Dropdown>
              <li className="nav-item">
                <NavLink to={`/new-event`} className="nav-link">
                  Add Event
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to={"/profile"}
                  className="btn btn-primary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {user.username}
                </NavLink>

                <div
                  className="dropdown-menu"
                  aria-labelledby="DropdownMenuButton"
                >
                  <NavLink className="dropdown-item" to={"/profile"}>
                    Profile
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <button
                  onClick={logoutUser}
                  style={{ cursor: "pointer" }}
                  className="btn btn-danger"
                >
                  Logout
                </button>
              </li>
            </>
          )}

          {!loggedIn && (
            <>
              <NavLink to="/signup">
                <button style={{ cursor: "pointer" }}>Signup</button>
              </NavLink>

              <NavLink to="/login">
                <button style={{ cursor: "pointer" }}>Login</button>
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
