import Navbar from './Navbar'
import Footer from './Footer'
import PasswordCheck from './PasswordCheck'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'

const Layout = ({ children, session }: { children: JSX.Element, session: Session }): JSX.Element => {
  return (
    <SessionProvider session={session}>
      <div className="flex flex-col justify-between min-h-screen">
        <PasswordCheck />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </SessionProvider>
  )
}

export default Layout
