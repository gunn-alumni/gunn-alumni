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

export default function Classmates2() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const supabase = useSupabaseClient();

  useEffect(() => {
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
      <h1 className="text-4xl text-center py-2 font-bold">Classmates</h1>
      <div>
        {profiles && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 py-4">
            {profiles.map((profile) => (
              <UserCard
                key={profile.id}
                uniId={profile.id}
                classTitle={'user_card'}
                userPfp={profile.pfp || '/images/userIconx96.png'}
                userName={profile.preferred_name}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
