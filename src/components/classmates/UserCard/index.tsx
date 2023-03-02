import Image, { StaticImageData } from "next/image";

type UserCardProps = {
  uniId: string;
  userPfp: StaticImageData;
  userName: string;
};
  
  const UserCard = ({ uniId, userPfp, userName }: UserCardProps) => {
    return (
      <div id={uniId} className='w-fit flex flex-col shadow-[0_0_10px_#afafaf] p-[2.5px] border-[3px] border-solid border-[black]'>
        <Image src={userPfp} width={100} height={100} alt="default_user_pfp"/>
        <div id="short_desc" className='mt-[2.5px] w-[100px] h-full border-t-[5px] border-t-[#A4A4A4] border-solid flex justify-center items-center'>
            <h4 className='text-center m-0 px-[5px] py-[2.5px]'>{userName}</h4>
        </div>
      </div>
    );
  };
  
  export default UserCard;