import { type NextPage } from 'next'
import Router from 'next/router'
import { useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

const Protected: NextPage = (): JSX.Element => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return <div>
     {!session ? (
        <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme="dark" />
      ) : (
        <p>Account page will go here.</p>
      )}
  </div>
}



export default Protected
