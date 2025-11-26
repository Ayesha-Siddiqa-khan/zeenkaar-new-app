function AuthButtons({
  onSignup,
  onLogin,
  signupHref = '/signup',
  loginHref = '/login',
  stacked = false,
}) {
  const handleSignup = () => {
    if (onSignup) return onSignup()
    window.open(signupHref, '_blank', 'noopener,noreferrer')
  }
  const handleLogin = () => {
    if (onLogin) return onLogin()
    window.open(loginHref, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className={`flex ${stacked ? 'flex-col gap-2 w-full' : 'items-center gap-3'}`}>
      <button
        type="button"
        onClick={handleSignup}
        className={`text-sm font-medium text-black transition hover:text-[#0d0d1f] ${
          stacked ? 'w-full rounded-full border border-transparent px-4 py-2 text-center bg-white' : ''
        }`}
      >
        Sign up
      </button>
      <button
        type="button"
        onClick={handleLogin}
        className={`rounded-full bg-[#0D0D1F] px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#161634] ${
          stacked ? 'w-full text-center' : ''
        }`}
      >
        Log in
      </button>
    </div>
  )
}

export default AuthButtons
