import Head from 'next/head';
import Container from '@/components/shared/Container';
import StandardButton from '@/components/shared/Button/StandardButton';
import NotableAlumCard from '@/components/spotlights/NotableAlumCard';
import NotableAlumPreview from '@/components/spotlights/NotableAlumPreview';

// const dummyTags = [
//   'Education',
//   'Fish',
//   'Agriculture',
//   'Visual & Pref Arts',
//   'Medicine'
// ];
// let teehee = 0;
// const dummyData: any[] = [];
// for (let i = 0; i < 1; i++) {
//   dummyData.push({
//     id: 'elizabeth',
//     class_title: 1809,
//     tag: dummyTags[teehee],
//     story_content:
//       'Elizabeth Chang-Davidson, a 2015 graduate, was deeply involved in Gunn High Schools community.',
//     first_name: 'Elizabeth',
//     last_name: 'Chang',
//     profiles: {
//       pfp: 'https://media.licdn.com/dms/image/D4E03AQF9g4FgyTvQFg/profile-displayphoto-shrink_800_800/0/1696019908234?e=2147483647&v=beta&t=4l3Lm_1_o2HazFWag1fFuu28ewDfOhJSxWKh6Xl9J5I'
//     }
//   });
//   teehee++;
//   if (teehee >= dummyTags.length) teehee = 0;
// }

const dummyData = [
  {
    id: 'elizabeth',
    class_title: 1809,
    tag: 'Education',
    story_content:
      'Elizabeth Chang-Davidson, a 2015 graduate, was deeply involved in Gunn High Schools community.',
    first_name: 'Elizabeth',
    last_name: 'Chang',
    profiles: {
      pfp: 'https://media.licdn.com/dms/image/D4E03AQF9g4FgyTvQFg/profile-displayphoto-shrink_800_800/0/1696019908234?e=2147483647&v=beta&t=4l3Lm_1_o2HazFWag1fFuu28ewDfOhJSxWKh6Xl9J5I'
    }
  }
];

export default function Spotlights() {
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
            contribute to a better world. Our alumnis remarkable identities and
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
