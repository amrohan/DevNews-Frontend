import React from "react";
import ImageBlur from "./ImageBlur";
import Link from "next/link";

export default function Card({ art }) {
  const FeedTitle = art.title.slice(0, 80);
  const authorName = art.author.slice(0, 20);

  return (
    <div className="relative dark:bg-zinc-800 shadow-lg rounded-xl h-96 w-80 cursor-pointer mx-auto">
      <Link href={art.url} passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block h-90 rounded-full"
        >
          <div className="h-44 w-full rounded-t-xl overflow-hidden">
            <ImageBlur
              alt="blog photo"
              src={art.image}
              className="object-cover h-10 w-full"
              width={400}
              height={220}
            />
          </div>
          <div className="w-full p-4">
            <p className="hover:text-blue-500 bg-white dark:bg-zinc-800 text-gray-800 h-28 dark:text-white text-lg font-medium ">
              {FeedTitle}
            </p>
            {/* <p className="text-gray-400 h-16 dark:text-gray-300 font-light text-md">
            {content}
          </p> */}
            <div className="flex items-center">
              <div className="flex flex-col justify-between ml-4 text-sm">
                <p className="text-gray-800 dark:text-white">{authorName}</p>
                {/* convert createdAt to local string */}
                <p className="text-gray-600 dark:text-gray-300">
                  {new Date(art.createdAt).toLocaleString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
