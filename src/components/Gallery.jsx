import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Gallery() {
    return (
        <div className="mx-auto w-full">
            <div className="grid grid-cols-4 gap-3 md:grid-cols-8 lg:grid-cols-12">
                <Link href="#" className="group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-40 lg:h-52 col-span-4 md:col-span-8 lg:col-span-12">
                    <Image src="/photo_2.avif" width={1000} height={250} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">#_PROJECT_NAMES</span>
                </Link>
                <Link href="#" className="group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-40 lg:h-52 col-span-4 md:col-span-4 lg:col-span-4">
                    <Image src="/photo_2.avif" width={1000} height={250} alt="Photo by Minh Pham" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">#_PROJECT_NAMES</span>
                </Link>
                <Link href="#" className="group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-40 lg:h-52 col-span-4 md:col-span-4 lg:col-span-8">
                    <Image src="/photo_2.avif" width={1000} height={250} alt="Photo by Magicle" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">#_PROJECT_NAMES</span>
                </Link>
                <Link href="#" className="group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-40 lg:h-52 col-span-4 md:col-span-4 lg:col-span-8">
                    <Image src="/photo_2.avif" width={1000} height={250} alt="Photo by Martin Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">#_PROJECT_NAMES</span>
                </Link>
                <Link href="#" className="group relative flex h-64 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-40 lg:h-52 col-span-4 md:col-span-4 lg:col-span-4">
                    <Image src="/photo_2.avif" width={1000} height={250} alt="Photo by Lorenzo Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">#_PROJECT_NAMES</span>
                </Link>
            </div>
        </div>
    )
}
