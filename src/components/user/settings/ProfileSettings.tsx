import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';

const ProfileSettings = () => {
  const [bio, setBio] = useState('');

  const supabase = useSupabaseClient();
  const session = useSession();

  useEffect(() => {
    if (session === null) return;

    supabase
      .from('profiles')
      .select('bio')
      .eq('id', session.user.id)
      .then(({ data }) => {
        if (data) {
          setBio(data[0].bio as string);
          console.log(data[0].bio as string);
        }
      });
  }, [session]);

  const handleSubmit = () => {
    if (session === null) return;

    supabase
      .from('profiles')
      .update({ bio })
      .eq('id', session.user.id)
      .then(({ data, error }) => {
        console.log('update profile done');
        console.log(error);
        console.log(data);
        //window.location.reload();
      });
  };

  return (
    <>
      <div>
        <div className="text-2xl">Profile</div>
        <div className="text-gray-600">
          This information will be publically viewable to other verified alumn
        </div>
      </div>
      <div className="w-48">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Preferred Name
          </label>
          <input
            type="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="First Last"
          />
        </div>
      </div>
      <div className="w-full">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Profile
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write a profile for all verified alumn to see"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div>
        <label
          htmlFor="url"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          URL
        </label>
        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="https://example.com"
        />
      </div>
      <div className="">
        <button
          className="bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-800"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default ProfileSettings;
