import { useEffect, useState, useMemo } from 'react'
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import InfoPage from './pages/InfoPage'
import ProductDetail from './pages/ProductDetail'
import Products, { catalogGroups, sectionSlugMap, stainlessSteelSlugMap } from './pages/Products'
import SectionProducts from './pages/SectionProducts'
import Contact from './pages/Contact'
import Medya from './pages/Medya'

// Footer data removed - footer is now built inline with site content

const navItems = [
  { label: 'ANASAYFA', path: '/' },
  { label: 'ÜRÜNLER', path: '/urunler' },
  { label: 'MEDYA', path: '/medya' },
  { label: 'HAKKIMIZDA', path: '/hakkimizda' },
  { label: 'İLETİŞİM', path: '/iletisim' },
]

const pageContent = {
  hakkimizda: {
    title: 'Hakkımızda',
    subtitle:
      'Yılların tecrübesini genç girişim ruhuyla birleştirerek 2026 yılında yola çıktık. Hidrolik ve pnömatik sektöründe edindiğimiz saha deneyimini, yenilikçi bakış açımızla bir araya getirerek müşterilerimize güvenilir çözümler sunuyoruz.',
    sections: [
      {
        heading: 'Şirketimiz',
        body: [
          'Çalık Endüstriyel, sektörde uzun yıllar edinilmiş bilgi birikiminin üzerine kurulmuş, genç ve dinamik bir girişimdir. Küçük yaşlardan itibaren sektörün içinde yetişmiş olmanın verdiği tecrübe ile, bugün kendi markamız altında daha güçlü ve özgür bir şekilde hizmet veriyoruz.',
          'Endüstriyel ve mobil uygulamalar için kaliteli, ekonomik ve hızlı çözümler sunarak müşterilerimizin ihtiyaçlarına birebir karşılık veriyoruz.',
        ],
      },
      {
        heading: 'Misyonumuz',
        body: 'Genç, dinamik ve çözüm odaklı yapımızla; müşterilerimize en doğru ürünleri, en uygun fiyatlarla ve en hızlı şekilde ulaştırmak. Sadece satış değil, aynı zamanda güven ve uzun vadeli iş ortaklıkları kurmak.',
      },
      {
        heading: 'Vizyonumuz',
        body: 'Kısa sürede sektörde güvenilir ve tercih edilen bir marka haline gelmek. Sürekli gelişen teknolojiye uyum sağlayarak, yenilikçi çözümlerle Türkiye genelinde güçlü bir konuma ulaşmak.',
      },
      {
        heading: 'Değerlerimiz',
        body: 'İşimizi yaparken öncelik verdiğimiz temel değerlerimiz:',
        items: [
          'Kalite ve güven',
          'Müşteri memnuniyeti',
          'Dürüstlük ve etik değerler',
          'Sürekli gelişim',
          'Hızlı ve çözüm odaklı hizmet',
        ],
      },
    ],
  },
  urunler: {
    title: 'Ürünler',
    subtitle: 'Hidrolik, pnömatik, elektronik ve tesisat ürün gamımızı inceleyin.',
    sections: [
      {
        heading: 'Hidrolik',
        body: 'Pompalar, valfler, güç üniteleri ve mobil çözümler.',
        items: ['Yüksek basınç çözümleri', 'Mobil hidrolik', 'Endüstriyel uygulamalar'],
      },
      {
        heading: 'Pnömatik',
        body: 'Silindirler, hava hazırlama ekipmanları ve bağlantı elemanları.',
      },
    ],
  },
  markalar: {
    title: 'Markalar',
    subtitle: 'Dünya çapında temsil ettiğimiz markalar ve iş ortaklarımız.',
    sections: [
      {
        heading: 'Çözüm Ortaklarımız',
        body: 'Kawasaki, Walvoil, Wika, Salami ve daha fazlasını tek çatı altında topluyoruz.',
      },
    ],
  },
  projeler: {
    title: 'Projeler',
    subtitle: 'Tamamladığımız endüstriyel ve mobil uygulama projelerinden seçkiler.',
    sections: [
      { heading: 'Referanslar', body: 'Çelik, otomotiv, enerji ve denizcilik sektörlerinde sahada kanıtlanmış projeler.' },
    ],
  },
  medya: {
    title: 'Medya',
    subtitle: 'Haberler, etkinlikler, fotoğraf galerileri ve kataloglarımız tek yerde.',
    sections: [
      { heading: 'Haberler', body: 'Etkinlik ve lansman duyurularını yakında burada paylaşacağız.' },
      { heading: 'Kataloglar', body: 'Ürün kataloglarımızın dijital kopyalarını görüntüleyip indirebilirsiniz.' },
    ],
  },
  iletisim: {
    title: 'İletişim',
    subtitle: 'Satış, teknik destek ve insan kaynakları için bize ulaşın.',
    sections: [
      {
        heading: 'Merkez',
        body: 'Fevzi Çakmak Mah. Ahmet Petekçi cad. No16/AP, KARATAY / KONYA',
        items: ['Telefon', 'E-posta', 'Çalışma saatleri'],
      },
    ],
  },
}

const secondaryNav = [
  {
    label: 'Hidrolik',
    path: '/urunler',
    description: 'Pompalar, valfler, güç üniteleri, ağır iş uygulamaları.',
    links: [
      'POMPA',
      'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR',
      'DÖKÜM GÖVDELİ DİŞLİ POMPALAR',
      'EL POMPASI',
      'İÇTEN DİŞLİ POMPALAR',
      'İŞ MAKİNESİ POMPALARI',
      'PALETLİ POMPA',
      'PİSTONLU POMPA',
      'TANDEM POMPALAR',
      'AKIŞ BÖLÜCÜLER',
      'ALÜMİNYUM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER',
      'DÖKÜM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER',
      'AKÜLER',
      'MEMBRANLI AKÜLER',
      'BALONLU AKÜLER',
    ],
  },
  {
    label: 'Pnömatik',
    path: '/urunler',
    description: 'Silindirler, hava hazırlama ve bağlantı ekipmanları.',
    links: ['Silindirler', 'Basınç Regülatörleri', 'Filtreler', 'Bağlantı Elemanları', 'Aksesuarlar'],
  },
  {
    label: 'Sızdırmazlık',
    path: '/urunler',
    description: 'Tesisat ve hidrolik sistemler için contalar, kelepçeler.',
    links: ['O-ring', 'Keçe', 'Hortum Kelepçeleri', 'Flanş Contaları', 'Bakım Kitleri'],
  },
  {
    label: 'Markalar',
    path: '/markalar',
    description: 'Kawasaki, Walvoil, Wika, Salami ve diğer iş ortaklarımız.',
    links: ['Kawasaki', 'Walvoil', 'Wika', 'Salami', 'Hydrocar', 'Saip', 'Grimet', 'Zhenjiang', 'Gold', 'Hemko'],
  },
]


// Tüm ürünleri ve başlıkları topla
const getAllProductsAndSections = () => {
  const allProducts = []
  const allSections = []
  
  catalogGroups.forEach((group) => {
    group.sections.forEach((section) => {
      // Başlıkları ekle
      allSections.push({
        name: section.title,
        section: section.title,
        group: group.title,
        type: 'section',
      })
      
      // Ürünleri ekle
      if (section.items && Array.isArray(section.items)) {
        section.items.forEach((item) => {
          allProducts.push({
            name: item,
            section: section.title,
            group: group.title,
            type: 'product',
          })
        })
      }
    })
  })
  
  return { products: allProducts, sections: allSections }
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSubOpen, setMobileSubOpen] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.remove('dark')
      localStorage.removeItem('theme')
    }
  }, [])

  // Tüm ürünleri ve başlıkları al
  const { products: allProducts, sections: allSections } = useMemo(() => getAllProductsAndSections(), [])

  // Türkçe karakterleri normalize et
  const normalizeTurkish = (text) => {
    if (!text) return ''
    return String(text)
      .replace(/İ/g, 'i')
      .replace(/ı/g, 'i')
      .replace(/I/g, 'i')
      .replace(/Ğ/g, 'g')
      .replace(/ğ/g, 'g')
      .replace(/Ü/g, 'u')
      .replace(/ü/g, 'u')
      .replace(/Ş/g, 's')
      .replace(/ş/g, 's')
      .replace(/Ö/g, 'o')
      .replace(/ö/g, 'o')
      .replace(/Ç/g, 'c')
      .replace(/ç/g, 'c')
      .toLowerCase()
      .trim()
  }

  // Arama sonuçlarını filtrele (başlıklar önce, sonra ürünler)
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const normalizedQuery = normalizeTurkish(searchQuery)
    if (!normalizedQuery) return []
    
    // Önce başlıkları filtrele
    const matchedSections = allSections.filter((section) => {
      const normalizedName = normalizeTurkish(section.name)
      const normalizedGroup = normalizeTurkish(section.group)
      
      return (
        normalizedName.includes(normalizedQuery) ||
        normalizedGroup.includes(normalizedQuery)
      )
    })
    
    // Sonra ürünleri filtrele
    const matchedProducts = allProducts.filter((product) => {
      const normalizedName = normalizeTurkish(product.name)
      const normalizedSection = normalizeTurkish(product.section)
      const normalizedGroup = normalizeTurkish(product.group)
      
      return (
        normalizedName.includes(normalizedQuery) ||
        normalizedSection.includes(normalizedQuery) ||
        normalizedGroup.includes(normalizedQuery)
      )
    })
    
    // Başlıkları önce göster, sonra ürünleri (toplam 10 sonuç)
    const sectionsToShow = matchedSections.slice(0, 3) // Maksimum 3 başlık
    const productsToShow = matchedProducts.slice(0, 10 - sectionsToShow.length) // Kalan yer ürünler için
    
    return [...sectionsToShow, ...productsToShow]
  }, [searchQuery, allProducts, allSections])

  // Kategori resim mapping
  const categoryImageMap = {
    'KOLLU KİLİTLER': '/kollukilit.png',
    'İSPANYOLET SİSTEMLİ KİLİTLER': '/ispanyoletsistemlikilitler.png',
    'TRAFO VE KABİN KİLİTLERİ': '/trafovekabinkilitleri.png',
    'KİLİMA SANTRAL ÜRÜNLERİ': '/klimasantralurunleri.png',
    'ÇEŞİTLİ ÜRÜNLER': '/cesitliurunler/cucesitli.jpg',
    'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR': '/dilleranahtarlarcubuklarve.png',
    'ÇEYREK DÖNÜŞLÜ KİLİTLER': '/ceyrekdonuslukilitler.png',
    'SİLİNDİRLİ KİLİTLER': '/silindirlikilitler.png',
    'MOBİLYA VE ÇELİK EŞYA KİLİTLERİ': '/mobilyavecelikesya.png',
    'KENAR MENTEŞELER': '/kenarmentese.png',
    'GİZLİ MENTEŞELER': '/gizlimentese.png',
    'KÖŞE MENTEŞELER': '/kosementese.png',
    'DÜZ MENTEŞELER': '/duzmentese.png',
    'SIZDIRMAZLIK PROFİLLERİ VE KENAR KORUMA': '/sizdirmazlik.jpg',
    'YAPIŞKANLI CONTALAR': '/yapiskanlicontalar.jpg',
    'KULPLAR': '/kulplar.png',
    'AKSESUARLAR': '/aksesuarlar.png',
    'KİLİTLER': '/kilitler.png',
    'MENTEŞELER': '/menteseler.png',
    'ELEKTRONİK KOLLU KİLİTLER': '/elektronikkollu.jpg',
    'İZLEME VE ERİŞİM KONTROL SİSTEMİ': '/izlemeveerisim.jpg',
    'ELEKTRONİK DOLAP KİLİTLERİ': '/elektronikdolap.jpg',
    'DİĞER ELEKTRONİK KİLİTLER': '/digerelektronik.jpg',
  }

  // Ürün resmi al
  const getProductImage = (productName, sectionTitle) => {
    // Önce kategori resmini kontrol et
    if (sectionTitle && categoryImageMap[sectionTitle]) {
      return categoryImageMap[sectionTitle]
    }
    // Varsayılan resim
    return '/kollukilit.png'
  }

  // Ürün slug oluştur
  const getProductSlug = (productName) => {
    return encodeURIComponent(productName.toLowerCase().replace(/\s+/g, '-'))
  }

  return (
    <HashRouter>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <header className="relative z-40 backdrop-blur bg-[#1a1a1a]/95 shadow-sm shadow-slate-200/70">
          <div className="border-b border-[#2d2d2d]">
            <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-1.5 py-1.5 text-xs text-white">
              <div className="flex flex-row items-center gap-3 sm:gap-4">
                <div className="flex flex-col items-start gap-1">
                  <span className="inline-flex items-center gap-1">
                    📞 0 506 092 03 42
                  </span>
                </div>
                <span className="inline-flex items-center gap-1">
                  ✉️ Murat@calikendkilit.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/calikendkilit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white transition hover:bg-white/30 hover:text-white"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/905060920342"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white transition hover:bg-white/30 hover:text-white"
                  aria-label="WhatsApp"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-1.5 py-2">
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center">
                <img
                  src="/caliklogo.png"
                  alt="Çalık Endüstriyel Kilit logo"
                  className="h-20 w-auto"
                />
              </NavLink>
            </div>

            <nav className="hidden items-center gap-12 text-base font-semibold text-white lg:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `group relative pb-1 transition hover:text-white ${isActive ? 'text-white' : 'text-white'}`
                  }
                  end={item.path === '/'}
                >
                  {({ isActive }) => (
                    <>
                      <span>{item.label}</span>
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-white transition ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className="relative hidden lg:block">
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setShowSearchResults(true)
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  onBlur={() => {
                    // Kısa bir gecikme ile kapat, böylece tıklama işlemi tamamlanabilir
                    setTimeout(() => setShowSearchResults(false), 200)
                  }}
                  className="w-64 rounded-lg border border-white/30 bg-white px-4 py-2 pr-10 text-sm text-slate-700 placeholder-slate-400 shadow-sm transition focus:border-white focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                {showSearchResults && searchResults.length > 0 && (
                  <div className="absolute top-full left-0 z-50 mt-2 w-96 max-h-96 overflow-y-auto rounded-lg border border-slate-200 bg-white shadow-xl">
                    <div className="p-2">
                      <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {searchResults.length} sonuç bulundu
                      </div>
                      {searchResults.map((item, index) => {
                        // Başlık ise
                        if (item.type === 'section') {
                          const sectionSlug = sectionSlugMap[item.name] || stainlessSteelSlugMap[item.name]
                          return (
                            <NavLink
                              key={`section-${item.name}-${index}`}
                              to={sectionSlug ? `/urunler/${sectionSlug}` : '/urunler'}
                              onClick={() => {
                                setSearchQuery('')
                                setShowSearchResults(false)
                              }}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-slate-100 border-b border-slate-100 mb-1"
                            >
                              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded bg-[#166534]/10">
                                <img
                                  src={getProductImage('', item.name)}
                                  alt={item.name}
                                  className="h-full w-full object-contain"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-[#166534] break-words">{item.name}</div>
                                <div className="text-xs text-slate-500 break-words">{item.group}</div>
                              </div>
                              <span className="text-xs text-slate-400">Kategori</span>
                            </NavLink>
                          )
                        }
                        
                        // Ürün ise
                        const productSlug = getProductSlug(item.name)
                        const sectionSlug = sectionSlugMap[item.section] || stainlessSteelSlugMap[item.section]
                        return (
                          <NavLink
                            key={`product-${item.name}-${index}`}
                            to={sectionSlug ? `/urunler/${sectionSlug}` : `/urun-detay/${productSlug}`}
                            onClick={() => {
                              setSearchQuery('')
                              setShowSearchResults(false)
                            }}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-slate-100"
                          >
                            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded bg-slate-100">
                              <img
                                src={getProductImage(item.name, item.section)}
                                alt={item.name}
                                className="h-full w-full object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-slate-900 break-words">{item.name}</div>
                              <div className="text-xs text-slate-500 break-words">{item.section}</div>
                            </div>
                          </NavLink>
                        )
                      })}
                    </div>
                  </div>
                )}
                {showSearchResults && searchQuery.trim() && searchResults.length === 0 && (
                  <div className="absolute top-full left-0 z-50 mt-2 w-96 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-500 shadow-xl">
                    Sonuç bulunamadı
                  </div>
                )}
              </div>
              <button
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/10 text-white shadow-sm transition hover:border-white/50 hover:bg-white/20 lg:hidden"
                aria-label="Menüyü aç/kapat"
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition ${
                      mobileOpen ? 'top-1/2 rotate-45' : 'top-0'
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition ${
                      mobileOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
                    }`}
                  />
                  <span
                    className={`absolute left-0 block h-0.5 w-full rounded-full bg-current transition ${
                      mobileOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </header>

        {mobileOpen ? (
          <div className="fixed inset-0 z-[9999] lg:hidden" role="dialog" aria-label="Mobil menü">
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" 
              onClick={() => setMobileOpen(false)} 
            />
            <div className="relative ml-auto h-full w-[85vw] max-w-md overflow-y-auto bg-gradient-to-b from-[#1a1a1a] via-[#1f1f1f] to-[#1a1a1a] shadow-2xl border-l border-white/10 animate-slide-in-right">
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#1a1a1a]/95 backdrop-blur-sm px-6 py-4">
                <div className="flex items-center">
                  <img src="/caliklogo.png" alt="Çalık Endüstriyel Kilit logo" className="h-14 w-auto brightness-0 invert" />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition-all hover:border-white/40 hover:bg-white/10 hover:rotate-90"
                  aria-label="Menüyü kapat"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Search */}
              <div className="px-4 pt-4 pb-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ürün ara..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setShowSearchResults(true)
                    }}
                    onFocus={() => setShowSearchResults(true)}
                    onBlur={() => {
                      setTimeout(() => setShowSearchResults(false), 200)
                    }}
                    className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 pl-11 text-sm text-white placeholder-white/50 shadow-sm transition focus:border-[#166534] focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#166534]/30"
                  />
                  <svg className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                {showSearchResults && searchResults.length > 0 && (
                  <div className="mt-2 max-h-64 overflow-y-auto rounded-xl border border-white/10 bg-[#1f1f1f] shadow-xl">
                    <div className="p-2">
                      <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-white/60">
                        {searchResults.length} sonuç bulundu
                      </div>
                      {searchResults.map((item, index) => {
                        if (item.type === 'section') {
                          const sectionSlug = sectionSlugMap[item.name] || stainlessSteelSlugMap[item.name]
                          return (
                            <NavLink
                              key={`section-${item.name}-${index}`}
                              to={sectionSlug ? `/urunler/${sectionSlug}` : '/urunler'}
                              onClick={() => {
                                setSearchQuery('')
                                setShowSearchResults(false)
                                setMobileOpen(false)
                              }}
                              className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-white/5 border-b border-white/5 mb-1"
                            >
                              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#166534]/20">
                                <img
                                  src={getProductImage('', item.name)}
                                  alt={item.name}
                                  className="h-full w-full object-contain"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-white break-words">{item.name}</div>
                                <div className="text-xs text-white/60 break-words">{item.group}</div>
                              </div>
                              <span className="text-xs text-white/40">Kategori</span>
                            </NavLink>
                          )
                        }
                        const productSlug = getProductSlug(item.name)
                        const sectionSlug = sectionSlugMap[item.section] || stainlessSteelSlugMap[item.section]
                        return (
                          <NavLink
                            key={`product-${item.name}-${index}`}
                            to={sectionSlug ? `/urunler/${sectionSlug}` : `/urun-detay/${productSlug}`}
                            onClick={() => {
                              setSearchQuery('')
                              setShowSearchResults(false)
                              setMobileOpen(false)
                            }}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-white/5"
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/5">
                              <img
                                src={getProductImage(item.name, item.section)}
                                alt={item.name}
                                className="h-full w-full object-contain"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-white break-words">{item.name}</div>
                              <div className="text-xs text-white/60 break-words">{item.section}</div>
                            </div>
                          </NavLink>
                        )
                      })}
                    </div>
                  </div>
                )}
                {showSearchResults && searchQuery.trim() && searchResults.length === 0 && (
                  <div className="mt-2 rounded-xl border border-white/10 bg-[#1f1f1f] p-4 text-sm text-white/60 shadow-xl">
                    Sonuç bulunamadı
                  </div>
                )}
              </div>

              {/* Navigation Items */}
              <div className="px-4 py-2">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-[#166534] to-[#14532d] text-white shadow-lg shadow-[#166534]/20'
                            : 'text-white/90 hover:bg-white/5 hover:text-white'
                        }`
                      }
                      end={item.path === '/'}
                    >
                      <span className="flex items-center gap-3">
                        {item.path === '/' && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        )}
                        {item.path === '/urunler' && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                          </svg>
                        )}
                        {item.path === '/medya' && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        )}
                        {item.path === '/hakkimizda' && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {item.path === '/iletisim' && (
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        <span>{item.label}</span>
                      </span>
                      <svg className="h-5 w-5 text-white/40 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Categories Section */}
              <div className="mt-4 border-t border-white/10 px-4 pt-4">
                <div className="mb-3 flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/80">Ürün Kategorileri</p>
                </div>
                <div className="space-y-2">
                  {catalogGroups.map((group) => (
                    <div key={group.title} className="overflow-hidden rounded-xl border border-white/10 bg-white/5 transition-all hover:border-white/20">
                      <button
                        onClick={() => setMobileSubOpen((prev) => (prev === group.title ? null : group.title))}
                        className="flex w-full items-center justify-between px-4 py-3.5 text-left transition-all hover:bg-white/5"
                      >
                        <span className="text-sm font-semibold text-white">{group.title}</span>
                        <svg 
                          className={`h-5 w-5 text-white/60 transition-transform duration-300 ${mobileSubOpen === group.title ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {mobileSubOpen === group.title && (
                        <div className="space-y-1 border-t border-white/10 bg-white/5 px-4 pb-3 pt-2 animate-fade-in">
                          {group.sections.map((section) => {
                            let slug = sectionSlugMap[section.title]
                            if (!slug && group.title === 'PASLANMAZ ÇELİK ÜRÜNLER') {
                              slug = stainlessSteelSlugMap[section.title]
                            }
                            if (!slug) {
                              slug = section.title.toLowerCase()
                                .replace(/ş/g, 's')
                                .replace(/ğ/g, 'g')
                                .replace(/ü/g, 'u')
                                .replace(/ö/g, 'o')
                                .replace(/ç/g, 'c')
                                .replace(/ı/g, 'i')
                                .replace(/İ/g, 'i')
                                .replace(/\s+/g, '-')
                            }
                            return (
                              <NavLink
                                key={section.title}
                                to={`/urunler/${slug}`}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/10 hover:text-white"
                              >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#166534]"></span>
                                {section.title}
                              </NavLink>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-4 border-t border-white/10 px-4 pt-4 pb-6">
                <div className="mb-3 flex items-center gap-2">
                  <svg className="h-4 w-4 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-xs font-bold uppercase tracking-[0.1em] text-white/80">İletişim</p>
                </div>
                <div className="space-y-2.5">
                  <a 
                    href="tel:05060920342" 
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/90 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#166534]/20">
                      <svg className="h-5 w-5 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-medium">0506 092 03 42</span>
                  </a>
                  <a 
                    href="mailto:Murat@calikendkilit.com" 
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 text-sm text-white/90 transition-all hover:bg-white/10 hover:text-white"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#166534]/20">
                      <svg className="h-5 w-5 text-[#166534]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="font-medium">Murat@calikendkilit.com</span>
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div className="border-t border-white/10 px-4 py-4">
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://www.instagram.com/calikendkilit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition-all hover:border-[#166534] hover:bg-[#166534]/20 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/905060920342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-white transition-all hover:border-[#166534] hover:bg-[#166534]/20 hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        <main className="pt-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/hakkimizda"
              element={<InfoPage {...pageContent.hakkimizda} />}
            />
            <Route
              path="/urunler"
              element={<Products />}
            />
            <Route
              path="/urunler/:sectionSlug/*"
              element={<SectionProducts />}
            />
            <Route
              path="/markalar"
              element={<InfoPage hideHeader {...pageContent.markalar} />}
            />
            <Route
              path="/projeler"
              element={<InfoPage {...pageContent.projeler} />}
            />
            <Route
              path="/medya"
              element={<Medya />}
            />
            <Route
              path="/iletisim"
              element={<Contact />}
            />
            <Route
              path="/urun-detay/:slug"
              element={<ProductDetail />}
            />
          </Routes>
        </main>

        <footer className="mt-16 bg-[#1a1a1a] text-slate-200">
          <div className="mx-auto max-w-7xl px-1.5 py-12 lg:px-2">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
              {/* Şirket Bilgileri */}
              <div className="space-y-4 text-center md:text-left lg:col-span-1">
                <NavLink to="/" className="inline-block mx-auto md:mx-0">
                  <img
                    src="/caliklogo.png"
                    alt="Çalık Endüstriyel Kilit logo"
                    className="h-20 w-auto"
                  />
                </NavLink>
                <p className="text-sm leading-relaxed text-slate-300">
                  Kilit, menteşe, conta ve elektronik güvenlik sistemleri sektöründe kaliteli ürünler ve çözümler sunuyoruz.
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a
                    href="https://www.instagram.com/calikendkilit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/905060920342"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20 hover:scale-110"
                    aria-label="WhatsApp"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hızlı Linkler */}
              <div className="space-y-4 text-center md:text-left">
                <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-white">Hızlı Linkler</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <NavLink
                      to="/"
                      className="text-white transition hover:text-white hover:underline"
                    >
                      Anasayfa
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/hakkimizda"
                      className="text-white transition hover:text-white hover:underline"
                    >
                      Hakkımızda
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-white transition hover:text-white hover:underline"
                    >
                      Ürünler
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/iletisim"
                      className="text-white transition hover:text-white hover:underline"
                    >
                      İletişim
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* Ürün Kategorileri */}
              <div className="space-y-4 text-center md:text-left">
                <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-white">Ürün Kategorileri</h4>
                <ul className="space-y-2.5 text-sm">
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-white transition hover:text-white hover:underline"
                    >
                      Kilitler
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-white transition hover:text-white hover:underline"
                    >
                      Menteşeler
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-white transition hover:text-white hover:underline"
                    >
                      Contalar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-white transition hover:text-white hover:underline"
                    >
                      Aksesuarlar ve Kulplar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-white transition hover:text-white hover:underline"
                    >
                      Paslanmaz Çelik Ürünler
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/urunler"
                      className="text-white transition hover:text-white hover:underline"
                    >
                      Elektronik Sistemler
                    </NavLink>
                  </li>
                </ul>
              </div>

              {/* İletişim Bilgileri */}
              <div className="space-y-4 text-center md:text-left">
                <h4 className="text-sm font-bold uppercase tracking-[0.1em] text-white">İletişim</h4>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start gap-3 justify-center md:justify-start">
                    <span className="mt-0.5 text-white">📍</span>
                    <span>
                      Fevzi Çakmak Mah. Ahmet Petekçi cad. No16/AP<br />
                      KARATAY / KONYA
                    </span>
                  </li>
                  <li className="flex flex-col items-start gap-3 justify-center md:justify-start">
                    <a
                      href="tel:+905060920342"
                      className="transition hover:text-white hover:underline"
                    >
                      📞 0 506 092 03 42
                    </a>
                  </li>
                  <li className="flex items-center gap-3 justify-center md:justify-start">
                    <span className="text-white">✉️</span>
                    <a
                      href="mailto:Murat@calikendkilit.com"
                      className="transition hover:text-white hover:underline"
                    >
                      Murat@calikendkilit.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3 pt-1 justify-center md:justify-start">
                    <span className="mt-0.5 text-white">🕒</span>
                    <span>
                      <span className="font-semibold text-white">Pazartesi - Cuma:</span> 08:00 - 17:00
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Alt Kısım */}
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-1.5 py-6 text-center text-xs text-slate-200 lg:px-2">
              <p>© {new Date().getFullYear()} Çalık Endüstriyel Kilit. Tüm hakları saklıdır.</p>
              <p className="mt-2 text-[10px] text-slate-400/70">
                Designed & Developed by ENBAYTECH
              </p>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  )
}

export default App
