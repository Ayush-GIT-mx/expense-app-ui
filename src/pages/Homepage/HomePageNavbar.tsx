import { Navbar } from "flowbite-react";
import { LogIn, Receipt, User2 } from "lucide-react";

const HomePageNavbar = () => {
  return (
    <>
      <Navbar fluid>
        {/* Add A Brand Logo AfterWards for now Lucid Works*/}
        <Navbar.Brand href="/">
          <Receipt />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            FlowTrack
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/">
            Home
          </Navbar.Link>
          <Navbar.Link href="/about">About</Navbar.Link>
          <Navbar.Link href="/services">Services</Navbar.Link>
          <Navbar.Link href="/login">
            <LogIn className="inline h-5 w-5" /> Login
          </Navbar.Link>
          <Navbar.Link href="/sign-up">
            <User2 className="inline h-5 w-5" /> Sign-up
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default HomePageNavbar;
