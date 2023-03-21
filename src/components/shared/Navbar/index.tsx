import Image from "next/image";
import Link from "next/link";
import titanIcon from "@/../public/images/titanIcon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import dylan from "@/../public/images/dylan.png";


const isloggedIn = false;

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

      <div className="flex justify-end flex-wrap items-center text-sm space-x-3 px-2 w-60">

        {isloggedIn?
        <div className="flex flex-col items-center">
          <Link className="peer flex flex-row items-center space-x-3 hover:underline" href="/classmates">
            <p>FirstName LastName</p>
            <Image src={dylan} className=" w-9 h-9 rounded-full" alt="icon"/>
          </Link>
          
          <div className="hidden peer-hover:flex hover:flex flex-col bg-primary p-4 space-x-3 top-12 drop-shadow-lg absolute rounded">
            <ul className="flex flex-col">
              <il>
                <Link className="hover:underline" href="/">Account</Link>
              </il>
              <il>
                <Link className="hover:underline" href="/">Logout</Link>
              </il>
              
            </ul>
          </div>
          
          </div>
        :
        <div className="flex justify-center flex-wrap items-center space-x-3">
          <Link className="hover:underline" href="/"> Sign up </Link>
          <Link className="hover:underline" href="/login"> Login</Link>
        </div>
        }

      </div>

      
    </div>
  );
};

export default Navbar;
