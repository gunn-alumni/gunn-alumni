import Image from "next/Image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="z-10 flex justify-center items-center flex-col lg:flex-row p-4 bg-primary text-white font-sans font-bold">
      <Link className="flex items-center space-x-2" href="/">
        <Image
          src={"/images/titanIcon.png"}
          alt="icon"
          width={30}
          height={30}
        />
        <div>Gunn High School | Alumni</div>
      </Link>

      <div className="flex justify-center flex-1 items-center space-x-4 text-sm m-2">
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
