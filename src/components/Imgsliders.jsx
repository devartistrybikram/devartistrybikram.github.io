import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const skills = [
  { name: "HTML 5", image: "html.png" },
  { name: "CSS 3", image: "css.png" },
  { name: "JavaScript", image: "javascript.png" },
  { name: "TypeScript", image: "typescript.png" },
  { name: "jQuery", image: "jquery.png" },
  { name: "Bootstrap 5", image: "bootstrap.png" },
  { name: "Tailwind CSS", image: "tailwind.png" },
  { name: "Material UI", image: "mui.png" },
  { name: "AJAX", image: "ajax1.png" },
  { name: "PHP 8", image: "php8.png" },
  { name: "My SQL", image: "mysql.png" },
  { name: "Node.js", image: "nodejs.png" },
  { name: "React.js", image: "reactjs.png" },
  { name: "Next.js", image: "nextjs.png" },
  { name: "Mongo DB", image: "mongodb.png" },
  { name: "Firebase", image: "firebase.png" },
];
const tools = [
  { name: "Illustration", image: "illustrator.png" },
  { name: "Photoshop", image: "photoshop.png" },
  { name: "XD", image: "xd.png" },
  { name: "Figma", image: "figma.png" },
  { name: "Framer", image: "framer.png" },
  { name: "Redux", image: "redux.png" },
  { name: "NPM", image: "npm.png" },
  { name: "GIT", image: "git.png" },
  { name: "GitHub", image: "github.png" },
  { name: "Docker", image: "docker.png" },
  { name: "PostgreSQL", image: "postgresql.png" },
  { name: "Postman", image: "postman.png" },
  { name: "VS Code", image: "vscode.png" },
  { name: "Wordpress", image: "wordpress.png" },
  { name: "AWS", image: "aws.png" },
  { name: "Netlify", image: "netlify.png" },
  { name: "Woocommerce", image: "woocommerce.png" },
];

function Skillsimages() {
  return (
    <div className="absolute left-0 w-full">
      <Swiper
        spaceBetween={45}
        loop={true}
        modules={[Autoplay]}
        slidesPerView={"auto"}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          340: {
            slidesPerView: 4,
          },
          639: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 7,
          },
          1280: {
            slidesPerView: 8,
          },
          1440: {
            slidesPerView: 10,
          },
          1700: {
            slidesPerView: 12,
          },
        }}
        autoplay={{ delay: 1000, speed: 2500 }}
        className="w-full"
      >
        {skills.map((skill, index) => {
          return (
            <SwiperSlide className="" key={index}>
              <Image
                src={"/img/" + skill.image}
                alt={skill.name + " logo collected from iconscout.com"}
                width={60}
                height={60}
                className="m-auto max-h-full w-full max-w-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
function Toolsimages() {
  return (
    <div className="absolute left-0 w-full">
      <Swiper
        spaceBetween={45}
        loop={true}
        modules={[Autoplay]}
        slidesPerView={"auto"}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          340: {
            slidesPerView: 4,
          },
          639: {
            slidesPerView: 5,
          },
          768: {
            slidesPerView: 6,
          },
          1024: {
            slidesPerView: 7,
          },
          1280: {
            slidesPerView: 8,
          },
          1440: {
            slidesPerView: 10,
          },
          1700: {
            slidesPerView: 12,
          },
        }}
        autoplay={{ delay: 1000, speed: 2500 }}
        className="w-full"
      >
        {tools.map((tool, index) => {
          return (
            <SwiperSlide className="" key={index}>
              <Image
                src={"/img/" + tool.image}
                alt={tool.name + " logo collected from iconscout.com"}
                width={60}
                height={60}
                className="m-auto max-h-full w-full max-w-full"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export { Toolsimages, Skillsimages };
