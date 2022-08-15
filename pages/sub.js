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
    toast(json.message, {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
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
                  // onClick={Notify}
                  type="submit"
                  className="w-full px-8 py-3 font-semibold rounded-md border bg-violet-400 dark:text-gray-900"
                >
                  Submit
                  {/* <span className="w-5 mt-[2px] h-5 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></span> */}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
