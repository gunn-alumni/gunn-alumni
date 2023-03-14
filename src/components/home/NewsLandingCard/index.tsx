import Image from "@/components/shared/Image";
import { StaticImageData } from "next/image";
import { StandardButton, StyledButton } from "@/components/shared/Button";

type NewsLandingCardProps = {
  title: string;
  description: string;
  articleURL: string; // TODO: for the Read More button,
  image: string;
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
      <div className="bg-primary text-white flex flex-col items-center p-8 rounded-b-lg md:rounded-none md:rounded-r-lg md:w-2/5">
        <div className="font-bold text-2xl text-center md:text-left md:text-3xl mb-5">
          {title}
        </div>
        <div className="text-lg text-left line-clamp-6 w-full">
          {description}
        </div>
        <div className="flex-1" />
        <div className="flex justify-around w-full space-x-3">
          <StandardButton color="bg-black">Read More</StandardButton>
          <StandardButton variant="secondary" color="bg-transparent">
            Explore News
          </StandardButton>
        </div>
      </div>
    </div>
  );
};

export default NewsLandingCard;
