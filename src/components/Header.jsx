import React from "react";

const Header = () => {
  return (
    <header className="p-6 bg-blue-500 text-white">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Top Stories</a>
          </li>
          <li>
            <a href="#">New Stories</a>
          </li>
          <li>
            <a href="#">Best Stories</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
