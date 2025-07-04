import { Dropdown, DropdownItem, Navbar } from "flowbite-react";
import { CircleUserRound, LogIn, Receipt, User2 } from "lucide-react";

const HomePageNavbar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="/">
        <Receipt className="mr-2 h-6 w-6" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowtrack
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/about" className="font-bold hover:text-black">
          About
        </Navbar.Link>
        <Navbar.Link href="/services" className="font-bold hover:text-black">
          Services
        </Navbar.Link>
        <div className="mx-auto flex gap-10">
          <div className="flex gap-2">
            <Dropdown
              arrowIcon={false}
              inline
              label={<CircleUserRound className="inline h-5 w-5" />}
            >
              <DropdownItem>
                <Navbar.Link
                  href="/login"
                  className="font-bold hover:text-black"
                >
                  <LogIn className="inline h-5 w-5" /> Login
                </Navbar.Link>
              </DropdownItem>
              <DropdownItem>
                <Navbar.Link
                  href="/register"
                  className="font-bold hover:text-black"
                >
                  <User2 className="inline h-5 w-5" /> Sign-up
                </Navbar.Link>
              </DropdownItem>
            </Dropdown>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HomePageNavbar;
