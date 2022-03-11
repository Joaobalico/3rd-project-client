import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProviderWrapper } from "./context/theme.context";
import { AuthProviderWrapper } from "./context/auth.context";

ReactDOM.render(
  <React.StrictMode>
    <AuthProviderWrapper>
      <ThemeProviderWrapper>
        <Router>
          <App />
        </Router>
      </ThemeProviderWrapper>
    </AuthProviderWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);