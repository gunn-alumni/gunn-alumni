import React, { FormEventHandler, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import Container from '@/components/shared/Container';

const Verify = (): JSX.Element => {
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();

  const [pausdEmail, setPausdEmail] = useState('');
  const [sent, setSend] = useState(false);

  const handleEmail: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (session === null) return;

    setSend(true);

    fetch('/api/send-verify-email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        pausd_email: pausdEmail,
        id: session.user.id
      })
    }).then((res) => {
      console.log('Response received');
      console.log(res);
    });
  };

  return (
    <Container className="flex items-center justify-center flex-col">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="text-xl font-semibold">Gunn High School | Alumni</div>
      </div>
      <div className="w-full bg-white rounded-lg shadow sm:max-w-md p-8">
        {sent ? (
          <div>
            Please check your email for the verify link. Give it up to 2 mins
            before trying again
          </div>
        ) : (
          <form onSubmit={handleEmail}>
            <label
              htmlFor="first"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              PAUSD Email
            </label>
            <input
              type="email"
              name="last"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="email@pausd.us"
              value={pausdEmail}
              onChange={(e) => {
                setPausdEmail(e.target.value);
              }}
            />
            <button className="bg-primary hover:bg-primary/70 text-white font-bold px-4 py-2 rounded-lg mt-4">
              Click me to send email
            </button>
          </form>
        )}
      </div>
    </Container>
  );
};

export default Verify;
