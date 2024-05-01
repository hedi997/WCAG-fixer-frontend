import "./globals.css";
import Nav from "./components/nav";
import NavLinks from "./components/navlinks";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav>
          <NavLinks />
        </Nav>
        {children}
      </body>
    </html>
  );
}
