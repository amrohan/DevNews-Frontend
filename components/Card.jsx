import React from "react";

export default function Card({ title, author, createdAt, url, image }) {
  const FeedTitle = title.slice(0, 80);
  return (
    <div className="overflow-hidden shadow-lg rounded-lg max-h-90 w-80 cursor-pointer mx-auto">
      <a href={url} className="w-full block h-full">
        <img
          alt="blog photo"
          src={image}
          className="max-h-40 w-full object-cover"
        />
        <div className="bg-white dark:bg-zinc-800 w-full p-4">
          <p className="text-indigo-500 text-md font-medium">Dev News</p>
          <p className="hover:text-blue-500 text-gray-800 h-28 dark:text-white text-xl font-medium ">
            {FeedTitle}
          </p>
          {/* <p className="text-gray-400 h-16 dark:text-gray-300 font-light text-md">
            {content}
          </p> */}
          <div className="flex items-center mt-4">
            <a href="#" className="block relative">
              <img
                alt="profil"
                src={image}
                className="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div className="flex flex-col justify-between ml-4 text-sm">
              <p className="text-gray-800 dark:text-white">{author}</p>
              {/* convert createdAt to local string */}
              <p className="text-gray-400 dark:text-gray-300">
                {new Date(createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
