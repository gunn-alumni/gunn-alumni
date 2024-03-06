import Head from 'next/head';
import Container from '@/components/shared/Container';
import StandardButton from '@/components/shared/Button/StandardButton';

const Spotlights = () => {
  return (
    <>
      <Head>
        <title>Gunn Alumni | Spotlights</title>
        <meta name="description" content="Notable Gunn Alumni" />
      </Head>
      <Container className="h-screen">
        <h1 className="text-3xl font-black underline-offset-1 left-0 top-0">
          {' '}
          Notable Alumni
        </h1>
        <p className="text-xl text-black mt-2 my-4 mr-4">
          The mission of the University of Gunn is to foster leaders and
          citizens who challenge the present, enrich the future, and contribute
          to a better world. Our alumni’s remarkable identities and
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
      </Container>
    </>
  );
};

export default Spotlights;
