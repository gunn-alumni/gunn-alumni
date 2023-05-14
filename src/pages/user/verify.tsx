import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Verify = (): JSX.Element => {
  const router = useRouter();
  const supabase = useSupabaseClient();

  const handleEmail = () => {
    fetch('/api/send-verify-email', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: 'dl30486@pausd.us', name: 'Dylan Lu' })
    }).then((res) => {
      console.log('Response received');
      console.log(res);
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
