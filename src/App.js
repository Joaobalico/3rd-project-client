import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import IsAnon from "./components/IsAnon/IsAnon";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import HomeLogged from "./pages/HomeLogged/HomeLogged";
import NewEvent from "./pages/NewEvent/NewEvent";
import EventDetails from "./pages/EventDetails/EventDetails";
import EventsToAttend from "./pages/EventsToAttend/EventsToAttend";
import Profile from "./pages/Profile/Profile";
import EditEvent from "./pages/EditEvent/EditEvent";

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <IsAnon>
              <HomePage />
            </IsAnon>
          }
        />

        <Route
          path="/home"
          element={
            <IsPrivate>
              <HomeLogged />
            </IsPrivate>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route />
        <Route path="/new-event" element={<NewEvent />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/edit-event/:eventId"} element={<EditEvent />} />
        <Route path="/event/:eventId" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
