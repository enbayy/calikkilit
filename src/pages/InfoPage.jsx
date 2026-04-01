function InfoPage({ title, subtitle, sections = [], hideHeader = false }) {
  return (
    <div className="space-y-6 pb-16">
      {!hideHeader ? (
        <section className="bg-slate-50">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-1.5 py-6 sm:px-2 sm:py-8 lg:px-3">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-600">Çalık Endüstriyel Kilit</p>
            <h1 className="text-3xl font-semibold sm:text-4xl text-slate-900">{title}</h1>
            {subtitle ? <p className="w-full text-slate-600 leading-relaxed">{subtitle}</p> : null}
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
              {(Array.isArray(section.body) ? section.body : [section.body]).filter(Boolean).map((para, i) => (
                <p key={i} className={`text-base leading-relaxed text-slate-600 ${i === 0 ? 'mt-3' : 'mt-4'}`}>
                  {para}
                </p>
              ))}
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

