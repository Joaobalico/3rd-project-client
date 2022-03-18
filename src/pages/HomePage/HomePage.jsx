import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <section>
        <h1></h1>
        <img src="https://secure.meetupstatic.com/next/images/shared/online_events.svg?w=1080" alt="" />
        <h1></h1>
        <p></p>
      </section>
      <section>
        <h2></h2>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </section>
      <div>
        <Link to={"/signup"}>
          <button className="btn btn-success">Signup</button>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
