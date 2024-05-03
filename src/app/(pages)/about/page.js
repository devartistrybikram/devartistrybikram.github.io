import {
  Educations,
  Experiences,
  Certificates,
  FeedTitle,
} from "@/components/Feeds";
import Hrline from "@/components/Hrline";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <div className="my-5">
        <h1
          className={`w-auto text-nowrap text-6xl md:text-7xl lg:text-8xl font-black tracking-wider text-zinc-200 relative before:content-['ABOUT_ME'] before:absolute before:text-amber-500 before:tracking-normal before:text-nowrap before:text-3xl before:md:text-4xl before:lg:text-5xl before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2`}
        >
          RESUME
        </h1>
      </div>
      <div className="w-full md:w-4/5 lg:w-8/12 m-auto py-12 px-6">
        <FeedTitle>WHO I AM?</FeedTitle>
        <p className="pb-5 text-justify">
          Hello, I&apos;m Bikram Mondal, a dynamic force at the intersection of
          design and technology. As a frontend developer and graphic designer, I
          weave together pixels and code to craft immersive digital experiences
          that captivate and inspire. With a keen eye for aesthetics and a
          passion for innovation, I breathe life into ideas, transforming them
          into visually stunning realities. From sleek websites that dazzle to
          captivating graphics that leave a lasting impression, I thrive on
          pushing boundaries and shaping the future of digital storytelling.
          Let&apos;s embark on a journey where creativity knows no limits.
        </p>
      </div>

      <Hrline dataX="1/2" />

      <div className="w-full md:w-4/5 lg:w-8/12 m-auto py-12">
        <div className="p-10 grid grid-cols-4 gap-3 md:grid-cols-8 lg:grid-cols-12 w-full">
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <FeedTitle>Education</FeedTitle>
            <Educations />
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-6">
            <FeedTitle>Certificates</FeedTitle>
            <Certificates />
            <FeedTitle>Experiences</FeedTitle>
            <Experiences />
          </div>
        </div>
      </div>
    </main>
  );
}
