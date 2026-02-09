function InfoPage({ title, subtitle, sections = [], hideHeader = false }) {
  return (
    <div className="space-y-10 pb-16">
      {!hideHeader ? (
        <section className="bg-[#1a1a1a] text-white">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-1.5 py-12 sm:px-2 sm:py-14 lg:px-3">
            <p className="text-xs uppercase tracking-[0.14em] text-white/70">Konya Kilit</p>
            <h1 className="text-3xl font-semibold sm:text-4xl">{title}</h1>
            {subtitle ? <p className="max-w-3xl text-slate-100/80">{subtitle}</p> : null}
          </div>
        </section>
      ) : null}

      <section className="mx-auto w-full max-w-7xl space-y-8 px-1.5 sm:px-2 lg:px-3">
        {sections.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-base text-slate-600">
              Bu sayfanın detaylarını birlikte dolduracağız. Başlıklar, alt başlıklar ve medya içeriklerini eklemeye
              hazırız.
            </p>
          </div>
        ) : (
          sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-semibold text-slate-900">{section.heading}</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{section.body}</p>
              {section.items ? (
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#166534]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))
        )}
      </section>
    </div>
  )
}

export default InfoPage

