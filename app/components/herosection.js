//import Image from "next/image";
import Link from "next/link";

export default function Herosection() {
  return (
    <main>
      <div className="container mx-auto relative max-w-5xl sm:pt-24 lg:pt-32 bg-gradient-to-b from-blue-200 to-blue-50">
        <h1 className="text-gray-900 text-7xl font-bold font-lato break-words text-center">
        EaseAccess
        </h1>
        <div className="sm:mt-10 flex justify-center space-x-6 text-sm pt-20 bottom-20 p-4">
        <input placeholder="Enter your url..." type="text" className="bg-gray-50 text-black font-semibold h-12 px-6 rounded-lg flex-grow focus:outline-gray-50 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" />
          <button className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-gray-50 font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto">
            <Link href="/quiz">Try it here</Link>
          </button>
        </div>
      </div>
    </main>
  );
}
