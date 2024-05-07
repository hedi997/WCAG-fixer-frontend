import "./globals.css";
import Nav from "./components/nav";
import NavLinks from "./components/navlinks";
import Knapp from "./components/knapp";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav>
          <NavLinks />
        </Nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
