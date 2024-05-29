import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex justify-between items-center flex-col h-[300px] w-full">
        <h1 className="text-7xl mt-8 font-bold text-[#012931]">ABOUT</h1>
        <h1 className="text-5xl mt-8 text-[#012931]">This is how it works</h1>
      </div>
      <div className="flex justify-center items-center h-[1000px]">
        <div className=" w-full flex justify-center items-center flex-col">
          <div className="w-[400px] "></div>
          <div className="flex w-[850px] justify-between items-center mt-[70px]">
            <div className="flex items-start flex-col">
              <div className="flex justify-center items-center flex-col">
                <p className="w-[260px] text-center mb-[20px] text-[#012931]">
                  1. Download the tool and open
                </p>
                <div
                  className="w-[350px] h-[350px] border-2 border-black bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/about1.png')",
                    backgroundSize: "350px 350px",
                  }}
                ></div>
              </div>
              <div className="flex justify-center items-center flex-col mt-[100px]">
                <p className="w-[350px] text-center mb-[20px] text-[#012931]">
                  3. Get answers to what's missing while it's easily shown to
                  you with the red markers
                </p>
                <div
                  className="w-[350px] h-[350px] border-2 border-black bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/about3.png')",
                    backgroundSize: "350px 350px",
                  }}
                ></div>
              </div>
            </div>
            <div className="mt-[90px]">
              <div className="flex mb-[10px]">
                <Image
                  src={"/images/pil 1.png"}
                  alt="arrow symbol"
                  height="70"
                  width="70"
                />
                <p className="w-[260px] text-center text-[#012931]">
                  2. Choose which accessibility you want to inspect
                </p>
              </div>
              <div
                className="w-[350px] h-[350px] border-2 border-black bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/about2.png')",
                  backgroundSize: "350px 350px",
                }}
              ></div>
              <Image
                src={"/images/pil 2.png"}
                alt="arrow symbol"
                height="70"
                width="70"
                className="mt-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col h-[300px]">
        <button className="bg-[#012931] text-white rounded-xl hover:text-gray-500 uppercase font-bold py-3 px-7 w-[200px] h-[60px]">
          Download
        </button>
        <p className="text-center text-[#012931] mt-6">
          Download here to get started
        </p>
      </div>
      <div className="flex justify-center items-center flex-col h-[700px]">
        <div>
          <h1 className="text-4xl text-[#012931]">Disibility Impacts Us All</h1>
          <p className="w-[500px] text-[#012931] mt-6">
            Disability impacts us all by challenging societal norms, fostering
            empathy, and promoting inclusivity. <br /> <br /> In WCAG,
            considering disability ensures digital content is accessible to
            everyone, fostering equal opportunities and usability for all users.
          </p>
        </div>
        <div
          className="w-[700px] h-[400px] border-2 rounded-md border-black bg-no-repeat mt-20"
          style={{
            backgroundImage: "url('/images/diagram.png')",
            backgroundSize: "700px 400px",
          }}
        ></div>
      </div>
      <div className="flex justify-center items-center h-[600px] gap-28">
        <div className="flex justify-between items-center w-[460px]">
          <div className="w-[250px] h-[400px] border-4 border-gray-300"></div>
          <div className="w-[175px] h-[300px] border-4 border-gray-300"></div>
        </div>
        <div>
          <h1 className="text-5xl text-[#012931]">Why EaseAcces?</h1>
          <p className="w-[500px] text-[#012931] mt-6">
            EaseAccess is a vital WCAG product designed to ensure digital
            content accessibility for all users, regardless of their abilities
            or disabilities. By adhering to the WCAG standards, EaseAccess
            facilitates inclusivity and equal access to websites, applications,
            and digital documents. <br /> <br />
            Through its user-centered design and compliance with accessibility
            guidelines, EaseAccess not only meets legal requirements but also
            enhances user experience and promotes digital equity. With
            EaseAccess, companies and organizations demonstrate their commitment
            to accessibility, fostering a more inclusive digital environment for
            everyone.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center h-[70px]">
        <button className="bg-[#012931] text-white rounded-xl hover:text-gray-500 uppercase font-bold py-3 px-7 w-[200px] h-[60px]">
          Download
        </button>
      </div>
    </div>
  );
}
