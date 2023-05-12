import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Verify = (): JSX.Element => {
  const router = useRouter();
  const supabase = useSupabaseClient();

  /*

  on signup, assign a UUID.random to the user on their private auth account
  send the user an email with a link to /api/verify with user_id and verify_key
  the serverless api will check if the verify key matches the user_id

  */

  useEffect(() => {
    if (router.query.key) {
      console.log(router.query.key);
    }
  }, [router]);

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="text-xl font-semibold">Gunn High School | Alumni</div>
      </div>
      <Link href={{ pathname: '/user/verify', query: { key: 'idk' } }}>
        CLICK
      </Link>
      <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Sign in to your account
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Verify;
