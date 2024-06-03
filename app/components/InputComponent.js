"use client";

import { useState } from "react";

export default function InputComponent() {
    const [url, setUrl] = useState("");
    const [violations, setViolations] = useState("");
    const [solutions, setSolutions] = useState("");
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
                setViolations(data.content.violations);
                setSolutions(data.content.solutions);
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
                {(isLoading || showAnswer) && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-[#01353F] p-10 rounded-md shadow-lg text-center relative max-w-[700px] w-full">
                            {isLoading ? (
                                <>
                                    <h2 className="text-2xl font-bold text-white mb-4">ACCESSIBILITY CHECK</h2>
                                    <p className="text-white mb-4">SCANNING IN PROCESS</p>
                                    <div className="flex justify-center items-center mb-4">
                                        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24"></div>
                                    </div>
                                    <p className="text-white">We're looking for violations and thinking about solutions...</p>
                                </>
                            ) : (
                                <div className="text-white transition-opacity duration-700 ease-in-out">
                                    <div className="w-full p-4 animate-fade-in"> {/* Kolumn styling och animation tillagd */}
                                        <h2 className="text-2xl font-bold">Violations</h2>
                                        <ul className="list-disc ml-5"> {/* Lista styling tillagd */}
                                            {violations.split('\n').map((line, index) => {
                                                if (line.startsWith('-')) return <li key={index}>{line.slice(2)}</li>; // Ta bort "-" från början av texten
                                                return null;
                                            })}
                                        </ul>
                                    </div>
                                    <div className="w-full p-4 animate-fade-in"> {/* Kolumn styling och animation tillagd */}
                                        <h2 className="text-2xl font-bold">Solutions</h2>
                                        <ul className="list-disc ml-5"> {/* Lista styling tillagd */}
                                            {solutions.split('\n').map((line, index) => {
                                                if (line.startsWith('-')) return <li key={index}>{line.slice(2)}</li>; // Ta bort "-" från början av texten
                                                return null;
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )}
                            <button
                                className="absolute top-2 right-2 text-white bg-red-600 rounded-full h-10 w-10 flex items-center justify-center"
                                onClick={() => { setIsLoading(false); setShowAnswer(false); }}
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
