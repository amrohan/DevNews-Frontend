import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import cn from "clsx";

export default function Home() {
  // setting state to blur gif on load for 3 seconds
  const [blur, setBlur] = useState(true);
  setTimeout(() => {
    setBlur(false);
  }, 300);

  return (
    <div className="h-full max-w-5xl mx-auto dark:bg-zinc-900 p-6">
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>DevNews - News for Devs</title>
        <meta name="title" content="DevNews - News for Devs" />
        <meta
          name="description"
          content="DevNews is a place where you can get all of your tech news from a variety of sources, including theverge, techcrunch, producthunt, hackernews, and many others."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devnews.gq/" />
        <meta property="og:title" content="DevNews - News for Devs" />
        <meta
          property="og:description"
          content="DevNews is a place where you can get all of your tech news from a variety of sources, including theverge, techcrunch, producthunt, hackernews, and many others."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/amrohan/image/upload/v1653377356/Images/uyvcq8rzavq5bc0g3h6u.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devnews.gq/" />
        <meta property="twitter:title" content="DevNews - News for Devs" />
        <meta
          property="twitter:description"
          content="DevNews is a place where you can get all of your tech news from a variety of sources, including theverge, techcrunch, producthunt, hackernews, and many others."
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/amrohan/image/upload/v1653377356/Images/uyvcq8rzavq5bc0g3h6u.png"
        />
      </Head>
      <section className="h-full">
        {/* <!--Main--> */}
        <div className="pt-24 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
          {/* <!--Left Col--> */}
          <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 className="my-4 text-3xl md:text-5xl dark:text-white opacity-75 font-bold leading-tight text-center md:text-left">
              ALL
              <span className="mr-2 ml-2 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
                DEVELOPER NEWS
              </span>
              IN ONE PLACE
            </h1>
            <p className=" dark:text-white opacity-60 first-line:leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
              Get all of the biggest tech news headlines and articles in one
              place.
            </p>
            <div className="text-center">
              <Link href="/news">
                <a>
                  <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Go to News
                    </span>
                  </button>
                </a>
              </Link>
            </div>
          </div>

          {/* <!--Right Col--> */}
          <div className="w-full xl:w-3/5 p-5 md:p-12 overflow-hidden rounded-lg">
            <img
              className={cn(
                "duration-700 ease-in-out rounded-xl w-full md:w-9/12 lg:w-full",
                blur ? "grayscale blur-lg" : "grayscale-0 blur-0"
              )}
              src="/per.gif"
              alt="Homage page gif"
            />
          </div>
        </div>
      </section>
      <section className="dark:bg-zinc-900 dark:text-gray-100">
        <div className="mx-auto p-4 my-5 space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Built To Save Time For Every Developer
          </h2>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 fill-current dark:text-violet-400"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
            </svg>
            <h3 className="my-3 text-2xl font-semibold">Save Time</h3>
            <div className="space-y-1 leading-tight">
              <p>
                {
                  "Searching for content isn't a thing developers should do nowadays. daily.dev recommends tailor-made dev news so you canhave something interesting to read anytime."
                }
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center">
            <svg
              className="w-8 h-8 dark:text-violet-400"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            >
              <path d="M8.625 0c.61 7.189-5.625 9.664-5.625 15.996 0 4.301 3.069 7.972 9 8.004 5.931.032 9-4.414 9-8.956 0-4.141-2.062-8.046-5.952-10.474.924 2.607-.306 4.988-1.501 5.808.07-3.337-1.125-8.289-4.922-10.378zm4.711 13c3.755 3.989 1.449 9-1.567 9-1.835 0-2.779-1.265-2.769-2.577.019-2.433 2.737-2.435 4.336-6.423z" />
            </svg>
            <h3 className="my-3 text-2xl font-semibold">
              Never Miss New Trends
            </h3>
            <div className="space-y-1 leading-tight">
              <p>
                Discover brand-new content as soon as its published. I can
                easily make you stand out as that developer who is always
                in-the-know about the latest buzzwords.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 dark:text-violet-400"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="my-3 text-2xl font-semibold">Contribute</h3>
            <div className="space-y-1 leading-tight">
              <p>
                DevNews is a community of developers getting together around
                discovering and exploring dev news. Source code is available on
                GitHub.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
