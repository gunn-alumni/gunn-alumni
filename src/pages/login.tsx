import { useEffect, useState } from 'react';
import Image from 'next/image';
import titanIcon from '@/../public/images/titanIcon.png';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

const LoginPage = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>('');
  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (session !== null) {
      Router.push('/').catch((e) => console.log(e));
    }
  }, [session]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    supabase.auth
      .signInWithPassword({
        email,
        password
      })
      .then((res) => {
        if (res.error !== null) {
          setError(res.error.message);
        } else {
          Router.push('/').catch((err) => {
            console.log(err);
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Head>
        <title>Gunn Alumni | Login</title>
      </Head>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <div className="flex items-center mb-6 text-gray-900 rounded-lg">
            <div className="bg-primary mr-2 py-2 px-4 rounded-lg">
              <Image src={titanIcon} alt="logo" width={30} height={30} />
            </div>
            <div className="text-xl font-semibold">
              Gunn High School | Alumni
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href="/reset"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <input
                  className="w-full text-white bg-primary hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  type="submit"
                  value="Login"
                />
                {error !== '' && (
                  <div className={'text-red-500'}>Error: {error}</div>
                )}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {"Don't have an account yet?"}
                  <Link
                    href="/signup"
                    className="ml-2 font-medium text-gray-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginPage;
