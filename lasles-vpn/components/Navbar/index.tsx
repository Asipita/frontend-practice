import Container from "../Container";
import Logo from "../../public/asset/Logo.svg";
import Link from "next/link";

export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  return (
    <Container>
      <nav className="flex justify-between py-12 items-center">
        <a href="/">
          <Logo />
        </a>

        <ul className="flex gap-10 text-[#4F5665] font-normal">
          <li>
            <Link href="#!">About</Link>
          </li>
          <li>
            <Link href="#!">Features</Link>
          </li>
          <li>
            <Link href="#!">Pricing</Link>
          </li>
          <li>
            <Link href="#!">Testimonials</Link>
          </li>
          <li>
            <Link href="#!">Help</Link>
          </li>
        </ul>

        <ul className="flex items-center">
          <li className="px-11 font-medium text-[#0B132A]">
            <Link href="#!">Sign In</Link>
          </li>
          <li className="py-3 px-11 border-2 border-[#F53855] text-[#F53855] font-medium rounded-full">
            <Link href="#!">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
