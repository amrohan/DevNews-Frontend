import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
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
      <div className="h-full">
        {/* <!--Main--> */}
        <div className="pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
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
          <div className="w-full xl:w-3/5 p-5 md:p-12 mx-auto overflow-hidden rounded-lg">
            <img
              className={cn(
                "duration-700 ease-in-out rounded-xl",
                blur ? "grayscale blur-lg" : "grayscale-0 blur-0"
              )}
              src="/per.gif"
              width={500}
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
