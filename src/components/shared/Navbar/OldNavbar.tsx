import Image from 'next/image';
import Link from 'next/link';
import dylan from '@/../public/images/dylan.png';
import titanIcon from '@/../public/images/titanIcon.png';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useState } from 'react';

const Navbar = (): JSX.Element => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const [expandMenu, setExpandMenu] = useState(false);

  const logout = () => {
    supabase.auth.signOut().catch((e) => {
      console.log(e);
    });
  };

  return (
    <div className="flex justify-between px-40 flex-wrap bg-primary text-white font-sans font-bold p-3 z-[1]">
      <div className="flex items-center">
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
        <Link className="hover:underline" href="/news">
          News
        </Link>
        <Link className="hover:underline" href="/donate">
          Donate
        </Link>
      </div>

      <div className="flex items-center text-sm px-2">
        {session !== null ? (
          <div className="">
            <button className="hover:outline hover:outline-3 hover:outline-gray-200/50 rounded-full overflow-hidden w-10 h-10 relative flex items-center justify-center">
              <Image
                src={dylan}
                className="h-full inline mx-0 my-auto object-cover"
                alt="dylan"
              />
            </button>
          </div>
        ) : (
          <div className="flex justify-center flex-wrap items-center space-x-3">
            <Link className="hover:underline" href="/signup">
              Sign up
            </Link>
            <Link className="hover:underline" href="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
