"use client";

import { useState } from "react";

export default function InputComponent() {
  const [url, setUrl] = useState("");
  const [answer, setAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  async function handleScan() {
    await fetch("http://localhost:5009/scanner", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: url,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAnswer(data.content);
        setShowAnswer(true);
      });
  }

  return (
    <>
      <div className="h-auto w-full flex justify-center items-center flex-col bg-[#01353F]">
        <div className="h-full w-[500px] flex justify-between items-center flex-col text-[#FDFEFE]">
          <h1 className="text-5xl mt-6">Try it out for free!</h1>
          <p className="text-lg text-[#FDFEFE] mt-5">
            Type in your URL below to get a preview of how our tool can help you
            optimize your accessibility:
          </p>
          <input
            type="text"
            placeholder="Type your URL here..."
            className="border border-[#001F25 py-2 text-center rounded-full my-10 w-72 italic text-[#012931]"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          ></input>
          <button
            onClick={handleScan}
            className=" bg-[#012931] text-white rounded-xl  hover:text-gray-500 uppercase font-bold py-3 px-7"
          >
            Scan website
          </button>
        </div>
        {showAnswer && (
          <div className="h-[500px] w-[700px] overflow-y-auto overflow-x-auto m-10">
            <pre style={{ wordWrap: "break-word" }}>{answer}</pre>
          </div>
        )}
        <button onClick={() => console.log(answer)}>LOG</button>
      </div>
    </>
  );
}
