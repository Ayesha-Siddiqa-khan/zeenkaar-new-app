import { Link } from 'react-router-dom'
import { Mail, Chrome } from 'lucide-react'

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-5xl items-center justify-center px-3 py-10 sm:px-6 lg:px-10">
      <div className="w-full max-w-md rounded-[22px] bg-[#fff7fb] text-[#1f1848] shadow-[0_24px_70px_rgba(0,0,0,0.12)] ring-1 ring-[#f0d9e8]">
        <div className="space-y-1 border-b border-[#f0d9e8] px-6 py-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c21c92]">Welcome back</p>
          <h1 className="text-2xl font-bold text-[#1f1848]">Log in</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
          <label className="block space-y-2 text-sm font-semibold text-[#1f1848]">
            <span>Email</span>
            <div className="flex items-center gap-2 rounded-lg border border-[#e5defc] bg-[#f6f1ff] px-3 py-2.5 transition focus-within:border-[#d5c8fa] focus-within:ring-1 focus-within:ring-[#d5c8fa]">
              <Mail size={16} className="text-[#7a6fd6]" />
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent text-sm text-[#1f1848] placeholder:text-[#7a6fd6] focus:outline-none"
              />
            </div>
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#0D0D1F] px-4 py-3 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Continue
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#f0d9e8]" />
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-[0.2em] text-[#7b739b]">
              <span className="bg-[#fff7fb] px-3">or</span>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-gradient-to-r from-[#e6d7ff] via-[#f2d9ff] to-[#ffd9f0] px-4 py-3 text-sm font-semibold text-[#1f1848] shadow-[0_12px_30px_rgba(102,69,170,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(102,69,170,0.22)]"
          >
            <Chrome size={16} className="text-[#6d5cc5]" />
            Continue with Google
          </button>

          <p className="pt-2 text-center text-sm text-[#6a6189]">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-[#c21c92] hover:text-[#a80f7b]">
              Sign up now
            </Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default Login
