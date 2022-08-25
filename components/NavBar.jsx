import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";

export default function NavBar() {
  return (
    // make navbar Glassmorphism
    <nav className=" max-w-5xl realative px-2 sm:px-4 py-2.5 fixed w-full z-40 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-140 ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Slide top>
          <Link href="/">
            <a className="flex items-center">
              <span className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-3xl">
                Dev
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                  News
                </span>
              </span>
            </a>
          </Link>
        </Slide>
        <div className="flex md:order-2">
          <Link href="https://t.me/DevBudbot" passHref>
            <a target="_blank">
              <button
                type="button"
                className="mt-1 md:mt-0 px-2 py-1 text-violet-400 hover:animate-pulse hover:underline decoration-wavy underline-offset-4 "
              >
                Telegram Bot
              </button>
            </a>
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
            onClick={() => {
              const navbar = document.getElementById("navbar-sticky");
              navbar.classList.toggle("hidden");
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 "
          id="navbar-sticky"
        >
          <Slide top cascade>
            <ul
              className="flex flex-col p-4 mt-4 rounded-lg text-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 "
              type="button"
              onClick={() => {
                const navbar = document.getElementById("navbar-sticky");
                navbar.classList.toggle("hidden");
              }}
            >
              <li>
                <Link href="/">
                  <a
                    className="block py-2 pr-4 pl-3 md:p-0 rounded hover:underline decoration-pink-500 decoration-wavy underline-offset-4 hover:text-xl ease-in-out duration-300"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/news">
                  <a className="block py-2 pr-4 pl-3 md:p-0 rounded hover:underline decoration-pink-500 decoration-wavy underline-offset-4 hover:text-xl ease-in-out duration-300">
                    News
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/sub">
                  <a className="block py-2 pr-4 pl-3 md:p-0 rounded hover:underline decoration-pink-500 decoration-wavy underline-offset-4 hover:text-xl ease-in-out duration-300">
                    Submit Urls
                  </a>
                </Link>
              </li>
            </ul>
          </Slide>
        </div>
      </div>
    </nav>
  );
}
