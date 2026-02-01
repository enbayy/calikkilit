import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const hydraulicSections = [
  {
    title: 'POMPA',
    items: [
      'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR',
      'DÖKÜM GÖVDELİ DİŞLİ POMPALAR',
      'EL POMPASI',
      'İÇTEN DİŞLİ POMPALAR',
      'İŞ MAKİNESİ POMPALARI',
      'PALETLİ POMPA',
      'PİSTONLU POMPA',
      'TANDEM POMPALAR',
    ],
  },
  { title: 'AKIŞ BÖLÜCÜLER', items: ['ALÜMİNYUM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER', 'DÖKÜM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER'] },
  { title: 'AKÜLER', items: ['MEMBRANLI AKÜLER', 'BALONLU AKÜLER'] },
  {
    title: 'DİREKSİYON BEYİNLERİ',
    items: ['EMNİYETLİ NORMAL', 'EMNİYETLİ ANTİŞOKLU', 'EMNİYETSİZ NORMAL', 'EMNİYETSİZ KAPALI MERKEZ', 'EMNİYETSİZ ANTİŞOKLU', 'FORKLİFT İÇİN XY SERİSİ'],
  },
  {
    title: 'BASINÇ, ISI ÖLÇÜM VE KONTROL CİHAZLARI',
    items: ['BASINÇ ŞALTERLERİ', 'ISI (SICAKLIK) ÖLÇER', 'MANOMETRE KORUMA VALFLERİ', 'MANOMETRE TEST RAKORLARI', 'MANOMETRE VE VAKUMMETRELER', 'TRANSMİTTERLER'],
  },
  { title: 'HİDROMOTORLAR', items: ['DİŞLİ MOTORLAR', 'EĞİK EKSENLİ HİDROMOTORLAR', 'GEROTOR MOTORLAR (ORBİT)', 'YILDIZ (RADIAL) MOTOR'] },
  {
    title: 'KUMANDA KOLLARI , JOİSTİK VE LOADER VALF',
    items: ['DİLİMLİ KUMANDA KOLU', 'MONOBLOK KUMANDA KOLU', 'ELEKTRİK KONTROLLÜ KUMANDA KOLLARI', 'JOİSTİK VE YÜKLEYİCİ VALF'],
  },
  { title: 'HİDROLİK BAĞLANTI ELEMANLARI', items: ['HORTUM BAĞLANTI ELEMANLARI', 'DİŞLİ BAĞLANTI ELEMANLARI', 'HORTUMLAR'] },
  { title: 'HİDROLİK SİLİNDİR VE AKSESUARLARI', items: ['KROM KAPLI MİLLER'] },
]

const pneumaticSections = [
  { title: 'PNÖMATİK', items: ['SİLİNDİRLER', 'BASINÇ REGÜLATÖRLERİ', 'FİLTRELER', 'BAĞLANTI ELEMANLARI', 'AKSESUARLAR'] },
]

const sealingSections = [
  { title: 'SIZDIRMAZLIK', items: ['O-RING', 'KEÇE', 'HİDROLİK CONTALAR', 'FLANŞ CONTALARI', 'BAKIM KİTLERİ'] },
]

const lockSections = [
  {
    title: 'KOLLU KİLİTLER',
    items: [
      '001 > Kollu Kilit (Küçük Versiyon)',
      '201 > Kollu Kilit',
      '001 > Kollu Kilit',
      '101 > Kollu Kilit',
      '501 > Kollu Kilit',
      '601 > Kollu Kilit',
      '408 > Kollu Kilit',
      '408 > Kollu Kilit',
      '306 > Kollu Kilit',
      '504 > Dikey Hareketli Kollu Kilit',
      '504 > Dikey Hareketli Kollu Kilit',
      '206 > Kollu Kilit',
      '406 > Kollu Kilit',
      '106 > Kollu Kilit',
      '808 > Kollu Kilit',
      '008 > Kollu Kilit',
      '908 > Kollu Kilit',
      '108 > Kollu Kilit',
      '108 > Kollu Kilit',
      '208 > Kollu Kilit',
      '308 > Kollu Kilit',
      '708 > Kollu Kilit',
      '508 > Kollu Kilit',
      '006 > Kollu Kilit',
      '205 > Kollu Kilit',
    ],
  },
  {
    title: 'İSPANYOLET SİSTEMLİ KİLİTLER',
    items: [
      '002 > İspanyolet Sistemli Kollu Kilit',
      '102 > İspanyolet Sistemli Kollu Kilit',
      '502 > İspanyolet Sistemli Kollu Kilit',
      '502 > İspanyolet Sistemli Kollu Kilit',
      '602 > İspanyolet Sistemli Kollu Kilit',
      '409 > İspanyolet Sistemli Kollu Kilit',
      '107 > İspanyolet Sistemli Kollu Kilit',
      '504 > Dikey Hareketli Kollu Kilit',
      '504 > Dikey Hareketli Kollu Kilit',
      '207 > İspanyolet Sistemli Kollu Kilit',
      '307 > İspanyolet Sistemli Kollu Kilit',
      '407 > İspanyolet Sistemli Kollu Kilit',
      '204 > Dikey Hareketli Kollu Kilit',
      '104 > Dikey Mekanizmalı Kollu Kilit',
      '109 > İspanyolet Sistemli Kollu Kilit',
      '109 > İspanyolet Sistemli Kollu Kilit',
      '909 > İspanyolet Sistemli Kollu Kilit',
      '309 > İspanyolet Sistemli Kollu Kilit',
      '209 > İspanyolet Sistemli Kollu Kilit',
      '007 > İspanyolet Sistemli Kollu Kilit',
      '809 > İspanyolet Sistemli Kollu Kilit',
      '103 > İspanyolet Sistemli Kollu Kilit',
      '203 > İspanyolet Sistemli Kollu Kilit',
      '203 > İspanyolet Sistemli Pano Kilit',
      '03030 > İç Kilitleme Sistemi',
      '003 > İspanyolet Sistemli Pano Kilidi',
      '103 > İspanyolet Sistemli Pano Kilidi',
      '4001 > İspanyolet sistem',
    ],
  },
  {
    title: 'TRAFO VE KABİN KİLİTLERİ',
    items: [
      'Kabin Kilitleri',
      'T Kollu Kabin Kilitleri',
    ],
  },
  {
    title: 'KİLİMA SANTRAL ÜRÜNLERİ',
    items: [
      '012 > Klima Santral Kilidi',
      '012 > Klima Santral Kilidi',
      '012 > Klima Santral Kilidi',
      '012 > Klima Santral Kilidi',
      '012 > Klima Santral Kilidi Aksesuarı',
      '112 > Klima Santral Kilidi (Versiyon 1)',
      '112 > Klima Santral Kilidi (Versiyon 2)',
      '112 > Klima Santral Kilidi (Versiyon 3)',
      '112 > Klima Santral Kilidi (Versiyon 4)',
      '112 > Klima Santral Kilidi Aksesuarları',
      '712 > Fonsiyonel Kilit Menteşe',
      '612 > Klima Santral Kilidi',
      '612 > Klima Santral Kilidi T Kollu',
      '612 > Klima Kabin Kilidi L Kollu',
      '078 > Profil Bağlantı Parçası (3D)',
      '462 > Sıkıştırmalı Kilit',
    ],
  },
  {
    title: 'ÇEŞİTLİ ÜRÜNLER',
    items: [
      'Sıkıştırmalı Kilitler',
      'Sürgü Kilitler',
      'Diğer Ürünler',
    ],
  },
  {
    title: 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR',
    items: [
      'Diller',
      'İspanyolet Çubuk ve Aksesuarları',
      'İspanyolet Lama ve Aksesuarları',
      'Paslanmaz İspanyolet Çubuk ve Aksesuarları',
      'Paslanmaz İspanyolet Lama ve Aksesuarları',
      'Anahtarlar',
    ],
  },
  {
    title: 'ÇEYREK DÖNÜŞLÜ KİLİTLER',
    items: [
      'Sıkıştırmalı Kilitler',
      'Kolay Montaj Ç.D. Kilitler',
    ],
  },
  {
    title: 'SİLİNDİRLİ KİLİTLER',
    items: [
      '163 > Silindirli Kilit Yaylı Dilli',
      'Silindirli Kilit',
      '063 > Silindirli Kilit',
      '761 > Silindirli Kilit Kolay Montaj',
      '261 > Silindirli Tutamaklı Kilit',
      '065 > Silindirli Kelebek Kilit',
      '165 > Mini Silindirli Kelebek Kilit',
      '110 > Silindirli "T" Kollu Kilit',
      '111 > Silindirli "L" Kollu Kilit',
      '064 > Silindirli "T" Kollu Kilit',
      '064 > Silindirli "L" Kollu Kilit',
      '240 > Sıkıştırmalı',
      '240 > Sıkıştırmalı T Kollu Kilit',
      '340 > Sıkıştırmalı Kelebek Kilit',
      '340 > Sıkıştırmalı Kelebek Kilit',
      '050 > Silindirli Kilit',
      '050 > Silindirli Kilit',
      '050 A3 > Kilit Tutamağı',
      '050 A4 > Toz Kapağı',
      '050 A1 > Cam Bağlantı Sacı',
      '030 A1 > Kilit Karşılık Sacı',
      '055 A1 > Ahşap Bağlantı Sacı',
      '550 > Silindirli Kilit Kolay Montaj',
      '450 > Yaylı Silindirli Kilit',
      '150 > Silindirli Kilit',
      '250 > Silindirli Kilit',
      '057 > Mini Silindirli Kilit',
      '157 > Mini Silindirli Kilit',
      '257 > Mini Silindirli Kilit',
      '056 > Silindirli Kilit',
    ],
  },
  {
    title: 'MOBİLYA VE ÇELİK EŞYA KİLİTLERİ',
    items: [
      '010 > Silindirli "T" Kollu Kilit',
      '011 > Silindirli "L" Kollu Kilit',
      '021 > Cam Kapak Kilidi',
      '020 > Sürgülü Cam Kilidi',
      '132 > Çekmece Kilidi',
      '032 > Çekmece Kilidi',
      '033 > Çekmece Kilidi',
      '030 > Çekmece Kilidi',
      '159 > Sürgülü Kapak Kilidi',
      '059 > Sürgülü Kapak Kilidi',
      '4150 > Şifreli Kilit',
      '035 > Dosya Dolabı Kilidi',
      '058 > Çelik Eşya Kilidi',
      '158 > Çelik Eşya Kilidi',
      '013 > Yangın Dolabı Kilidi',
      '113 > Yangın Dolabı Kilidi',
    ],
  },
]

const hingeSections = [
  { title: 'KENAR MENTEŞELER', items: [] },
  { title: 'GİZLİ MENTEŞELER', items: [] },
  { title: 'KÖŞE MENTEŞELER', items: [] },
  { title: 'DÜZ MENTEŞELER', items: [] },
]

const sealSections = [
  {
    title: 'SIZDIRMAZLIK PROFİLLERİ VE KENAR KORUMA',
    items: [
      '340.09.001 > Geçme Conta',
      '340.09.002 > Geçme Conta',
      '340.09.003 > Geçme Conta',
      '340.09.004 > Geçme Conta',
      '340.09.006 > Geçme Conta',
      '340.09.007 > Geçme Conta',
      '340.09.014 > Geçme Conta',
      '340.09.971 > Hijyenik Conta',
      '340.09.701 > Geçme Conta',
      '340.09.019 > Geçme Conta',
      '340.09.021 > Geçme Conta',
      '340.09.029 > Geçme Conta',
      '340.09.017 > Geçme Conta',
      '340.09.705 > Geçme Conta',
      '340.09.712 > Geçme Conta',
      '340.09.707 > Geçme Conta',
      '340.09.716 > Geçme Conta',
      '340.09.719 > Geçme Conta',
      '340.09.729 > Geçme Conta',
      '340.09.942 > Geçme Conta',
      '340.09.735 > Geçme Conta',
      '340.09.010 > Geçme Conta',
      '340.09.678 > Geçme Conta',
      '340.09.679 > Geçme Conta',
      '340.09.101 > Geçme Conta',
      '340.09.102 > Geçme Conta',
      '340.09.103 > Geçme Conta',
      '340.09.104 > Geçme Conta',
      '340.09.105 > Geçme Conta',
      '340.09.107 > Geçme Conta',
      '340.09.124 > Geçme Conta',
      '340.09.802 > Geçme Conta',
      '340.09.804 > Geçme Conta',
      '340.09.805 > Geçme Conta',
      '340.09.806 > Geçme Conta',
      '340.09.810 > Geçme Conta',
      '340.09.100 > Geçme Conta',
      '340.09.202 > Geçme Conta',
      '340.09.203 > Geçme Conta',
      '340.09.205 > Geçme Conta',
      '340.09.206 > Geçme Conta',
      '340.09.210 > Geçme Conta',
      '340.09.902 > Geçme Conta',
      '340.09.904 > Geçme Conta',
      '340.09.502 > Geçme Conta',
      '340.09.504 > Geçme Conta',
      '340.09.516 > Geçme Conta',
      '340.09.517 > Geçme Conta',
      '340.09.522 > Geçme Conta',
      '340.09.523 > Geçme Conta',
      '340.09.527 > Geçme Conta',
      '340.09.530 > Geçme Conta',
      '340.09.538 > Geçme Conta',
      '340.09.529 > Geçme Conta',
      '340.09.540 > Geçme Conta',
      '340.09.419 > Geçme Conta',
      '340.09.380 > Geçme Conta',
      '340.09.381 > Geçme Conta',
      '340.09.385 > Geçme Conta',
      '340.09.382 > Geçme Conta',
      '340.09.383 > Geçme Conta',
      '340.09.611 > Geçme Conta',
      '340.09.384 > Geçme Conta',
      '34001010 > U Tipi Fitiller',
      '34001011 > U Tipi Fitiller',
      '34001012 > U Tipi Fitiller',
      '34001015 > U Tipi Fitiller',
    ],
  },
  {
    title: 'YAPIŞKANLI CONTALAR',
    items: [
      '1300 > Yapışkanlı Conta',
      '1100 > Yapışkanlı Dökme Conta',
      '1200 > Yapışkanlı Conta',
      '340.09.966 > Yapışkanlı Conta',
      '340.09.968 > Yapışkanlı Conta',
      '340.09.969 > Yapışkanlı Conta',
      '340.09.970 > Yapışkanlı Conta',
    ],
  },
]

const accessorySections = [
  {
    title: 'KULPLAR',
    items: [
      '084 > Milenyum Kulp',
      '085 > Çekme Kulpu',
      '083 > Alüminyum Tutamak',
      '183 > Alüminyum Tutamak',
      '184 > Metal Kulp',
      '484 > Metal Kulp',
      '884 > Alüminyum Kulp',
      '284 > Metal Kulp',
      '384 > Metal Kulp',
      '584 > Katlanabilir Metal Kulp',
      '684 > Metal Kulp',
      '784 > Metal Kulp',
      '185 > Parmak Kulp',
      '086 > Makina Kapak Kulpu',
      '186 > Makina Kapak Kulpu',
      '386 > Kapak Kulpu',
      '081 > Kapak Kulpu',
      '087 > Makina Kapak Kulpu',
      '287 > Makina Kapak Kulpu',
      '187 > Makina Kapak Kulpu',
      '487 > Makina Kapak Kulpu',
      '286 > Kapak Kulpu',
      '387 > Makina Kapak Kulpu',
      '082 > Gömme Yaylı Kulp',
      '374 > Geçme Kapak Tutamağı',
      '274 > Geçme Kapak Tutamağı',
      '074 > Geçme Kapak Tutamağı',
      '174 > Geçme Kapak Tutamağı',
      '674 > Geçme Kapak Tutamağı',
      '774 > Geçme Kapak Tutamağı',
      '874 > Geçme Kapak Tutamağı',
      '574 > Gömme Tutamak',
      '474 > Gömme Tutamak',
      '974 > Gömme Tutamak',
    ],
  },
  {
    title: 'AKSESUARLAR',
    items: [
      '2300 > Havalandırma Panjuru',
      '2150 > Proje Cebi (A4)',
      '2152 > Proje Cebi (A5)',
      '2220 > Gözetleme Camı',
      '2216 > Sayaç Çerçevesi',
      '2215 > Sayaç Çerçevesi',
      '2451 > Aybolt',
      '2461 > Aybolt',
      '2400 > Kafesli Somun',
      '2700 > Gerdirme Mandalı',
      '2760 > Pim Kilitlemeli Tutamak',
      '2750 > Yaylı Yük Mandalı',
      '2751 > Yaylı Yük Mandalı (Perçinli)',
      '320.02.164 > Kablo Kanalı',
      '025 > Cam Menteşesi',
      '079 > Kapak Tutucu Makası',
      '279 > Kapak Tutucu Makası',
      '179 > Kapak Tutucu Makası',
      '340.10.026 > Akustik Sünger',
      '340.00.370 > Diyafram Tipi Gromet',
      '340.00.380 > Diyafram Tipi Gromet',
      '340.08.010 > Kauçuk Stoper',
      '340.00.400 > Kauçuk Tıpa',
      '340.08.001 > Kapak Tutucu',
      '340.20.005.2000 > Kapı Altı Fırçası',
      '340.20.025.2000 > Kapı Altı Fırçası',
    ],
  },
]

const stainlessSteelSections = [
  { title: 'KİLİTLER', items: [] },
  { title: 'MENTEŞELER', items: [] },
  { title: 'AKSESUARLAR', items: [] },
]

const electronicSections = [
  {
    title: 'ELEKTRONİK KOLLU KİLİTLER',
    items: [
      '3114 > Elektronik Kollu Kilit - Standalone',
      '3101 > Elektronik Kollu Kilit',
      '3102 > Elektronik Kollu Kilit',
      '3103 > Elektronik Kollu Kilit',
      '3104 > Elektronik Kollu Kilit',
      '3111 > Elektronik Kollu Kilit',
      '3112 > Elektronik Kollu Kilit',
      '3105 > Elektronik Kollu Kilit',
      '3106 > Elektronik Kollu Kilit',
      '3113 > Elektronik Kollu Kilit - Standalone',
    ],
  },
  {
    title: 'İZLEME VE ERİŞİM KONTROL SİSTEMİ',
    items: [
      '3402 > ACU Erişim Kontrol Ünitesi',
      '3403 > ACU Plus Erişim Kontrol Ünitesi',
      '3416 > S-AIK Standalone Erişim Arayüzü Tuş Takımı',
      '3417 > S-AIP Standalone Erişim Arayüzü Kart Okuyucu',
      '3414 > AIK Erişim Arayüzü Tuş Takımı',
      '3415 > AIP Erişim Arayüzü Kart Okuyucu',
    ],
  },
  {
    title: 'ELEKTRONİK DOLAP KİLİTLERİ',
    items: [
      '3204 > Elektronik Dolap Kilidi',
      '3205 > Elektronik Dolap Kilidi',
      '3211 > Elektronik Dolap Kilidi',
      '3212 > Elektronik Dolap Kilidi',
      '3213 > Elektronik Dolap Kilidi',
      '3214 > Elektronik Dolap Kilidi',
      '3202 > Elektronik Dolap Kilidi',
      '3203 > Elektronik Dolap Kilidi',
      '3201 > Elektronik Dolap Kilidi',
    ],
  },
  {
    title: 'DİĞER ELEKTRONİK KİLİTLER',
    items: [
      '3341 > Elektronik Kilit',
      '3311 > Selenoid Kilit',
      '3301 > Elektronik Dolap Kilidi',
      '3331 > Elektronik Kancalı Kilit',
      '3501 > Acil Durum Durdurma Butonu',
    ],
  },
]

const catalogGroups = [
  { title: 'KİLİTLER', sections: lockSections },
  { title: 'MENTEŞELER', sections: hingeSections },
  { title: 'CONTALAR', sections: sealSections },
  { title: 'AKSESUARLAR VE KULPLAR', sections: accessorySections },
  { title: 'ELEKTRONİK', sections: electronicSections },
]

function Products() {
  const navigate = useNavigate()
  const [activeSection, setActiveSection] = useState(null)
  const [activeGroup, setActiveGroup] = useState(null)
  const [openGroups, setOpenGroups] = useState([])

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
  }

  useEffect(() => {
    // Sayfa açıldığında KİLİTLER kategorisini açık olarak getir
    setOpenGroups(['KİLİTLER'])
    setActiveGroup('KİLİTLER')
  }, [])

  const currentItems = useMemo(() => {
    if (!activeSection) return []
    // activeSection benzersiz olduğu için tüm gruplarda ara
    // Kesinlikle doğru section'ı bulmak için tam eşleşme kontrolü yap
    // String karşılaştırması için trim ve case-sensitive kontrol yap
    const normalizedActiveSection = activeSection.trim()
    
    for (const group of catalogGroups) {
      for (const section of group.sections) {
        // Tam eşleşme kontrolü - kesinlikle doğru section'ı bul
        const normalizedSectionTitle = section.title.trim()
        if (normalizedSectionTitle === normalizedActiveSection) {
          // Bulunan section'ın items'ını döndür - kesinlikle doğru section'ın items'ı
          return Array.isArray(section.items) ? section.items : []
        }
      }
    }
    return []
  }, [activeSection])

  const currentGroupSections = useMemo(() => {
    if (!activeGroup) return []
    const group = catalogGroups.find((g) => g.title === activeGroup)
    return group ? group.sections : []
  }, [activeGroup])

  const toggleGroup = (title) => {
    if (activeGroup === title) {
      // Aynı gruba tekrar tıklanırsa kapat
      setActiveGroup(null)
      setActiveSection(null)
    } else {
      // Yeni grup seçilirse
      setActiveGroup(title)
      setActiveSection(null)
    }
    setOpenGroups((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  const handleSectionClick = (sectionTitle) => {
    // Belirli alt başlıklar için ayrı sayfaya yönlendir
    const slugMap = {
      'KOLLU KİLİTLER': 'kollu-kilitler',
      'İSPANYOLET SİSTEMLİ KİLİTLER': 'ispanyolet-sistemli-kilitler',
      'TRAFO VE KABİN KİLİTLERİ': 'trafo-ve-kabin-kilitleri',
      'KİLİMA SANTRAL ÜRÜNLERİ': 'kilima-santral-urunleri',
      'ÇEŞİTLİ ÜRÜNLER': 'cesitli-urunler',
      'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR': 'diller-anahtarlar-cubuk-ve-lamalar',
      'ÇEYREK DÖNÜŞLÜ KİLİTLER': 'ceyrek-donuslu-kilitler',
      'SİLİNDİRLİ KİLİTLER': 'silindirli-kilitler',
      'MOBİLYA VE ÇELİK EŞYA KİLİTLERİ': 'mobilya-ve-celik-esya-kilitleri',
      'KENAR MENTEŞELER': 'kenar-menteseler',
      'GİZLİ MENTEŞELER': 'gizli-menteseler',
      'KÖŞE MENTEŞELER': 'kose-menteseler',
      'DÜZ MENTEŞELER': 'duz-menteseler',
      'SIZDIRMAZLIK PROFİLLERİ VE KENAR KORUMA': 'sizdirmazlik-profilleri-ve-kenar-koruma',
      'YAPIŞKANLI CONTALAR': 'yapiskanli-contalar',
      'KULPLAR': 'kulplar',
      'AKSESUARLAR': 'aksesuarlar',
      'ELEKTRONİK KOLLU KİLİTLER': 'elektronik-kollu-kilitler',
      'İZLEME VE ERİŞİM KONTROL SİSTEMİ': 'izleme-ve-erisim-kontrol-sistemi',
      'ELEKTRONİK DOLAP KİLİTLERİ': 'elektronik-dolap-kilitleri',
      'DİĞER ELEKTRONİK KİLİTLER': 'diger-elektronik-kilitler',
    }
    const slug = slugMap[sectionTitle]
    if (slug) {
      navigate(`/urunler/${slug}`)
      return
    }
    
    // Diğer KİLİTLER alt başlıkları için ürün gösterme
    const lockGroup = catalogGroups.find((g) => g.title === 'KİLİTLER')
    if (lockGroup) {
      const isLockSection = lockGroup.sections.some((section) => section.title === sectionTitle)
      if (isLockSection && sectionTitle !== 'KOLLU KİLİTLER' && sectionTitle !== 'İSPANYOLET SİSTEMLİ KİLİTLER') {
        // KİLİTLER grubundaki diğer alt başlıklara tıklandığında activeSection'ı temizle
        setActiveSection(null)
        return
      }
    }
    
    // Diğer gruplar için normal işlem
    for (const group of catalogGroups) {
      const found = group.sections.find((section) => section.title === sectionTitle)
      if (found) {
        // Grubu açık tut
        if (!openGroups.includes(group.title)) {
          setOpenGroups((prev) => [...prev, group.title])
        }
        // activeGroup'u ve activeSection'ı set et
        setActiveGroup(group.title)
        setActiveSection(sectionTitle)
        return
      }
    }
    // Bulunamazsa da set et
    setActiveSection(sectionTitle)
  }

  // Pompa resimleri mapping
  const getPumpImage = (itemName) => {
    // Kollu kilit ürünleri için özel resim mapping (ürün koduna göre)
    const extractCode = (name) => {
      const match = name.match(/^(\d+(?:\s*[A-Z]\d+)?)\s*>\s*(.+)$/)
      return match ? match[1] : null
    }
    
    const code = extractCode(itemName)
    
    // Klima Kabin Kilidi için özel resim mapping (en önce kontrol edilmeli - 612 için)
    // Bu kontrol MUTLAKA en başta olmalı ve diğer kontrollerden önce çalışmalı
    if (code === '612' && itemName.includes('Klima Kabin Kilidi')) {
      // L Kollu kontrolü - farklı formatları kontrol et (tırnak işaretleri dahil)
      // Ürün adı: "612 > Klima Kabin Kilidi 'L' Kollu" formatında
      const hasLKollu = itemName.includes('L\' Kollu') || 
                        itemName.includes('\'L\' Kollu') || 
                        itemName.includes('L Kollu') ||
                        itemName.includes('"L" Kollu') ||
                        itemName.includes("'L' Kollu") ||
                        /L['"]\s*Kollu/i.test(itemName)
      
      if (hasLKollu) {
        return '/612_l_kollukabinkilidi.jpg'
      }
      return '/612klimakabinkilidi.jpg'
    }
    
    // Kabin kilitleri için özel resim mapping (Klima içermeyen Kabin Kilitleri için)
    if (code && itemName.includes('Kabin Kilidi') && !itemName.includes('Klima')) {
      const kabinKilitImageMap = {
        '016': itemName.includes('Metal Gövde') ? '/016kabinkilidi_metalgovde.jpg' : 
               itemName.includes('Plastik Gövde') ? '/016kabinkilidi_plastikgovde.jpg' :
               itemName.includes('Kancalı') ? '/016kabinkilidi_kancalikilitentegreli.jpg' :
               '/016kabinkilidi_metalgovde.jpg',
        '116': '/116kabinkilidi.jpg',
        '216': '/216kabinkilidi.jpg',
        '316': '/316kabinkilidi.jpg',
      }
      
      if (kabinKilitImageMap[code]) {
        return kabinKilitImageMap[code]
      }
    }
    
    // T Kollu Kabin Kilitleri için özel resim mapping (Klima içermeyen Kabin Kilitleri için)
    if (code && !itemName.includes('Klima') && (itemName.includes('T Kollu') || itemName.includes('"T" Kollu') || itemName.includes('\'T\' Kollu') || itemName.includes('Trafo Kilidi'))) {
      const tKolluKabinKilitImageMap = {
        '014': '/014tkollukabinkilidi.jpg',
        '015': '/015tkollukabinkilidi.jpg',
        '114': '/114tkollukabinkilidi.jpg',
        '115': '/115tkollukabinkilidi.jpg',
        '118': '/118tkollukabinkilidi.jpg',
        '214': itemName.includes('"T"') ? '/214tkollukabinkilidi.jpg' : '/214-2tkollukabinkilidi.jpg',
        '215': '/215tkollukabinkilidi.jpg',
        '315': '/315tkollukabinkilidi.jpg',
        '018': '/018tkollukabinkilidi.jpg',
      }
      
      if (tKolluKabinKilitImageMap[code]) {
        return tKolluKabinKilitImageMap[code]
      }
      
      // Kod bulunamazsa genel resim
      return '/t_kollu_kabinkilitleri.jpg'
    }
    
    // İspanyolet ürünleri için özel resim mapping
    if (code && (itemName.includes('İspanyolet') || itemName.includes('Dikey Hareketli') || itemName.includes('Dikey Mekanizmalı') || itemName.includes('İç Kilitleme') || itemName.includes('ispanyolet'))) {
      const ispanyoletImageMap = {
        '002': '/002ispanyolet.jpg',
        '003': '/003ispanyolet.jpg',
        '007': '/007ispanyolet.jpg',
        '102': '/102ispanyolet.jpg',
        '103': itemName.includes('Pano') ? '/103ispanyoletpano.jpg' : '/103ispanyolet.jpg',
        '104': '/104ispanyolet.jpg',
        '107': '/107ispanyolet.jpg',
        '109': '/109ispanyolet.jpg',
        '203': itemName.includes('Pano') ? '/203ispanyolet.jpg' : '/203ispanyolet.jpg',
        '204': '/204ispanyolet.jpg',
        '207': '/207ispanyolet.jpg',
        '209': '/209ispanyolet.jpg',
        '307': '/307ispanyolet.jpg',
        '309': '/309ispanyolet.jpg',
        '407': '/407ispanyolet.jpg',
        '409': '/409ispanyolet.jpg',
        '502': '/502ispanyolet.jpg',
        '504': '/504ispanyolet.jpg',
        '602': '/602ispanyolet.jpg',
        '809': '/809ispanyolet.jpg',
        '909': '/909ispanyolet.jpg',
        '03030': '/03030ispanyolet.jpg',
        '4001': '/4001ispanyolet.jpg',
      }
      
      if (ispanyoletImageMap[code]) {
        return ispanyoletImageMap[code]
      }
    }
    
    if (code && itemName.includes('Kollu Kilit')) {
      // Özel durumlar
      if (code === '001' && itemName.includes('Küçük Versiyon')) {
        return '/001kollukilit.jpg'
      }
      
      // Kod bazlı resim mapping
      const kolluKilitImageMap = {
        '001': '/001kollukilit.jpg',
        '006': '/006kollukilit.jpg',
        '008': '/008kollukilit.jpg',
        '101': '/101kollukilit.jpg',
        '106': '/106kollukilit.jpg',
        '108': '/108kollukilit.jpg',
        '201': '/201kollukilit.jpg',
        '205': '/205kollukilit.jpg',
        '206': '/206kollukilit.jpg',
        '208': '/208kollukilit.jpg',
        '306': '/306kollukilit.jpg',
        '308': '/308kollukilit.jpg',
        '406': '/406kollukilit.jpg',
        '408': '/408kollukilit.jpg',
        '501': '/501kollukilit.jpg',
        '504': '/504kollukilit.jpg',
        '508': '/508kollukilit.jpg',
        '601': '/601kollukilit.jpg',
        '708': '/708kollukilit.jpg',
        '808': '/808kollukilit.jpg',
        '908': '/908kollukilit.jpg',
      }
      
      if (kolluKilitImageMap[code]) {
        return kolluKilitImageMap[code]
      }
    }
    
    // Klima Santral Kilidi için özel resim mapping (612 için T Kollu kontrolü ile)
    // NOT: Klima Kabin Kilidi kontrolünden sonra gelmeli
    if (code && itemName.includes('Klima Santral Kilidi') && !itemName.includes('Klima Kabin Kilidi')) {
      const klimaSantralImageMap = {
        '012': '/012klimasantralkilidi.jpg',
        '112': '/112klimasantralkilidi.jpg',
        '612': (itemName.includes('T\' Kollu') || itemName.includes('\'T\' Kollu') || itemName.includes('T Kollu') || itemName.includes("'T' Kollu")) ? '/612_t_kolluklimasantralkilidi.jpg' : '/612klimasantralkilidi.jpg',
      }
      
      if (klimaSantralImageMap[code]) {
        return klimaSantralImageMap[code]
      }
      
      // Kod bulunamazsa genel resim
      return '/klimasantralurunleri.png'
    }
    
    // 712 > Fonsiyonel Kilit Menteşe için özel resim mapping
    if (code === '712' && itemName.includes('Fonsiyonel Kilit Menteşe')) {
      return '/712fonsiyonelkilitmese.jpg'
    }
    
    // 078 > Profil Bağlantı Parçası için özel resim mapping
    if (code === '078' && itemName.includes('Profil Bağlantı Parçası')) {
      return '/078_profilbaglantıparcasi.jpg'
    }
    
    // 462 > Sıkıştırmalı Kilit için özel resim mapping
    if (code === '462' && itemName.includes('Sıkıştırmalı Kilit')) {
      return '/462_sikistirmalikilit.jpg'
    }
    
    // Sıkıştırmalı Kilit ürünleri için özel resim mapping (077, 177, 377, 477, 270, 072, 070, 170)
    if (code && (itemName.includes('Sıkıştırmalı Kilit') || itemName.includes('Fonksiyonel Kilit') || itemName.includes('Kaldır-Çevir'))) {
      // 270 > Sıkıştırmalı Kilit 2 için özel kontrol
      if (code === '270' && itemName.includes('Sıkıştırmalı Kilit 2')) {
        return '/sikistirmalikilit/270sikistirmalikilit2.jpg'
      }
      
      const sikistirmaliKilitImageMap = {
        '077': '/sikistirmalikilit/077sikistirmalikilit.jpg',
        '177': '/sikistirmalikilit/177sikistirmalikilit.jpg',
        '377': '/sikistirmalikilit/377sikistirmalikilit.jpg',
        '477': '/sikistirmalikilit/477sikistirmalikilit.jpg',
        '270': '/sikistirmalikilit/270sikistirmalikilit.jpeg',
        '072': '/sikistirmalikilit/072sikistirmalikilit.jpg',
        '070': '/sikistirmalikilit/070sikistirmalikilit.jpg',
        '170': '/sikistirmalikilit/170sikistirmalikilit.jpg',
      }
      
      if (sikistirmaliKilitImageMap[code]) {
        return sikistirmaliKilitImageMap[code]
      }
    }
    
    // Sürgü Kilit ürünleri için özel resim mapping
    if (code && itemName.includes('Sürgü Kilit')) {
      const surguKilitImageMap = {
        '071': '/surgukilit/071surgukilit.jpg',
        '171': '/surgukilit/171surgukilit.jpg',
        '271': '/surgukilit/271surgukilit.jpg',
        '371': '/surgukilit/371surgukilit.jpg',
        '471': '/surgukilit/471surgukilit.jpg',
        '571': '/surgukilit/571surgukilit.jpg',
        '671': '/surgukilit/671surgukilit.jpg',
      }
      
      if (surguKilitImageMap[code]) {
        return surguKilitImageMap[code]
      }
    }
    
    // Diller için özel resim mapping (CC kodlu ve diğer diller)
    if (itemName.startsWith('CC >') || itemName.includes('Tırnaklı Diller') || itemName.includes('Tırnaksız Diller') || itemName.includes('Paslanmaz Çelik Diller') || itemName.includes('Diğer Diller')) {
      const dillerImageMap = {
        'CC > Tırnaklı Diller 1': '/dilleranahtarlar/diller/ccTirnakliDiller1.jpg',
        'CC > Tırnaklı Diller 2': '/dilleranahtarlar/diller/ccTirnakliDiller2.jpg',
        'CC > Tırnaklı Diller 3': '/dilleranahtarlar/diller/ccTirnakliDiller3.jpg',
        'CC > Tırnaklı Diller 4': '/dilleranahtarlar/diller/ccTirnakliDiller4.jpg',
        'CC > Tırnaklı Diller 5': '/dilleranahtarlar/diller/ccTirnakliDiller5.jpg',
        'CC > Tırnaksız Diller 1': '/dilleranahtarlar/diller/ccTirnaksizDiller1.jpg',
        'CC > Tırnaksız Diller 2': '/dilleranahtarlar/diller/ccTirnaksizDiller2.jpg',
        'CC > Tırnaksız Diller 3': '/dilleranahtarlar/diller/ccTirnaksizDiller3.jpg',
        'CC > Tırnaksız Diller 4': '/dilleranahtarlar/diller/ccTirnaksizDiller4.jpg',
        'CC > Tırnaksız Diller 5': '/dilleranahtarlar/diller/ccTirnaksizDiller5.jpg',
        'CC > Paslanmaz Çelik Diller (Tırnaklı) 1': '/dilleranahtarlar/diller/ccPaslanmazCelikDillerTirnakli.jpg',
        'CC > Paslanmaz Çelik Diller (Tırnaklı) 2': '/dilleranahtarlar/diller/ccPaslanmazCelikDillerTirnakli2.jpg',
        'CC > Paslanmaz Çelik Diller (Tırnaksız)': '/dilleranahtarlar/diller/ccPaslanmazCelikDillerTirnaksiz.jpg',
        'CC > Diğer Diller 1': '/dilleranahtarlar/diller/ccDigerDiller1.jpg',
        'CC > Diğer Diller 2': '/dilleranahtarlar/diller/ccDigerDiller2.jpg',
        'CC > Diğer Diller 3': '/dilleranahtarlar/diller/ccDigerDiller3.jpg',
        'CC > Diğer Diller 4': '/dilleranahtarlar/diller/ccDigerDiller4.jpg',
      }
      
      if (dillerImageMap[itemName]) {
        return dillerImageMap[itemName]
      }
    }
    
    // Diğer diller için özel resim mapping (320.02.180, 30403485, 30403499)
    if (itemName.includes('Geçme Dil Aparatı') || itemName.includes('Kancalı Diller') || itemName.includes('İspanyolet Dil Adaptörü')) {
      if (itemName.includes('Geçme Dil Aparatı')) {
        return '/dilleranahtarlar/diller/gecmedil_aparati.jpg'
      }
      if (itemName.includes('Kancalı Diller')) {
        return '/dilleranahtarlar/diller/kancali_dil.jpg'
      }
      if (itemName.includes('İspanyolet Dil Adaptörü')) {
        return '/dilleranahtarlar/diller/dil_ispanyolet_adaptorleri.jpg'
      }
    }
    
    // Diğer Ürünler için özel resim mapping
    if (code && (itemName.includes('Perde Sacı Kilidi') || itemName.includes('Allen Göbekli Pano Kilidi') || itemName.includes('Kancalı Kilit') || itemName.includes('Elektronik Kancalı Kilit') || itemName.includes('Acil Durum Durdurma Butonu') || itemName.includes('Mini Butonlu Kilit'))) {
      const digerUrunImageMap = {
        '073': '/cu-digerurunler/073perdesacikilit.jpg',
        '075': '/cu-digerurunler/075allengobekli.jpg',
        '176': '/cu-digerurunler/176kancalikilit.png',
        '2800': '/cu-digerurunler/2800kancalikilit.jpg',
        '2810': '/cu-digerurunler/2810kancalikilitbuyuk.jpg',
        '3331': '/cu-digerurunler/3331elektronikkancalikilit.jpg',
        '3501': '/cu-digerurunler/3501acildurum.jpg',
        '466': '/cu-digerurunler/466minibutonlu.jpg',
      }
      
      if (digerUrunImageMap[code]) {
        return digerUrunImageMap[code]
      }
    }
    
    // Ürün bazlı özel mapping
    const imageMap = {
      'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR': '/aligodi.png',
      'DÖKÜM GÖVDELİ DİŞLİ POMPALAR': '/dokum-govdeli-disli-pompal.png',
      'EL POMPASI': '/el-pompasi.png',
      'İÇTEN DİŞLİ POMPALAR': '/icten-disli-pompalar.png',
      'İŞ MAKİNESİ POMPALARI': '/is-makinesi-pompalari.png',
      'PALETLİ POMPA': '/paletli-pompa.png',
      'PİSTONLU POMPA': '/pistonlu-pompa.png',
      'TANDEM POMPALAR': '/tandem-pompalar.png',
      // DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR için özel resimler
      'Diller': '/dilleranahtarlar/diller.jpg',
      'İspanyolet Çubuk ve Aksesuarları': '/dilleranahtarlar/ispanyoletcubuk-ve-aksesuarlari.jpg',
      'İspanyolet Lama ve Aksesuarları': '/dilleranahtarlar/ispanyoletLama.jpg',
      'Paslanmaz İspanyolet Çubuk ve Aksesuarları': '/dilleranahtarlar/paslanmazispanyoletcubuk.png',
      'Paslanmaz İspanyolet Lama ve Aksesuarları': '/dilleranahtarlar/paslanmazispanyoletlama.png',
      'Anahtarlar': '/dilleranahtarlar/anahtarlar.jpg',
    }
    
    // Kategori bazlı resim atama (kollu kilitler için özel resim yoksa)
    for (const section of lockSections) {
      const categoryImage = categoryImageMap[section.title]
      if (categoryImage) {
        section.items.forEach(item => {
          if (!imageMap[item]) {
            imageMap[item] = categoryImage
          }
        })
      }
    }
    return imageMap[itemName] || `https://via.placeholder.com/320x200.png?text=${encodeURIComponent(itemName)}`
  }

  // Ürün logoları mapping
  const getProductLogo = (itemName) => {
    const logoMap = {
      'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR': 'https://metosan.com.tr/Storage/Upload/cache/637557325862393960-b-39hydrocar-175-90.png',
      'DÖKÜM GÖVDELİ DİŞLİ POMPALAR': 'https://metosan.com.tr/Storage/Upload/cache/638340098660595043-b-73grimet-175-90.png',
      'EL POMPASI': 'https://metosan.com.tr/Storage/Upload/cache/637333620284483912-b-11salami-175-90.png',
      'İÇTEN DİŞLİ POMPALAR': 'https://metosan.com.tr/Storage/Upload/cache/637661968877589422-b-67walvoil-175-90.png',
      'İŞ MAKİNESİ POMPALARI': 'https://metosan.com.tr/Storage/Upload/cache/637532341975657085-b-30kawasaki-175-90.png',
      'PALETLİ POMPA': 'https://metosan.com.tr/Storage/Upload/cache/637635181100323594-b-58wika-175-90.png',
      'PİSTONLU POMPA': 'https://metosan.com.tr/Storage/Upload/cache/637613397761965452-b-46zhenjiang-175-90.png',
      'TANDEM POMPALAR': 'https://metosan.com.tr/Storage/Upload/cache/637607340096564042-b-43saip-175-90.png',
      'ALÜMİNYUM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER': 'https://metosan.com.tr/Storage/Upload/cache/637532342525093881-b-33gold-175-90.png',
      'DÖKÜM GÖVDE DİŞLİ AKIŞ BÖLÜCÜLER': 'https://metosan.com.tr/Storage/Upload/cache/637332590151054674-b75-15hemko-175-90.png',
      'MEMBRANLI AKÜLER': 'https://metosan.com.tr/Storage/Upload/cache/637557325862393960-b-39hydrocar-175-90.png',
      'BALONLU AKÜLER': 'https://metosan.com.tr/Storage/Upload/cache/638340098660595043-b-73grimet-175-90.png',
    }
    // Eğer ürün için logo yoksa, ürün adına göre bir logo seç (modulo ile)
    const logos = [
      'https://metosan.com.tr/Storage/Upload/cache/637557325862393960-b-39hydrocar-175-90.png',
      'https://metosan.com.tr/Storage/Upload/cache/638340098660595043-b-73grimet-175-90.png',
      'https://metosan.com.tr/Storage/Upload/cache/637333620284483912-b-11salami-175-90.png',
      'https://metosan.com.tr/Storage/Upload/cache/637661968877589422-b-67walvoil-175-90.png',
      'https://metosan.com.tr/Storage/Upload/cache/637532341975657085-b-30kawasaki-175-90.png',
      'https://metosan.com.tr/Storage/Upload/cache/637635181100323594-b-58wika-175-90.png',
      'https://metosan.com.tr/Storage/Upload/cache/637613397761965452-b-46zhenjiang-175-90.png',
      'https://metosan.com.tr/Storage/Upload/cache/637607340096564042-b-43saip-175-90.png',
      'https://metosan.com.tr/Storage/Upload/cache/637532342525093881-b-33gold-175-90.png',
      'https://metosan.com.tr/Storage/Upload/cache/637332590151054674-b75-15hemko-175-90.png',
    ]
    return logoMap[itemName] || logos[itemName.length % logos.length]
  }

  // Alt başlık resimleri için placeholder
  const getSectionImage = (sectionTitle) => {
    return categoryImageMap[sectionTitle] || `https://via.placeholder.com/320x200.png?text=${encodeURIComponent(sectionTitle)}`
  }

  return (
    <div className="bg-slate-50 pb-16 text-slate-900">
      <section className="mx-auto flex w-full max-w-[85%] flex-col gap-6 px-1.5 pt-8 sm:gap-8 sm:px-2 lg:flex-row lg:px-3">
        <aside className="w-full lg:w-96">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-28">
            <h3 className="text-base font-bold text-slate-900">KATEGORİLER</h3>
            {catalogGroups.map((group) => {
              const groupOpen = openGroups.includes(group.title)
              const isActiveGroup = activeGroup === group.title
              return (
                <div key={group.title} className="space-y-2">
                  <button
                    onClick={() => toggleGroup(group.title)}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                      isActiveGroup ? 'bg-[#16a34a]/10 text-[#16a34a]' : groupOpen ? 'bg-slate-50 text-slate-800' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    <span>{group.title}</span>
                    <span className={`text-xs ${groupOpen ? 'rotate-90' : ''} transition`}>›</span>
                  </button>
                  {groupOpen ? (
                    <div className="ml-3 space-y-2 border-l border-slate-200 pl-3">
                      {group.sections.map((section) => {
                        const isActive = activeSection === section.title
                        const categoryImage = categoryImageMap[section.title]
                        return (
                          <div key={section.title} className="space-y-1">
                            <button
                              onClick={() => handleSectionClick(section.title)}
                              className={`flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-sm font-light transition ${
                                isActive ? 'text-[#16a34a]' : 'text-slate-700 hover:text-[#16a34a]'
                              }`}
                            >
                              <div className="flex items-center gap-2">
                                {categoryImage && (
                                  <img 
                                    src={categoryImage} 
                                    alt={section.title}
                                    className="h-10 w-10 rounded object-contain"
                                  />
                                )}
                                <span>{section.title}</span>
                              </div>
                              <span
                                className={`text-xs transition ${isActive ? 'text-[#16a34a]' : 'text-slate-400'}`}
                                aria-hidden
                              >
                                ›
                              </span>
                            </button>
                          </div>
                        )
                      })}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </aside>

        <div className="flex-1 space-y-5">
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[#16a34a]">
                {activeGroup ? 'Ana Kategori' : activeSection ? 'Alt Kategori' : 'Seçim'}
              </p>
              <h2 className="text-xl font-semibold">
                {activeSection ?? activeGroup ?? 'Henüz seçilmedi'}
              </h2>
            </div>
            <span className="text-sm text-slate-500">
              {activeSection
                ? `${currentItems.length} ürün`
                : activeGroup
                  ? `${currentGroupSections.length} alt kategori`
                  : 'Seçim yapın'}
            </span>
          </div>

          {!activeGroup && !activeSection ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-sm text-slate-500 shadow-sm">
              Bir kategori seçin, ürünleri listeleyelim.
            </div>
          ) : activeGroup && !activeSection ? (
            // Ana başlık seçilmiş, alt başlıkları kartlar halinde göster
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentGroupSections.map((section) => {
                const img = getSectionImage(section.title)
                return (
                  <button
                    key={section.title}
                    onClick={() => handleSectionClick(section.title)}
                    className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl"
                  >
                    <div className="mb-6 flex items-center justify-center">
                      <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-xl">
                      <img 
                        src={img} 
                        alt={section.title} 
                        className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105" 
                      />
                    </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="mb-2 text-xl font-bold text-slate-900">{section.title}</h3>
                      {section.items && section.items.length > 0 && (
                        <p className="mb-4 text-sm leading-relaxed text-slate-600">
                          {section.items.length} ürün çeşidi
                        </p>
                      )}
                      <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#16a34a] transition-all duration-300 group-hover:gap-3">
                        Detayları Görüntüle
                        <span className="text-base">→</span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          ) : activeSection && currentItems.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-sm text-slate-500 shadow-sm">
              Bu grup için ürün bulunamadı.
            </div>
          ) : activeSection ? (
            // Alt başlık seçilmiş, ürünleri göster
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentItems.map((item) => {
                const img = getPumpImage(item)
                const productSlug = encodeURIComponent(item.toLowerCase().replace(/\s+/g, '-'))
                return (
                  <Link
                    key={item}
                    to={`/urun-detay/${productSlug}`}
                    state={{ productName: item, productImage: img, productLogo: getProductLogo(item) }}
                    className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-slate-300 hover:shadow-xl"
                  >
                    <div className="mb-6 flex items-center justify-center">
                      <div className="relative flex h-64 w-full items-center justify-center overflow-hidden rounded-xl">
                      <img 
                        src={img} 
                        alt={item} 
                        className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105" 
                      />
                    </div>
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="mb-2 text-xl font-bold text-slate-900">{item}</h3>
                        {activeSection === 'ÇEŞİTLİ ÜRÜNLER' && (
                        <p className="mb-4 text-sm leading-relaxed text-slate-600">Ürün Grup Çeşitleri</p>
                        )}
                      <div className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#16a34a] transition-all duration-300 group-hover:gap-3">
                        Detayları Görüntüle
                        <span className="text-base">→</span>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}

export default Products

