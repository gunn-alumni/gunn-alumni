import Image from 'next/image'
import Link from 'next/link'
import dylan from '@/../public/images/dylan.png'
import titanIcon from '@/../public/images/titanIcon.png'
import { signOut, useSession } from 'next-auth/react'

const Navbar = (): JSX.Element => {
  const { data, status } = useSession()

  return (
    <div className="flex justify-around flex-wrap bg-primary text-white font-sans font-bold p-3 z-[1]">
      <div className="">
        <Link className="flex items-center space-x-2" href="/">
          <Image src={titanIcon} alt="icon" width={30} height={30} />
          <div>Gunn High School | Alumni</div>
        </Link>
      </div>

      <div className="flex justify-center flex-wrap items-center text-sm space-x-3 px-3">
        <Link className="hover:underline" href="/team">
          Team
        </Link>
        <Link className="hover:underline" href="/classmates">
          Classmates
        </Link>
        <Link className="hover:underline" href="/news">
          News
        </Link>
        <Link className="hover:underline" href="/donate">
          Donate
        </Link>
      </div>

      <div className="flex justify-end flex-wrap items-center text-sm space-x-3 px-2 w-60">
        {(status === 'authenticated')
          ? (
          <div className="flex justify-center flex-row items-center space-x-3">
            <Link className="hover:underline" href="/" onClick={async () => { await signOut() }} >Logout</Link>

            <Link className="flex space-x-3 flex-row items-center hover:underline" href="/profile">
              <Image src={dylan} className=" w-9 h-9 rounded-full" alt="icon"/>
            </Link>
         </div>
            )
          : <div className="flex justify-center flex-wrap items-center space-x-3">
          <Link className="hover:underline" href="/auth/signup">Sign up</Link>
          <Link className="hover:underline" href="/api/auth/signin">Sign In</Link>
        </div>
        }

      </div>

    </div>
  )
}

export default Navbar
