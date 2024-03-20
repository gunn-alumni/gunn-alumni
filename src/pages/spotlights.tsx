import Head from 'next/head';
import Container from '@/components/shared/Container';
import StandardButton from '@/components/shared/Button/StandardButton';
import {
  NotableAlumCard,
  NotableAlumCardProps
} from '@/components/spotlights/NotableAlumCard';
import NotableAlumPreview from '@/components/spotlights/NotableAlumPreview';
import { useState, useEffect } from 'react';
import SB_serveronly from '@/lib/utils/dbserveronly';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

type SpotlightsProps = {
  data: any[];
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
  return (
    <>
      <Head>
        <title>Gunn Alumni | Spotlights</title>
        <meta name="description" content="Notable Gunn Alumni" />
      </Head>
      <Container>
        <div className="my-20">
          <h1 className="mb-8 text-4xl font-bold md:text-5xl">
            {' '}
            Notable Alumni
          </h1>
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
          <h3 className="text-xl text-black text-left">
            {' '}
            {
              <div className="m-2">
                Know someone who belongs on this page?
                <br />
                Please consider nominating them!
              </div>
            }
            <div>
              <StandardButton className="m-1" color={'bg-black'}>
                Nominate an Alum
              </StandardButton>
            </div>
          </h3>
        </div>
        {data.map((person) => (
          <NotableAlumCard
            to={person.url}
            key={person.id}
            profileID={person.id}
            tag={person.tag}
            classTitle={person.class_title}
            storyContent={person.story_content}
            firstName={person.first_name}
            lastName={person.last_name}
            pfp={person.profiles ? person.profiles.pfp : null}
          />
        ))}
      </Container>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<SpotlightsProps> = async (
  context
) => {
  const url = context.params?.spotlightID;

  const { data, error } = await SB_serveronly.from('spotlights').select('*');

  return {
    props: {
      data: data || []
    }
  };
};

export default Spotlights;
