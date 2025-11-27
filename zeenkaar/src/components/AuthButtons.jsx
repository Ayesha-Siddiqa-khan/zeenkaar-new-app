import { Link } from 'react-router-dom'

function AuthButtons({ stacked = false }) {

  return (
    <div className={`flex ${stacked ? 'flex-col gap-2 w-full' : 'items-center gap-3'}`}>
      <Link
        to="/signup"
        className={`text-sm font-medium text-[#1f1848] transition hover:text-[#c21c92] ${
          stacked ? 'w-full rounded-full border border-transparent px-4 py-2 text-center bg-white' : ''
        }`}
      >
        Sign up
      </Link>
      <Link
        to="/login"
        className={`rounded-full bg-[#0D0D1F] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#161634] ${
          stacked ? 'w-full text-center' : ''
        }`}
      >
        Log in
      </Link>
    </div>
  )
}

export default AuthButtons
