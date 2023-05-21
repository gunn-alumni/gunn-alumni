import UserCard from '@/components/classmates/UserCard';
import { ClassmatePreview, People } from '@/types/alumni';
import Link from 'next/link';
import { useEffect } from 'react';

const ClassList = ({
  peopleArr,
  year
}: {
  peopleArr: ClassmatePreview[];
  year: string;
}) => {
  return (
    <div>
      <h2 className="text-3xl font-black mt-8">{year}</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-4">
        {peopleArr.map((person) => (
          <div key={person.index} className="">
            <UserCard
              profileID={person.id}
              classTitle={'user_card'}
              firstName={person.first_name}
              lastName={person.last_name}
              pfp={person.profiles ? person.profiles.pfp : null}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-2">
        <Link href={`classmates`} className="text-gray-600 font-bold">
          See All
        </Link>
      </div>
    </div>
  );
};

export default ClassList;
