import React from "react";
import ImageBlur from "./ImageBlur";
import Link from "next/link";

export default function Card({ art }) {
  const FeedTitle = art.title.slice(0, 80);
  return (
    <div className="overflow-hidden shadow-lg rounded-lg max-h-90 w-80 cursor-pointer mx-auto">
      <Link href={art.url} passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block h-90"
        >
          <div className=" h-44 w-full overflow-hidden">
            <ImageBlur
              alt="blog photo"
              src={art.image}
              className="object-cover h-10 w-full"
              width={400}
              height={220}
            />
          </div>
          <div className="bg-white dark:bg-zinc-800 w-full p-4">
            <p className="text-indigo-500 text-md font-medium font-serif">
              Dev News
            </p>
            <p className="hover:text-blue-500 text-gray-800 h-28 dark:text-white text-lg font-medium ">
              {FeedTitle}
            </p>
            {/* <p className="text-gray-400 h-16 dark:text-gray-300 font-light text-md">
            {content}
          </p> */}
            <div className="flex items-center ">
              <ImageBlur
                alt="profil"
                // genrate images with different urls
                // src={`https://picsum.photos/200/200?random=${Math.floor(
                //   Math.random() * 100
                // )}`}
                src="/user.png"
                className="mx-auto object-cover rounded-full h-10 w-10 "
                width={40}
                height={40}
              />

              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-800 dark:text-white">{art.author}</p>
                {/* convert createdAt to local string */}
                <p className="text-gray-400 dark:text-gray-300">
                  {new Date(art.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
