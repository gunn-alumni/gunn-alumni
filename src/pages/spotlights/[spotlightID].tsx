import Image from 'next/image';

// supabase
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import SB_serveronly from '@/lib/utils/dbserveronly';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import Container from '@/components/shared/Container';

type SpotlightProps = {
  preferred_name: string;
  content: string;
  grad_year: string;
};

export default function SpotlightData({
  preferred_name,
  content,
  grad_year
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="min-h-screen w-screen flex flex-col justify-start items-center mt-12 mb-24">
      <div className="max-w-2xl">
        <div className="flex flex-col items-center justify-center space-y-2">
          <div className="w-max relative mx-auto group rounded-full overflow-hidden">
            <div className="relative w-48 h-48">
              <Image
                src={
                  'https://media.licdn.com/dms/image/D4E03AQF9g4FgyTvQFg/profile-displayphoto-shrink_800_800/0/1696019908234?e=2147483647&v=beta&t=4l3Lm_1_o2HazFWag1fFuu28ewDfOhJSxWKh6Xl9J5I'
                }
                alt="Profile Image"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="text-4xl font-bold text-neutral-700">
            {preferred_name}
          </div>
        </div>
        <div className="w-full flex flex-col items-start text-neutral-500 space-y-2 mt-6 text-justify whitespace-pre-line">
          {content}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<SpotlightProps> = async (
  context
) => {
  const url = context.params?.spotlightID;

  const { data, error } = await SB_serveronly.from('spotlights')
    .select('content,preferred_name,grad_year')
    .eq('url', url)
    .single();

  return {
    props: {
      preferred_name: data?.preferred_name || '',
      content: data?.content || '',
      grad_year: data?.grad_year.toString() || ''
    }
  };
};
