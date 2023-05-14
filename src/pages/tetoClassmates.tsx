import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';

import { SB } from '../utils/dbreader';
import { UserCard } from '../components/classmates/UserCard/MainUserCard';
import { User } from '../types/supabase';
export const ClassmatesPage = (props: { users: User[] }) => {
  const { users } = props;
  return (
    <div className={`w-full text-gray-900 bg-gray-50 min-h-screen`}>
      <div
        className={`w-full relative flex flex-row gap-24 justify-center shrink-0 px-8`}
      >
        {/* name, title on left, cool img on right */}
        <div
          className={`max-w-6xl bg-gray w-full flex flex-col gap-8 pt-16 shrink-0`}
        >
          <div
            className={`grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 w-full items-stretch will-change-transform`}
          >
            {users.map((u) => (
              <UserCard user={u} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const profiles = await SB.from('profiles').select();
  console.log(profiles);
  return {
    props: {
      users: profiles.data
    } // will be passed to the page component as props
  };
}
export default ClassmatesPage;
// export default function Classmates2() {
//   const [profiles, setProfiles] = useState<Profile[]>([]);

//   useEffect(() => {
//     console.log(supabase);
//     const fetchUsers = async () => {
//       const { data, error } = await supabase.from('profiles').select();

//       console.log(data);

//       if (error) {
//         // setProfiles(emptyProfile);
//         console.log(error);
//       }

//       if (data) {
//         const formatted = data.map((el) => el as Profile);
//         setProfiles(formatted);
//       }
//     };

//     fetchUsers();
//   }, [supabase]);

//   return (
//     <>
//       <h1 className="text-4xl text-center py-2 font-bold">Classmates</h1>
//       <div>
//         {profiles && (
//           <div className="flex flex-cols flex-wrap justify-center">
//             {profiles.map((profile) => (
//               <div key={profile.id} className="m-4">
//                 <UserCard
//                   uniId={profile.id}
//                   classTitle={'user_card'}
//                   userPfp={profile.pfp || '/images/userIconx96.png'}
//                   userName={profile.preferred_name}
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
