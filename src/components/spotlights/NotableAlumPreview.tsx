import NotableAlumCard from '@/components/spotlights/NotableAlumCard';
import { ClassmatePreview, People } from '@/types/alumni';
import Link from 'next/link';
import { Key, useEffect } from 'react';

const NotableAlumPreview = ({ peopleArr }: { peopleArr: any }) => {
  return (
    <div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mt-4">
        {peopleArr.map((person: any) => (
          <div key={person.index} className="">
            <NotableAlumCard
              profileID={person.id}
              tag={person.tag}
              classTitle={person.class_title}
              storyContent={person.story_content}
              firstName={person.first_name}
              lastName={person.last_name}
              pfp={person.pfp}
              to={person.to}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotableAlumPreview;
