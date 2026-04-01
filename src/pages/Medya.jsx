import { useState } from 'react'

function Medya() {
  const [activeTab, setActiveTab] = useState('kataloglar')
  
  // Kataloglar klasöründeki PDF'ler
  const katalogPdfs = [
    'aksesuarlar.pdf',
    'aydinlatma-cozumleri.pdf',
    'cesitli-urunler (1).pdf',
    'ceyrek-donuslu-kilitler (1).pdf',
    'contalar.pdf',
    'dikey-hareketli-kollu-kilit-504.pdf',
    'dikey-hareketli-kollu-kilit.pdf',
    'diller-anahtarlar-cubuklar-ve-aksesuarlari (1).pdf',
    'duz-menteseler.pdf',
    'elektronik-dolap-kilitleri.pdf',
    'elektronik-kilitleme-sistemleri.pdf',
    'erisim-cozumleri-brosuru.pdf',
    'gizli-mentese.pdf',
    'gizli-menteseler.pdf',
    'gunes-enerji-sistemleri.pdf',
    'ispanyolet-sistemli-kilitler.pdf',
    'jenerator-cozumleri (1).pdf',
    'kenar-mentese.pdf',
    'klima-santral-cozumleri (1).pdf',
    'kolay-montaj-ceyrek-donuslu-kilitler.pdf',
    'kollu-kilitler.pdf',
    'kose-menteseler.pdf',
    'medikal-ekipman-cozumleri (1).pdf',
    'minilog (4).pdf',
    'mobilya-ve-celik-esya-kilitleri (2).pdf',
    'moduler-sistem-kollu-kilit.pdf',
    'otomotiv-brosuru (1).pdf',
    'paketleme-makineleri.pdf',
    'paslanmaz-celik-urunler-kilitler.pdf',
    'paslanmaz-celik-urunler-menteseler-aksesuarlar (1).pdf',
    'plastik-isleme-makineleri (1).pdf',
    'robotik-ve-otomasyon-brosuru.pdf',
    'sarj-istasyonu-cozumleri (1).pdf',
    'sikistirmali-kilit.pdf',
    'silindirli-kilitler (2).pdf',
    'solar-pv-sistemler.pdf',
    't-kollu-kabin-kilidi.pdf',
    'telekom-ekipmanlari.pdf',
    'tibbi-cihazlar.pdf',
    'trafo-kabin-kilitleri (1).pdf',
    'uretim-makineleri-cozumleri.pdf',
    'veri-merkezi-cozumleri.pdf',
    'yeni-urunler (1).pdf',
  ]

  // Mesan kalite belgeleri — public/kalitebelgeleri
  const mesanKaliteBelgeleriPdfs = [
    'bilgi-guvenligi-yonetim-sistemi.pdf',
    'cevre-yonetim-sistemi.pdf',
    'enerji-yonetim-sistemi.pdf',
    'kalite-yonetim-sistemi.pdf',
    'otomotiv-kalite-yonetim-sistemi.pdf',
    'reach-deklarasyonu (1).pdf',
    'rohs-deklarasyonu.pdf',
    'saglik-ve-guvenlik-yonetimi-sistemi.pdf',
    'tsek-kalite-belgesi (1).pdf',
  ]

  // Oskar kalite belgeleri — public kökündeki kb*.pdf dosyaları
  const oskarKaliteBelgeleri = [
    { href: '/kb1.pdf', label: 'Oskar Kalite Belgesi 1' },
    { href: '/kb2.pdf', label: 'Oskar Kalite Belgesi 2' },
    { href: '/kb3.pdf', label: 'Oskar Kalite Belgesi 3' },
    { href: '/kb4.pdf', label: 'Oskar Kalite Belgesi 4' },
  ]

  // PDF adını Türkçe yazım kurallarına göre düzenle
  const formatPdfName = (filename) => {
    let formatted = filename
      .replace(/\.pdf$/i, '') // PDF uzantısını kaldır
      .replace(/\([^)]*\)/g, '') // Parantez içindeki her şeyi kaldır (örn: "(1)", "(2)")
      .replace(/\d+/g, '') // Tüm sayıları kaldır
      .replace(/-/g, ' ') // Tireleri boşluğa çevir
      .replace(/\s+/g, ' ') // Birden fazla boşluğu tek boşluğa çevir
      .trim() // Başta ve sonda boşlukları kaldır

    // Türkçe karakterleri koruyarak başlık formatına çevir
    return formatted
      .split(' ')
      .filter((word) => word.length > 0) // Boş kelimeleri filtrele
      .map((word) => {
        // İlk harfi büyük yap (Türkçe karakterleri koruyarak)
        const firstChar = word.charAt(0)
        const rest = word.slice(1).toLowerCase()

        // Türkçe büyük harf dönüşümü
        const turkishUpper = {
          ı: 'I',
          i: 'İ',
          ş: 'Ş',
          ğ: 'Ğ',
          ü: 'Ü',
          ö: 'Ö',
          ç: 'Ç',
        }

        const upperFirst = turkishUpper[firstChar.toLowerCase()] || firstChar.toUpperCase()
        return upperFirst + rest
      })
      .join(' ')
  }

  const pdfItems =
    activeTab === 'kataloglar'
      ? katalogPdfs.map((pdf) => ({
          href: `/kataloglar/${pdf}`,
          label: formatPdfName(pdf),
        }))
      : activeTab === 'mesanKalite'
        ? mesanKaliteBelgeleriPdfs.map((pdf) => ({
            href: `/kalitebelgeleri/${pdf}`,
            label: formatPdfName(pdf),
          }))
        : oskarKaliteBelgeleri

  const isQualityTab = activeTab === 'mesanKalite' || activeTab === 'oskarKalite'

  return (
    <div className="space-y-6 pb-16">
      <section className="bg-slate-50">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-1.5 py-6 sm:px-2 sm:py-8 lg:px-3">
          <p className="text-xs uppercase tracking-[0.14em] text-slate-600">Çalık Endüstriyel Kilit</p>
          <h1 className="text-3xl font-semibold sm:text-4xl text-slate-900">Medya</h1>
          <p className="max-w-3xl text-slate-600">
            Haberler, etkinlikler, fotoğraf galerileri ve kataloglarımız tek yerde.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-1.5 sm:px-2 lg:px-3">
        {/* Butonlar */}
        <div className="mb-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setActiveTab('kataloglar')}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all sm:px-6 sm:text-base ${
              activeTab === 'kataloglar'
                ? 'bg-[#166534] text-white shadow-lg'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            Kataloglar
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('mesanKalite')}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all sm:px-6 sm:text-base ${
              activeTab === 'mesanKalite'
                ? 'bg-[#166534] text-white shadow-lg'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            Mesan Kalite Belgeleri
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('oskarKalite')}
            className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all sm:px-6 sm:text-base ${
              activeTab === 'oskarKalite'
                ? 'bg-[#166534] text-white shadow-lg'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            Oskar Kalite Belgeleri
          </button>
        </div>

        {/* Kataloglar: liste | Kalite: küçük gömülü önizleme */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {pdfItems.length === 0 ? (
            <div className="py-12 text-center">
              <svg
                className="mx-auto h-12 w-12 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="mt-4 text-base font-medium text-slate-600">
                {isQualityTab ? 'Kalite belgeleri yakında eklenecektir.' : 'Henüz PDF bulunmamaktadır.'}
              </p>
            </div>
          ) : isQualityTab ? (
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              {pdfItems.map((item, index) => (
                <div
                  key={`${item.href}-${index}`}
                  className="flex w-[10rem] flex-col gap-2 sm:w-[11.5rem]"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#166534] focus-visible:ring-offset-2"
                  >
                    <div className="relative h-48 w-full overflow-hidden rounded-lg border border-slate-200 bg-slate-100 shadow-sm ring-slate-200 transition group-hover:border-[#166534]/50 group-hover:shadow-md sm:h-56">
                      {/* Taşan iframe ile iç kaydırma çubukları kırpılır; etkileşim kapalı */}
                      <iframe
                        title={item.label}
                        src={`${item.href}#page=1&view=FitH&toolbar=0&navpanes=0`}
                        className="pointer-events-none absolute left-0 top-0 select-none border-0"
                        style={{
                          width: 'calc(100% + 20px)',
                          height: 'calc(100% + 20px)',
                          marginRight: '-20px',
                          marginBottom: '-20px',
                        }}
                        tabIndex={-1}
                        scrolling="no"
                      />
                    </div>
                  </a>
                  <p className="line-clamp-3 text-center text-[10px] font-semibold leading-snug text-slate-800 sm:text-xs">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-[10px] font-medium text-[#166534] underline-offset-2 hover:underline sm:text-xs"
                  >
                    Tam belgeyi aç
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pdfItems.map((item, index) => (
                <a
                  key={`${item.href}-${index}`}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 transition-all hover:border-[#166534] hover:bg-[#166534]/5 hover:shadow-md"
                >
                  <div className="flex-shrink-0">
                    <svg
                      className="h-10 w-10 text-[#166534]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-slate-900 group-hover:text-[#166534]">{item.label}</p>
                    <p className="mt-1 text-xs text-slate-500">PDF</p>
                  </div>
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-[#166534]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Medya
