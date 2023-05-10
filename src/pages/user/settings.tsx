import AccountSettings from '@/components/user/settings/AccountSettings';
import { useSupabaseClient } from '@supabase/auth-helpers-react';

const Settings = (): JSX.Element => {
  const supabase = useSupabaseClient();

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:h-full md:w-auto flex-row md:flex-col rouned-xl flex justify-center md:justify-start items-center p-2 md:p-8 space-y-2 shadow-lg">
        <button className="w-full text-center md:text-left text-bold text-xl hover:bg-gray-200 text-gray-800 rounded-lg px-4 py-2">
          Account
        </button>
        <button className="w-full text-center md:text-left text-bold text-xl hover:bg-gray-200 text-gray-800 rounded-lg px-4 py-2">
          Notifications
        </button>
        <button className="w-full text-center md:text-left text-bold text-xl hover:bg-gray-200 text-gray-800 rounded-lg px-4 py-2">
          Privacy
        </button>
      </div>

      <div className="flex px-8 md:px-48 pt-16 bg-gray-50 flex-col space-y-4 flex-1">
        <AccountSettings />
      </div>
    </div>
  );
};

export default Settings;
