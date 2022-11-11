import {LockClosedIcon} from '@heroicons/react/20/solid'
import {Link} from "react-router-dom";

export default function Register() {
  return (
    <>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Register for free
      </h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or{' '}
        <Link to='/login' className="font-medium text-indigo-600 hover:text-indigo-500">
          login to your account
        </Link>
      </p>
      <form className="mt-8 space-y-6" action="#" method="POST">
        <input type="hidden" name="remember" defaultValue="true"/>
        <div className="-space-y-px rounded-md shadow-sm">
          <div>
            <label htmlFor="full-name-field" className="sr-only">
              Full Name
            </label>
            <input
              id="full-name-field"
              name="name"
              type="text"
              required
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Full Name"
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
            />
          </div>
          <div>
            <label htmlFor="password-confirmation-field" className="sr-only">
              Repeat Password
            </label>
            <input
              id="password-confirmation-field"
              name="password_confirmation"
              type="password"
              required
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Repeat Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                </span>
            Sign up
          </button>
        </div>
      </form>
    </>
  )
}
