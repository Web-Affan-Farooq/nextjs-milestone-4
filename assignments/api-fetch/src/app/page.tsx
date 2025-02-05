"use client";

import React from "react";
import Link from "next/link";

// {next:{revalidate:10}} --- revalidate the data ----- ISG
// {next:{cache:"force-cache"}}  -- static site generation
// {next:{cache:"no-store"}} -- server side rendering

const Home = () => {
  return (
    <div
      className={`flex flex-row flex-wrap gap-5 justify-center items-center bg-custom bg-no-repeat bg-center bg-cover p-4 h-screen`}
    >
      <div className="flex flex-row flex-wrap gap-10 items-center justify-center">
<Link href={'/SSG'}>
<div className="text-center">
          <h1 className="text-white text-2xl">Fetching using SSG</h1>
          <button
            className="px-[20px] py-[10px] rounded-lg bg-black text-white font-bold">
            Fetch
          </button>
        </div>
</Link>

<Link href={'/SSR'}>
<div className="text-center">
          <h1 className="text-white text-2xl">Fetching using SSR</h1>
          <button
            className="px-[20px] py-[10px] rounded-lg bg-black text-white font-bold">
            Fetch
          </button>
        </div>
</Link>

        <Link href={'/ISG'}>
        <div className="text-center">
          <h1 className="text-white text-2xl">Fetching using ISG</h1>
          <button
            className="px-[20px] py-[10px] rounded-lg bg-black text-white font-bold">
            Fetch
          </button>
        </div>
        </Link>

      </div>
    </div>
  );
};

export default Home;
