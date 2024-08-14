import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Welcome = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  const [name, setName] = useState('');

  useEffect(() => {
    if (session !== null && supabase !== null) {
      supabase
        .from('profiles')
        .select('preferred_name')
        .eq('id', session.user.id)
        .then(({ data }) => {
          if (!data) {
            console.error('User not found');
            return;
          }

          setName(data[0].preferred_name);
        });
    }
  }, [session, supabase]);

  return (
    <section className="text-center py-10 lg:w-full lg:py-36 lg:text-left ">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="mt-0 mb-8 text-4xl font-bold md:text-5xl">
          {session === null ? 'Welcome to Gunn Alumni' : `Hi, ${name}!`}
        </h1>
        <p className="prose prose-xl mb-8 text-gray-500 px-0">
          {session === null
            ? ' This is a student-run project still in the process of being developed. More features will come in the future. Sign up now to create an account.'
            : 'Go see your classmates or something'}
        </p>
        <Link
          href={session === null ? '/signup' : '/classmates'}
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-lg border-0 bg-primary mb-8 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg hover:bg-primary/80"
        >
          {session === null ? 'Signup Here' : 'See Classmates'}
        </Link>
      </div>
    </section>
  );
};

export default Welcome;
