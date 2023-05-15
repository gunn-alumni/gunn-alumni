import Image from 'next/image';
import { StandardButton } from '@/components/shared/Button';
import Link from 'next/link';

interface NewsLandingCardProps {
  title: string;
  description: string;
  articleURL: string; // TODO: for the Read More button,
  image: string;
}

const NewsLandingCard = ({
  title,
  description,
  articleURL,
  image
}: NewsLandingCardProps) => {
  return (
    <div className="rounded-lg md:w-[60vw] 2xl:flex 2xl:justify-around">
      <div className="relative w-full h-[50vh] 2xl:h-[60vh]">
        <Image
          src={image}
          alt="News Image"
          className="object-cover rounded-t-lg 2xl:rounded-none 2xl:rounded-l-lg"
          fill
          priority
        />
      </div>
      <div className="bg-primary text-gray-100 flex flex-col items-center p-8 rounded-b-lg 2xl:rounded-none 2xl:rounded-r-lg 2xl:w-2/5">
        <div className="font-bold text-2xl text-center 2xl:text-left 2xl:text-3xl mb-5">
          {title}
        </div>
        <div className="text-lg text-left line-clamp-6 w-full lg:px-8">
          {description}
        </div>
        <div className="flex-1" />
        <div className="flex justify-around w-full md:w-1/2 2xl:w-full space-x-4 mt-8 2xl:mt-0">
          <Link
            href="/news"
            className="rounded-lg text-xs md:text-sm text-white font-bold flex-1 text-center py-2 px-4 bg-black"
          >
            Read More
          </Link>
          <Link
            href="/news"
            className="rounded-lg text-xs md:text-sm text-white font-bold flex-1 text-center py-2 px-4 outline outline-2 outline-white"
          >
            Explore News
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsLandingCard;
