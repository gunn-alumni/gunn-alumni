import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';
import Container from '@/components/shared/Container';

const Verify = (): JSX.Element => {
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleEmail = (e) => {
    e.preventDefault();

    if (session === null) return;

    fetch('/api/send-verify-email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
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
        <form onSubmit={handleEmail}>
          <label
            htmlFor="first"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            First Name
          </label>
          <input
            type="text"
            name="first"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Dylan"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <label
            htmlFor="first"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Last Name
          </label>
          <input
            type="text"
            name="last"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="Lu"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
          <button className="bg-red-300 px-4 py-2 rounded-lg mt-4">
            Click me to send email
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Verify;
