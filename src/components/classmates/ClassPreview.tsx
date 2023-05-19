import UserCard from '@/components/classmates/UserCard';
import { People } from '@/types/alumni';
import Link from 'next/link';
import { useEffect } from 'react';

const ClassPreview = ({ peopleMap }: { peopleMap: People[] }) => {
  return (
    <div>
      <h2 className="text-3xl font-black mt-8">2023</h2>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-4">
        {peopleMap.map((person) => (
          <div key={person.index} className="">
            <UserCard
              profileID={null}
              classTitle={'user_card'}
              firstName={person.first_name}
              lastName={person.last_name}
              userPfp={'/images/dylan.png'}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-2">
        <Link href="/classmates/2023" className="text-gray-600 font-bold">
          See More...
        </Link>
      </div>
    </div>
  );
};

export default ClassPreview;
