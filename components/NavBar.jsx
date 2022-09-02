import React from "react";
import Link from "next/link";
import Slide from "react-reveal/Slide";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import cn from "clsx";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [opened, setOpened] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { user } = useUser();
  const [profile, setProfile] = useState(false);
  return (
    // make navbar Glassmorphism
    <nav className=" max-w-5xl realative px-2 sm:px-4 py-2.5 fixed h-18 w-full z-40 bg-clip-padding backdrop-filter backdrop-blur-lg  bg-opacity-95 ">
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
            <a
              id="header"
              className="ml-2 md:ml-0 flex items-center font-ubuntu font-semibold text-2xl text-yellow-500"
            >
              DevNews
            </a>
          </Link>
        </Slide>
        <div className="flex md:order-2 gap-3 md:gap-4">
          <Slide top>
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="invisible md:visible mt-1 md:mt-0 w-9 h-9 bg-gray-200 rounded-lg dark:bg-zinc-800 flex items-center justify-center transition-all"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 text-gray-800 dark:text-gray-200"
                >
                  {resolvedTheme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              )}
            </button>
          </Slide>

          <div className="invisible md:visible">
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
          {/* Hamburger Menu */}
          <div
            type="button"
            onClick={() => {
              {
                opened ? setOpened(false) : setOpened(true);

                const navbar = document.getElementById("navbar-sticky");
                navbar.classList.toggle("hidden");
              }
            }}
            className={cn(`tham tham-e-squeeze tham-w-6 mt-3 md:hidden`, {
              "tham-active": opened,
            })}
          >
            <div className="tham-box">
              <div className="tham-inner dark:bg-gray-100 ml-[-20px]" />
            </div>
          </div>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1 "
          id="navbar-sticky"
        >
          <Slide left cascade>
            <ul
              className="gap-y-6 ml-2 md:ml-0 md:gap-y-2  grid place-content-start mt-24 p-4 rounded-lg text-left w-full h-screen md:items-center md:flex md:h-full md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 "
              type="button"
              onClick={() => {
                const navbar = document.getElementById("navbar-sticky");
                navbar.classList.toggle("hidden");
                setOpened(false);
              }}
            >
              <li className="md:w-24 hover:underline decoration-wavy decoration-pink-500 underline-offset-2 ">
                <Link href="/">
                  <a
                    className="text-xl md:text-base font-semibold dark:text-slate-50 hover:text-2xl ease-in-out duration-300"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li className="md:w-24 hover:underline decoration-wavy decoration-pink-500 underline-offset-2">
                <Link href="/news">
                  <a className="text-xl md:text-base font-semibold dark:text-slate-100 ease-in-out duration-300 hover:text-2xl">
                    News
                  </a>
                </Link>
              </li>
              <li className="md:w-24 hover:underline decoration-wavy decoration-pink-500 underline-offset-2">
                <Link href="/sub">
                  <a className="text-xl md:text-base font-semibold dark:text-slate-100 ease-in-out duration-300">
                    Submit Urls
                  </a>
                </Link>
              </li>
              <li className="md:hidden">
                <div className="flex mt-6 gap-5">
                  <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="mt-1 md:mt-0 w-9 h-9 bg-gray-200 rounded-lg dark:bg-zinc-800 flex items-center justify-center transition-all"
                    onClick={() =>
                      setTheme(resolvedTheme === "dark" ? "light" : "dark")
                    }
                  >
                    {mounted && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-800 dark:text-slate-100"
                      >
                        {resolvedTheme === "dark" ? (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        ) : (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                          />
                        )}
                      </svg>
                    )}
                  </button>
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
                  )}
                </div>
              </li>
            </ul>
          </Slide>
        </div>
      </div>
    </nav>
  );
}
