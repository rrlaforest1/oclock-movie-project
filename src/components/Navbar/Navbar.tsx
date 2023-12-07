import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4">
        <ul className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row">
          <li className="mb-4 lg:mb-0 lg:pr-2">
            <NavLink
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2">
            <NavLink
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              to="/releases"
            >
              Dernières Sorties
            </NavLink>
          </li>
          <li className="mb-4 lg:mb-0 lg:pr-2">
            <NavLink
              className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
              to="/quizz"
            >
              Quizz
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
