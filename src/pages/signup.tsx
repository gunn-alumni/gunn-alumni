import { useEffect, useState } from 'react';
import Image from 'next/image';
import titanIcon from '@/../public/images/titanIcon.png';
import Head from 'next/head';
import Link from 'next/link';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Router from 'next/router';

const SignupPage = (): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');
  const [confirmName, setConfirmName] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (session !== null) {
      Router.push('/').catch((e) => console.log(e));
    }
  }, [session]);

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (password !== password2) {
      setError('Passwords do not match');
      return;
    }

    supabase.auth
      .signUp({
        email,
        password,
        options: {
          data: {
            preferred_name: name,
            created_at: new Date().toISOString()
          }
        }
      })
      .then(({ data, error }) => {
        if (error) setError(error.message);
        else {
          setSuccess(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleNameConfirm = () => {
    if (name === '') setError('Please enter a name');
    else setConfirmName(true);
  };

  return (
    <>
      <Head>
        <title>Gunn Alumni | Sign Up</title>
      </Head>
      <section className="">
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
                Create your account
              </h1>
              {!success ? (
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <input
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      onFocus={() => setError('')}
                    />
                  </div>
                  {!confirmName && (
                    <button
                      className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      onClick={handleNameConfirm}
                    >
                      Continue
                    </button>
                  )}
                  {confirmName && (
                    <>
                      <div>
                        <input
                          type="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          placeholder="Email (external)"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          onFocus={() => setError('')}
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder="Password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          onFocus={() => setError('')}
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder="Confirm Password"
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                          value={password2}
                          onChange={(e) => {
                            setPassword2(e.target.value);
                          }}
                          onFocus={() => setError('')}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Sign up
                      </button>
                    </>
                  )}
                  {error !== '' && (
                    <div className={'text-red-500'}>Error: {error}</div>
                  )}
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    {'Already have an account? '}
                    <Link
                      href="login"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Log in
                    </Link>
                  </p>
                </form>
              ) : (
                <div className="text-xl">
                  Thanks! Check your inbox to confirm your email.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignupPage;
