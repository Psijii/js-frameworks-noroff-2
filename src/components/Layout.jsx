/**
 * Represents the layout component of the application.
 * It includes the header, navigation, main content, and footer.
 * @returns {JSX.Element} The rendered layout component.
 */
import Header from "./ui/Header";
import Nav from "./ui/Nav";
import Footer from "./ui/Footer";

import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
