import Image, { type StaticImageData } from 'next/image'

interface UserCardProps {
  uniId: string
  classTitle: string
  userPfp: StaticImageData
  userName: string
}

const UserCard = ({ uniId, classTitle, userPfp, userName }: UserCardProps) => {
  return (
    <div
      id={uniId}
      title={classTitle}
      className="w-fit flex flex-col p-1 border border-[2.5px] border-gray-300"
    >
      <Image src={userPfp} width={100} height={100} alt="default_user_pfp" />
      <div
        id="short_desc"
        className="mt-2 w-[100px] h-full flex justify-center items-center"
      >
        <h4 className="text-center px-1 py-1 truncate">{userName}</h4>
      </div>
    </div>
  )
}

export default UserCard
