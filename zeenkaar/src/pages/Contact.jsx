function Contact() {
  return (
    <section className="space-y-6 rounded-3xl bg-white/90 p-8 shadow ring-1 ring-rose-100">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
        Contact
      </p>
      <h1 className="text-3xl font-bold text-slate-900">Let’s talk</h1>
      <p className="text-slate-700">
        Have sizing questions, stitching requests, or collaboration ideas? Drop
        us a line and we’ll reply within one business day.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
          <p className="text-lg font-semibold text-slate-900">Support</p>
          <p className="text-sm text-slate-600">hello@zeenkaar.com</p>
          <p className="text-sm text-slate-600">+92 300 0000000</p>
          <p className="text-xs uppercase tracking-[0.15em] text-rose-500">
            Mon–Sat, 10am–8pm
          </p>
        </div>
        <form className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Ayesha Khan"
                className="mt-2 w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-200"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-200"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell us what you’re looking for…"
              className="mt-2 w-full rounded-lg border border-rose-200 bg-white px-3 py-2 text-sm text-slate-800 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-200"
            />
          </div>
          <button
            type="button"
            className="rounded-full bg-rose-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-rose-600"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
