import React, { useState } from "react";
import { Link } from "react-router-dom";
const Welcome = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`container ${isDarkTheme ? "dark" : "light"}`}>
      {/* Navigation Section */}
      <section className="nav flex">
        <h2>Shah Lucky</h2>
        <nav>
          <ul className="nav-items flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="hero flex">
        <h1>Software Engineer</h1>
        <div className="tagline flex">
          <p>Hi there</p>
          <button onClick={toggleTheme}>
            {isDarkTheme ? <span>🌙</span> : <span>⛅</span>}
          </button>
        </div>
      </section>
      <div className="flex justify-center gap-4 mt-8">
        <Link to="/create">
          <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200">
            Find All Users
          </button>
        </Link>
        <Link to="/createuser">
          <button className="bg-green-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200">
            Add User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
