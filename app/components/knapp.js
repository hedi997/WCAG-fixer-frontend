import Link from "next/link";

function Knapp() {
  return (
    <button className="Knapp">
      <Link className="link" href={"/"}>
        Skapa
      </Link>
    </button>
  );
}
export default Knapp;
