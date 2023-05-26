import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useRef, useState } from 'react';

export const useVerified = () => {
  const [verified, setVerified] = useState(false);

  const session = useSession();
  const supabase = useSupabaseClient();

  useEffect(() => {
    if (!session || !supabase) return;

    supabase
      .from('profiles')
      .select('people(id)')
      .eq('id', session.user.id)
      .then(({ data, error }) => {
        console.log(data);
        if (data && data[0].people && (data[0].people as [{ id: string }])[0]) {
          setVerified(true);
        }
      });
  }, [supabase, session]);

  return verified;
};

export default useVerified;
