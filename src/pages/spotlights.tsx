import Head from 'next/head';
import Container from '@/components/shared/Container';
import StandardButton from '@/components/shared/Button/StandardButton';
import {
  NotableAlumCard,
  NotableAlumCardProps
} from '@/components/spotlights/NotableAlumCard';
import { useState, useEffect } from 'react';
import SB_serveronly from '@/lib/utils/dbserveronly';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { Database } from '@/types/supabase';
import SearchInput from '@/components/spotlights/SearchInput';
import { SearchIcon } from '@/components/shared/Icons/SearchIcon';

type SpotlightsProps = {
  data: Database['public']['Tables']['spotlights']['Row'][];
};

const dummyTags = [
  'Education',
  'Fish',
  'Agriculture',
  'Visual & Pref Arts',
  'Medicine'
];

const Spotlights = ({
  data
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [profileData, setProfileData] = useState<NotableAlumCardProps[]>([]);

  const [searchQuery, setSearchQuery] = useState('');

  const filteredPeople = data.filter((person) =>
    person.preferred_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Gunn Alumni | Spotlights</title>
        <meta name="description" content="Notable Gunn Alumni" />
      </Head>
      <Container>
        <div className="px-10 pt-10">
          <h1 className="mb-8 text-5xl font-black">Notable Alumni</h1>
          <p className="prose prose-xl mb-8 text-gray-500 px-0">
            Empowered by the exceptional education at Gunn High School, Titans
            evolve into inspiring leaders, innovative scholars, remarkable
            artists, and avant-gardes in their industries. With a foundation
            rooted in kindness and a commitment to positive societal
            transformation, Gunn alumni stand as everyday heroes, unwavering in
            their efforts to create a meaningful impact. Unfettered by norms or
            constrained by backgrounds and cultural differences, Titans boldly
            push boundaries, expanding horizons for future generations. Their
            contributions are not only recognized locally but also resonate on a
            global scale. This spotlight section is dedicated to celebrating the
            remarkable accomplishments of Gunn alumni in their respective
            fields.
          </p>
          <h3 className="prose prose-xl mb-8 text-black px-0 text-left">
            {' '}
            {
              <div className="mb-2">
                Know someone who belongs on this page?
                <br />
                Please consider nominating them!
              </div>
            }
            <div>
              <button
                className="m-1 bg-black disabled:bg-neutral-800/70 rounded-md px-4 py-2 text-white"
                disabled
              >
                Nominate an Alum (coming soon)
              </button>
            </div>
          </h3>
          <div className="border-[2px] border-solid border-slate-500 flex flex-row items-center gap-5 px-4 rounded-[15px] md:mx-20 mx-0">
            <label>
              <SearchIcon />
            </label>

            <input
              type="text"
              placeholder="Search an alumn"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[transparent] outline-none border-none w-full py-3 pl-2 pr-3"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-4 p-10">
          {filteredPeople.map((person) => (
            <NotableAlumCard
              to={person.url || ''}
              key={person.id}
              profileID={person.id.toString()}
              storyContent={person.content}
              preferredName={person.preferred_name}
              pfp={
                person.thumbnail ||
                'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
              }
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SpotlightsProps> = async (
  context
) => {
  const { data, error } = await SB_serveronly.from('spotlights').select('*');

  return {
    props: {
      data: data!
    }
  };
};

export default Spotlights;
