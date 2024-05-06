"use client";

//import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
//import Modal from "./Modal"; // Import your modal component

export default function Herosection() {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5009/pa11y/test?url=${encodeURIComponent(url)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      setResults(data);
      setShowModal(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main>
      <div className="container mx-auto relative max-w-5xl sm:pt-24 lg:pt-32 bg-gradient-to-b from-blue-200 to-blue-50">
        <h1 className="text-gray-900 text-7xl font-bold font-lato break-words text-center">
          EaseAccess
        </h1>
        <form
          className="sm:mt-10 flex justify-center space-x-6 text-sm pt-20 bottom-20 p-4"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Enter your url..."
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="bg-gray-50 text-black font-semibold h-12 px-6 rounded-lg flex-grow focus:outline-gray-50 focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          />
          <button
            type="submit"
            className="bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-gray-50 font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
          >
            Try it here
          </button>
        </form>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <div>
              <h2>Test Results</h2>
              <pre>{JSON.stringify(results, null, 2)}</pre>
            </div>
          </Modal>
        )}
      </div>
    </main>
  );
}

const Modal = ({ onClose, children }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            {children}
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={onClose}
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-slate-900 text-base font-medium text-gray-50 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
