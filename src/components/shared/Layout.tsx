import Navbar from './Navbar';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';

const Layout = ({
  children,
  pageProps
}: {
  children: JSX.Element;
  pageProps: any;
}): JSX.Element => {
  const [supabase] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SessionContextProvider>
  );
};

export default Layout;
