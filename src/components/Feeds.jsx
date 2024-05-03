import React from "react";

function FeedTitle({ children }) {
  return (
    <h1 className="text-left font-bold text-amber-500 text-3xl mb-4">
      {children}
    </h1>
  );
}

function Educations() {
  function Functions({ color = "#000000", size = 32 }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        viewBox="0 0 256 256"
        width={size + "px"}
        height={size + "px"}
      >
        <path d="M208,40a8,8,0,0,1-8,8H170.71a24,24,0,0,0-23.62,19.71L137.59,120H184a8,8,0,0,1,0,16H134.68l-10,55.16A40,40,0,0,1,85.29,224H56a8,8,0,0,1,0-16H85.29a24,24,0,0,0,23.62-19.71l9.5-52.29H72a8,8,0,0,1,0-16h49.32l10-55.16A40,40,0,0,1,170.71,32H200A8,8,0,0,1,208,40Z"></path>
      </svg>
    );
  }
  const educations = [
    {
      id: 1,
      duration: "2023 - Current",
      title: "Masters In Computer Applications",
      institution: "Brainware University",
    },
    {
      id: 2,
      duration: "2020 - 2023",
      title: "B. Com Hons. (Accounting & Finance)",
      institution: "Calcutta University",
    },
    {
      id: 3,
      duration: "2020",
      title: "Higher Secondary Education",
      institution: "Sodepur High School / WBCHSE",
    },
    {
      id: 4,
      duration: "2018",
      title: "Secondary Education",
      institution: "Kalyan Nagar Vidyapith / WBBSE",
    },
  ];

  return (
    <ul
      aria-label="Colored activity feed"
      role="feed"
      className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 w-full"
    >
      {educations.map((education) => (
        <li
          role="article"
          className="relative pl-6 leading-12"
          key={education.id}
        >
          <div className="flex align-middle items-center justify-center">
            <div className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 text-white -translate-x-1/2 rounded-full bg-amber-500 ring-2 ring-white ">
              <Functions size={20} color="#0f172a" />
            </div>
            <div className="flex flex-col flex-1 gap-0 text-base font-extrabold text-amber-600 indent-2">
              {education.duration}
            </div>
          </div>
          <div className="text-base text-gray-600 indent-2">
            <div className="font-bold">{education.title}</div>
            <div className="indent-2">{education.institution}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Experiences() {
  function BriefCase({ color = "#000000", size = 32 }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        viewBox="0 0 256 256"
        width={size + "px"}
        height={size + "px"}
      >
        <path d="M216,56H176V48a24,24,0,0,0-24-24H104A24,24,0,0,0,80,48v8H40A16,16,0,0,0,24,72V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V72A16,16,0,0,0,216,56ZM96,48a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM216,72v41.61A184,184,0,0,1,128,136a184.07,184.07,0,0,1-88-22.38V72Zm0,128H40V131.64A200.19,200.19,0,0,0,128,152a200.25,200.25,0,0,0,88-20.37V200ZM104,112a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H112A8,8,0,0,1,104,112Z"></path>
      </svg>
    );
  }
  const experiences = [
    {
      id: 1,
      duration: "Sep, 2023 - Current",
      title: "Graphics & Web Designer",
      company: "Speedigo Engineering & Technology",
      work: "Part-time graphic designer and web developer",
    },
  ];

  return (
    <ul
      aria-label="Colored activity feed"
      role="feed"
      className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 w-full"
    >
      {experiences.map((experience) => (
        <li
          role="article"
          className="relative pl-6 leading-12"
          key={experience.id}
        >
          <div className="flex align-middle items-center justify-center">
            <div className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 text-white -translate-x-1/2 rounded-full bg-amber-500 ring-2 ring-white ">
              <BriefCase size={20} color="#0f172a" />
            </div>
            <div className="flex flex-col flex-1 gap-0 text-base font-extrabold text-amber-600 indent-2">
              {experience.duration}
            </div>
          </div>
          <div className="text-base text-gray-600 indent-2">
            <div className="font-bold">{experience.title}</div>
            <div className="indent-2">{experience.company}</div>
            <div className="indent-2">{experience.work}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Certificates() {
  function Pencil({ color = "#000000", size = 32 }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={color}
        viewBox="0 0 256 256"
        width={size + "px"}
        height={size + "px"}
      >
        <path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM88,192a16,16,0,0,1,32,0v23.59a88,88,0,0,1-32-9.22Zm48,0a16,16,0,0,1,32,0v14.37a88,88,0,0,1-32,9.22Zm-28.73-56h41.46l11.58,25.1A31.93,31.93,0,0,0,128,170.87a31.93,31.93,0,0,0-32.31-9.77Zm7.39-16L128,91.09,141.34,120Zm75.56,70.23c-2,2-4.08,3.87-6.22,5.64V176a7.91,7.91,0,0,0-.74-3.35l-48-104a8,8,0,0,0-14.52,0l-48,104A7.91,7.91,0,0,0,72,176v19.87c-2.14-1.77-4.22-3.64-6.22-5.64a88,88,0,1,1,124.44,0Z"></path>
      </svg>
    );
  }
  const certificates = [
    {
      id: 1,
      duration: "2023",
      title: "Certificate In Web Design",
      institution: "Anudip Foundation (Naihati)",
    },
    {
      id: 2,
      duration: "2021",
      title: "Certificate Graphics & 3D Animation",
      institution: "Mopple Institution Of Animation & Design",
    },
  ];

  return (
    <ul
      aria-label="Colored activity feed"
      role="feed"
      className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 w-full"
    >
      {certificates.map((certificate) => (
        <li
          role="article"
          className="relative pl-6 leading-12"
          key={certificate.id}
        >
          <div className="flex align-middle items-center justify-center">
            <div className="absolute left-0 z-10 flex items-center justify-center w-8 h-8 text-white -translate-x-1/2 rounded-full bg-amber-500 ring-2 ring-white ">
              <Pencil size={20} color="#0f172a" />
            </div>
            <div className="flex flex-col flex-1 gap-0 text-base font-extrabold text-amber-600 indent-2">
              {certificate.duration}
            </div>
          </div>
          <div className="text-base text-gray-600 indent-2">
            <div className="font-bold">{certificate.title}</div>
            <div className="indent-2">{certificate.institution}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export { Educations, Experiences, Certificates, FeedTitle };
