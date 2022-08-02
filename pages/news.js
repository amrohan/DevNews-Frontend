import { useState, useEffect } from "react";
import useSWR from "swr";
import SkeletonCard from "../components/SkeletonCard";
import Card from "../components/Card";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function News() {
  // setting up the state
  const [pageIndex, setPageIndex] = useState(30);
  const { data } = useSWR(`/api/feed?take=${pageIndex}`, fetcher);
  // setting up the state of feed
  const [feed, setFeed] = useState([]);

  //
  useEffect(() => {
    if (data) {
      setFeed([...data]);
    }
  }, [data]);

  const num = 9;

  const onScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPageIndex(pageIndex + num);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [data]);

  return (
    <div className="h-full w-full bg-zinc-900 text-white ">
      <section className="pt-6 gap-6 gap-x-6 gap-y-8 grid md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-5xl ">
        {/* if data is not loaded then show skeletons else show Card */}

        {feed && feed?.map((article) => <Card key={article.id} {...article} />)}
      </section>

      {/* showing skeleton if data is loading */}
      {!data && (
        <div className="h-full mx-w-4xl bg-zinc-900 text-white">
          <section className="pt-6 gap-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mx-20 lg:mx-auto max-w-5xl">
            {/* map over num and show skeleton  */}
            {Array.from({ length: num }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </section>
        </div>
      )}
      {/* add scroll on top button */}
      <div className="fixed top-0 right-0 mr-6 mb-6">
        <button
          className="dark:bg-white h-12 w-12 dark:text-white rounded-full fixed bottom-2 right-4 "
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          👆
        </button>
      </div>
      {/* <button
        onClick={() => setPageIndex(pageIndex + 9)}
        type="button"
        class="text-white w-28 mx-auto bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Load More
      </button> */}
    </div>
  );
}
