import Image from "next/image";

export default function About() {
  return (
    <main className="mt-[100px]">
      <div className="flex justify-center items-center">
        <div className=" w-full flex justify-center items-center flex-col">
          <div className="w-[400px] ">
            <h1 className="text-center font-bold text-4xl">SÅ FUNKAR DET</h1>
            <p className="text-center">
              Såhär funkar det Såhär funkar det Såhär funkar det Såhär funkar
              detSåhär funkar detSåhär funkar det Såhär funkar detSåhär funkar
              det
            </p>
          </div>
          <div className="flex w-[850px] justify-between items-center mt-[70px]">
            <div className="flex items-start flex-col">
              <div className="flex justify-center items-center flex-col">
                <p className="w-[260px] text-center text-sm mb-[20px]">
                  Såhär funkar det Såhär funkar det Såhär funkar det Såhär
                  funkar
                </p>
                <div className="w-[406px] h-[283px] bg-gray-200 "></div>
              </div>
              <div className="flex justify-center items-center flex-col mt-[100px]">
                <p className="w-[260px] text-center text-sm mb-[20px]">
                  Såhär funkar det Såhär funkar det Såhär funkar det Såhär
                  funkar
                </p>
                <div className="w-[406px] h-[283px] bg-gray-200"></div>
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
                <p className="w-[260px] text-center text-sm">
                  Såhär funkar det Såhär funkar det Såhär funkar det Såhär
                  funkar
                </p>
              </div>
              <div className="w-[406px] h-[283px] bg-gray-200"></div>
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
    </main>
  );
}
