import { useState } from 'react'
import Image from 'next/image'
import titanIcon from '@/../public/images/titanIcon.png'
import Link from 'next/link'

const SignupPage = (): JSX.Element => {
  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>): void => {
    e.preventDefault()

    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(async (res: Response) => {
      if (res.ok) {
        alert('user successfully added if they do not exist')
      } else {
        alert((await res.json()).error)
      }
    }).catch((_err) => {
      alert('FIXME NOTIFY OF ERROR PROPERLY')
    })
  }

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
        <div className="flex items-center mb-6 text-gray-900 rounded-lg">
          <div className="bg-primary mr-2 py-2 px-4 rounded-lg">
            <Image src={titanIcon} alt="logo" width={30} height={30} />
          </div>
          <div className="text-xl font-semibold">Gunn High School | Alumni</div>
        </div>
        <div className="w-full bg-white rounded-lg shadow sm:max-w-md">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="First Last"
                  value={name}
                  onChange={(e) => { setName(e.target.value) }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@gmail.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value) }}
                />
              </div>
              <div>
                <label
                  htmlFor="year"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Graduation Year
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="XXXX"
                  value={year}
                  onChange={(e) => { setYear(e.target.value) }}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value) }}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign up
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                {'Already have an account? '}
                <Link
                  href="login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignupPage
