export default function Home() {
  return (
    <main>
      <section className="flex items-center justify-center align-middle m-10 gap-44">
        <div className="h-[200px] w-[300px] bg-gray-200"></div>
        <div className="flex flex-col w-[569px] h-[232px] p-3 gap-3 break-all">
          <h2 className="text-5xl font-bold">SUBHEADING</h2>
          <p className="text-xl w-[549px]">
            InfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotextInfotext
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center align-middle gap-44">
        <div className="flex flex-col gap-8">
          <h3 className="text-5xl font-bold">SUBHEADING</h3>
          <h4 className="text-3xl font-bold">SUBSUBHEADING</h4>
          <p className="text-xl italic">“QUOTEQUOTEQUOTEQUOTE”</p>

          <div className="bg-black text-white w-[221px] h-[64px] rounded-2xl flex justify-center items-center">
            <p>BUTTON PLACEHOLDER</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-[330px] h-[500px] bg-gray-200"></div>
          <div className="flex flex-col gap-4 justify-center">
            <div className="w-[132px] h-[200px] bg-gray-200"></div>
            <div className="w-[132px] h-[200px] bg-gray-200"></div>
          </div>
        </div>
      </section>
    </main>
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
