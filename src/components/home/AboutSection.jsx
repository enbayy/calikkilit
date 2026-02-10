function AboutSection() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-1.5 py-12 sm:gap-10 sm:px-2 lg:grid-cols-[1.05fr_0.95fr] lg:px-3">
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="h-1 w-10 rounded-full bg-[#166534]" />
          <h2 className="text-2xl font-bold text-slate-900">KONYA KİLİT</h2>
        </div>
        <p className="text-base leading-relaxed text-slate-600">
          Biz kilit, menteşe, conta ve aksesuar ürünlerinin endüstriyel ve ticari uygulamalar için üreticileri ve distribütörüyüz.
        </p>
        <p className="text-base leading-relaxed text-slate-600">
          Özellikle nasıl çalıştığımızı seveceğinizi düşünüyoruz. Bir üreticinin uzmanlığını ve esnekliğini bir distribütörün servis ve hizmet alanı ile birleştirerek işinizi kolaylaştırıyoruz.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#166534] hover:text-[#14532d]"
        >
          Daha Fazla Bilgi
          <span aria-hidden className="text-base">→</span>
        </a>
      </div>
      <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-slate-100 shadow-lg sm:min-h-[400px]">
        <img
          src="/konyakilitlogo.png"
          alt="Konya Kilit Hakkımızda"
          className="h-full w-full object-contain"
        />
      </div>
    </section>
  )
}

export default AboutSection

