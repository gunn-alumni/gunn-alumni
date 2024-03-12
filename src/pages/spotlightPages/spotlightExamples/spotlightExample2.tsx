import Head from 'next/head';
import Container from '@/components/shared/Container';
export default function spotlightExample2() {
  return (
    <>
      <Head>
        <title>Gunn Alumni | Notable</title>
        <meta
          name="description"
          content="Example Profile Page - Elizabeth Chang-Davidson"
        />
      </Head>
      <Container>
        <div className="my-20">
          <h1 className="mb-8 text-4xl font-bold md:text-3xl">
            {' '}
            Charlie Xu, &apos;07
          </h1>
          <p className="prose prose-xl mb-8 text-gray-500 px-0">
            Charlie Xu, a member of the Class of 2007, demonstrates his passion
            for learning daily while contributing to the endeavors of SLAC
            National Accelerator Laboratory at Stanford. Engaging in the vibrant
            atmosphere of a top-tier research laboratory, Charlie thrives on the
            opportunity to acquire new knowledge and collaborate with
            intelligent colleagues.
            <br />
            <br />
            During his time at Gunn, Charlie enjoyed playing the trumpet
            throughout all four years and actively participated in the badminton
            team. Building meaningful connections with teachers, Gunn taught him
            the significance of strong friendships and valuable connections.
            Charlie&apos;s advice for current students is to trust that
            everything will fall into place and to maintain open communication
            with both parents and friends.
            <br />
            <br />
            Having pursued an electrical engineering major at San Jose State
            University, Charlie gained valuable insights during his internship
            at SLAC, learning extensively from his peers. Presently, he is
            engaged in developing a system that tracks photons using x-rays for
            SLAC National Accelerator Laboratory at Stanford. Charlie
            underscores the importance of avoiding overwork in a job that lacks
            fulfillment, emphasizing the value of enjoying one&apos;s life
            pursuits.
          </p>
        </div>
      </Container>
    </>
  );
}
