import Link from 'next/link';
import { User } from '@/types/alumni';
import Image from 'next/image';

export const UserCard = (props: { user: User }) => {
  const { user } = props;
  return (
    <Link href={`/classmates/${props.user.id}`}>
      <div
        id={props.user.id}
        className={`bg-white rounded-full border border-gray-900/10 pr-4 p-2 hover:shadow-lg hover:border- transition-shadow cursor-pointer flex flex-row gap-2`}
      >
        <Image
          src={
            user.pfp ||
            'https://cdn.discordapp.com/avatars/792522702652702740/e51bfbc125ad1f07a566d793d9796064.png?size=1024'
          }
          width={64}
          height={64}
          alt={`Photo of ${user.preferred_name}`}
          className={`rounded-full`}
        />
        <div className={`flex flex-col flex-grow gap-2 justify-center `}>
          <h4 className={`text-xl font-montserrat font-bold text-gray-900`}>
            {user.preferred_name}
          </h4>
          <span className={`text-sm font-wsans font-medium text-gray-900/60`}>
            Class of 2023
          </span>
        </div>
      </div>
    </Link>
  );
};
