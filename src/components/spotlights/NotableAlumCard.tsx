import { useSupabaseClient } from '@supabase/auth-helpers-react';
import Image, { type StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import { User, People } from '@/types/alumni';
import DefaultPFP from 'public/images/default_pfp.png';
import Link from 'next/link';
import Router from 'next/router';

import Tag from '@/components/spotlights/Tag';
export interface NotableAlumCardProps {
  profileID: string | null;
  classTitle: string;
  tag: string;
  storyContent: string;
  firstName: string;
  lastName: string;
  pfp: string | null;
  to: string;
}

export const NotableAlumCard = ({
  profileID,
  tag,
  classTitle,
  storyContent,
  firstName,
  lastName,
  pfp,
  to
}: NotableAlumCardProps) => {
  return (
    <button
<<<<<<< HEAD
      onClick={() => Router.push(`/spotlights/${to}`)}
=======
      onClick={() => Router.push(`/spotlights/${profileID}`)}
>>>>>>> dev
      title={classTitle}
      className="flex w-full
        flex-col items-center
        sm:flex-row sm:items-start
        space-x-2 p-4 border-gray-30 rounded-lg hover:border-primary hover:cursor-pointer border"
    >
      <div className="relative h-24 w-24 flex-shrink-0">
        <Image
          src={pfp !== null ? pfp : DefaultPFP}
          className="object-cover rounded-full"
          fill
          alt="profile pic"
        />
      </div>
      <div className="flex-grow flex flex-col space-y-1 justify-center items-start">
        <h3 className="font-bold text-primary text-lg">
          {firstName} {lastName}
        </h3>
        <div>{classTitle}</div>
        <div className="text-wrap text-left">
          <span className="prose prose-xl mb-8 text-gray-500 px-0">{tag}</span>
          <br />
          <span className="line-clamp-3">{storyContent}</span>
        </div>
      </div>
    </button>
  );
};

export default NotableAlumCard;
