function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Pattern Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#166534]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#166534]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#166534]">
              Hakkımızda
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="relative">
              <span className="relative z-10">Konya Kilit</span>
              <span className="absolute bottom-2 left-0 z-0 h-4 w-full bg-[#166534]/20"></span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Image Section - Left */}
          <div className="lg:col-span-5">
            <div className="group relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-100 p-8 shadow-2xl transition-all duration-500 sm:p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-[#166534]/5 via-transparent to-transparent"></div>
                <img
                  src="/konyakilitlogo.png"
                  alt="Konya Kilit Hakkımızda"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Decorative Border */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#166534] via-[#22c55e] to-[#166534] opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30"></div>
            </div>
          </div>

          {/* Content Section - Right */}
          <div className="flex flex-col justify-center lg:col-span-7">
            <div className="space-y-8">
              {/* Main Description */}
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
                  Biz kilit, menteşe, conta ve aksesuar ürünlerinin endüstriyel ve ticari uygulamalar için üreticileri ve distribütörüyüz.
                </p>
                <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
                  Özellikle nasıl çalıştığımızı seveceğinizi düşünüyoruz. Bir üreticinin uzmanlığını ve esnekliğini bir distribütörün servis ve hizmet alanı ile birleştirerek işinizi kolaylaştırıyoruz.
                </p>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                <div className="h-2 w-2 rounded-full bg-[#166534]"></div>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="group relative">
                  <div className="absolute -left-1 top-0 h-full w-1 rounded-full bg-[#166534] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="pl-6">
                    <h3 className="mb-2 text-lg font-bold text-slate-900">Üretici Kalitesi</h3>
                    <p className="text-sm text-slate-600">Yüksek standartlarda üretim ve kalite kontrolü ile müşterilerimize en iyi ürünleri sunuyoruz.</p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -left-1 top-0 h-full w-1 rounded-full bg-[#166534] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="pl-6">
                    <h3 className="mb-2 text-lg font-bold text-slate-900">Hızlı Hizmet</h3>
                    <p className="text-sm text-slate-600">Geniş dağıtım ağımız sayesinde hızlı ve güvenilir teslimat sağlıyoruz.</p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -left-1 top-0 h-full w-1 rounded-full bg-[#166534] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="pl-6">
                    <h3 className="mb-2 text-lg font-bold text-slate-900">Uzman Ekip</h3>
                    <p className="text-sm text-slate-600">Alanında uzman ekibimiz ile size en uygun çözümleri sunuyoruz.</p>
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -left-1 top-0 h-full w-1 rounded-full bg-[#166534] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  <div className="pl-6">
                    <h3 className="mb-2 text-lg font-bold text-slate-900">Güvenilir Çözümler</h3>
                    <p className="text-sm text-slate-600">Endüstriyel ve ticari uygulamalar için güvenilir ve dayanıklı ürünler.</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <a
                  href="#"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-[#166534] px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#14532d] hover:shadow-xl hover:-translate-y-1"
                >
                  <span className="relative z-10">Daha Fazla Bilgi</span>
                  <span className="relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e] to-[#166534] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

