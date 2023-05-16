interface EventCardProps {
  title: string;
  date: Date;
  url: string;
}

const EventCard = ({ title, date, url }: EventCardProps) => {
  return (
    <div className="flex items-center justify-start bg-gray-200 rounded-lg p-4 w-full ">
      <div>
        <div className="text-lg font-semibold text-center">
          {date.toLocaleString('default', { month: 'short' }).toUpperCase()}
        </div>
        <div className="text-3xl font-bold text-center">15</div>
      </div>
      <div className="px-8">
        <div className="text-3xl">{title}</div>
      </div>
    </div>
  );
};

export default EventCard;
