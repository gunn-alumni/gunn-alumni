import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { useState } from 'react';
import { useSession } from '@supabase/auth-helpers-react';
import titanIcon from '@/../public/images/titanIcon.png';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const session = useSession();

  return (
    <nav className="bg-primary">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href="#" className="flex items-center rounded-lg px-4 py-2">
          <Image
            src={titanIcon}
            className="h-8 w-7 mr-4"
            alt="Gunn Alumni Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Gunn Alumni
          </span>
        </a>
        <button
          className="inline-flex items-center p-2 ml-3 text-sm text-white hover:bg-gray-700/30 rounded-lg md:hidden"
          onClick={() => setMenuVisible((b) => !b)}
        >
          <IconContext.Provider value={{ size: '30' }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </button>

        <div
          className={`${
            !menuVisible ? 'hidden' : 'relative'
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-2 md:mt-0 md:border-0">
            {[
              { title: 'Team', to: '/team' },
              { title: 'Classmates', to: '/classmates' },
              { title: 'News', to: '/news' },
              { title: 'Donate', to: '/donate' }
            ].map(({ title, to }) => (
              <li key={title}>
                <a
                  href={to}
                  className="block px-4 py-2 text-white rounded-lg hover:bg-gray-700/30 md:bg-transparent"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:flex">
          <a
            className="block px-4 py-2 text-white rounded-lg hover:bg-gray-700/30 md:bg-transparent"
            href={'/login'}
          >
            Login
          </a>
          <a
            className="block px-4 py-2 text-white rounded-lg md:bg-black md:hover:outline-white md:hover:outline md:hover:outline-2"
            href={'/signup'}
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
