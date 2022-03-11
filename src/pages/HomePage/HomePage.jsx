import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <section>
      <h1>Homepage</h1>
        <img src="" alt="" />
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
        <button><Link to={"/signup"}>Signup</Link></button>
      </div>
    </main>
  );
};

export default HomePage;
