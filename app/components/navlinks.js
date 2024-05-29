import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <li>
        <Link href={"/about"}>ABOUT</Link>
      </li>
      <li>
        <Link href={"/"}>HOME</Link>
      </li>
      <li>
        <Link className="hover:text-gray-500" href="/#">
          NAV
        </Link>
      </li>
    </>
  );
}
