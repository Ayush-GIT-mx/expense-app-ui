import { Navbar } from "flowbite-react";
import { LogIn, Receipt, User2 } from "lucide-react";

const HomePageNavbar = () => {
  return (
    <>
      <Navbar fluid>
        <Navbar.Brand href="/">
          <Receipt />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowtrack
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            href="/about"
            className="hover:text-black font-bold"
          >
            About
          </Navbar.Link>
          <Navbar.Link
            href="/services"
            className="hover:text-black font-bold"
          >
            Services
          </Navbar.Link>
          <Navbar.Link
            href="/login"
            className="hover:text-black font-bold"
          >
            <LogIn className="inline h-5 w-5" /> Login
          </Navbar.Link>
          <Navbar.Link
            href="/sign-up"
            className="hover:text-black font-bold"
          >
            <User2 className="inline h-5 w-5" /> Sign-up
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HomePageNavbar;

