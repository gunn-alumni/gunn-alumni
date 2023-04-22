import { type NextPage } from 'next'
import { useSession } from 'next-auth/react'

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession()

  if (status === 'authenticated') {
    return <div>
        This page is only visible to authenticated users. Welcome {JSON.stringify(data.user, null, 2)}
      </div>
  }

  return <div>Loading...</div>
}

export default Protected
