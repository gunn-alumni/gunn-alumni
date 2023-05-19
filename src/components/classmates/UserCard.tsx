import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Image, { type StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { GoVerified, GoUnverified } from 'react-icons/go';
import { User, People } from '@/types/alumni';

const defaultProfile =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/680px-Default_pfp.svg.png?20220226140232';

interface UserCardProps {
  profileID: string | null;
  classTitle: string;
  firstName: string;
  lastName: string;
  pfp: string | null;
}

const UserCard = ({
  profileID,
  classTitle,
  firstName,
  lastName,
  pfp
}: UserCardProps) => {
  const [verified] = useState(profileID !== null);

  return (
    <div
      title={classTitle}
      className={`w-full flex flex-col sm:flex-row items-center sm:items-start space-x-2 p-4 border border-gray-30 rounded-lg ${
        verified ? 'hover:border-primary hover:cursor-pointer' : ''
      }`}
    >
      <div className="flex-1">
        <div className="relative h-20 w-20">
          <Image
            src={pfp !== null ? pfp : defaultProfile}
            className="object-cover rounded-full"
            fill
            alt="profile pic"
          />
        </div>
      </div>
      <div className="flex-grow flex flex-col space-y-1 justify-center items-start truncate">
        <h4 className="hidden sm:block">
          {firstName} {lastName}
        </h4>
        <h4 className="block sm:hidden">
          {firstName} {lastName.charAt(0)}.
        </h4>
        <div className="flex">
          {verified ? (
            <div className="p-1 bg-green-100 text-green-800 rounded-full text-sm ">
              <GoVerified />
            </div>
          ) : (
            <div className="p-1 bg-gray-100 text-gray-800  rounded-full text-sm">
              <GoUnverified />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
