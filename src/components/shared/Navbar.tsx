import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import { useEffect, useRef, useState } from 'react';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import useVerified from '@/lib/hooks/useVerified';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [accountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [name, setName] = useState('User Name');
  const [pfp, setPfp] = useState<string>('/images/default_pfp.png');
  const menuRef = useRef<HTMLDivElement>(null);

  const verified = useVerified();
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    setMenuVisible(false);
  }, [router.asPath]);

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
        .select('preferred_name,pfp')
        .eq('id', session.user.id)
        .then(({ data, error }) => {
          if (error) console.log(error);
          else {
            setName(data[0].preferred_name);
            if (data[0].pfp) {
              setPfp(data[0].pfp);
            }
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
            src="/images/titanIcon.png"
            width="28"
            height="32"
            className="mr-4"
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
                  <button
                    onClick={() => setAccountDropdownVisible((v) => !v)}
                    className="bg-white rounded-full w-10 h-10 relative outline outline-2 outline-gray-200"
                  >
                    <Image
                      src={pfp}
                      alt="pfp"
                      className="object-cover rounded-full"
                      fill
                    />
                  </button>
                  <div
                    ref={menuRef}
                    className={`${
                      accountDropdownVisible ? 'block' : 'hidden'
                    } z-20 mt-2 shadow -translate-x-1/2 absolute bg-white divide-y divide-gray-100 rounded-lg w-52 px-4 py-2`}
                  >
                    <div className="px-4 py-3 text-sm text-gray-900">
                      {verified ? (
                        <Link
                          href={`/profile/${session.user.id}`}
                          className="block px-4 py-2 rounded-lg hover:bg-gray-300"
                        >
                          Your Profile
                        </Link>
                      ) : (
                        <Link
                          href="/user/verify"
                          className="block px-4 py-2 rounded-lg hover:bg-gray-300"
                        >
                          Verify Yourself
                        </Link>
                      )}
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
                <div className="md:hidden">
                  {verified ? (
                    <Link
                      href={`/profile/${session.user.id}`}
                      className="block px-4 py-2 text-white text-4xl font-bold md:text-base md:font-normal rounded-lg hover:bg-gray-700/30 md:bg-transparent"
                    >
                      Your Profile
                    </Link>
                  ) : (
                    <Link
                      href="/user/verify"
                      className="block px-4 py-2 text-white text-4xl font-bold md:text-base md:font-normal rounded-lg hover:bg-gray-700/30 md:bg-transparent"
                    >
                      Verify Yourself
                    </Link>
                  )}
                </div>
              </>
            )}
            <hr />
            {[
              { title: 'Team', to: '/team' },
              { title: 'Classmates', to: '/classmates' },
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
