import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Navbar />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
