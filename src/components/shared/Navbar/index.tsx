import Image from "next/image";
import Link from "next/link";
import titanIcon from "@/../public/images/titanIcon.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="z-10 flex justify-center flex-wrap p-4 bg-primary md:px-64 text-white font-sans font-bold">
      <div className="md:flex">
        <Link className="flex items-center space-x-2 px-5" href="/">
          <Image src={titanIcon} alt="icon" width={30} height={30} />
          <div>Gunn High School | Alumni</div>
        </Link>
      </div>

      <div className="flex justify-center flex-wrap flex-1 items-center space-x-4 text-sm m-2">
        <Link className="hover:underline" href="/team">
          Team
        </Link>
        <Link className="hover:underline" href="/classmates">
          Classmates
        </Link>
        <Link className="hover:underline" href="/travel">
          Travel
        </Link>
        <Link className="hover:underline" href="/donate">
          Donate
        </Link>
        <Link className="hover:underline" href="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
