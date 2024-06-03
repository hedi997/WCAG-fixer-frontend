"use client";
import Image from "next/image";

export default function Nav({ children }) {
  return (
    <>
      <nav className=" max-w-screen h-16 flex items-center relative">
        <div className="mt-24 ml-8">
          <Image
            src="/images/lastlogo.png"
            alt="Logo"
            width={150}
            height={150}
          />{" "}
        </div>
        <div className="flex flex-row w-full xl:max-w-[90rem] xl:mx-auto justify-end items-center px-8 py-8 text-black font-bold">
          <button
            className=" bg-[#012931] text-white rounded-xl  hover:text-gray-500 uppercase mr-10 h-10 w-28 text-center text-xs"
            href="/"
          >
            Download
          </button>
          <ul className="flex flex-row gap-8 text-[#001F25]">{children}</ul>
        </div>
      </nav>
    </>
  );
}
