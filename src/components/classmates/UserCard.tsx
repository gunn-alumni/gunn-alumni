import Image, { type StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { GoVerified, GoUnverified } from 'react-icons/go';

interface UserCardProps {
  profileID: string | null;
  classTitle: string;
  userPfp: StaticImageData | string;
  firstName: string;
  lastName: string;
}

const UserCard = ({
  profileID,
  classTitle,
  userPfp,
  firstName,
  lastName
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
            src={userPfp}
            className="object-cover rounded-full"
            fill
            alt="default_user_pfp"
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
          {!verified ? (
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
