import Image from 'next/image';

interface NewsCardProps {
  title: string;
  description: string;
  date: Date;
  imageURL: string; // TODO Implement with server
}

const NewsCard = ({ title, description, date, imageURL }: NewsCardProps) => {
  return (
    <div className="md:flex">
      <div className="mb-3 w-full md:flex-1">
        <div className="text-gray-400 text-md">{date.toDateString()}</div>
        <div className="text-black text-xl font-bold">{title} </div>
        <div className="break-normal hidden md:block">{description}</div>
      </div>

      <Image
        src={imageURL}
        alt={title}
        width={256}
        height={256}
        className="h-64 bg-zinc-500 md:order-first md:w-64 md:mr-8 rounded-lg"
      />
      <div className="block mt-4 md:hidden">{description}</div>
    </div>
  );
};

export default NewsCard;
