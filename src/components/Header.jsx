import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-6 bg-blue-500 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/top">Top Stories</Link>
          </li>
          <li>
            <Link to="/new">Latest Stories</Link>
          </li>
          <li>
            <Link to="/best">Best Stories</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
