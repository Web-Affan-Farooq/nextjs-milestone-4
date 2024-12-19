import React from "react";
import "./style.css";

const Section_2 = () => {
  return (
    <section className="w-full bg-black text-white h-auto py-10">

      <div className="flex flex-row flex-wrap gap-5 justify-center items-center">
        <div className="md:w-[60vw]">
          <h1 className="text-3xl font-bold">
            Boost your <span className="text-green">knowledge </span>with <br /> a vast collection of blogs
          </h1>
        </div>
        <div className="w-[300px]">
          <p className="text-[15px] text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            non laudantium nam quas atque aut eius est temporibus{" "}
          </p>
        </div>
      </div>

      <br /><br />
      {/* cards section 2 */}

      <div className="w-full flex flex-row flex-wrap gap-0 justify-center items-center">

        <div className="group card rounded-lg p-6 w-[350px] bg-cardgray transition-all overflow-hidden duration-500 ease-in-out h-auto hover:h-[300px] hover:bg-blue-600 hover:scale-105">
          <span className="text-green font-bold">01.</span>
          <div className="flex flex-col gap-8">
            <h2 className="text-[20px] font-bold">Services for any level of expertise</h2>

            <p className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out text-gray-400 text-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat pariatur quibusdam saepe </p>

            <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out text-white">
              <span className="text-[16px]">Learn more &nbsp; <i className="fa-solid fa-arrow-right"></i></span>
            </div>
          </div>

        </div>

        <div className="group card rounded-lg p-6 w-[350px] bg-cardgray transition-all overflow-hidden duration-500 ease-in-out h-auto hover:h-[300px] hover:bg-blue-600 hover:scale-105">
          <span className="text-green font-bold">02.</span>
          <div className="flex flex-col gap-8">
            <h2 className="text-[20px] font-bold">Services for any level of expertise</h2>

            <p className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out text-gray-400 text-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat pariatur quibusdam saepe </p>

            <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out text-white">
              <span className="text-[16px]">Learn more &nbsp; <i className="fa-solid fa-arrow-right"></i></span>
            </div>
          </div>

        </div>

        <div className="group card rounded-lg p-6 w-[350px] bg-cardgray transition-all overflow-hidden duration-500 ease-in-out h-auto hover:h-[300px] hover:bg-blue-600 hover:scale-105">
          <span className="text-green font-bold">03.</span>
          <div className="flex flex-col gap-8">
            <h2 className="text-[20px] font-bold">Services for any level of expertise</h2>

            <p className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out text-gray-400 text-[15px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat pariatur quibusdam saepe </p>

            <div className="group-hover:opacity-100 opacity-0 transition-opacity duration-300 ease-in-out text-white">
              <span className="text-[16px]">Learn more &nbsp; <i className="fa-solid fa-arrow-right"></i></span>
            </div>
          </div>

        </div>

      </div>


    </section>
  );
};

export default Section_2;


