import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { useEffect, useState } from 'react';

import { SB_serveronly } from '@/lib/utils/dbserveronly';
import { UserCard } from '@/components/classmates/MainUserCard';
import { User } from '@/types/alumni';

export const ClassmatesPage = (props: { users: User[] }) => {
  const { users } = props;
  return (
    <div className={`w-full text-gray-900 bg-gray-50 min-h-screen`}>
      <div
        className={`w-full relative flex flex-row gap-24 justify-center shrink-0 px-8`}
      >
        {/* name, title on left, cool img on right */}
        <div
          className={`max-w-6xl bg-gray w-full flex flex-col gap-6 pt-16 shrink-0`}
        >
          <h1 className="text-6xl py-2 font-black font-montserrat">
            Classmates
          </h1>
          <h4 className="text-2xl py-2 font-medium font-wsans text-gray-900/50">
            Class of 2023
          </h4>
          <div
            className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full items-stretch will-change-transform`}
          >
            {users.map((u, idx) => (
              <UserCard key={idx} user={u} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const profiles = await SB_serveronly.from('profiles').select();
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
