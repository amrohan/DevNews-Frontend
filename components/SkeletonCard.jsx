import React from "react";

export default function Skeleton() {
  return (
    <div classaName=" bg-gray-900 w-[350px] mx-auto rounded-xl shadow-lg">
      <div className="bg-gray-500 rounded-xl h-40 overflow-hidden animate-pulse"></div>
      <div className="h- p-3">
        <div className="flex flex-col gap-2">
          <div className="h-6 col-span-2 bg-gray-500 rounded-lg animate-pulse"></div>
          <div className=" h-6 w-3/5 bg-gray-500 rounded-lg animate-pulse"></div>
          <div className="flex flex-row gap-4">
            <div className=" w-[25px] h-[25px] bg-gray-500 rounded-md "></div>
            <div className="h-6 w-3/4 bg-gray-500 rounded-lg animate-pulse"></div>
          </div>
          <div className="..."></div>
          <div className="col-span-2 ..."></div>
        </div>
      </div>
    </div>
  );
}
