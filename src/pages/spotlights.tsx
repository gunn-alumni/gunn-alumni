import Head from 'next/head';
import Container from '@/components/shared/Container';
import StandardButton from '@/components/shared/Button/StandardButton';
import {
  NotableAlumCard,
  NotableAlumCardProps
} from '@/components/spotlights/NotableAlumCard';
import NotableAlumPreview from '@/components/spotlights/NotableAlumPreview';
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
  last_name: 'Chang-Davidson',
  profiles: {
    pfp: 'https://media.licdn.com/dms/image/D4E03AQF9g4FgyTvQFg/profile-displayphoto-shrink_800_800/0/1696019908234?e=2147483647&v=beta&t=4l3Lm_1_o2HazFWag1fFuu28ewDfOhJSxWKh6Xl9J5I'
  }
});
/*dummyData.push({
  id: '2',
  class_title: 2007,
  tag: 'Technology',
  story_content:
    'Charlie Xu, a member of the Class of 2007, demonstrates his passion for learning daily while contributing to the endeavors of SLAC National Accelerator Laboratory at Stanford. Engaging in the vibrant atmosphere of a top-tier research laboratory, Charlie thrives on the opportunity to acquire new knowledge and collaborate with intelligent colleagues.',
  first_name: 'Charlie',
  last_name: 'Xu',
  profiles: {
    pfp: 'https://media.licdn.com/dms/image/C5603AQFnP7b-VUe2Ng/profile-displayphoto-shrink_200_200/0/1517749511606?e=2147483647&v=beta&t=dz-IjevQ41voRCxgFSphILJvsEUBDuXE1ymm583lct4'
  }
});
*/
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
};
export default Spotlights;
