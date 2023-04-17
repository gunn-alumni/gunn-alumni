import { type NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { useEffect } from 'react'

const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession()

  useEffect(() => {
    console.log(status)
    if (status === 'unauthenticated') Router.replace('/auth/signin').catch((err) => { console.error(err) })
  }, [status])

  if (status === 'authenticated') {
    return <div>This page is only visible to authenticated users. Welcome {JSON.stringify(data.user, null, 2)}</div>
  }

  return <div>Loading...</div>
}

export default Protected
