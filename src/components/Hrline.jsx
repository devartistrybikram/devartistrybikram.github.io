import React from 'react'

export default function Hrline({ dataX }) {
  return (
    <div className="w-full m-auto px-3.5">
      <div className={`relative w-full md:w-4/5 lg:w-8/12 m-auto flex items-center h-px border rounded-full before:content-[' '] before:absolute before:top-1/2 before:left-${dataX} before:-translate-x-1/2 before:-translate-y-1/2 before:w-12 before:h-2 before:bg-amber-500 before:rounded-full`}></div>
    </div>
  );
};