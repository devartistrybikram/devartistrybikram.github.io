import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <div className="my-5">
        <h1
          className={`w-auto text-nowrap text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-zinc-200 relative before:content-['MY_PORTFOLIO'] before:absolute before:text-amber-500 before:tracking-normal before:text-nowrap before:text-3xl before:md:text-4xl before:lg:text-5xl before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2`}
        >
          PROJECTS
        </h1>
      </div>
      <div className="w-full md:w-4/5 lg:w-8/12 m-auto py-12 px-6">
        <div className="mx-auto w-full">
          <div className="grid grid-cols-4 gap-3 md:grid-cols-8 lg:grid-cols-12">
            <Link
              href="#"
              className="group relative flex h-40 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-48 lg:h-56 col-span-4 md:col-span-8 lg:col-span-12"
            >
              <Image
                src="/photo_2.avif"
                width={1000}
                height={250}
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                #_PROJECT_NAMES
              </span>
            </Link>
            <Link
              href="#"
              className="group relative flex h-40 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-48 lg:h-56 col-span-4 md:col-span-4 lg:col-span-4"
            >
              <Image
                src="/photo_2.avif"
                width={1000}
                height={250}
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                #_PROJECT_NAMES
              </span>
            </Link>
            <Link
              href="#"
              className="group relative flex h-40 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-48 lg:h-56 col-span-4 md:col-span-4 lg:col-span-8"
            >
              <Image
                src="/photo_2.avif"
                width={1000}
                height={250}
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                #_PROJECT_NAMES
              </span>
            </Link>
            <Link
              href="#"
              className="group relative flex h-40 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-48 lg:h-56 col-span-4 md:col-span-4 lg:col-span-8"
            >
              <Image
                src="/photo_2.avif"
                width={1000}
                height={250}
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                #_PROJECT_NAMES
              </span>
            </Link>
            <Link
              href="#"
              className="group relative flex h-40 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-48 lg:h-56 col-span-4 md:col-span-4 lg:col-span-4"
            >
              <Image
                src="/photo_2.avif"
                width={1000}
                height={250}
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                #_PROJECT_NAMES
              </span>
            </Link>

            <Link
              href="#"
              className="group relative flex h-40 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-48 lg:h-56 col-span-4 md:col-span-4 lg:col-span-6"
            >
              <Image
                src="/photo_2.avif"
                width={1000}
                height={250}
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                #_PROJECT_NAMES
              </span>
            </Link>
            <Link
              href="#"
              className="group relative flex h-40 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-48 lg:h-56 col-span-4 md:col-span-4 lg:col-span-6"
            >
              <Image
                src="/photo_2.avif"
                width={1000}
                height={250}
                alt="Photo by Martin Sanchez"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                #_PROJECT_NAMES
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
