"use client";

import { useState } from "react";

export default function InputComponent() {
    const [url, setUrl] = useState("");
    const [answer, setAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    async function handleScan() {
        setShowAnswer(false);
        setIsLoading(true);

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
                setIsLoading(false);
                setShowAnswer(true);
            });
    }

    return (
        <>
            <div className="h-auto w-full flex justify-center items-center flex-col bg-[#01353F]">
                <div className="h-full w-[500px] flex justify-between items-center flex-col text-[#FDFEFE]">
                    <h1 className="text-5xl m-10">Try it out for free!</h1>
                    <p className="text-lg text-[#FDFEFE] mt-5">
                        Type in your URL below to get a preview of how our tool can help you
                        optimize your accessibility:
                    </p>
                    <input
                        type="text"
                        placeholder="Type your URL here..."
                        className="border border-[#001F25 py-2 text-center rounded-full my-10 w-72 italic text-[#012931]"
                        onChange={(e) => setUrl(e.target.value)}
                        onKeyDown={async (e) => {
                            if (e.key === "Enter") {
                                await handleScan();
                            }
                        }}
                        value={url}
                    ></input>
                    <button
                        onClick={handleScan}
                        className=" bg-[#012931] text-white rounded-xl  hover:text-gray-500 uppercase font-bold py-3 px-7 m-10"
                    >
                        Scan website
                    </button>
                </div>
                {isLoading && (
                    <div>
                        <h1 className="text-white m-10">Loading...</h1>
                    </div>
                )}
                {showAnswer && (
                    <div className="h-[400px] max-w-[700px] overflow-y-auto overflow-x-auto m-5 text-white flex"> {/* Flexbox layout tillagd */}
                        <div className="w-1/2 p-4"> {/* Kolumn styling tillagd */}
                            <h2 className="text-2xl font-bold">Violations</h2>
                            <ul className="list-disc ml-5"> {/* Lista styling tillagd */}
                                {answer.split('\n').map((line, index) => {
                                    if (line.startsWith('-')) return <li key={index}>{line.slice(2)}</li>; // Ta bort "-" från början av texten
                                    return null;
                                })}
                            </ul>
                        </div>
                        <div className="w-1/2 p-4"> {/* Kolumn styling tillagd */}
                            <h2 className="text-2xl font-bold">Solutions</h2>
                            <ul className="list-disc ml-5"> {/* Lista styling tillagd */}
                                {answer.split('\n').map((line, index) => {
                                    if (line.startsWith('-')) return <li key={index}>{line.slice(2)}</li>; // Ta bort "-" från början av texten
                                    return null;
                                })}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
