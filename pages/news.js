import { useState, useEffect } from "react";
import useSWR from "swr";
import SkeletonCard from "../components/SkeletonCard";
import Card from "../components/Card";
import Slide from "react-reveal/Slide";
import Loader from "../components/Loader";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function News() {
  // setting up the state
  const [skipPage, setSkipPage] = useState(0);

  const { data, error } = useSWR(`/api/feed?take=20&skip=${skipPage}`, fetcher);

  const [feed, setFeed] = useState([]);

  useEffect(() => {
    if (data) {
      setFeed((prev) => [...prev, ...data]);
    }
  }, [data]);

  // const onScroll = () => {
  //   if (
  //     window.innerHeight + window.scrollY >=
  //     document.body.offsetHeight * 0.9
  //   ) {
  //     // skiping the number of articles that are already in the feed state
  //     // setSkipPage((prev) => skipPage + 20);
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [data]);

  // creating a state to show good morning or good evening
  const [time, setTime] = useState(new Date().getHours());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().getHours());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const greeting = () => {
    if (time < 12) {
      return "Good Morning ✨";
    } else if (time < 18) {
      return "Good Afternoon ✨";
    } else {
      return "Good Evening ✨";
    }
  };
  //  show greeting for 5 seconds only then hide it
  const [show, setShow] = useState(true);
  useEffect(() => {
    const interval = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => clearTimeout(interval);
  }, [show]);

  return (
    <div>
      <div className=" pt-20 h-32 w-full mb-4 max-w-5xl mx-auto md:w-full">
        <h1 className="text-2xl font-semibold w-full pl-8 md:pl-0 font-mono">
          Latest News
        </h1>
        {show && (
          <span className="animate-pulse pt-1 font-mono pl-11 md:pl-2 self-center text-md font-semibold whitespace-nowrap dark:text-white">
            {greeting()}
          </span>
        )}
      </div>

      {/* add scroll on top button */}
      <div className="fixed z-30 top-0 right-0 mr-6 mb-6">
        <button
          className="dark:bg-white h-12 w-12 dark:text-white rounded-full fixed bottom-2 right-4 "
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          👆
        </button>
      </div>
      <div className="min-h-[900px] pt-6 gap-6 grid md:px-0 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl">
        {/* if data is not loaded then show skeletons else show Card */}
        {feed.map((item) => {
          return (
            <Slide bottom key={item.id}>
              <Card art={item} />
            </Slide>
          );
        })}

        {!data && (
          <div className="bottom-0 text-center ">
            <Loader />

            {/* <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard /> */}
          </div>
        )}
      </div>
      <div className="mt-4 w-full grid place-content-center">
        <button
          onClick={() => setSkipPage(skipPage + 20)}
          type="button"
          className="flex items-center justify-center px-8 py-4 font-bold transition bg-pink-100 border-4 text-black border-black rounded-xl focus:outline-none hover:shadow-none active:bg-pink-50"
        >
          Load More
          <span aria-hidden="true" className="ml-1.5" role="img">
            🤔
          </span>
        </button>
      </div>
    </div>
  );
}
