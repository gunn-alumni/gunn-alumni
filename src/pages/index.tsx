// React Components
import Head from 'next/head';
import Link from 'next/link';

// Custom Components
import EventCard from '@/components/home/EventCard';
import NewsCard from '@/components/home/NewsCard';
import NewsLandingCard from '@/components/home/NewsLandingCard';
import { StandardButton } from '@/components/shared/Button';

const dummyNewsData = [
  {
    title: 'Gunn sports new Marquee',
    date: new Date('Feburary 15, 2023'),
    description:
      'Years in the making, Gunn High unveils new marquee.  The PTSA and district funded the project.',
    imageURL: '/images/sample_news_photo1.png'
  },
  {
    title: 'Gunn High ranked #1 in California',
    date: new Date('September 30, 2022'),
    description:
      'Henry M. Gunn High School in Palo Alto was named the No. 1 public school in California. ',
    imageURL: '/images/sample_news_photo2.png'
  }
];

const dummyProgramData = [
  {
    title: 'Big Reunion',
    date: new Date('Feburary 15, 2023'),
    url: ''
  },
  {
    title: 'Basketball Game',
    date: new Date('June 18, 2023'),
    url: ''
  },
  {
    title: 'High School Musical performance',
    date: new Date('March 24, 2023'),
    url: ''
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Gunn Alumni | Homepage</title>
        <meta
          name="description"
          content="Website for Gunn alumni to reconnect with classmates and the school"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="px-8 py-12 sm:px-16 lg:px-28 ">
        <section className="text-center py-10 lg:w-full lg:py-36 lg:text-left ">
          <div className="mx-auto w-full max-w-3xl">
            <h1 className="mt-0 mb-8 text-4xl font-bold md:text-5xl">
              Welcome to the Gunn Alumni website
            </h1>
            <p className="prose prose-xl mb-8 px-16 text-gray-500 md:px-0">
              This is a student-run project still in the process of being
              developed. More features will come in the future. Find fellow
              graduates at the Classmates tab. Sign up now to create an account.
            </p>
            <Link
              href="/signup"
              className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0 bg-primary mb-8 py-4 px-7 text-center font-medium leading-4 text-white no-underline shadow-lg"
            >
              Sign Up Here
            </Link>
          </div>
        </section>
        <div>
          <NewsLandingCard
            title="Esther Wojcicki on how she raised three world-beating children"
            description="Star speaker visits Gunn to talk about her 3 Gunn alumni at this past TEDx"
            articleURL=""
            image={'/images/news_card.jpeg'}
          />
        </div>
        <div className="mt-16 xl:flex xl:space-x-16 md:m-24 p-4">
          <div className="xl:flex-1">
            <div className="text-5xl font-bold text-center">
              {"What's New?"}
            </div>
            <div className="mt-16 space-y-8">
              {dummyNewsData.map((data, i) => (
                <NewsCard
                  key={i}
                  title={data.title}
                  description={data.description}
                  date={data.date}
                  imageURL={data.imageURL}
                />
              ))}
            </div>
            <button className="text-lg font-bold mt-4">See More...</button>
          </div>
          <div className="flex-1 mt-16 xl:mt-0">
            <div className="text-5xl font-bold text-center">
              {'Programs & Events'}
            </div>
            <div className="mt-16 space-y-8 flex flex-col items-start">
              {dummyProgramData.map((data, i) => (
                <EventCard
                  key={i}
                  title={data.title}
                  date={data.date}
                  url={data.url}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-8">
          <div className="text-3xl font-bold">Give back to your community!</div>
          <Link href="/donate">
            <StandardButton color="bg-primary" className="py-4 px-16 text-xl">
              Donate Now
            </StandardButton>
          </Link>
        </div>
      </div>
    </>
  );
}
