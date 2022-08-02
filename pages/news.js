import { useState } from "react";
import useSWR from "swr";
import SkeletonCard from "../components/SkeletonCard";
import Card from "../components/Card";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function News() {
  // pass the query to api/feed.js

  const [pageIndex, setPageIndex] = useState(20);

  // The API URL includes the page index, which is a React state.
  const { data } = useSWR(`/api/feed?take=${pageIndex}`, fetcher);
  console.log(data);

  if (!data) {
    const Num = 10;
    return (
      <div className="h-full w-full bg-zinc-900 text-white">
        <section className="pt-6 grid md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto gap-x-6 gap-y-8 ">
          {/* map over num and show skeleton  */}
          {Array.from({ length: Num }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </section>
      </div>
    );
  }

  return (
    <div className="h-full mx-w-4xl bg-zinc-900 text-white">
      <section className="pt-6 gap-6 grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mx-auto max-w-5xl ">
        {/* if data is not loaded then show skeletons else show Card */}

        {data && data?.map((article) => <Card key={article.id} {...article} />)}
        <button onClick={() => setPageIndex(pageIndex + 20)}>
          Load more articles
        </button>
      </section>
    </div>
    // <SkeletonCard />
  );
  //   {data?.map((item) => (
  //     <div key={item.id}>{item.title}</div>
  //   ))}
  //   <button onClick={() => setPageIndex(pageIndex - 10)}>Previous</button>
  //   <button onClick={() => setPageIndex(pageIndex + 10)}>Next</button>
  // </div>
}
