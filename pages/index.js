import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/news">
        <a className="text-white">News</a>
      </Link>
    </div>
  );
}
