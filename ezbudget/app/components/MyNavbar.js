import { Navbar, NavbarBrand } from "flowbite-react";
import Link from "next/link";

export default function MyNavbar() {
  return (
    <Navbar fluid rounded className="mb-2 !bg-transparent bg-green-400">
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          EZ Budget v0.0.1
        </span>
      </NavbarBrand>
    </Navbar>
  );
}
