import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";

export default function NavBar() {
  const { user } = useUser();
  const [profile, setProfile] = useState(false);
  return (
    // make navbar Glassmorphism
    <nav className=" max-w-5xl realative px-2 sm:px-4 py-2.5 fixed h-20 w-full z-40 bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-95 ">
      {profile && (
        <Slide top>
          <div className="p-5 absolute w-full h-screen grid place-items-center">
            <div className="w-full max-w-sm dark:bg-zinc-900 bg-slate-50 rounded-lg border border-gray-200 shadow-md  dark:border-gray-800">
              <div className="flex justify-end px-4 pt-4">
                <button
                  id="dropdownButton"
                  data-dropdown-toggle="dropdown"
                  onClick={() => {
                    setProfile(false);
                  }}
                  className="inline-block text-gray-500 dark:text-red-600 hover:text-red-600  rounded-lg text-sm p-1.5"
                  type="button"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                  >
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 10.293l5.293-5.293.707.707-5.293 5.293 5.293 5.293-.707.707-5.293-5.293-5.293 5.293-.707-.707 5.293-5.293-5.293-5.293.707-.707 5.293 5.293z" />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col items-center pb-10">
                <Image
                  className="w-24 h-24 rounded-full shadow-lg"
                  src={user.picture}
                  alt="User Pofile"
                  width={96}
                  height={96}
                />
                <h5 className="mb-1 mt-2 text-xl font-medium text-gray-900 dark:text-white">
                  {user.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {user.email}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <Link href="/api/auth/logout">
                    <a>
                      <button
                        type="button"
                        className="mt-1 md:mt-0 px-3 py-1 flex gap-2 border outline-double border-violet-500 rounded-md text-violet-400 hover:animate-pulse hover:underline decoration-wavy underline-offset-4"
                      >
                        Logout
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M16 9v-4l8 7-8 7v-4h-8v-6h8zm-16-7v20h14v-2h-12v-16h12v-2h-14z" />
                          </svg>
                        </span>
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      )}
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
          <div>
            {user ? (
              <div className="flex items-center justify-center space-x-4 mr-2 flex-col w-full mt-1">
                <Image
                  width={36}
                  height={36}
                  onClick={() => {
                    if (profile == false) {
                      setProfile(true);
                    } else {
                      setProfile(false);
                    }
                  }}
                  className="w-8 h-8 rounded-full z-20 cursor-pointer"
                  src={user.picture}
                  alt="User Profile"
                />
              </div>
            ) : (
              <Slide top>
                <Link href="/api/auth/login">
                  <a>
                    <button
                      type="button"
                      className="mt-1 md:mt-0 px-2 py-1 border outline-double border-zinc-800 dark:border-violet-500 rounded-md text-zinc-900 dark:text-violet-400 hover:animate-pulse hover:underline decoration-wavy underline-offset-4"
                    >
                      Login
                    </button>
                  </a>
                </Link>
              </Slide>
            )}
          </div>

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
              className="gap-y-2 items-center flex flex-col p-4 mt-4 rounded-lg text-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 "
              type="button"
              onClick={() => {
                const navbar = document.getElementById("navbar-sticky");
                navbar.classList.toggle("hidden");
              }}
            >
              <li className="w-24 hover:underline decoration-wavy decoration-pink-500 underline-offset-2 ">
                <Link href="/">
                  <a
                    className="text-base font-semibold dark:text-gray-300 hover:text-2xl ease-in-out duration-300"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="w-24 hover:underline decoration-wavy decoration-pink-500 underline-offset-2">
                <Link href="/news">
                  <a className="text-base font-semibold dark:text-gray-300 ease-in-out duration-300 hover:text-2xl">
                    News
                  </a>
                </Link>
              </li>
              <li className="w-24 hover:underline decoration-wavy decoration-pink-500 underline-offset-2">
                <Link href="/sub">
                  <a className="text-base font-semibold dark:text-gray-300 ease-in-out duration-300 hover:text-2xl">
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
