import React from "react";

function Bars({ meter }) {
  return (
    <>
      <div className="flex w-full gap-2">
        <label
          id="p03e-label"
          for="p03e"
          className="order-2 mb-0 text-center text-xs text-slate-500 "
        >
          <span className="sr-only">uploading</span>
          <span className="font-medium ">{meter}%</span>
        </label>
        <progress
          aria-labelledby="p03e-label"
          id="p03e"
          max="100"
          value={meter}
          className="block w-full overflow-hidden rounded bg-slate-100 [&::-webkit-progress-bar]:bg-slate-100 [&::-webkit-progress-value]:bg-amber-500 [&::-moz-progress-bar]:bg-amber-500"
        >
          {meter}%
        </progress>
      </div>
    </>
  );
}

export default function Meter({ name, percentage }) {
  return (
    <div className="my-4 w-full">
      <div className="font-medium text-sm mb-1">{name}</div>
      <Bars meter={percentage} />
    </div>
  );
}
