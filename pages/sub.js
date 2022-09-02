import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";
import Jello from "react-reveal/Jello";
import { useUser } from "@auth0/nextjs-auth0";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function SubmitUrl() {
  const { user } = useUser();
  const formRef = useRef();
  const [Loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = formRef.current;
    const url = formData.url.value;
    const email = formData.email.value;
    const data = {
      url,
      email,
    };
    const Response = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await Response.json();
    setLoading(false);

    // creating custom toast
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full dark:bg-zinc-800 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img className="h-16 w-16 rounded-full" src="/cat.gif" alt="" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium dark:text-gray-300">Mr Cat</p>
              <p className="mt-1 text-sm dark:text-gray-300">
                I appreciate you sending this article in. It will soon be
                reviewed and added to the feed ✨.
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-6 py-4 flex items-center justify-center text-sm font-medium dark:text-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    ));
    formData.reset();
  };

  if (!user) {
    return (
      <Slide top cascade>
        <div className="login">
          <Head>
            <title>DevNews - Homepage for Devs</title>
          </Head>
          <section className="dark:text-gray-400 dark:bg-zinc-900 body-font max-w-5xl mx-auto">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src="/log.svg"
                />
              </div>
              <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-500">
                  Login Before submitting !
                  <br className="hidden lg:inline-block" />
                </h1>
                <p className="mb-8 leading-relaxed">
                  Logging in is required to avoid spam and ensure community
                  safety.
                </p>
                <div className="flex justify-center">
                  <Link href="/api/auth/login">
                    <button className="inline-flex px-2 py-2 border outline border-zinc-800 dark:border-blue-500 rounded-md text-zinc-900 dark:text-blue-400 hover:animate-pulse hover:underline decoration-wavy underline-offset-4">
                      Login Here
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Slide>
    );
  }

  return (
    <div className="dark:text-gray-200 dark:bg-zinc-900 w-full">
      <Toaster />
      {Loading ? (
        <div className="grid place-items-center h-full w-full absolute z-20">
          <Loader />
        </div>
      ) : null}

      <div className="grid h-screen place-items-center">
        <Rotate top left>
          <div className="w-full flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-zinc-900 dark:text-gray-100">
            <div className="mb-8 text-center">
              <h1 className="text-2xl">
                Hello 👋,{"\u00a0\u00a0"}
                <span className="text-yellow-500 font-semibold">
                  <Jello>{user.name}</Jello>
                </span>
              </h1>
              <h1 className="my-3 text-4xl font-bold">Submit An Article</h1>
              <p className="text-md dark:text-gray-400">
                {
                  "Found an interesting article? Do you want to share it with the community? Enter the article's URL / link below to add it to the feed."
                }
              </p>
            </div>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              name="submit-article"
              className="space-y-12 ng-untouched ng-pristine ng-valid"
              data-bitwarden-watching="1"
            >
              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm">Website URL</label>
                  <input
                    type="url"
                    name="url"
                    id="url"
                    required="reuired"
                    placeholder="Paste Url"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">
                    Email ( optional )
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-zinc-900 dark:text-gray-100"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 font-semibold rounded-md border bg-violet-400 dark:text-gray-900"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Rotate>
      </div>
    </div>
  );
}
