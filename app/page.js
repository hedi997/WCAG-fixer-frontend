import About from "./components/about";
import Subheading from "./components/subheading";
import Herosection from "./components/herosection";

export default function Home() {
  return (
    <div>
      <Herosection />
      <Subheading />
      <About />
    </div>
  );
}
