import Image, { StaticImageData } from "next/image";

type NewsLandingCardProps = {
  title: string;
  description: string;
  articleURL: string; // TODO: for the Read More button,
  image: StaticImageData;
};

const NewsLandingCard = ({
  title,
  description,
  articleURL,
  image,
}: NewsLandingCardProps) => {
  return (
    <div className="rounded-xl w-full md:flex">
      <div className="relative w-full h-[36vh] md:h-[72vh]">
        <Image
          src={image}
          alt="News Image"
          className="object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          fill
        />
      </div>
      <div className="bg-primary text-white flex flex-col items-center p-8 rounded-b-lg md:rounded-none md:rounded-r-lg">
        <div className="font-bold text-2xl text-center mb-5">{title} </div>
        <div className="mb-5 flex-1 text-lg">{description}</div>
        <div className="flex justify-around w-full h-12 space-x-3">
          <button className="rounded-lg text-sm bg-black text-white font-bold flex-1">
            Read More
          </button>
          <button className="rounded-lg text-sm outline outline-2 outline-white text-white font-bold flex-1">
            Explore News
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLandingCard;
