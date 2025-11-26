function About() {
  return (
    <section className="space-y-6 rounded-3xl bg-white/90 p-8 shadow ring-1 ring-rose-100">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
        About
      </p>
      <h1 className="text-3xl font-bold text-slate-900">The Zeenkaar story</h1>
      <p className="text-slate-700">
        Zeenkaar is a love letter to modern Pakistani women who adore playful
        polka-inspired details and soft pastels. Inspired by Polkadots.pk, we
        focus on breezy fabrics, elevated daywear, and thoughtful touches that
        make every outfit feel special.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
          <p className="text-lg font-semibold text-slate-900">Craft</p>
          <p className="text-sm text-slate-600">
            Handworked finishes, dotted jacquards, scalloped hems, and playful
            tassels echo the soft charm of Polkadots.pk.
          </p>
        </div>
        <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
          <p className="text-lg font-semibold text-slate-900">Comfort</p>
          <p className="text-sm text-slate-600">
            Lawn, cotton, and organza blends chosen for lightness—designed to
            handle long days in the sun with ease.
          </p>
        </div>
        <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-5">
          <p className="text-lg font-semibold text-slate-900">Community</p>
          <p className="text-sm text-slate-600">
            We celebrate individuality and joyful style. Share your looks with
            #Zeenkaar for a chance to be featured.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
