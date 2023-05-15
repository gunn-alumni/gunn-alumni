import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSupabaseClient, useSession } from '@supabase/auth-helpers-react';

const Verify = (): JSX.Element => {
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();

  const handleEmail = () => {
    if (session === null) return;

    supabase
      .from('profiles')
      .select('id,name,email')
      .eq('id', session.user.id)
      .then(({ data }) => {
        if (data === null) {
          console.log('User data not found');
          return;
        }

        fetch('/api/send-verify-email', {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: data[0].email,
            name: data[0].name,
            id: data[0].id
          })
        }).then((res) => {
          console.log('Response received');
          console.log(res);
        });
      });
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="text-xl font-semibold">Gunn High School | Alumni</div>
      </div>
      <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
        <button
          onClick={handleEmail}
          className="bg-red-300 px-4 py-2 rounded-lg"
        >
          Click me to send email
        </button>
      </div>
    </section>
  );
};

export default Verify;
