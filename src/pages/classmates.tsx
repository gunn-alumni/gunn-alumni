import Head from 'next/head';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';

import UserCard from '@/components/classmates/UserCard';

interface Profile {
  index: number;
  id: string;
  created_at: string;
  preferred_name: string;
  pfp?: string;
  current_location?: string;
  phone_num?: number;
  email_display?: string;
  bio?: string;
  social_media?: string;
}

export default function Classmates() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
    console.log(supabase);
    const fetchUsers = async () => {
      const { data, error } = await supabase.from('profiles').select();

      console.log(data);

      if (error) {
        // setProfiles(emptyProfile);
        console.log(error);
      }

      if (data) {
        const formatted = data.map((el) => el as Profile);
        setProfiles(formatted);
      }
    };

    fetchUsers();
  }, [supabase]);

  return (
    <>
      <Head>
        <title>Gunn Alumni | Classmates</title>
        <meta
          name="description"
          content="View fellow Gunn classmates of all graduating classes"
        />
      </Head>
      <h1 className="text-4xl text-center py-4 font-bold">Classmates</h1>
      <div>
        {profiles && (
          <div className="flex flex-cols flex-wrap justify-center px-4">
            {profiles.map((profile) => (
              <div key={profile.id} className="m-4">
                <UserCard
                  uniId={profile.id}
                  classTitle={'user_card'}
                  userPfp={profile.pfp || '/images/userIconx96.png'}
                  userName={profile.preferred_name}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
