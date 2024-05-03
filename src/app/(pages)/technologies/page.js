import { FeedTitle } from "@/components/Feeds";
import Hrline from "@/components/Hrline";
import Meter from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <div className="my-5">
        <h1
          className={`w-auto text-nowrap text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-zinc-200 relative before:content-['TECHNOLOGIES'] before:absolute before:text-amber-500 before:tracking-normal before:text-nowrap before:text-3xl before:md:text-4xl before:lg:text-5xl before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2`}
        >
          MY SKILLS
        </h1>
      </div>
      <div className="w-full md:w-4/5 lg:w-8/12 m-auto py-12 px-6">
        <FeedTitle>WHAT ARE THE MY SKILLS?</FeedTitle>
        <p className="pb-5 text-justify">
          As a seasoned frontend developer and graphic designer, I bring a
          diverse skill set to the table. My expertise extends to graphic
          design, where I excel in creating captivating logos, brochures, and
          posters.
        </p>
      </div>

      <Hrline dataX="1/2" />

      <div className="w-full md:w-4/5 lg:w-8/12 m-auto py-12">
        <div className="p-5 grid grid-cols-4 gap-10 md:grid-cols-8 lg:grid-cols-12 w-full">
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <FeedTitle>My Skills</FeedTitle>
            <Meter name="HTML, CSS, Bootstrap" percentage="85" />
            <Meter name="JavaScript, JQuery" percentage="75" />
            <Meter name="Tailwind UI" percentage="65" />
            <Meter name="PHP & SQL" percentage="70" />
            <Meter name="Node, React, Next" percentage="45" />
            <Meter name="Wordpress & WooCommerce" percentage="60" />
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <FeedTitle>Tools I Use</FeedTitle>
            <Meter name="Adobe Photoshop" percentage="75" />
            <Meter name="Adobe Illustrator" percentage="25" />
            <Meter name="Adobe XD" percentage="55" />
            <Meter name="Figma & Framer" percentage="50" />
            <Meter name="Github & Git" percentage="40" />
            <Meter name="Docker & Postman" percentage="30" />
          </div>
        </div>
      </div>
    </main>
  );
}
