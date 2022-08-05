import React from "react";

export default function Skeleton() {
  return (
    <div classaName="overflow-hidden shadow-lg rounded-lg bg-green-600">
      <div className="bg-gray-500 rounded-xl h-44 overflow-hidden animate-pulse mb-2"></div>
      <div className="h- p-3">
        <div className="flex flex-col gap-3">
          <div className="h-6 col-span-2 bg-gray-500 rounded-lg animate-pulse"></div>
          <div className=" h-6 w-56 bg-gray-500 rounded-lg animate-pulse mb-8"></div>
          <div className="flex flex-row gap-x-4">
            <div className=" w-10 h-10 bg-gray-500 rounded-full "></div>
            <div className="h-6 w-3/4 bg-gray-500 rounded-lg animate-pulse"></div>
          </div>
          <div className="h-6 mt-[-12px] w-3/6 ml-14 bg-gray-500 rounded-lg animate-pulse"></div>
          <div className="col-span-2"></div>
        </div>
      </div>
    </div>
  );
}
