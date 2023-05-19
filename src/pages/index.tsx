// React Components
import Head from 'next/head';
import Link from 'next/link';

// Custom Components
import EventCard from '@/components/home/EventCard';
import NewsCard from '@/components/home/NewsCard';
import NewsLandingCard from '@/components/home/NewsLandingCard';
import { StandardButton } from '@/components/shared/Button';
import Container from '@/components/shared/Container';
import Cta from '@/components/home/CTA';
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import Welcome from '@/components/home/Welcome';

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
      <Container className="">
        <Welcome />
        <div className="flex items-center justify-center">
          <NewsLandingCard
            title="Gunn Football goes undefeated in 2021 season, wins CCS"
            description="In an extraordinary display of skill and determination, Gunn Football achieved an undefeated season in 2021, capturing the CCS championship title. Their exceptional performance was further highlighted by shattering the touchdown record, leaving an indelible mark on the history of the sport."
            articleURL=""
            image={'/images/football.png'}
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
            <Link href="/news" className="text-lg font-bold">
              See More...
            </Link>
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
        <Cta />
      </Container>
    </>
  );
}
