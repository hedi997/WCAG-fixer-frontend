import Link from "next/link";

export default function NavLinks() {
  return (
    <>
      <li>
        <Link className="hover:text-gray-500" href="/#">
          NAV
        </Link>
      </li>
      <li>
        <Link className="hover:text-gray-500" href="/#">
          NAV
        </Link>
      </li>
      <li>
        <Link className="hover:text-gray-500" href="/#">
          NAV
        </Link>
      </li>
    </>
  );
}
