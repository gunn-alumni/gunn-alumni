import Image from "next/image";
import Link from "next/link";
import titanIcon from "@/../public/images/titanIcon.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="flex justify-around flex-wrap bg-primary text-white font-sans font-bold p-3">
      <div className="">
        <Link className="flex items-center space-x-2" href="/">
          <Image src={titanIcon} alt="icon" width={30} height={30} />
          <div>Gunn High School | Alumni</div>
        </Link>
      </div>

      <div className="flex justify-center flex-wrap items-center text-sm space-x-3 px-3">
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
      </div>
    </div>
  );
};

export default Navbar;
