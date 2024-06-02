import Link from "next/link";

function Footer() {
  return (
    <div className="h-[200px] flex justify-between items-center">
      <div className="flex justify-center items-center w-[250px] mx-[100px] text-[#001F25]">
        Copyright © 2024 Corporate name All Rights Reserved <br /> <br />
        Corporate name. Streetname 1410 City County 19801 Country
      </div>
      <div className="flex justify-between items-center w-[300px]">
        <img src="./images/Läs mer/Läs mer/Frame 44.png" alt="Facebookslogo" />
        <img src="./images/Läs mer/Frame 45.png" />
        <img src="./images/Läs mer/Frame 46.png" alt="Facebookslogo" />
      </div>
      <div className="w-[200px] mx-[100px]">
        <h1 className="font-bold text-[#001F25]">LINKS</h1>
        <ul className="flex flex-row gap-8 text-[#001F25] my-5">
          <li>
            <Link
              className="hover:text-gray-500 font-bold text-[#001F25] text-lg"
              href="/#"
            >
              Link
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-500 font-bold text-[#001F25] text-lg"
              href="/#"
            >
              Link
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-500 font-bold text-[#001F25] text-lg"
              href="/#"
            >
              Link
            </Link>
          </li>
        </ul>

        {/* <div className="flex justify-between items-center my-6">
          <p>Links</p>
          <p>Links</p>
          <p>Links</p>
        </div> */}
      </div>
    </div>
  );
}

export default Footer;
{
  /* <div className="F1">
        <h1>Kontakt</h1>
        <p>
          Copyright © 2024
          <br />
          Corporate name
          <br />
          All Rights Reserved
          <br />
          <br />
          Corporate name.
          <br />
          Streetname 1410
          <br />
          City County 19801 Country
        </p>
      </div>
      <div className="F2">
        <img src="./images/Läs mer/Läs mer/Frame 44.png" alt="Facebookslogo" />
        <img src="./images/Läs mer/Frame 45.png" />
        <img src="./images/Läs mer/Frame 46.png" alt="Facebookslogo" />
      </div>
      <div className="F3">
        <h1>Någonting</h1>
        <p>Här navigerar vi till andra sidor - L i n k s</p>
      </div> */
}
