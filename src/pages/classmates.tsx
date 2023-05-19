import Head from 'next/head';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import { User, People, ClassmatePreview } from '@/types/alumni';
import { SB_serveronly } from '@/utils/dbserveronly';

import UserCard from '@/components/classmates/UserCard';
import Container from '@/components/shared/Container';
import ClassPreview from '@/components/classmates/ClassPreview';

type PeopleDict = Record<string, ClassmatePreview[]>;

interface ClassmatesProps {
  peopleMap: PeopleDict;
}

export default function Classmates({ peopleMap }: ClassmatesProps) {
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
        {peopleMap &&
          Object.keys(peopleMap).map((year) => (
            <ClassPreview key={year} peopleArr={peopleMap[year]} year={year} />
          ))}
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await SB_serveronly.from('select_preview_people').select(
    '*, profiles(pfp)'
  );
  const peopleMap: PeopleDict = {};

  data?.map(async (people) => {
    if (people.grad_year !== null) {
      if (people.grad_year in peopleMap) {
        //@ts-ignore
        peopleMap[people.grad_year].push(people);
      } else {
        //@ts-ignore
        peopleMap[people.grad_year] = [people];
      }
    }
  });

  return {
    props: {
      peopleMap: peopleMap
    } // will be passed to the page component as props
  };
}
