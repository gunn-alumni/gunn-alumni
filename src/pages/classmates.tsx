import Head from 'next/head';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import { User, People, ClassmatePreview } from '@/types/alumni';
import { SB_serveronly } from '@/lib/utils/dbserveronly';

import UserCard from '@/components/classmates/UserCard';
import Container from '@/components/shared/Container';
import ClassPreview from '@/components/classmates/ClassPreview';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import React from 'react';

type PeopleDict = Record<string, ClassmatePreview[]>;

interface ClassmatesProps {
  peopleMap: PeopleDict;
}

export default function Classmates({
  peopleMap
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
            <div key={year}>
              <ClassPreview peopleArr={peopleMap[year]} year={year} />
            </div>
          ))}
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps<ClassmatesProps> = async (
  context
) => {
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
};
