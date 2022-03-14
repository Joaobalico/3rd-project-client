import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/theme.context";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { loggedIn, user, logoutUser } = useContext(AuthContext);
  return (
    <nav className={"Navbar " + theme}>
      <NavLink to="/">
        <button style={{ cursor: "pointer" }}>Home</button>
      </NavLink>
      {loggedIn && (
        <>
          <NavLink to={`/new-event`}>
            <button style={{ cursor: "pointer" }}>Add New Event</button>
          </NavLink>
          <NavLink to={"/profile"}>
            <span style={{ fontSize: "20px" }}>
              <b>
                <u>{user.username}</u>
              </b>
            </span>
          </NavLink>
          <button onClick={logoutUser} style={{ cursor: "pointer" }}>
            Logout
          </button>
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

      <button onClick={toggleTheme} style={{ cursor: "pointer" }}>
        Change to {theme === "light" ? "dark" : "light"}{" "}
      </button>
    </nav>
  );
}

export default Navbar;
