import Image from "next/image";
import Link from "next/link";
import titanIcon from "../../public/images/titanIcon.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="w-screen p-4 md:px-16 md:py-3 bg-primary text-white font-sans font-bold">
      <div className="hidden md:flex items-center">
        <Link className="flex items-center space-x-2 mr-16" href="/">
          <Image src={titanIcon} alt="icon" />
          <div>Gunn High School | Alumni</div>
        </Link>
        <div className="flex flex-1 items-center space-x-8 text-sm">
          <Link href="/about">About</Link>
          <Link href="/classmates">Classmates</Link>
          <Link href="/travel">Travel</Link>
          <Link href="/donate">Donate</Link>
        </div>
        <div className="flex items-center">
          <button>Login</button>
        </div>
      </div>
      <div className="flex md:hidden justify-between">
        <Link className="flex items-center space-x-3" href="/">
          <Image src={titanIcon} alt="icon" />
          <div className="text-sm">Gunn High School | Alumni</div>
        </Link>
        <button>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
