import Head from 'next/head';
import Container from '@/components/shared/Container';
import StandardButton from '@/components/shared/Button/StandardButton';
import {
  NotableAlumCard,
  NotableAlumCardProps
} from '@/components/spotlights/NotableAlumCard';
import NotableAlumPreview from '@/components/spotlights/NotableAlumPreview';
import { SearchInput } from '@/components/spotlights/SearchInput';
import { useState, useEffect } from 'react';

const dummyTags = [
  'Education',
  'Fish',
  'Agriculture',
  'Visual & Pref Arts',
  'Medicine'
];
//let teehee = 0;
const dummyData: any[] = [];
/*for (let i = 0; i < 20; i++) {
  dummyData.push({
    id: 'asdf',
    class_title: 1809,
    tag: dummyTags[teehee],
    story_content:
      'hello eliu fbwer u fhoiuw efhouse ffnoesi nhorfnh enfrhio friofro dfihod fufihu dfhyuu uuuuuu ujn nhn n nnnn kunv ',
    first_name: 'Poshua',
    last_name: 'Jaley'
  });
  teehee++;
  if (teehee >= dummyTags.length) teehee = 0;
}
*/
dummyData.push({
  id: '1',
  class_title: 2015,
  tag: 'Technology',
  story_content:
    'Elizabeth Chang-Davidson, a 2015 graduate, was deeply involved in Gunn High School community. She was a member of seven clubs, including serving as the president of the garden club. Additionally, Elizabeth was actively engaged in the math club',
  first_name: 'Elizabeth',
  last_name: 'Chang-Davidson'
});
dummyData.push({
  id: '2',
  class_title: 2007,
  tag: 'Technology',
  story_content:
    'Charlie Xu, a member of the Class of 2007, demonstrates his passion for learning daily while contributing to the endeavors of SLAC National Accelerator Laboratory at Stanford. Engaging in the vibrant atmosphere of a top-tier research laboratory, Charlie thrives on the opportunity to acquire new knowledge and collaborate with intelligent colleagues.',
  first_name: 'Charlie',
  last_name: 'Xu',
  pfp: 'https://tinyurl.com/42ekd2mf'
});

const Spotlights = () => {
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
            The mission of the University of Gunn is to foster leaders and
            citizens who challenge the present, enrich the future, and
            contribute to a better world. Our alumni’s remarkable identities and
            accomplishments are what make them Titans. Victors. The Leaders and
            Best.
          </p>
          <h3 className="text-xl text-black text-left">
            {' '}
            {/*<div className="m-2">
              Know someone who belongs on this page?
              <br />
              Please consider nominating them!
    </div>*/}
            <div>
              <StandardButton className="m-1" color={'bg-black'}>
                Nominate an Alum
              </StandardButton>
            </div>
          </h3>
        </div>
        <NotableAlumPreview peopleArr={dummyData}></NotableAlumPreview>
      </Container>
    </>
  );
}
export default Spotlights;
