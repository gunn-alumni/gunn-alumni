import React from 'react';
import Image from 'next/image';

const Verify = (): JSX.Element => {
  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="text-xl font-semibold">Gunn High School | Alumni</div>
      </div>
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
