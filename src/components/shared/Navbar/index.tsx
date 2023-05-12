import Image from 'next/image';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgProfile } from 'react-icons/cg';
import { IconContext } from 'react-icons';
import { useEffect, useRef, useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import titanIcon from '@/../public/images/titanIcon.png';
import Link from 'next/link';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [name, setName] = useState('User Name');
  const menuRef = useRef<HTMLDivElement>(null);

  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    // Handle closing the dropdown menu
    const handleMenuClose = (e: any): void => {
      if (!menuRef.current?.contains(e.target)) {
        setAccountDropdownVisible(false);
      } else {
        setTimeout(() => setAccountDropdownVisible(false), 500);
      }
    };

    document.addEventListener('mousedown', handleMenuClose);

    return () => document.removeEventListener('mousedown', handleMenuClose);
  }, []);

  useEffect(() => {
    if (session !== null) {
      supabase
        .from('profiles')
        .select('preferred_name')
        .eq('id', session.user.id)
        .then(({ data, error }) => {
          if (error) console.log(error);
          else {
            setName(data[0].preferred_name);
          }
        });
    }
  }, [session, supabase]);

  return (
    <nav
      className={`${
        menuVisible && 'h-screen fixed'
      } md:h-auto md:block z-20 w-full bg-primary`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href="/" className="flex items-center rounded-lg px-4 py-2">
          <Image
            src={titanIcon}
            className="h-8 w-7 mr-4"
            alt="Gunn Alumni Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            Gunn Alumni
          </span>
        </Link>
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
          <ul className="flex flex-col font-medium p-4 space-y-4 md:space-y-0 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-2 md:mt-0 md:border-0">
            {session === null ? (
              <>
                <div className="md:order-2 md:ml-64">
                  <Link
                    href={'/login'}
                    className="block px-4 py-2 text-center outline md:outline-none text-white text-xl font-bold md:text-base md:font-normal rounded-lg hover:bg-gray-700/30 md:bg-transparent"
                  >
                    Login
                  </Link>
                </div>
                <div className="md:order-2">
                  <Link
                    href={'/signup'}
                    className="block px-4 py-2 text-center text-white text-xl font-bold md:text-base md:font-normal rounded-lg hover:bg-gray-700/30  bg-black md:hover:outline-white md:hover:outline md:hover:outline-2"
                  >
                    Sign Up
                  </Link>
                </div>
              </>
            ) : (
              <>
                <div className="hidden md:block order-2 ml-64">
                  <button onClick={() => setAccountDropdownVisible((v) => !v)}>
                    <CgProfile color="white" size={40} />
                  </button>
                  <div
                    ref={menuRef}
                    className={`${
                      accountDropdownVisible ? 'block' : 'hidden'
                    } z-20 mt-2 shadow -translate-x-1/2 absolute bg-white divide-y divide-gray-100 rounded-lg w-44 px-4 py-2`}
                  >
                    <div className="px-4 py-3 text-sm text-gray-900">
                      <div className="font-medium">{name}</div>
                      <div className="font-medium">{session.user.email}</div>
                    </div>
                    <div className="py-2 text-sm text-gray-700">
                      <Link
                        href="/user/settings"
                        className="block px-4 py-2 rounded-lg hover:bg-gray-300"
                      >
                        Settings
                      </Link>
                    </div>
                    <div className="py-2">
                      <button
                        onClick={() => supabase.auth.signOut()}
                        className="block w-full px-4 py-2 text-sm text-gray-700 rounded-lg hover:bg-gray-300"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="px-4 py-2 text-white outline rounded-lg text-xl font-bold md:hidden"
                  onClick={() => supabase.auth.signOut()}
                >
                  Logout
                </button>
              </>
            )}
            <hr />
            {[
              { title: 'Team', to: '/team' },
              { title: 'Classmates', to: '/classmates2' },
              { title: 'News', to: '/news' },
              { title: 'Donate', to: '/donate' }
            ].map(({ title, to }) => (
              <Link
                key={title}
                href={to}
                className="block px-4 py-2 text-white text-4xl font-bold md:text-base md:font-normal rounded-lg hover:bg-gray-700/30 md:bg-transparent"
              >
                {title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
