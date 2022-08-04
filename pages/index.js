import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/news">
        <a className="dark:text-zinc-900">News</a>
      </Link>
    </div>
  );
}
