import Image from 'next/image';

interface NewsArticleProps {
  article_style: string;
  title: string;
  description: string;
  date: Date;
  imageURL: string;
  tags: string[];
}

const NewsArticle = ({
  article_style,
  title,
  description,
  date,
  imageURL,
  tags
}: NewsArticleProps) => {
  const truncatedDescription =
    description.length > 150
      ? description.substring(0, 150) + '...'
      : description;

  {
    /* ASSUMES A 4 BY 3 ASPECT RATIO */
  }
  switch (article_style) {
    case 'Featured': {
      return (
        <>
          <div className="flex flex-col mr-5 align-center mb-5 lg:mb-0 md:mb-0">
            <div className="text-2xl font-bold text-center w-full">{title}</div>
            <div className="mb-4">
              <Image
                src={imageURL}
                alt={title}
                width={400}
                height={300}
                className="rounded-[20px] w-full"
              />
            </div>
          </div>
        </>
      );
    }
    case 'Card': {
      return (
        <div>
          <div className="flex flex-col mr-5 sm:flex-row py-[0.3em]">
            <div className="w-full sm:w-auto">
              <Image
                src={imageURL}
                alt={title}
                width={400}
                height={300}
                className="rounded-[20px] mx-auto"
              />
            </div>
            <div className="flex flex-col pl-[1em] align-top w-full sm:w-3/4">
              <div className="text-xl font-bold">{title}</div>
              <div className="text-lg pt-[0.1em] sm:pt-[1em]">
                {truncatedDescription}
              </div>
              <div className="text-slate-400 mt-auto">
                {date.toLocaleString('default', { month: 'long' })}{' '}
                {date.toLocaleString('default', { day: 'numeric' })},{' '}
                {date.toLocaleString('default', { year: 'numeric' })}{' '}
              </div>
            </div>
          </div>
        </div>
      );
    }
    case 'Icon': {
      return (
        <div>
          <div className="lg:rounded-[20%] md:rounded-[20%] flex flex-col lg:flex-row my-[0.3em] w-full items-center">
            <Image
              src={imageURL}
              alt={title}
              width={400}
              height={300}
              className="sm:rounded-[4px] object-contain lg:w-1/3 mr-3 sm:max-h-[5em]"
            />
            <div className="align-center sm:w-max lg:w-2/3">
              <div className="text-md">{title}</div>
            </div>
          </div>
        </div>
      );
    }
    case 'Text': {
      return (
        <div className="flex flex-col text-sm">
          <div className="text-lg font-bold text-rose-900 text-md">
            {tags[0]}
          </div>
          <div className="text-semibold">{title}</div>
          <div className="text-slate-400">
            {date.toLocaleString('default', { month: 'long' })}{' '}
            {date.toLocaleString('default', { day: 'numeric' })},{' '}
            {date.toLocaleString('default', { year: 'numeric' })}{' '}
          </div>
        </div>
      );
    }
    default: {
      return (
        <div>Error: Unspecified article_style in NewsArticle element.</div>
      );
    }
  }
};
export default NewsArticle;
