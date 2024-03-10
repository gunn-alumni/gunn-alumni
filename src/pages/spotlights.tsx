import Head from 'next/head';
import Container from '@/components/shared/Container';
import StandardButton from '@/components/shared/Button/StandardButton';
import NotableAlumCard from '@/components/spotlights/NotableAlumCard';
import NotableAlumPreview from '@/components/spotlights/NotableAlumPreview';

const dummyTags = [
  'Education',
  'Fish',
  'Agriculture',
  'Visual & Pref Arts',
  'Medicine'
];
let teehee = 0;
const dummyData: any[] = [];
for (let i = 0; i < 20; i++) {
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

const Spotlights = () => {
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
};

export default Spotlights;
