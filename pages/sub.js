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
          <h1 className="text-2xl text-center mb-6 font-semibold">
            To avoid spam, please login before submitting a URL to the
            community.
          </h1>
          <Image src="/log.svg" width={250} height={406} alt="login page" />
          <Link href="api/auth/login">
            <a>
              <button type="button" className="pad">
                Login here
              </button>
            </a>
          </Link>
          <style jsx>
            {`
            .login {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              width: full
              height: full;
              color: #17c3b2;
              padding-top : 60px;
              padding-bottom : 20px;
            }
            
            .login button {
              padding: 0.8em 1.8em;
              border: 2px solid #17c3b2;
              position: relative;
              overflow: hidden;
              background-color: transparent;
              text-align: center;
              text-transform: uppercase;
              font-size: 16px;
              -webkit-transition: 0.3s;
              transition: 0.3s;
              z-index: 1;
              font-family: inherit;
              color: #17c3b2;
            }
            
            .login button::before {
              content: "";
              width: 0;
              height: 300%;
              position: absolute;
              top: 50%;
              left: 50%;
              -webkit-transform: translate(-50%, -50%) rotate(45deg);
              -ms-transform: translate(-50%, -50%) rotate(45deg);
              transform: translate(-50%, -50%) rotate(45deg);
              background: #17c3b2;
              -webkit-transition: 0.5s ease;
              transition: 0.5s ease;
              display: block;
              z-index: -1;
            }
            
            .login button:hover::before {
              width: 105%;
            }
            
            .login button:hover {
              color: #111;
            }
            
            .pad {
              margin-top: 20px;
            }
            `}
          </style>
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
