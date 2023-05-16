import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const VerifySettings = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="text-2xl">Verify Identity</div>
      <Link
        href="/user/verify"
        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
      >
        Click Here to Verify
      </Link>
    </div>
  );
};

export default VerifySettings;
