"use client";

export default function Nav({ children }) {
  return (
    <nav className="bg-gray-300 max-w-screen h-16 flex items-center relative">
      <div className="flex flex-row w-full xl:max-w-[90rem] xl:mx-auto justify-end items-center px-8 py-8 text-black font-bold">
        <button
          className=" bg-black text-white rounded-xl  hover:text-gray-500 uppercase py-3 px-7 mr-24"
          href="/"
        >
          Download
        </button>
        <ul className="flex flex-row gap-8">{children}</ul>
      </div>
    </nav>
  );
}
