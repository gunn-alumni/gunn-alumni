import Head from 'next/head';
import Image from 'next/image';
import Container from '@/components/shared/Container';
export default function spotlightExample1() {
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
        <div className="my-4">
          <div className="text-center">
            <Image
              src={
                'https://media.licdn.com/dms/image/D4E03AQF9g4FgyTvQFg/profile-displayphoto-shrink_800_800/0/1696019908234?e=2147483647&v=beta&t=4l3Lm_1_o2HazFWag1fFuu28ewDfOhJSxWKh6Xl9J5I'
              }
              alt="Profile Image"
              width={150}
              height={150}
              className="object-cover object-center rounded-full inline"
            />
          </div>
          <h1 className="mb-8 text-4xl font-bold md:text-3xl">
            {' '}
            Elizabeth Chang-Davidson, &apos;15
          </h1>
          <p className="prose prose-xl mb-8 text-gray-500 px-0">
            Elizabeth Chang-Davidson, a 2015 graduate, was deeply involved in
            Gunn High School&apos;s community. She was a member of seven clubs,
            including serving as the president of the garden club. Additionally,
            Elizabeth was actively engaged in the math club, eventually becoming
            its secretary, and participated in the Junior State of America.
            Academically, she pursued a rigorous curriculum, particularly
            excelling in math, and also took automotive classes, finding
            enjoyment in the subject. Elizabeth also explored computer science
            with Mr. Paley, an experience she found rewarding. Her
            extracurricular activities extended to robotics, where she was part
            of the Space Cookies team.
            <br />
            <br />
            In college, Elizabeth continued her diverse interests. She worked on
            an electric race car project and later shifted focus to musical
            theater, contributing to set building, costume design, and other
            aspects. She was also a member of the marching band. Academically,
            Elizabeth majored in math and mechanical engineering, further
            highlighting her commitment to both STEM fields and the arts, the
            latter evidenced by her concentration in theater and coursework in
            that area.
            <br />
            <br />
            Professionally, Elizabeth pursued higher education, culminating in a
            PhD, which she completed last year. She also completed a postdoc at
            Northeastern University, focusing on metal 3D printing, before
            moving to Carnegie Mellon University.
            <br />
            <br />
            Reflecting on her time at Gunn, Elizabeth emphasizes the importance
            of being organized and managing time effectively, skills she
            continues to find invaluable. Her advice to Gunn students is to
            prioritize work-life balance, drawing from her own experiences of
            feeling stressed and the wisdom she gained from others, like Mr.
            O’Connell, who stressed the importance of finding a personal balance
            between effort and personal well-being.
          </p>
        </div>
      </Container>
    </>
  );
}
