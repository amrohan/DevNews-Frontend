import React from "react";
import Link from "next/Link";

export default function Card({
  title,
  author,
  description,
  url,
  pubDate,
  image,
}) {
  const FeedTitle = title.slice(0, 80);
  return (
    <div class="overflow-hidden shadow-lg rounded-lg max-h-90 max-w-[350px] md:w-80 cursor-pointer m-auto">
      <a href={url} class="w-full block h-full">
        <img
          alt="blog photo"
          src={image}
          class="max-h-40 w-full object-cover"
        />
        <div class="bg-white dark:bg-gray-800 w-full p-4">
          <p class="text-indigo-500 text-md font-medium">Dev News</p>
          <p class="text-gray-800 h-28 dark:text-white text-xl font-medium ">
            {FeedTitle}
          </p>
          {/* <p class="text-gray-400 h-16 dark:text-gray-300 font-light text-md">
            {content}
          </p> */}
          <div class="flex items-center mt-4">
            <a href="#" class="block relative">
              <img
                alt="profil"
                src={image}
                class="mx-auto object-cover rounded-full h-10 w-10 "
              />
            </a>
            <div class="flex flex-col justify-between ml-4 text-sm">
              <p class="text-gray-800 dark:text-white">{author}</p>
              <p class="text-gray-400 dark:text-gray-300">{pubDate}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
