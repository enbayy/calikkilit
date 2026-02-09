function NewsletterSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-1.5 py-12 sm:px-2 lg:px-3">
      <div className="flex flex-col justify-between gap-6 rounded-2xl bg-black px-8 py-10 text-white shadow-lg lg:flex-row lg:items-center">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold">Mail Bültenimize Kaydolun</h3>
          <p className="text-base text-slate-300">
            Bültenimize kaydolarak firmamızla alakalı güncellemelerden anında haberdar olabilirsiniz.
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:max-w-xl">
          <input
            type="email"
            placeholder="email@adresiniz.com"
            className="h-12 flex-1 rounded-lg border border-white/30 bg-white/10 px-4 text-sm text-white placeholder-white/60 shadow-inner focus:border-[#166534] focus:outline-none focus:ring-2 focus:ring-[#166534]/50"
          />
          <button className="h-12 rounded-lg bg-[#166534] px-8 text-sm font-semibold uppercase tracking-wide text-white shadow-sm transition hover:bg-[#14532d]">
            kaydet
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSection

