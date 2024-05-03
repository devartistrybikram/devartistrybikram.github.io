import React, { useState, useRef, useEffect } from "react";
import { Skillsimages, Toolsimages } from "./Imgsliders";
import Imgsliders from "./Imgsliders";


export default function TabsPill() {
  const [tabSelected, setTabSelected] = useState({
    currentTab: 1,
    noTabs: 3,
  });

  const wrapperRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode === 39) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab >= 1 &&
          tabSelected.currentTab < tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab + 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: 1,
          });
        }
      }
    }

    if (e.keyCode === 37) {
      if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
        if (
          tabSelected.currentTab > 1 &&
          tabSelected.currentTab <= tabSelected.noTabs
        ) {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.currentTab - 1,
          });
        } else {
          setTabSelected({
            ...tabSelected,
            currentTab: tabSelected.noTabs,
          });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <>
      <section className="w-full relative" aria-multiselectable="false">
        <div className="rounded min-h-24">
          <div
            className={`px-1 py-2 text-base ${tabSelected.currentTab === 1 ? "" : "hidden"
              }`}
            id="tab-panel-1f"
            aria-hidden={`${tabSelected.currentTab === 1 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-1f"
            tabIndex="-1"
          >
            <Skillsimages />
          </div>
          <div
            className={`px-1 py-2 text-base ${tabSelected.currentTab === 2 ? "" : "hidden"
              }`}
            id="tab-panel-2f"
            aria-hidden={`${tabSelected.currentTab === 2 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-2f"
            tabIndex="-1"
          >
            <Toolsimages />
          </div>
          {/* <div
            className={`px-1 py-2 text-base ${tabSelected.currentTab === 3 ? "" : "hidden"
              }`}
            id="tab-panel-3f"
            aria-hidden={`${tabSelected.currentTab === 3 ? "true" : "false"}`}
            role="tabpanel"
            aria-labelledby="tab-label-3f"
            tabindex="-1"
          >
            <p>
              Even though there is no certainty that the expected results of our
              work will manifest, we have to remain committed to our work and
              duties; because, even if the results are slated to arrive, they
              cannot do so without the performance of work.
            </p>
          </div> */}
        </div>
        <ul
          className="flex items-center gap-1 p-1 w-min border-2 rounded-[28px]"
          role="tablist"
          ref={wrapperRef}
        >
          <li className="" role="presentation">
            <button
              className={`inline-flex rounded-3xl h-8 items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 1
                ? "bg-amber-500 text-white hover:bg-amber-600 disabled:bg-amber-300"
                : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-amber-100 hover:stroke-amber-500 hover:text-amber-500 focus:bg-amber-100 focus:stroke-amber-600 focus:text-amber-600 disabled:text-amber-300"
                }`}
              id="tab-label-1f"
              role="tab"
              aria-setsize="3"
              aria-posinset="1"
              tabIndex={`${tabSelected.currentTab === 1 ? "0" : "-1"}`}
              aria-controls="tab-panel-1f"
              aria-selected={`${tabSelected.currentTab === 1 ? "true" : "false"
                }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 1 })}
            >
              <span>Skills</span>
            </button>
          </li>
          <li className="" role="presentation">
            <button
              className={`inline-flex rounded-3xl h-8 items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 2
                ? "bg-amber-500 text-white hover:bg-amber-600 disabled:bg-amber-300"
                : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-amber-100 hover:stroke-amber-500 hover:text-amber-500 focus:bg-amber-100 focus:stroke-amber-600 focus:text-amber-600 disabled:text-amber-300"
                }`}
              id="tab-label-2f"
              role="tab"
              aria-setsize="3"
              aria-posinset="2"
              tabIndex={`${tabSelected.currentTab === 2 ? "0" : "-1"}`}
              aria-controls="tab-panel-2f"
              aria-selected={`${tabSelected.currentTab === 2 ? "true" : "false"
                }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 2 })}
            >
              <span>Tools</span>
            </button>
          </li>
          {/* <li className="" role="presentation">
            <button
              className={`inline-flex rounded-3xl h-8 items-center justify-center gap-2 whitespace-nowrap px-6 text-sm font-medium tracking-wide transition duration-300 focus-visible:outline-none disabled:cursor-not-allowed ${tabSelected.currentTab === 3
                ? "bg-amber-500 text-white hover:bg-amber-600 disabled:bg-amber-300"
                : "w-full justify-self-center stroke-slate-700 text-slate-700 hover:bg-amber-100 hover:stroke-amber-500 hover:text-amber-500 focus:bg-amber-100 focus:stroke-amber-600 focus:text-amber-600 disabled:text-amber-300"
                }`}
              id="tab-label-3f"
              role="tab"
              aria-setsize="3"
              aria-posinset="3"
              tabindex={`${tabSelected.currentTab === 3 ? "0" : "-1"}`}
              aria-controls="tab-panel-3ei"
              aria-selected={`${tabSelected.currentTab === 3 ? "true" : "false"
                }`}
              onClick={() => setTabSelected({ ...tabSelected, currentTab: 3 })}
            >
              <span className="order-2">Tab 3</span>
            </button>
          </li> */}
        </ul >
      </section >
    </>
  );
}
