import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <section>
        <h1 style={{ textAlign: "center" }}>
          Welcome to <b>Iron Events!</b>{" "}
        </h1>
        <img
          src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080"
          alt=""
          width="600"
          style={{ float: "right" }}
        />
        <h3>What's "Iron Events"?</h3>
        <p>
          A website where you can <b>create</b> or <b>attend</b> to events and{" "}
          <i>meet</i> new people who share your same <i>interests</i>.{" "}
        </p>
      </section>
      <section>
        <Link to={"/signup"}>
          <button
            style={{
              cursor: "pointer",
              marginRight: "1rem",
              backgroundColor: "#008294",
            }}
            className="btn btn-primary"
          >
            Join
          </button>
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
