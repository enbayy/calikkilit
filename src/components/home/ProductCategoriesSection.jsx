import { useNavigate } from 'react-router-dom'

function ProductCategoriesSection() {
  const navigate = useNavigate()
  
  const categories = [
    {
      title: 'Kilitler',
      description: 'Kollu Kilitler, Silindirli Kilitler, Çeyrek Dönüşlü Kilitler ve daha fazlası',
      image: '/kollukilit.png',
    },
    {
      title: 'Menteşeler',
      description: 'Kenar Menteşeler, Gizli Menteşeler, Köşe Menteşeler',
      image: '/kenarmentese.png',
    },
    {
      title: 'Contalar',
      description: 'Sızdırmazlık Profilleri, Yapışkanlı Contalar',
      image: '/sizdirmazlik.jpg',
    },
    {
      title: 'Aksesuarlar ve Kulplar',
      description: 'Kulplar ve çeşitli aksesuarlar',
      image: '/kulplar.png',
    },
    {
      title: 'Paslanmaz Çelik Ürünler',
      description: 'Kilitler, Menteşeler ve Aksesuarlar',
      image: '/kilitler.png',
    },
    {
      title: 'Elektronik',
      description: 'Elektronik Kollu Kilitler, Erişim Kontrol Sistemleri',
      image: '/elektronikkollu.jpg',
    },
  ]

  const handleCategoryClick = (category) => {
    // Anasayfadaki ürün grup kartlarına tıklayınca ilgili ana kategori sayfasına git
    const groupMap = {
      Kilitler: 'KİLİTLER',
      Menteşeler: 'MENTEŞELER',
      Contalar: 'CONTALAR',
      'Aksesuarlar ve Kulplar': 'AKSESUARLAR VE KULPLAR',
      'Paslanmaz Çelik Ürünler': 'PASLANMAZ ÇELİK ÜRÜNLER',
      Elektronik: 'ELEKTRONİK',
    }

    const targetGroup = groupMap[category.title]

    // İlgili ana kategori ile ürünler sayfasına yönlendir
    if (targetGroup) {
      navigate('/urunler', {
        state: {
          initialGroup: targetGroup,
        },
      })
    } else {
      // Eşleşme olmazsa genel ürünler sayfasına git
      navigate('/urunler')
    }
  }

  return (
    <section className="mx-auto w-full max-w-7xl px-3 py-8 sm:px-4 sm:py-12 md:px-6 lg:px-8">
      <div className="mb-6 text-center sm:mb-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">ÜRÜN GRUP ÇEŞİTLERİ</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
        {categories.map((category, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(category)}
            className="group relative flex flex-col cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#166534]/40 hover:shadow-lg sm:rounded-2xl sm:hover:-translate-y-2 sm:hover:shadow-xl"
          >
            <div className="relative h-48 w-full overflow-hidden bg-white flex items-center justify-center sm:h-56 md:h-64">
              <img
                src={category.image}
                alt={category.title}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 sm:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="flex flex-col flex-1 p-4 sm:p-5 md:p-6">
              <h3 className="mb-2 text-lg font-bold text-slate-900 sm:text-xl">{category.title}</h3>
              <p className="mb-3 flex-1 text-xs leading-relaxed text-slate-600 sm:mb-4 sm:text-sm">{category.description}</p>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#166534] transition-all duration-300 group-hover:gap-3 sm:text-sm mt-auto">
                Detayları Görüntüle
                <span className="text-sm sm:text-base">→</span>
              </div>
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#166534]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:rounded-2xl" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductCategoriesSection
