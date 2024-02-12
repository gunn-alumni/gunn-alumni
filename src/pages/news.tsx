import React from 'react';
import NewsArticle from '@/components/news/NewsArticle';

const news_article_data = [
  {
    title: '1. Celebrating Success: High School Alumnus Wins Nobel Prize',
    description:
      'John Smith, a graduate of our high school, has been awarded the Nobel Prize in Physics for his groundbreaking research in quantum mechanics.',
    date: new Date('September 15, 2023'),
    imageURL: '/images/dylan.png',
    tags: ['Alumni', 'Nobel Prize', 'Physics', 'Achievement']
  },
  {
    title: "2. From the Gridiron to the Boardroom: Mark Davis' Path to Success",
    description:
      'Mark Davis, a former football star at our high school, discusses his journey from the football field to becoming a successful entrepreneur.',
    date: new Date('November 8, 2023'),
    imageURL: '/images/sample_news_photo1.png',
    tags: ['Alumni', 'Entrepreneurship', 'Sports', 'Success']
  },
  {
    title: '3. Tech Innovator Tom Reynolds Gives Back to His Alma Mater',
    description:
      "Tom Reynolds, a tech industry pioneer and alumnus, donates state-of-the-art computer equipment to our school's technology lab.",
    date: new Date('January 20, 2024'),
    imageURL: '/images/sample_news_photo2.png',
    tags: ['Alumni', 'Technology', 'Donation', 'Philanthropy']
  },
  {
    title:
      "4. Alumni Athlete Spotlight: Maria Sanchez's Journey to the Olympics",
    description:
      'Maria Sanchez, a former track and field star from our high school, shares her inspiring journey to the Olympic Games.',
    date: new Date('February 14, 2024'),
    imageURL: '/images/dylan.png',
    tags: ['Alumni', 'Olympics', 'Athletics', 'Inspiration']
  },
  {
    title: "5. Music Maestro: Jason Turner's Grammy-Winning Career",
    description:
      'Jason Turner, an alumnus, takes home his fourth Grammy Award for Best Jazz Album, marking a remarkable musical journey.',
    date: new Date('March 10, 2024'),
    imageURL: '/images/sample_news_photo1.png',
    tags: ['Alumni', 'Music', 'Grammy Awards', 'Success']
  },
  {
    title: '6. Alumni Entrepreneurs Transforming the Food Industry',
    description:
      'Three high school alumni launch innovative food startups, revolutionizing the culinary world with their unique creations.',
    date: new Date('April 7, 2024'),
    imageURL: '/images/sample_news_photo2.png',
    tags: ['Alumni', 'Entrepreneurship', 'Food', 'Innovation']
  },
  {
    title:
      "7. Global Changemaker: Lisa Roberts' Work for Sustainable Development",
    description:
      'Lisa Roberts, a dedicated alumna, receives international recognition for her efforts in sustainable development and climate action.',
    date: new Date('May 15, 2024'),
    imageURL: '/images/dylan.png',
    tags: ['Alumni', 'Sustainability', 'Global Impact', 'Achievement']
  },
  {
    title: "8. Community Champion: Maria Rodriguez's Nonprofit Impact",
    description:
      'Maria Rodriguez, a dedicated alumna, receives recognition for her outstanding contributions to the local community through her nonprofit work.',
    date: new Date('October 12, 2024'),
    imageURL: '/images/sample_news_photo1.png',
    tags: ['Alumni', 'Nonprofit', 'Community', 'Philanthropy']
  },
  {
    title: "9. Alumni Artist Spotlight: Sarah Turner's Gallery Exhibition",
    description:
      'Sarah Turner, an alumna and accomplished artist, unveils her latest gallery exhibition, captivating art enthusiasts.',
    date: new Date('January 15, 2025'),
    imageURL: '/images/sample_news_photo2.png',
    tags: ['Alumni', 'Art', 'Exhibition', 'Achievement']
  },
  {
    title: '10. Alumni Innovators: Startups Changing the Game',
    description:
      'Several alumni-led startups are making waves in tech, healthcare, and sustainability, revolutionizing their respective industries.',
    date: new Date('March 22, 2025'),
    imageURL: '/images/dylan.png',
    tags: ['Alumni', 'Entrepreneurship', 'Innovation', 'Startups']
  },
  {
    title: "11. From the Stage to the Screen: Lisa Johnson's Acting Career",
    description:
      'Lisa Johnson, a former theater star at our school, transitions to a successful acting career in film and television.',
    date: new Date('April 10, 2025'),
    imageURL: '/images/sample_news_photo1.png',
    tags: ['Alumni', 'Acting', 'Entertainment', 'Success']
  },
  {
    title:
      '12. Alumni Entrepreneurs Disrupting Traditional Industries with Innovation',
    description:
      'A dynamic group of local high school alumni is disrupting traditional industries with innovative startups, reshaping the way we work, live, and play.',
    date: new Date('August 20, 2025'),
    imageURL: '/images/sample_news_photo2.png',
    tags: ['Alumni', 'Entrepreneurship', 'Startups', 'Innovation']
  },
  {
    title:
      '13. Local High School Alumnus Elected as Mayor, Vows to Tackle Urban Challenges',
    description:
      "John Smith, a graduate of our local high school, has been elected as the city's mayor and pledges to address pressing urban issues with innovation and dedication.",
    date: new Date('September 9, 2026'),
    imageURL: '/images/dylan.png',
    tags: ['Alumni', 'Leadership', 'Politics', 'Urban Development']
  },
  {
    title:
      '14. Tech Visionary Jennifer Lee Named to Forbes\' "30 Under 30" List',
    description:
      'Jennifer Lee, an alumna of our local high school and a prominent tech visionary, has been recognized by Forbes in their "30 Under 30" list for her contributions to the tech industry.',
    date: new Date('October 5, 2026'),
    imageURL: '/images/dylan.png',
    tags: ['Alumni', 'Technology', 'Recognition', 'Forbes']
  }
];

const News = () => {
  return (
    <div className="md:px-10 md:py-10 lg:px-48 lg:py-10">
      {/* Top row of 3 articles */}
      <div className="flex flex-row">
        {news_article_data.slice(0, 3).map((article, index) => (
          <div className="w-1/3" key={index}>
            <NewsArticle
              article_style="Icon"
              title={article.title}
              description={article.description}
              date={article.date}
              imageURL={article.imageURL}
              tags={article.tags}
            />
          </div>
        ))}
      </div>

      {/* On the left is the main body, on the right is text-only articles */}
      <div className="flex flex-row py-[1em]">
        <div className="flex flex-col w-2/3">
          {/* Column with featured article at the top, then card articles */}
          <div className="h-3/5">
            <NewsArticle
              article_style="Featured"
              title={news_article_data[0].title}
              description={news_article_data[0].description}
              date={news_article_data[0].date}
              imageURL={news_article_data[0].imageURL}
              tags={news_article_data[0].tags}
            />
          </div>
          {news_article_data.slice(11, 21).map((article, index) => (
            <div key={index}>
              <NewsArticle
                article_style="Card"
                title={article.title}
                description={article.description}
                date={article.date}
                imageURL={article.imageURL}
                tags={article.tags}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col w-1/3">
          {/* Column with text articles */}
          <div className="font-bold lg:text-2xl md:text-2xl sm:text-xl mb-[0.5em]">
            {' '}
            Featured Articles{' '}
          </div>
          {news_article_data.slice(4, 11).map((article, index) => (
            <div className="py-[0.2em]" key={index}>
              <NewsArticle
                article_style="Text"
                title={article.title}
                description={article.description}
                date={article.date}
                imageURL={article.imageURL}
                tags={article.tags}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
