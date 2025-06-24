import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Link from "next/link";

export default function MyNavbar() {
  return (
    <Navbar fluid rounded className="mb-2">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          EZ Budget
        </span>
      </NavbarBrand>
    </Navbar>
  );
}
