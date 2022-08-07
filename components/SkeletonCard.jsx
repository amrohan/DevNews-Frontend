import React from "react";

export default function Skeleton() {
  return (
    <>
      <div className="mx-auto shadow-lg rounded-lg h-96 w-80 ">
        <div className=" rounded-xl h-44 overflow-hidden animate-pulse mb-2 bg-gray-400 dark:bg-gray-600"></div>
        <div className="h-4 p-3">
          <div className="flex flex-col gap-3">
            <div className="h-3 bg-gray-400 dark:bg-gray-600 rounded-lg animate-pulse"></div>
            <div className="h-3 w-64 bg-gray-400 dark:bg-gray-600 rounded-lg animate-pulse"></div>
            <div className=" h-3 w-36 bg-gray-400 dark:bg-gray-600 rounded-lg animate-pulse mb-8"></div>
            <div>
              <div className="h-3 w-32 bg-gray-400 dark:bg-gray-600 rounded-lg animate-pulse mb-2"></div>
              <div className="h-3 w-24 bg-gray-400 dark:bg-gray-600 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
