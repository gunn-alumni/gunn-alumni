import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';
import Image from 'next/image'

import UserCard from '@/components/classmates/UserCard';

export default function TestClassmates() {
  const [fetchError, setFetchError] = useState()
  const [profiles, setProfiles] = useState();
  const supabase = useSupabaseClient();

  useEffect(() => {
    const fetchUsers = async () => {
      const {data, error} = await supabase.from('profiles').select();

      if (error) {
        setFetchError('could not fetch profiles')
        setProfiles(null)
        console.log(error)
      }

      if (data) {
        setProfiles(data);
        setFetchError(null)
      }
    };

    fetchUsers()

  }, []);

  return (
    <>
      <h1>classmates</h1>
      <div>
        {profiles && (
        <div className='grid grid-cols-6 gap-4 py-4'>
          {profiles.map(profile => (
            <UserCard
              key={profile.id}
              niId={profile.id}
              classTitle={'user_card'}
              userPfp={profile.pfp ? profile.pfp : '/images/userIconx96.png'}
              userName={profile.preferred_name}  />
          ))}
        </div>
      )}</div>
    </>
  );
}
