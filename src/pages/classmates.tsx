import Head from 'next/head';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import { User, People } from '@/types/alumni';
import { SB_serveronly } from '@/utils/dbserveronly';

import UserCard from '@/components/classmates/UserCard';
import Container from '@/components/shared/Container';
import ClassPreview from '@/components/classmates/ClassPreview';

export default function Classmates({ people }: { people: People[] }) {
  const supabase = useSupabaseClient();

  return (
    <>
      <Head>
        <title>Gunn Alumni | Classmates</title>
        <meta
          name="description"
          content="View fellow Gunn classmates of all graduating classes"
        />
      </Head>
      <Container>
        <h1 className="text-5xl font-black">Alumni Directory</h1>
        <p className="text-xl text-gray-400 mt-2">
          A list of all alumni from Gunn
        </p>
        <ClassPreview people={people} />
        <ClassPreview people={people} />
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const people = await SB_serveronly.from('people').select().limit(8);
  return {
    props: {
      people: people.data
    } // will be passed to the page component as props
  };
}
