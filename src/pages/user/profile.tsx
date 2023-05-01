import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';

const Profile = () => {
  const [bio, setBio] = useState('');
  const [newBio, setNewBio] = useState('');

  const supabase = useSupabaseClient();
  const session = useSession();

  useEffect(() => {
    if (session === null) return;

    console.log('not done');
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
      .update({ bio: newBio })
      .eq('id', session.user.id)
      .then(({ data, error }) => {
        console.log('update profile done');
        console.log(error);
        console.log(data);
        //window.location.reload();
      });
  };

  return (
    <div>
      <h1>
        Really ugly profile page because veer is making a better one (this is to
        test functionality)
      </h1>
      <div className="mt-4">Current bio</div>
      <div className="bg-gray-700 p-8 rounded-lg text-white">{bio}</div>
      <input
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder="Bio"
        value={newBio}
        onChange={(e) => {
          setNewBio(e.target.value);
        }}
      />
      <button
        onClick={handleSubmit}
        className="bg-green-500 rounded-lg px-4 py-2"
      >
        Submit
      </button>
    </div>
  );
};

export default Profile;
