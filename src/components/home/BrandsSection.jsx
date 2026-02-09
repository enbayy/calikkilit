function BrandsSection({ brands }) {
  return (
    <section id="markalar" className="mx-auto max-w-7xl space-y-8 px-1.5 py-12 sm:px-2 lg:px-3">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="h-1 w-10 rounded-full bg-[#166534]" />
          <h2 className="text-2xl font-bold text-slate-900">Markalarımız</h2>
        </div>
        <p className="text-base text-slate-600">Dünya çapında tanınmış markaları tek çatı altında sunuyoruz.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="group flex h-24 items-center justify-center rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#166534]/40 hover:shadow-lg"
          >
            <img src={brand.src} alt={brand.name} className="max-h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandsSection

