export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <div className="my-5">
        <h1
          className={`w-auto text-nowrap text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-zinc-200 relative before:content-['GET_IN_TOUCH'] before:absolute before:text-amber-500 before:tracking-normal before:text-nowrap before:text-3xl before:md:text-4xl before:lg:text-5xl before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2`}
        >
          CONTACT
        </h1>
      </div>
      <div className="pb-10 sm:pb-12 lg:pb-16">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 md:mb-8">
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              <strong>Have You Any Project? Please Drop a Message</strong>
              <br />
              Get in touch and let me know how i can help. Fill out the form and
              i’ll be in touch as soon as possible.
            </p>
          </div>
          <form className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                First name*
              </label>
              <input
                autoComplete="false"
                name="first-name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-amber-300 transition duration-100 focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Last name*
              </label>
              <input
                autoComplete="false"
                name="last-name"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-amber-300 transition duration-100 focus:ring-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Mobile*
              </label>
              <input
                autoComplete="false"
                name="email"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-amber-300 transition duration-100 focus:ring-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Email*
              </label>
              <input
                autoComplete="false"
                name="email"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-amber-300 transition duration-100 focus:ring-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Subject*
              </label>
              <input
                autoComplete="false"
                name="subject"
                className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-amber-300 transition duration-100 focus:ring-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Message*
              </label>
              <textarea
                autoComplete="false"
                name="message"
                className="h-32 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none resize-none ring-amber-300 transition duration-100 focus:ring-2"
              ></textarea>
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <button className="flex-1 inline-block rounded bg-amber-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-amber-300 transition duration-100 hover:bg-amber-600 focus-visible:ring active:bg-amber-700 md:text-base">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
