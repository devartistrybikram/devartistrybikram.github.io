"use client";
import React from "react";
import Image from "next/image";
import Cards from "@/components/Cards";
import TabsPill from "@/components/TabsPill";
import Hrline from "@/components/Hrline";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import {
  faCompassDrafting,
  faCode,
  faBezierCurve,
  faObjectUngroup,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faWordpress } from "@fortawesome/free-brands-svg-icons";
import { Inter } from "next/font/google";
import Gallery from "@/components/Gallery";
const inter = Inter({
  weight: ["100", "200", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  const services = [
    "Graphic Designer",
    "UI/UX Designer",
    "Web Developer",
    "Wordpress Developer",
    "Mobile App Developer",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative lg:min-h-screen h-auto bg-[url('/back.svg')] bg-no-repeat bg-cover min-w-full">
        <div className="flex lg:min-h-screen flex-col items-center lg:flex-row gap-5 md:gap-7 lg:gap-12 w-full md:w-4/5 lg:w-8/12 m-auto p-3.5">
          <div className="relative w-full h-96 sm:w-96 bg-auto rounded-[49%_51%_49%_51%/37%_49%_51%_63%] overflow-hidden shadow-sm outline-[25px] outline-white mt-20 md:mt-12 lg:mt-0">
            <Image
              src="/image.jpg"
              alt="My Profile Image"
              className="scale-125"
              width={650}
              height={650}
            />
          </div>
          <div className="p-2 flex-1 flex flex-row items-center">
            <div className="flex flex-col w-full font-normal justify-start ml-0">
              <div className="w-64">
                <Swiper
                  spaceBetween={45}
                  loop={true}
                  modules={[Autoplay]}
                  slidesPerView={1}
                  autoplay={{ delay: 1000, speed: 3500 }}
                  className="w-64"
                >
                  {services.map((service, index) => {
                    return (
                      <SwiperSlide
                        className="text-center text-lg md:text-left whitespace-nowrap"
                        key={index}
                      >
                        <h3>{service}</h3>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h1 className="text-4xl font-bold text-amber-500 text-center md:text-left mt-3">
                Bikram Mondal
              </h1>
              <p className="mt-3 text-justify">
                Fusce tempor magna mi, non egestas velit ultricies nec. Aenean
                convallis, risus non condimentum gravida, odio mauris
                ullamcorper felis, ut venenatis purus ex eu mi. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu. Fusce
                tempor magna mi, non egestas velit ultricies nec. Aenean
                convallis, risus non condimentum gravida, odio mauris
                ullamcorper felis, ut venenatis purus ex eu mi. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </p>
              <div className="flex flex-row gap-3 mt-5">
                <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-amber-500 hover:bg-amber-600 focus:bg-amber-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-amber-300 disabled:bg-amber-300 disabled:shadow-none">
                  <span>My Resume</span>
                </button>
                <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border-2 border-amber-500 px-5 text-sm font-medium tracking-wide text-amber-500 transition duration-300 hover:border-amber-600 hover:text-amber-600 focus:border-amber-700 focus:text-amber-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-amber-300 disabled:text-amber-300 disabled:shadow-none">
                  <span>Contact Me</span>
                </button>
              </div>
              <br />
              <br />
            </div>
            <br />
          </div>
        </div>
      </div>

      <Hrline dataX="1/2" />

      <div className="relative min-h-64 h-auto bg-no-repeat bg-cover min-w-full py-12">
        <div className="w-full md:w-4/5 lg:w-8/12 m-auto flex items-center min-h-64">
          <div className="h-auto w-full p-3.5">
            <div className="text-left font-bold">
              <h3 className="text-2xl text-amber-500">
                Need a Creative Product?
              </h3>
              <h3 className="text-xl"> &#8210; I can Help You!</h3>
            </div>
            <div className="grid grid-cols-[repeat(_auto-fit,_minmax(250px,_1fr)_)] gap-2 p-2 mt-5">
              <Cards title="Web Design" icon={faObjectUngroup} number="01">
                Fusce tempor magna mi, non egestas velit ultricies nec. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </Cards>
              <Cards title="Web Development" icon={faCode} number="01">
                Fusce tempor magna mi, non egestas velit ultricies nec. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </Cards>
              <Cards title="Graphic Design" icon={faBezierCurve} number="01">
                Fusce tempor magna mi, non egestas velit ultricies nec. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </Cards>
              <Cards title="Wordpress Solutions" icon={faWordpress} number="01">
                Fusce tempor magna mi, non egestas velit ultricies nec. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </Cards>
              <Cards title="Ecommerce Solution" icon={faStoreAlt} number="01">
                Fusce tempor magna mi, non egestas velit ultricies nec. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </Cards>
              <Cards
                title="Website Maintainence"
                icon={faCompassDrafting}
                number="01"
              >
                Fusce tempor magna mi, non egestas velit ultricies nec. Quisque
                imperdiet lacinia urna, a placerat sapien pretium eu.
              </Cards>
            </div>
          </div>
        </div>
      </div>

      <Hrline dataX="1/2" />

      <div className="relative min-h-64 h-auto bg-no-repeat bg-cover min-w-full py-12">
        <div className="w-full md:w-4/5 lg:w-8/12 m-auto flex items-center min-h-64">
          <div className="h-auto w-full p-3.5">
            <div className="text-left font-bold">
              <h3 className="text-2xl text-amber-500">
                What My Programming Skills Included?
              </h3>
              <h3 className="text-xl"> &#8210; My Best Skills On!</h3>
            </div>
            <div className="py-2 mt-5">
              <TabsPill />
            </div>
          </div>
        </div>
      </div>

      <Hrline dataX="1/2" />

      <div className="relative min-h-64 h-auto bg-no-repeat bg-cover min-w-full py-12">
        <div className="w-full md:w-4/5 lg:w-8/12 m-auto flex items-center min-h-64">
          <div className="h-auto w-full p-3.5">
            <div className="text-left font-bold">
              <h3 className="text-2xl text-amber-500">
                See My Works Which Will Amaze You!
              </h3>
              <h3 className="text-xl"> &#8210; My Recent Projects!</h3>
            </div>
            <div className="py-2 mt-5">
              <Gallery />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
