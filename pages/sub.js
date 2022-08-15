import { useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/Loader";

export default function SubmitUrl() {
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

  return (
    <div className="dark:text-gray-200 dark:bg-zinc-900 w-full">
      <Toaster />
      {Loading ? (
        <div className="grid place-items-center h-full w-full absolute">
          <Loader />
        </div>
      ) : null}

      <div className="grid h-screen place-items-center">
        <div className="w-full flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-zinc-900 dark:text-gray-100">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Submit An Article</h1>
            <p className="text-md dark:text-gray-400">
              {
                "Found an interesting article? Do you want to share it with the community? Enter the article's URL / link below to add it to thefeed."
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
                <label className="block mb-2 text-sm">Email ( optional )</label>
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
      </div>
    </div>
  );
}
