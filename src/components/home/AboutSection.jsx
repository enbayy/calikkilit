function AboutSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8 sm:gap-8 sm:px-6 sm:py-12 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
      <div className="space-y-4 sm:space-y-5 md:space-y-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="h-1 w-8 rounded-full bg-[#166534] sm:w-10" />
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl md:text-3xl">KONYA KİLİT</h2>
        </div>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
          Biz kilit, menteşe, conta ve aksesuar ürünlerinin endüstriyel ve ticari uygulamalar için üreticileri ve distribütörüyüz.
        </p>
        <p className="text-sm leading-relaxed text-slate-600 sm:text-base md:text-lg">
          Özellikle nasıl çalıştığımızı seveceğinizi düşünüyoruz. Bir üreticinin uzmanlığını ve esnekliğini bir distribütörün servis ve hizmet alanı ile birleştirerek işinizi kolaylaştırıyoruz.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#166534] transition-colors hover:text-[#14532d] sm:text-sm"
        >
          Daha Fazla Bilgi
          <span aria-hidden className="text-sm sm:text-base">→</span>
        </a>
      </div>
      <div className="relative min-h-[250px] overflow-hidden rounded-xl bg-slate-100 shadow-lg sm:min-h-[300px] sm:rounded-2xl md:min-h-[350px] lg:min-h-[400px]">
        <img
          src="/caliklogo.png"
          alt="Konya Kilit Hakkımızda"
          className="h-full w-full object-contain p-4 sm:p-6 md:p-8"
        />
      </div>
    </section>
  )
}

export default AboutSection
