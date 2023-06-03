import React from 'react';
import Container from '@/components/shared/Container';
import Link from 'next/link';

const Cta = () => {
  return (
    <div className="my-8">
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-primary px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Make Gunn even better!
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Donations help fund cool projects like this and many more
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <Link
            href="/donate"
            className="inline-block py-3 mx-auto text-lg font-medium text-center text-primary bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            Donate Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cta;
