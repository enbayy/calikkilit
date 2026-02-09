import { useMemo } from 'react'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom'

// Tüm section'ları import et
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
    title: 'Kabin Kilitleri',
    items: [
      '016 > Kabin Kilidi (Metal Gövde)',
      '016 > Kabin Kilidi (Plastik Gövde)',
      '016 > Kabin Kilidi (Kancalı Kilit Entegreli)',
      '316 > Kabin Kilidi',
      '216 > Kabin Kilidi',
      '116 > Mini Kabin Kilidi',
    ],
  },
  {
    title: 'T Kollu Kabin Kilitleri',
    items: [
      '214 > "T" Kollu Kabin Kilidi',
      '214 > T Kollu Kabin Kilidi',
      '014 > "T" Kollu Kabin Kilidi',
      '114 > Mini \'T\' Kollu Kabin Kilidi',
      '315 > "T" Kollu Kabin Kilidi',
      '215 > "T" Kollu Kabin Kilidi',
      '115 > "T" Kollu Kabin Kilidi',
      '015 > T Kollu Kabin Kilidi',
      '018 > Trafo Kilidi',
      '118 > Trafo Kilidi',
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
      '112 > Klima Santral Kilidi',
      '112 > Klima Santral Kilidi',
      '112 > Klima Santral Kilidi',
      '112 > Klima Santral Kilidi Aksesuarları',
      '112 > Klima Santral Kilidi',
      '112 > Klima Santral Kilidi',
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
      'Çeyrek Dönüşlü Kilitler',
      'Sıkıştırmalı Kilitler',
      'Kolay Montaj Ç.D. Kilitler',
    ],
  },
  {
    title: 'SİLİNDİRLİ KİLİTLER',
    items: [
      '163 > Silindirli Kilit Yaylı Dilli',
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
      '340 > Sıkıştırmalı Kelebek Kilit v2',
      '050 > Silindirli Kilit v1',
      '050 > Silindirli Kilit v2',
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
  {
    title: 'KENAR MENTEŞELER',
    items: [
      '090 > Kenar Menteşe (10mm)',
      '091 > Kenar Menteşe (12mm)',
      '092 > Kenar Menteşe (12mm)',
      '192 > Kenar Menteşe (12mm)',
      '093 > Kenar Menteşe (14mm)',
      '193 > Kenar Menteşe (16mm)',
      '793 > Kenar Menteşe',
      '893 > Kenar Menteşe',
      '191 > Kenar Menteşe (10mm)',
      '1093 > Kenar Menteşe',
      '993 > Kenar Menteşe',
      '1193 > Kenar Menteşe',
      '393 > Kenar Menteşe',
      '293 > Kenar Menteşe',
      '493 > Kenar Menteşe',
      '593 > Kenar Menteşe',
      '693 > Kenar Menteşe',
    ],
  },
  {
    title: 'GİZLİ MENTEŞELER',
    items: [
      '094 > Gizli Menteşe',
      '194 > Gizli Menteşe',
      '096 > Gizli Menteşe',
      '196 > Gizli Menteşe',
      '294 > Gizli Menteşe',
      '296 > Gizli Menteşe',
      '095 > Gizli Menteşe',
      '195 > Gizli Menteşe',
      '295 > Gizli Menteşe',
      '395 > Gizli Menteşe',
      '695 > Gizli Menteşe',
      '795 > Gizli Menteşe',
      '1795 > Gizli Menteşe',
      '895 > Gizli Menteşe',
      '1095 > Gizli Menteşe',
      '995 > Gizli Menteşe v1',
      '995 > Gizli Menteşe v2',
      '1995 > Gizli Menteşe',
      '595 > Gizli Menteşe',
      '189 > Yaylı Mil Menteşe',
      '389 > Gizli Menteşe',
      '089 > Yaylı Mil Menteşe',
      '289 > Gizli Menteşe',
      '394 > Gizli Menteşe',
      '1495 > Gizli Menteşe',
    ],
  },
  {
    title: 'KÖŞE MENTEŞELER',
    items: [
      '097 > Köşe Menteşe',
      '197 > Köşe Menteşe',
      '297 > Köşe Menteşe',
      '397 > Köşe Menteşe',
      '298 > Köşe Menteşe',
      '098 > Köşe Menteşe',
      '398 > Köşe Menteşe',
      '497 > Köşe Menteşe',
      '498 > Köşe Menteşe',
      '400 > Köşe Menteşe',
      '200 > Köşe Menteşe',
      '100 > Köşe Menteşe',
      '600 > Klima Santral Menteşesi',
      '600 > Köşe Menteşe',
      '700 > Klima Santral Menteşesi',
    ],
  },
  {
    title: 'DÜZ MENTEŞELER',
    items: [
      '1299 > Mini Yaprak Menteşe',
      '299 > Yaprak Menteşe',
      '199 > Yaprak Menteşe',
      '099 > Yaprak Menteşe',
      '399 > Yaprak Menteşe',
      '1399 > Yaprak Menteşe',
      '1699 > Kaldır - Çıkar Menteşe',
      '1499 > Kaldır - Çıkar Menteşe',
      '900 > Yaprak Menteşe',
      '899 > Kaldır - Çıkar Menteşe',
      '499 > Yaprak Menteşe',
      '599 > Yaprak Menteşe',
      '1599 > Yaprak Menteşe',
      '799 > Yaprak Menteşe',
      '4599 > Yaprak Menteşe',
      '2899 > Yaprak Menteşe',
      '4299 > Kaldır - Çıkar Menteşe',
      '1199 > Yaprak Menteşe',
      '2099 > Tork Menteşe',
      '2199 > Tork Menteşe',
      '2599 > Yaprak Menteşe',
      '2399 > Ayarlı Tork Menteşe',
      '2499 > Ayarlı Tork Menteşe',
      '699 > Kaldır - Çıkar Menteşe',
      '693 > Yataklı Menteşe',
      '800 > Klima Santral Menteşesi (3D)',
      '500 > Klima Santral Menteşesi',
      '300 > Klima Santral Menteşesi',
      '1500 > Klima Santral Menteşesi',
      '0000 > Karoser Menteşe',
    ],
  },
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
      '384 > Metal Kulp v1',
      '384 > Metal Kulp v2',
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

function SectionProducts() {
  const { sectionSlug } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  // location.pathname'den tam path'i al (ceyrek-donuslu-kilitler/sikistirmali-kilitler gibi)
  const fullSectionSlug = location.pathname.replace('/urunler/', '')

  // Slug'dan section title'ı bul
  const sectionTitle = useMemo(() => {
    const slugToTitle = {
      'kollu-kilitler': 'KOLLU KİLİTLER',
      'ispanyolet-sistemli-kilitler': 'İSPANYOLET SİSTEMLİ KİLİTLER',
      'trafo-ve-kabin-kilitleri': 'TRAFO VE KABİN KİLİTLERİ',
      'kabin-kilitleri': 'Kabin Kilitleri',
      't-kollu-kabin-kilitleri': 'T Kollu Kabin Kilitleri',
      'kilima-santral-urunleri': 'KİLİMA SANTRAL ÜRÜNLERİ',
      'cesitli-urunler': 'ÇEŞİTLİ ÜRÜNLER',
      'sikistirmali-kilitler': 'Sıkıştırmalı Kilitler',
      'ceyrek-donuslu-kilitler/sikistirmali-kilitler': 'Sıkıştırmalı Kilitler',
      'ceyrek-donuslu-kilitler/ceyrek-donuslu-kilitler': 'Çeyrek Dönüşlü Kilitler',
      'ceyrek-donuslu-kilitler': 'ÇEYREK DÖNÜŞLÜ KİLİTLER',
      'surgu-kilitler': 'Sürgü Kilitler',
      'diger-urunler': 'Diğer Ürünler',
      'diller-anahtarlar-cubuk-ve-lamalar': 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR',
      'diller': 'Diller',
      'ispanyolet-cubuk-ve-aksesuarlari': 'İspanyolet Çubuk ve Aksesuarları',
      'ispanyolet-lama-ve-aksesuarlari': 'İspanyolet Lama ve Aksesuarları',
      'paslanmaz-ispanyolet-cubuk-ve-aksesuarlari': 'Paslanmaz İspanyolet Çubuk ve Aksesuarları',
      'paslanmaz-ispanyolet-lama-ve-aksesuarlari': 'Paslanmaz İspanyolet Lama ve Aksesuarları',
      'anahtarlar': 'Anahtarlar',
      'ceyrek-donuslu-kilitler': 'ÇEYREK DÖNÜŞLÜ KİLİTLER',
      'kolay-montaj-cd-kilitler': 'Kolay Montaj Ç.D. Kilitler',
      'silindirli-kilitler': 'SİLİNDİRLİ KİLİTLER',
      'mobilya-ve-celik-esya-kilitleri': 'MOBİLYA VE ÇELİK EŞYA KİLİTLERİ',
      'kenar-menteseler': 'KENAR MENTEŞELER',
      'gizli-menteseler': 'GİZLİ MENTEŞELER',
      'kose-menteseler': 'KÖŞE MENTEŞELER',
      'duz-menteseler': 'DÜZ MENTEŞELER',
      'sizdirmazlik-profilleri-ve-kenar-koruma': 'SIZDIRMAZLIK PROFİLLERİ VE KENAR KORUMA',
      'yapiskanli-contalar': 'YAPIŞKANLI CONTALAR',
      'kulplar': 'KULPLAR',
      'aksesuarlar': 'AKSESUARLAR',
      'elektronik-kollu-kilitler': 'ELEKTRONİK KOLLU KİLİTLER',
      'izleme-ve-erisim-kontrol-sistemi': 'İZLEME VE ERİŞİM KONTROL SİSTEMİ',
      'elektronik-dolap-kilitleri': 'ELEKTRONİK DOLAP KİLİTLERİ',
      'diger-elektronik-kilitler': 'DİĞER ELEKTRONİK KİLİTLER',
    }
    return slugToTitle[fullSectionSlug] || slugToTitle[sectionSlug] || null
  }, [fullSectionSlug, sectionSlug])

  // Section'ın ürünlerini bul
  const currentItems = useMemo(() => {
    if (!sectionTitle) return []
    // KİLİMA SANTRAL ÜRÜNLERİ için özel ürün listesi
    if (sectionTitle === 'KİLİMA SANTRAL ÜRÜNLERİ') {
      return [
        '012 > Klima Santral Kilidi (Versiyon 1)',
        '012 > Klima Santral Kilidi (Versiyon 2)',
        '012 > Klima Santral Kilidi (Versiyon 3)',
        '012 > Klima Santral Kilidi Aksesuarı',
        '012 > Klima Santral Kilidi',
        '112 > Klima Santral Kilidi (Versiyon 1)',
        '112 > Klima Santral Kilidi Aksesuarları',
        '112 > Klima Santral Kilidi (Versiyon 2)',
        '112 > Klima Santral Kilidi (Versiyon 3)',
        '112 > Klima Santral Kilidi (Versiyon 4)',
        '712 > Fonsiyonel Kilit Menteşe',
        '612 > Klima Santral Kilidi',
        '612 > Klima Santral Kilidi T Kollu',
        '612 > Klima Kabin Kilidi L Kollu',
        '078 > Profil Bağlantı Parçası (3D)',
        '462 > Sıkıştırmalı Kilit',
      ]
    }
    // Sıkıştırmalı Kilitler için özel ürün listesi
    if (sectionTitle === 'Sıkıştırmalı Kilitler') {
      // ÇEYREK DÖNÜŞLÜ KİLİTLER section'ından geliyorsa farklı liste
      // location.state'te fromSection kontrolü veya sectionSlug kontrolü yap
      const isFromCeyrekDonuslu = location?.state?.fromSection === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' ||
                                   fullSectionSlug === 'ceyrek-donuslu-kilitler/sikistirmali-kilitler'
      
      if (isFromCeyrekDonuslu) {
        // ÇEYREK DÖNÜŞLÜ KİLİTLER'den gelen Sıkıştırmalı Kilitler için özel liste
        return [
          '040 > Sıkıştırmalı Kilit v1',
          '040 > Sıkıştırmalı Kilit v2',
          '640 > Sıkıştırmalı Kilit v1',
          '640 > Sıkıştırmalı Kilit v2',
          '140 > Mini Sıkıştırmalı Kilit',
          '045 > Sıkıştırmalı Kilit',
        ]
      }
      
      // ÇEŞİTLİ ÜRÜNLER section'ından geliyorsa normal liste
      return [
        '077 > Sıkıştırmalı Kilit',
        '177 > Sıkıştırmalı Kilit',
        '377 > Sıkıştırmalı Kilit',
        '477 > Sıkıştırmalı Kilit',
        '072 > Fonksiyonel Kilit',
        '070 > Kaldır-Çevir',
        '170 > Kaldır-Çevir',
        '270 > Sıkıştırmalı Kilit',
        '270 > Sıkıştırmalı Kilit 2',
      ]
    }
    
    // Çeyrek Dönüşlü Kilitler için özel ürün listesi
    if (sectionTitle === 'Çeyrek Dönüşlü Kilitler') {
      return [
        'AA > Kovan, Somun, Rondela, Yay, Civata, Oring',
        'DD > Göbekler',
        '060 AX > Çeyrek Dönüşlü Kilit Aksesuarları',
        '060 > Çeyrek Dönüşlü Yaylı Kilit',
        '062 > Çeyrek Dönüşlü Kelebek Kilit',
        '362 > Çeyrek Dönüşlü Kelebek Kilit',
        '562 > Asma Klit Hamili Pano Kilidi',
        '262 > Asma Kilit Hamili Pano Kilidi',
        '260 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit',
        '162 > Pako Kilit',
        '064 > Çeyrek Dönüşlü Yaylı Kilit',
        '064 > Çeyrek Dönüşlü Kelebek Kilit',
        '064 > Çeyrek Dönüşlü Kademeli Kilit',
        '266 > Mini Çeyrek Dönüşlü Yaylı Kilit',
        '166 > Mini Çeyrek Dönüşlü Kelebek',
        '066 > Mini Çeyrek Dönüşlü Yaylı Kilit',
        '662 > Asma Kilit Hamili Çeyrek Dönüşlü Kili v1',
        '662 > Asma Kilit Hamili Çeyrek Dönüşlü Kil v2',
        '211 > Asma Kilit Hamili \'L\' Kollu Kilit',
        '960 > Çeyrek Dönüşlü Kilit - Modüler Tutamak',
        '361 > Emniyetli Çeyrek Dönüşlü Kilit',
        '461 > Emniyetli Çeyrek Dönüşlü Kilit',
        '760 > Çeyrek Dönüşlü Yaylı Kilit',
        '360 > Çeyrek Dönüşlü Yaylı Kilit (Topraklamalı)',
        '561 > Tutamaklı Kilit',
        '261 > Tutamaklı Kilit',
        '161 > Tutamaklı Kilit',
        '160 > Dili Yaylı Kilit',
        '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v5',
        '050 > Bilyalı Kilit',
        '350 > Çeyrek Dönüşlü Kilit',
        '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v1',
        '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v2',
        '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v3',
        '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v4',
        '103 > Çeyrek Dönüşlü Kilit',
        '666 > Çeyrek Dönüşlü Kilit',
        '203 > Çeyrek Dönüşlü Kilit v1',
        '203 > Çeyrek Dönüşlü Kelebek Kilit v2',
      ]
    }
    // SİLİNDİRLİ KİLİTLER için özel ürün listesi
    if (sectionTitle === 'SİLİNDİRLİ KİLİTLER') {
      return [
        '163 > Silindirli Kilit Yaylı Dilli',
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
        '340 > Sıkıştırmalı Kelebek Kilit v2',
        '050 > Silindirli Kilit v1',
        '050 > Silindirli Kilit v2',
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
      ]
    }
    // MOBİLYA VE ÇELİK EŞYA KİLİTLERİ için özel ürün listesi
    if (sectionTitle === 'MOBİLYA VE ÇELİK EŞYA KİLİTLERİ') {
      return [
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
      ]
    }
    // ELEKTRONİK KOLLU KİLİTLER için özel ürün listesi
    if (sectionTitle === 'ELEKTRONİK KOLLU KİLİTLER') {
      return [
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
      ]
    }
    // İZLEME VE ERİŞİM KONTROL SİSTEMİ için özel ürün listesi
    if (sectionTitle === 'İZLEME VE ERİŞİM KONTROL SİSTEMİ') {
      return [
        '3402 > ACU Erişim Kontrol Ünitesi',
        '3403 > ACU Plus Erişim Kontrol Ünitesi',
        '3416 > S-AIK Standalone Erişim Arayüzü Tuş Takımı',
        '3417 > S-AIP Standalone Erişim Arayüzü Kart Okuyucu',
        '3414 > AIK Erişim Arayüzü Tuş Takımı',
        '3415 > AIP Erişim Arayüzü Kart Okuyucu',
      ]
    }
    // ELEKTRONİK DOLAP KİLİTLERİ için özel ürün listesi
    if (sectionTitle === 'ELEKTRONİK DOLAP KİLİTLERİ') {
      return [
        '3204 > Elektronik Dolap Kilidi',
        '3205 > Elektronik Dolap Kilidi',
        '3211 > Elektronik Dolap Kilidi',
        '3212 > Elektronik Dolap Kilidi',
        '3213 > Elektronik Dolap Kilidi',
        '3214 > Elektronik Dolap Kilidi',
        '3202 > Elektronik Dolap Kilidi',
        '3203 > Elektronik Dolap Kilidi',
        '3201 > Elektronik Dolap Kilidi',
      ]
    }
    // DİĞER ELEKTRONİK KİLİTLER için özel ürün listesi
    if (sectionTitle === 'DİĞER ELEKTRONİK KİLİTLER') {
      return [
        '3341 > Elektronik Kilit',
        '3311 > Selenoid Kilit',
        '3301 > Elektronik Dolap Kilidi',
        '3331 > Elektronik Kancalı Kilit',
        '3501 > Acil Durum Durdurma Butonu',
      ]
    }
    // KENAR MENTEŞELER için özel ürün listesi
    if (sectionTitle === 'KENAR MENTEŞELER') {
      return [
        '090 > Kenar Menteşe (10mm)',
        '091 > Kenar Menteşe (12mm)',
        '092 > Kenar Menteşe (12mm)',
        '192 > Kenar Menteşe (12mm)',
        '093 > Kenar Menteşe (14mm)',
        '193 > Kenar Menteşe (16mm)',
        '793 > Kenar Menteşe',
        '893 > Kenar Menteşe',
        '191 > Kenar Menteşe (10mm)',
        '1093 > Kenar Menteşe',
        '993 > Kenar Menteşe',
        '1193 > Kenar Menteşe',
        '393 > Kenar Menteşe',
        '293 > Kenar Menteşe',
        '493 > Kenar Menteşe',
        '593 > Kenar Menteşe',
        '693 > Kenar Menteşe',
      ]
    }
    // GİZLİ MENTEŞELER için özel ürün listesi
    if (sectionTitle === 'GİZLİ MENTEŞELER') {
      return [
        '094 > Gizli Menteşe',
        '194 > Gizli Menteşe',
        '096 > Gizli Menteşe',
        '196 > Gizli Menteşe',
        '294 > Gizli Menteşe',
        '296 > Gizli Menteşe',
        '095 > Gizli Menteşe',
        '195 > Gizli Menteşe',
        '295 > Gizli Menteşe',
        '395 > Gizli Menteşe',
        '695 > Gizli Menteşe',
        '795 > Gizli Menteşe',
        '1795 > Gizli Menteşe',
        '895 > Gizli Menteşe',
        '1095 > Gizli Menteşe',
        '995 > Gizli Menteşe v1',
        '995 > Gizli Menteşe v2',
        '1995 > Gizli Menteşe',
        '595 > Gizli Menteşe',
        '189 > Yaylı Mil Menteşe',
        '389 > Gizli Menteşe',
        '089 > Yaylı Mil Menteşe',
        '289 > Gizli Menteşe',
        '394 > Gizli Menteşe',
        '1495 > Gizli Menteşe',
      ]
    }
    // Kolay Montaj Ç.D. Kilitler için özel ürün listesi
    if (sectionTitle === 'Kolay Montaj Ç.D. Kilitler') {
      return [
        '560 > Çeyrek Dönüşlü Segmanlı Kilit',
        '660 > Çeyrek Dönüşlü Klipsli Kilit',
        '661 > Çeyrek Dönüşlü Kilit Kolay Montaj',
        '761 > Çeyrek Dönüşlü Kilit Kolay Montaj',
        '366 > Mini Çeyrek Dönüşlü Klipsli Kilit',
        '566 > Mini Dönüşlü Klipsli Kilit',
      ]
    }
    // Sürgü Kilitler için özel ürün listesi
    if (sectionTitle === 'Sürgü Kilitler') {
      return [
        '071 > Sürgü Kilit',
        '171 > Mini Sürgü Kilit',
        '271 > Sürgü Kilit',
        '371 > Sürgü Kilit',
        '471 > Mini Sürgü Kilit',
        '571 > Fişeli Sürgü Kilit',
        '671 > Fişeli Sürgü Kilit',
      ]
    }
    // Diğer Ürünler için özel ürün listesi
    if (sectionTitle === 'Diğer Ürünler') {
      return [
        '073 > Perde Sacı Kilidi',
        '075 > Allen Göbekli Pano Kilidi',
        '176 > Kancalı Kilit',
        '2800 > Kancalı Kilit',
        '2810 > Kancalı Kilit (Büyük)',
        '3331 > Elektronik Kancalı Kilit',
        '3501 > Acil Durum Durdurma Butonu',
        '466 > Mini Butonlu Kilit',
      ]
    }
    // Diller için özel ürün listesi
    if (sectionTitle === 'Diller') {
      return [
        'CC > Tırnaklı Diller 1',
        'CC > Tırnaklı Diller 2',
        'CC > Tırnaklı Diller 3',
        'CC > Tırnaklı Diller 4',
        'CC > Tırnaklı Diller 5',
        'CC > Tırnaksız Diller 1',
        'CC > Tırnaksız Diller 2',
        'CC > Tırnaksız Diller 3',
        'CC > Tırnaksız Diller 4',
        'CC > Tırnaksız Diller 5',
        'CC > Paslanmaz Çelik Diller (Tırnaklı) 1',
        'CC > Paslanmaz Çelik Diller (Tırnaksız)',
        'CC > Paslanmaz Çelik Diller (Tırnaklı) 2',
        'CC > Diğer Diller 1',
        'CC > Diğer Diller 2',
        'CC > Diğer Diller 3',
        'CC > Diğer Diller 4',
        '320.02.180 > Geçme Dil Aparatı',
        '30403485 > Kancalı Diller',
        '30403499 > İspanyolet Dil Adaptörü',
      ]
    }
    // İspanyolet Çubuk ve Aksesuarları için özel ürün listesi
    if (sectionTitle === 'İspanyolet Çubuk ve Aksesuarları') {
      return [
        'IC > İspanyolet Çubuklar 1',
        'IC > İspanyolet Çubuklar 2',
        'IC > İspanyolet Çubuk 3',
        'IC > İspanyolet Çubuklar 4',
        'IC > İspanyolet Çubuklar 5',
        'IC > İspanyolet Çubuklar 6',
        'CT1 > Çubuk Tutucu',
        'CT2 > Çubuk Tutucu',
        'CY1 > Çubuk Yatağı',
        'CY2 > Çubuk Yatağı',
      ]
    }
    // Paslanmaz İspanyolet Çubuk ve Aksesuarları için özel ürün listesi
    if (sectionTitle === 'Paslanmaz İspanyolet Çubuk ve Aksesuarları') {
      return [
        'IC > Paslanmaz Çelik İspanyolet Çubuk 1',
        'IC > Paslanmaz Çelik İspanyolet Çubuk 2',
        'IC > Paslanmaz Çelik İspanyolet Çubuk 3',
        'IC > Paslanmaz Çelik İspanyolet Çubuk 4',
        'CT1 > Çubuk Tutucu',
        'CY1 > Çubuk Yatağı',
        'CY2 > Çubuk Yatağı',
      ]
    }
    // Paslanmaz İspanyolet Lama ve Aksesuarları için özel ürün listesi
    if (sectionTitle === 'Paslanmaz İspanyolet Lama ve Aksesuarları') {
      return [
        'IL > Paslanmaz Çelik İspanyolet Lama 1',
        'IL > Paslanmaz Çelik İspanyolet Lama 2',
        'ILP > Paslanmaz Çelik Çok Noktadan Kitleyici Lama',
        'LKY1 > Lama Kitleyici Yatağı',
        'LKY2 > Lama Kitleyici Yatağı',
        'LKY3 > Lama Kilitleyici Yatağı',
        'LY1 > Lama Yatağı',
        'LY2 > Lama Yatağı',
        'LY40 > Lama Yatağı',
        'RCC > Köşe Bağlantı',
      ]
    }
    
    if (sectionTitle === 'Anahtarlar') {
      return [
        '369 > Metal Anahtarlar',
        '568 > Çoklu Anahtarlar (Metal)',
        '569 > Çoklu Anahtarlar (Metal)',
        '668 > Çoklu Anahtar (Metal)',
        '669 > Plastik Anahtarlar',
        '267 > Metal Anahtarlar (Kısa)',
        '368 > Metal Anahtarlar (Uzun)',
      ]
    }
    // İspanyolet Lama ve Aksesuarları için özel ürün listesi
    if (sectionTitle === 'İspanyolet Lama ve Aksesuarları') {
      return [
        'IL > İspanyolet Lamalar 1',
        'IL > İspanyolet Lamalar 2',
        'IL > İspanyolet Lamalar 3',
        'IL > İspanyolet Lamalar 4',
        'ILP > Çok Noktadan Kitleyici Lama 1',
        'ILP > Çok Noktadan Kitleyici Lama 2',
        'LKY1 > Lama Kitleyici Yatağı',
        'LKY2 > Lama Kitleyici Yatağı',
        'LY1 > Lama Yatağı',
        'LY2 > Lama Yatağı',
        'LY3 > Lama Yatağı (Kolay Montoj)',
        'LY40 > Lama Yatağı',
        'RCC > Köşe Bağlantı',
        'LKY3 > Lama Kilitleyici Yatağı',
      ]
    }
    for (const group of catalogGroups) {
      for (const section of group.sections) {
        if (section.title === sectionTitle) {
          return section.items || []
        }
      }
    }
    return []
  }, [sectionTitle, location])

  // Kategori resim mapping
  const categoryImageMap = {
    'KOLLU KİLİTLER': '/kollukilit.png',
    'İSPANYOLET SİSTEMLİ KİLİTLER': '/ispanyoletsistemlikilitler.png',
    'TRAFO VE KABİN KİLİTLERİ': '/trafovekabinkilitleri.png',
    'Kabin Kilitleri': '/trafovekabinkilitleri.png',
    'KİLİMA SANTRAL ÜRÜNLERİ': '/klimasantralurunleri.png',
    'ÇEŞİTLİ ÜRÜNLER': '/cesitliurunler/cucesitli.jpg',
    'Sıkıştırmalı Kilitler': '/cesitliurunler/cu-sikistirmali.jpg',
    'Sürgü Kilitler': '/cesitliurunler/cusurgulu.jpg',
    'Diğer Ürünler': '/cesitliurunler/cucesitli.jpg',
    'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR': '/dilleranahtarlarcubuklarve.png',
    'İspanyolet Çubuk ve Aksesuarları': '/dilleranahtarlar/ispanyoletcubuk-ve-aksesuarlari.jpg',
    'Paslanmaz İspanyolet Çubuk ve Aksesuarları': '/dilleranahtarlar/paslanmazispanyoletcubuk.png',
    'Paslanmaz İspanyolet Lama ve Aksesuarları': '/dilleranahtarlar/paslanmazispanyoletlama.png',
    'ÇEYREK DÖNÜŞLÜ KİLİTLER': '/ceyrekdonuslukilitler.png',
    'SİLİNDİRLİ KİLİTLER': '/silindirlikilitler.png',
    'MOBİLYA VE ÇELİK EŞYA KİLİTLERİ': '/mobilyavecelikesya.png',
  }

  // Pompa resimleri mapping
  const getPumpImage = (itemName) => {
    // Kollu kilit ürünleri için özel resim mapping (ürün koduna göre)
    const extractCode = (name) => {
      // IC, CT, CY, IL, ILP, LKY1, LKY2, LKY3, LY1, LY2, LY3, LY40, RCC kodları için özel kontrol
      const match = name.match(/^((?:\d+(?:\s*[A-Z]\d+)?)|(?:IC|CT\d+|CY\d+|IL|ILP|LKY\d+|LY\d+|LY40|RCC))\s*>\s*(.+)$/)
      return match ? match[1] : null
    }
    
    const code = extractCode(itemName)
    
    // Kabin kilitleri için özel resim mapping
    if (code && itemName.includes('Kabin Kilidi')) {
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
    
    // T Kollu Kabin Kilitleri için özel resim mapping
    if (code && (itemName.includes('T Kollu') || itemName.includes('"T" Kollu') || itemName.includes('\'T\' Kollu') || itemName.includes('Trafo Kilidi'))) {
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
    
    // Klima Santral Kilidi için özel resim mapping
    if (code && itemName.includes('Klima Santral Kilidi')) {
      const klimaSantralImageMap = {
        '012': '/012klimasantralkilidi.jpg',
        '112': '/112klimasantralkilidi.jpg',
        '612': '/612klimasantralkilidi.jpg',
      }
      
      if (klimaSantralImageMap[code]) {
        return klimaSantralImageMap[code]
      }
      
      // Kod bulunamazsa genel resim
      return '/klimasantralurunleri.png'
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
    
    // Sıkıştırmalı Kilit ürünleri için özel resim mapping
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
      
      // Kod bulunamazsa genel resim
      return '/cesitliurunler/cu-sikistirmali.jpg'
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
      
      // Kod bulunamazsa genel resim
      return '/cesitliurunler/cusurgulu.jpg'
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
    
    // İspanyolet Çubuk ve Aksesuarları için özel resim mapping
    if (itemName.startsWith('IC >') || itemName.startsWith('CT') || itemName.startsWith('CY')) {
      const ispanyoletCubukImageMap = {
        'IC > İspanyolet Çubuklar 1': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar1.jpg',
        'IC > İspanyolet Çubuklar 2': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar2.jpg',
        'IC > İspanyolet Çubuk 3': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar3.jpeg',
        'IC > İspanyolet Çubuklar 4': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar4.jpeg',
        'IC > İspanyolet Çubuklar 5': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar4.jpeg', // 5 numaralı dosya yok, 4'ü kullanıyoruz
        'IC > İspanyolet Çubuklar 6': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar6.jpg',
        'IC > Paslanmaz Çelik İspanyolet Çubuk 1': '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-1.png',
        'IC > Paslanmaz Çelik İspanyolet Çubuk 2': '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-2.png',
        'IC > Paslanmaz Çelik İspanyolet Çubuk 3': '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-3.png',
        'IC > Paslanmaz Çelik İspanyolet Çubuk 4': '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-4.png',
        'CT1 > Çubuk Tutucu': '/dilleranahtarlar/paslanmazispanyoletcubuk/ct1.jpg',
        'CT2 > Çubuk Tutucu': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ct2cubuktutucu.jpg',
        'CY1 > Çubuk Yatağı': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/cy1cubukyatagi.jpg',
        'CY2 > Çubuk Yatağı': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/cy2cubukyatagi.jpg',
      }
      
      if (ispanyoletCubukImageMap[itemName]) {
        return ispanyoletCubukImageMap[itemName]
      }
      
      // Fallback için genel resim
      return '/dilleranahtarlar/ispanyoletcubuk-ve-aksesuarlari.jpg'
    }
    
    // İspanyolet Lama ve Aksesuarları için özel resim mapping
    if (itemName.startsWith('IL >') || itemName.startsWith('ILP >') || itemName.startsWith('LKY') || itemName.startsWith('LY') || itemName.startsWith('RCC >')) {
      // Paslanmaz İspanyolet Lama kontrolü
      if (itemName.includes('Paslanmaz Çelik')) {
        const paslanmazIspanyoletLamaImageMap = {
          'IL > Paslanmaz Çelik İspanyolet Lama 1': '/dilleranahtarlar/paslanmazispanyoletlama/il-1.png',
          'IL > Paslanmaz Çelik İspanyolet Lama 2': '/dilleranahtarlar/paslanmazispanyoletlama/il-2.png',
          'ILP > Paslanmaz Çelik Çok Noktadan Kitleyici Lama': '/dilleranahtarlar/paslanmazispanyoletlama/ilp-1.png',
          'LKY1 > Lama Kitleyici Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/lky1.jpg',
          'LKY2 > Lama Kitleyici Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/lky2.jpg',
          'LKY3 > Lama Kilitleyici Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/lky3.jpg',
          'LY1 > Lama Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/ly1.jpg',
          'LY2 > Lama Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/ly2.jpg',
          'LY40 > Lama Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/ly40.jpg',
          'RCC > Köşe Bağlantı': '/dilleranahtarlar/paslanmazispanyoletlama/rcc.jpg',
        }
        
        if (paslanmazIspanyoletLamaImageMap[itemName]) {
          return paslanmazIspanyoletLamaImageMap[itemName]
        }
      }
      
      const ispanyoletLamaImageMap = {
        'IL > İspanyolet Lamalar 1': '/dilleranahtarlar/İspanyoletLama/ispanyoletlama1.jpg',
        'IL > İspanyolet Lamalar 2': '/dilleranahtarlar/İspanyoletLama/ispanyoletlama2.jpg',
        'IL > İspanyolet Lamalar 3': '/dilleranahtarlar/İspanyoletLama/ispanyoletlama3.jpg',
        'IL > İspanyolet Lamalar 4': '/dilleranahtarlar/İspanyoletLama/ispanyoletlama4.jpg',
        'ILP > Çok Noktadan Kitleyici Lama 1': '/dilleranahtarlar/İspanyoletLama/coknoktadankitleyicilama1.jpg',
        'ILP > Çok Noktadan Kitleyici Lama 2': '/dilleranahtarlar/İspanyoletLama/coknoktadankitleyicilama2.jpg',
        'LKY1 > Lama Kitleyici Yatağı': '/dilleranahtarlar/İspanyoletLama/lky1lamakitleyiciyatagi.jpg',
        'LKY2 > Lama Kitleyici Yatağı': '/dilleranahtarlar/İspanyoletLama/lky2lamakitleyiciyatagi.jpg',
        'LY1 > Lama Yatağı': '/dilleranahtarlar/İspanyoletLama/ly1lamayatagi.jpg',
        'LY2 > Lama Yatağı': '/dilleranahtarlar/İspanyoletLama/ly2lamayatagi.jpg',
        'LY3 > Lama Yatağı (Kolay Montoj)': '/dilleranahtarlar/İspanyoletLama/ly3lamayatagikolaymontaj.jpg',
        'LY40 > Lama Yatağı': '/dilleranahtarlar/İspanyoletLama/ly40lamayatagi.jpg',
        'RCC > Köşe Bağlantı': '/dilleranahtarlar/İspanyoletLama/rcckosebaglanti.jpg',
        'LKY3 > Lama Kilitleyici Yatağı': '/dilleranahtarlar/İspanyoletLama/lky3lamakilitleyiciyatagi.jpg',
      }
      
      if (ispanyoletLamaImageMap[itemName]) {
        return ispanyoletLamaImageMap[itemName]
      }
      
      // Fallback için genel resim
      return '/dilleranahtarlar/ispanyoletLama.jpg'
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
      
      // Kod bulunamazsa genel resim
      return '/cesitliurunler/cucesitli.jpg'
    }
    
    // Aksesuarlar için özel resim mapping
    const aksesuarlarImageMap = {
      '2300 > Havalandırma Panjuru': '/aksesuarlar/2300.jpg',
      '2150 > Proje Cebi (A4)': '/aksesuarlar/2150_y3dr.jpg',
      '2152 > Proje Cebi (A5)': '/aksesuarlar/2152_y3dr.jpg',
      '2220 > Gözetleme Camı': '/aksesuarlar/2220.jpg',
      '2216 > Sayaç Çerçevesi': '/aksesuarlar/2216_y3dr.jpg',
      '2215 > Sayaç Çerçevesi': '/aksesuarlar/2215_y3dr.jpg',
      '2451 > Aybolt': '/aksesuarlar/2451.jpg',
      '2461 > Aybolt': '/aksesuarlar/2461.jpg',
      '2400 > Kafesli Somun': '/aksesuarlar/2400.jpg',
      '2700 > Gerdirme Mandalı': '/aksesuarlar/2700.jpg',
      '2760 > Pim Kilitlemeli Tutamak': '/aksesuarlar/2760.jpg',
      '2750 > Yaylı Yük Mandalı': '/aksesuarlar/2750.jpg',
      '2751 > Yaylı Yük Mandalı (Perçinli)': '/aksesuarlar/2751.jpg',
      '320.02.164 > Kablo Kanalı': '/aksesuarlar/32002164.jpg',
      '025 > Cam Menteşesi': '/aksesuarlar/025cam-menteuesi.jpg',
      '079 > Kapak Tutucu Makası': '/aksesuarlar/079.jpg',
      '279 > Kapak Tutucu Makası': '/aksesuarlar/279.jpg',
      '179 > Kapak Tutucu Makası': '/aksesuarlar/179.jpg',
      '340.10.026 > Akustik Sünger': '/aksesuarlar/34010006akustik.jpg',
      '340.00.370 > Diyafram Tipi Gromet': '/aksesuarlar/34000370_y3dr.jpg',
      '340.00.380 > Diyafram Tipi Gromet': '/aksesuarlar/34000380_y3dr.jpg',
      '340.08.010 > Kauçuk Stoper': '/aksesuarlar/34008010_y3dr.jpg',
      '340.00.400 > Kauçuk Tıpa': '/aksesuarlar/34000400_y3dr.jpg',
      '340.08.001 > Kapak Tutucu': '/aksesuarlar/34008001_y3dr.jpg',
      '340.20.005.2000 > Kapı Altı Fırçası': '/aksesuarlar/34020005_y3dr.jpg',
      '340.20.025.2000 > Kapı Altı Fırçası': '/aksesuarlar/34020025_y3dr.jpg',
    }
    
    if (aksesuarlarImageMap[itemName]) {
      return aksesuarlarImageMap[itemName]
    }
    
    // Yapışkanlı Contalar için özel resim mapping
    const yapiskanliContalarImageMap = {
      '1300 > Yapışkanlı Conta': '/yapiskanlicontalar/1300.jpg',
      '1100 > Yapışkanlı Dökme Conta': '/yapiskanlicontalar/1100.jpeg',
      '1200 > Yapışkanlı Conta': '/yapiskanlicontalar/1200.jpeg',
      '340.09.966 > Yapışkanlı Conta': '/yapiskanlicontalar/34009966-1-1.jpg',
      '340.09.968 > Yapışkanlı Conta': '/yapiskanlicontalar/34009968-1-1.jpg',
      '340.09.969 > Yapışkanlı Conta': '/yapiskanlicontalar/34009969-1-1.jpg',
      '340.09.970 > Yapışkanlı Conta': '/yapiskanlicontalar/34009970-1-1.jpg',
    }
    
    if (yapiskanliContalarImageMap[itemName]) {
      return yapiskanliContalarImageMap[itemName]
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
    
    // Diğer ürünler
    Object.assign(imageMap, {
      // Kenar Menteşeler
      '090 > Kenar Menteşe (10mm)': '/kenarmenteseler/090_nikel.jpg',
      '091 > Kenar Menteşe (12mm)': '/kenarmenteseler/091_nikel.jpg',
      '092 > Kenar Menteşe (12mm)': '/kenarmenteseler/092_krom.jpg',
      '192 > Kenar Menteşe (12mm)': '/kenarmenteseler/192_krom.jpg',
      '093 > Kenar Menteşe (14mm)': '/kenarmenteseler/093_krom.jpg',
      '193 > Kenar Menteşe (16mm)': '/kenarmenteseler/193_krom.jpg',
      '793 > Kenar Menteşe': '/kenarmenteseler/793.jpg',
      '893 > Kenar Menteşe': '/kenarmenteseler/893.jpg',
      '191 > Kenar Menteşe (10mm)': '/kenarmenteseler/191.jpg',
      '1093 > Kenar Menteşe': '/kenarmenteseler/1093.jpg',
      '993 > Kenar Menteşe': '/kenarmenteseler/993.jpg',
      '1193 > Kenar Menteşe': '/kenarmenteseler/1193_krom.jpg',
      '393 > Kenar Menteşe': '/kenarmenteseler/393.jpg',
      '293 > Kenar Menteşe': '/kenarmenteseler/293.jpg',
      '493 > Kenar Menteşe': '/kenarmenteseler/493_v1_krom.jpg',
      '593 > Kenar Menteşe': '/kenarmenteseler/593_krom.jpg',
      '693 > Kenar Menteşe': '/kenarmenteseler/693_kenar_krom.jpg',
      // Gizli Menteşeler
      '094 > Gizli Menteşe': '/gizlimenteseler/094.jpg',
      '194 > Gizli Menteşe': '/gizlimenteseler/194.jpg',
      '096 > Gizli Menteşe': '/gizlimenteseler/096_1.jpg',
      '196 > Gizli Menteşe': '/gizlimenteseler/196.jpg',
      '294 > Gizli Menteşe': '/gizlimenteseler/294.jpg',
      '296 > Gizli Menteşe': '/gizlimenteseler/296.jpg',
      '095 > Gizli Menteşe': '/gizlimenteseler/095_1.jpg',
      '195 > Gizli Menteşe': '/gizlimenteseler/195_1.jpg',
      '295 > Gizli Menteşe': '/gizlimenteseler/295_v3.jpg',
      '395 > Gizli Menteşe': '/gizlimenteseler/395_1.jpg',
      '695 > Gizli Menteşe': '/gizlimenteseler/695_v1.jpg',
      '795 > Gizli Menteşe': '/gizlimenteseler/795.jpg',
      '1795 > Gizli Menteşe': '/gizlimenteseler/1795.jpg',
      '895 > Gizli Menteşe': '/gizlimenteseler/895.jpg',
      '1095 > Gizli Menteşe': '/gizlimenteseler/1095.jpg',
      '995 > Gizli Menteşe v1': '/gizlimenteseler/995_v1.jpg',
      '995 > Gizli Menteşe v2': '/gizlimenteseler/995_v2.jpg',
      '1995 > Gizli Menteşe': '/gizlimenteseler/1995_v4.jpg',
      '595 > Gizli Menteşe': '/gizlimenteseler/595.jpeg',
      '189 > Yaylı Mil Menteşe': '/gizlimenteseler/189.jpg',
      '389 > Gizli Menteşe': '/gizlimenteseler/389.jpg',
      '089 > Yaylı Mil Menteşe': '/gizlimenteseler/089.jpg',
      '289 > Gizli Menteşe': '/gizlimenteseler/289_v2.jpg',
      '394 > Gizli Menteşe': '/gizlimenteseler/394.jpg',
      '1495 > Gizli Menteşe': '/gizlimenteseler/1495.jpg',
      // Köşe Menteşeler
      '097 > Köşe Menteşe': '/kosementeseler/097_siyah-boya.jpg',
      '197 > Köşe Menteşe': '/kosementeseler/197.jpg',
      '297 > Köşe Menteşe': '/kosementeseler/297_siyah-boya.jpg',
      '397 > Köşe Menteşe': '/kosementeseler/397_siyah-boya.jpg',
      '298 > Köşe Menteşe': '/kosementeseler/298_siyah-boya.jpg',
      '098 > Köşe Menteşe': '/kosementeseler/098_siyah-boya.jpg',
      '398 > Köşe Menteşe': '/kosementeseler/398_v2.jpg',
      '497 > Köşe Menteşe': '/kosementeseler/497_siyah-boya.jpg',
      '498 > Köşe Menteşe': '/kosementeseler/498_.jpg',
      '400 > Köşe Menteşe': '/kosementeseler/400_siyah-boya.jpg',
      '200 > Köşe Menteşe': '/kosementeseler/200.jpg',
      '100 > Köşe Menteşe': '/kosementeseler/100_siyah-boya.jpg',
      '600 > Klima Santral Menteşesi': '/kosementeseler/600_klimasantral.jpg',
      '600 > Köşe Menteşe': '/kosementeseler/600_kose.jpg',
      '700 > Klima Santral Menteşesi': '/kosementeseler/700_v1.jpg',
      // Düz Menteşeler
      '1299 > Mini Yaprak Menteşe': '/duzmenteseler/1299dd-1-1.jpg',
      '299 > Yaprak Menteşe': '/duzmenteseler/299_siyah-boya-1611.jpeg',
      '199 > Yaprak Menteşe': '/duzmenteseler/199_2.jpg',
      '099 > Yaprak Menteşe': '/duzmenteseler/099v1sb.jpg',
      '399 > Yaprak Menteşe': '/duzmenteseler/399_v2_siyah-soya.jpeg',
      '1399 > Yaprak Menteşe': '/duzmenteseler/1399_v2.jpeg',
      '1699 > Kaldır - Çıkar Menteşe': '/duzmenteseler/1699_siyah-boya.jpeg',
      '1499 > Kaldır - Çıkar Menteşe': '/duzmenteseler/1499_siyah-boya.jpeg',
      '900 > Yaprak Menteşe': '/duzmenteseler/900_siyah-boya.jpeg',
      '899 > Kaldır - Çıkar Menteşe': '/duzmenteseler/899_siyah-boya.jpeg',
      '499 > Yaprak Menteşe': '/duzmenteseler/499_v2.jpeg',
      '599 > Yaprak Menteşe': '/duzmenteseler/599_siyah-boya.jpeg',
      '1599 > Yaprak Menteşe': '/duzmenteseler/1599_v6_krom495.jpg',
      '799 > Yaprak Menteşe': '/duzmenteseler/799_v2_siyah.jpeg',
      '4599 > Yaprak Menteşe': '/duzmenteseler/4599-v2-copyd.jpg',
      '2899 > Yaprak Menteşe': '/duzmenteseler/2899.jpg',
      '4299 > Kaldır - Çıkar Menteşe': '/duzmenteseler/4299.jpg',
      '1199 > Yaprak Menteşe': '/duzmenteseler/1199_v1.jpg',
      '2099 > Tork Menteşe': '/duzmenteseler/2099.jpg',
      '2199 > Tork Menteşe': '/duzmenteseler/2199.jpg',
      '2599 > Yaprak Menteşe': '/duzmenteseler/2599.jpg',
      '2399 > Ayarlı Tork Menteşe': '/duzmenteseler/2399.jpg',
      '2499 > Ayarlı Tork Menteşe': '/duzmenteseler/2499.jpg',
      '699 > Kaldır - Çıkar Menteşe': '/duzmenteseler/699_v1_krom.jpg',
      '693 > Yataklı Menteşe': '/duzmenteseler/693_duz.jpg',
      '800 > Klima Santral Menteşesi (3D)': '/duzmenteseler/800.jpg',
      '500 > Klima Santral Menteşesi': '/duzmenteseler/500.jpg',
      '300 > Klima Santral Menteşesi': '/duzmenteseler/300.jpg',
      '1500 > Klima Santral Menteşesi': '/duzmenteseler/1500.jpg',
      '0000 > Karoser Menteşe': '/duzmenteseler/0000karoser-1.jpg',
      // Kulplar
      '084 > Milenyum Kulp': '/kulplar/084_krom.jpg',
      '085 > Çekme Kulpu': '/kulplar/085_krom.jpg',
      '083 > Alüminyum Tutamak': '/kulplar/083.jpg',
      '183 > Alüminyum Tutamak': '/kulplar/183_aluminyum-mat.jpg',
      '184 > Metal Kulp': '/kulplar/184_aluminyum.jpg',
      '484 > Metal Kulp': '/kulplar/484_aluminyum.jpg',
      '884 > Alüminyum Kulp': '/kulplar/884_aluminyum.jpg',
      '284 > Metal Kulp': '/kulplar/284_krom.jpg',
      '384 > Metal Kulp v1': '/kulplar/384_v1,.jpg',
      '384 > Metal Kulp v2': '/kulplar/384_,v2.jpg',
      '584 > Katlanabilir Metal Kulp': '/kulplar/584_krom.jpg',
      '684 > Metal Kulp': '/kulplar/684_krom.jpg',
      '784 > Metal Kulp': '/kulplar/784_krom.jpg',
      '185 > Parmak Kulp': '/kulplar/185-1-1-copy.jpg',
      '086 > Makina Kapak Kulpu': '/kulplar/086_v1.jpg',
      '186 > Makina Kapak Kulpu': '/kulplar/186_v1.jpg',
      '386 > Kapak Kulpu': '/kulplar/386.jpg',
      '081 > Kapak Kulpu': '/kulplar/081.jpg',
      '087 > Makina Kapak Kulpu': '/kulplar/087.jpg',
      '287 > Makina Kapak Kulpu': '/kulplar/287.jpg',
      '187 > Makina Kapak Kulpu': '/kulplar/187.jpg',
      '487 > Makina Kapak Kulpu': '/kulplar/487.jpg',
      '286 > Kapak Kulpu': '/kulplar/286.jpg',
      '387 > Makina Kapak Kulpu': '/kulplar/387.jpg',
      '082 > Gömme Yaylı Kulp': '/kulplar/082.jpg',
      '374 > Geçme Kapak Tutamağı': '/kulplar/374.jpg',
      '274 > Geçme Kapak Tutamağı': '/kulplar/274_v1.jpg',
      '074 > Geçme Kapak Tutamağı': '/kulplar/074.jpg',
      '174 > Geçme Kapak Tutamağı': '/kulplar/174.jpg',
      '674 > Geçme Kapak Tutamağı': '/kulplar/674.jpg',
      '774 > Geçme Kapak Tutamağı': '/kulplar/774.jpg',
      '874 > Geçme Kapak Tutamağı': '/kulplar/874.jpg',
      '574 > Gömme Tutamak': '/kulplar/574.jpg',
      '474 > Gömme Tutamak': '/kulplar/474.jpg',
      '974 > Gömme Tutamak': '/kulplar/974.jpg',
    })
    
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

  if (!sectionTitle || currentItems.length === 0) {
    return (
      <div className="bg-slate-50 pb-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-1.5 pt-10 sm:px-2 lg:px-3">
          <button
            onClick={() => navigate('/urunler')}
            className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#16a34a]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Geri Dön
          </button>
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center shadow-sm">
            <p className="text-base text-slate-600">Ürün bulunamadı.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-slate-50 pb-16 text-slate-900">
      <section className="mx-auto w-full max-w-7xl px-1.5 pt-8 sm:px-2 lg:px-3">
        {/* Geri Dön Butonu */}
        <button
          onClick={() => navigate('/urunler')}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#16a34a]"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Geri Dön
        </button>

        {/* Başlık */}
        <div className="mb-8 flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {categoryImageMap[sectionTitle] && (
              <img 
                src={categoryImageMap[sectionTitle]} 
                alt={sectionTitle}
                className="h-20 w-20 rounded-lg object-contain"
              />
            )}
            <div>
              <p className="text-xs uppercase tracking-[0.12em] text-[#16a34a]">Kategori</p>
              <h2 className="text-xl font-semibold">{sectionTitle}</h2>
            </div>
          </div>
          <span className="text-sm text-slate-500">{currentItems.length} ürün</span>
        </div>

        {/* Ürünler */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentItems.map((item, index) => {
            // KİLİMA SANTRAL ÜRÜNLERİ için özel resim mapping (index'e göre)
            let img = getPumpImage(item)
            if (sectionTitle === 'KİLİMA SANTRAL ÜRÜNLERİ' && item.includes('012 > Klima Santral Kilidi')) {
              if (item.includes('Versiyon 1')) {
                img = '/012klimasantralkilidi.jpg'
              } else if (item.includes('Versiyon 2')) {
                img = '/012klimasantralkilidi2.jpg'
              } else if (item.includes('Versiyon 3')) {
                img = '/012klimasantralkilidi3.jpg'
              } else if (item.includes('Aksesuarı')) {
                img = '/012klimasantralkilidiaksesuar.jpg'
              } else {
                // Genel 012 > Klima Santral Kilidi için
                img = '/012_v4klimasantral.jpg'
              }
            } else if (sectionTitle === 'KİLİMA SANTRAL ÜRÜNLERİ' && item.includes('112 > Klima Santral Kilidi')) {
              if (item.includes('Aksesuarları')) {
                img = '/112-klimasantralkilidiaksesuarlar.jpg'
              } else if (item.includes('Versiyon 1')) {
                img = '/112_v1klimasantral.jpg'
              } else if (item.includes('Versiyon 2')) {
                img = '/112_v2klimasantralkilidi.jpg'
              } else if (item.includes('Versiyon 3')) {
                img = '/112_v4klimasantralkilidi.jpg'
              } else if (item.includes('Versiyon 4')) {
                img = '/112_klimasantralkilidi_versiyon4.jpg'
              } else {
                // Genel durum için
                img = '/112_v1klimasantral.jpg'
              }
            } else if (sectionTitle === 'KİLİMA SANTRAL ÜRÜNLERİ' && item.includes('712 > Fonsiyonel Kilit Menteşe')) {
              img = '/712fonsiyonelkilitmese.jpg'
            } else if (sectionTitle === 'KİLİMA SANTRAL ÜRÜNLERİ' && item.includes('612 > Klima Santral Kilidi')) {
              if (item.includes('T Kollu') || item.includes('T\' Kollu') || item.includes('\'T\' Kollu')) {
                img = '/612_t_kolluklimasantralkilidi.jpg'
              } else {
                img = '/612klimasantralkilidi.jpg'
              }
            } else if (sectionTitle === 'KİLİMA SANTRAL ÜRÜNLERİ' && item.includes('612 > Klima Kabin Kilidi')) {
              if (item.includes('L Kollu') || item.includes('L\' Kollu') || item.includes('\'L\' Kollu')) {
                img = '/612_l_kollukabinkilidi.jpg'
              } else {
                img = '/612klimakabinkilidi.jpg'
              }
            } else if (sectionTitle === 'KİLİMA SANTRAL ÜRÜNLERİ' && item.includes('078 > Profil Bağlantı Parçası')) {
              img = '/078_profilbaglantıparcasi.jpg'
            } else if (sectionTitle === 'KİLİMA SANTRAL ÜRÜNLERİ' && item.includes('462 > Sıkıştırmalı Kilit')) {
              img = '/462_sikistirmalikilit.jpg'
            } else if (sectionTitle === 'Sıkıştırmalı Kilitler') {
              // Sıkıştırmalı Kilitler section'ı için özel resim mapping
              const code = item.match(/^(\d+)\s*>/)?.[1]
              if (code) {
                // ÇEYREK DÖNÜŞLÜ KİLİTLER'den gelen Sıkıştırmalı Kilitler için özel kontrol
                const isFromCeyrekDonuslu = location?.state?.fromSection === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' ||
                                             fullSectionSlug === 'ceyrek-donuslu-kilitler/sikistirmali-kilitler'
                
                if (isFromCeyrekDonuslu) {
                  // v1 ve v2 versiyonları için özel kontrol - dosya isimlerine göre
                  if (code === '040') {
                    img = item.includes('v1') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/040_v1.jpg' :
                          item.includes('v2') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/040_v2.jpg' :
                          '/ceyrekdonuslukilitler/sikistirmalikilitler/040_v1.jpg'
                  } else if (code === '640') {
                    img = item.includes('v1') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/640_v1.jpg' :
                          item.includes('v2') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/640_v2.jpg' :
                          '/ceyrekdonuslukilitler/sikistirmalikilitler/640_v1.jpg'
                  } else {
                    const ceyrekSikistirmaliKilitImageMap = {
                      '140': '/ceyrekdonuslukilitler/sikistirmalikilitler/140.jpg',
                      '045': '/ceyrekdonuslukilitler/sikistirmalikilitler/045.jpg',
                    }
                    img = ceyrekSikistirmaliKilitImageMap[code] || '/ceyrekdonuslukilitler/gr_sikistirmali_ceyrek1.jpg'
                  }
                } else {
                  // 270 > Sıkıştırmalı Kilit 2 için özel kontrol
                  if (code === '270' && item.includes('Sıkıştırmalı Kilit 2')) {
                    img = '/sikistirmalikilit/270sikistirmalikilit2.jpg'
                  } else {
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
                    img = sikistirmaliKilitImageMap[code] || '/cesitliurunler/cu-sikistirmali.jpg'
                  }
                }
              } else {
                img = '/cesitliurunler/cu-sikistirmali.jpg'
              }
            } else if (sectionTitle === 'Kolay Montaj Ç.D. Kilitler') {
              // Kolay Montaj Ç.D. Kilitler section'ı için özel resim mapping
              const code = item.match(/^(\d+)\s*>/)?.[1]
              if (code) {
                const kolayMontajCeyrekImageMap = {
                  '560': '/ceyrekdonuslukilitler/kolaymontaj/560-1ccd.jpg',
                  '660': '/ceyrekdonuslukilitler/kolaymontaj/6601cc.jpg',
                  '661': '/ceyrekdonuslukilitler/kolaymontaj/661dcc.jpg',
                  '761': '/ceyrekdonuslukilitler/kolaymontaj/761_gobek.jpg',
                  '366': '/ceyrekdonuslukilitler/kolaymontaj/366d.jpg',
                  '566': '/ceyrekdonuslukilitler/kolaymontaj/566d.jpg',
                }
                img = kolayMontajCeyrekImageMap[code] || '/ceyrekdonuslukilitler/gr_kolay_montaj.jpg'
              } else {
                img = '/ceyrekdonuslukilitler/gr_kolay_montaj.jpg'
              }
            } else if (sectionTitle === 'Sürgü Kilitler') {
              // Sürgü Kilitler section'ı için özel resim mapping
              const code = item.match(/^(\d+)\s*>/)?.[1]
              if (code) {
                const surguKilitImageMap = {
                  '071': '/surgukilit/071surgukilit.jpg',
                  '171': '/surgukilit/171surgukilit.jpg',
                  '271': '/surgukilit/271surgukilit.jpg',
                  '371': '/surgukilit/371surgukilit.jpg',
                  '471': '/surgukilit/471surgukilit.jpg',
                  '571': '/surgukilit/571surgukilit.jpg',
                  '671': '/surgukilit/671surgukilit.jpg',
                }
                img = surguKilitImageMap[code] || '/cesitliurunler/cusurgulu.jpg'
              } else {
                img = '/cesitliurunler/cusurgulu.jpg'
              }
            } else if (sectionTitle === 'Diğer Ürünler') {
              // Diğer Ürünler section'ı için özel resim mapping
              const code = item.match(/^(\d+)\s*>/)?.[1]
              if (code) {
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
                img = digerUrunImageMap[code] || '/cesitliurunler/cucesitli.jpg'
              } else {
                img = '/cesitliurunler/cucesitli.jpg'
              }
            } else if (sectionTitle === 'İspanyolet Çubuk ve Aksesuarları') {
              // İspanyolet Çubuk ve Aksesuarları section'ı için özel resim mapping
              const ispanyoletCubukImageMap = {
                'IC > İspanyolet Çubuklar 1': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar1.jpg',
                'IC > İspanyolet Çubuklar 2': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar2.jpg',
                'IC > İspanyolet Çubuk 3': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar3.jpeg',
                'IC > İspanyolet Çubuklar 4': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar4.jpeg',
                'IC > İspanyolet Çubuklar 5': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar4.jpeg', // 5 numaralı dosya yok, 4'ü kullanıyoruz
                'IC > İspanyolet Çubuklar 6': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar6.jpg',
                'CT1 > Çubuk Tutucu': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ct1cubuktutucu.jpg',
                'CT2 > Çubuk Tutucu': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ct2cubuktutucu.jpg',
                'CY1 > Çubuk Yatağı': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/cy1cubukyatagi.jpg',
                'CY2 > Çubuk Yatağı': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/cy2cubukyatagi.jpg',
              }
              img = ispanyoletCubukImageMap[item] || '/dilleranahtarlar/ispanyoletcubuk-ve-aksesuarlari.jpg'
            } else if (sectionTitle === 'Paslanmaz İspanyolet Çubuk ve Aksesuarları') {
              // Paslanmaz İspanyolet Çubuk ve Aksesuarları section'ı için özel resim mapping
              const paslanmazIspanyoletCubukImageMap = {
                'IC > Paslanmaz Çelik İspanyolet Çubuk 1': '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-1.png',
                'IC > Paslanmaz Çelik İspanyolet Çubuk 2': '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-2.png',
                'IC > Paslanmaz Çelik İspanyolet Çubuk 3': '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-3.png',
                'IC > Paslanmaz Çelik İspanyolet Çubuk 4': '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-4.png',
                'CT1 > Çubuk Tutucu': '/dilleranahtarlar/paslanmazispanyoletcubuk/ct1.jpg',
                'CY1 > Çubuk Yatağı': '/dilleranahtarlar/paslanmazispanyoletcubuk/cy1.jpg',
                'CY2 > Çubuk Yatağı': '/dilleranahtarlar/paslanmazispanyoletcubuk/cy2.jpg',
              }
              img = paslanmazIspanyoletCubukImageMap[item] || '/dilleranahtarlar/paslanmazispanyoletcubuk.png'
            } else if (sectionTitle === 'Paslanmaz İspanyolet Lama ve Aksesuarları') {
              // Paslanmaz İspanyolet Lama ve Aksesuarları section'ı için özel resim mapping
              const paslanmazIspanyoletLamaImageMap = {
                'IL > Paslanmaz Çelik İspanyolet Lama 1': '/dilleranahtarlar/paslanmazispanyoletlama/il-1.png',
                'IL > Paslanmaz Çelik İspanyolet Lama 2': '/dilleranahtarlar/paslanmazispanyoletlama/il-2.png',
                'ILP > Paslanmaz Çelik Çok Noktadan Kitleyici Lama': '/dilleranahtarlar/paslanmazispanyoletlama/ilp-1.png',
                'LKY1 > Lama Kitleyici Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/lky1.jpg',
                'LKY2 > Lama Kitleyici Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/lky2.jpg',
                'LKY3 > Lama Kilitleyici Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/lky3.jpg',
                'LY1 > Lama Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/ly1.jpg',
                'LY2 > Lama Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/ly2.jpg',
                'LY40 > Lama Yatağı': '/dilleranahtarlar/paslanmazispanyoletlama/ly40.jpg',
                'RCC > Köşe Bağlantı': '/dilleranahtarlar/paslanmazispanyoletlama/rcc.jpg',
              }
              img = paslanmazIspanyoletLamaImageMap[item] || '/dilleranahtarlar/paslanmazispanyoletlama.png'
            } else if (sectionTitle === 'İspanyolet Lama ve Aksesuarları') {
              // İspanyolet Lama ve Aksesuarları section'ı için özel resim mapping
              const ispanyoletLamaImageMap = {
                'IL > İspanyolet Lamalar 1': '/dilleranahtarlar/İspanyoletLama/ispanyoletlama1.jpg',
                'IL > İspanyolet Lamalar 2': '/dilleranahtarlar/İspanyoletLama/ispanyoletlama2.jpg',
                'IL > İspanyolet Lamalar 3': '/dilleranahtarlar/İspanyoletLama/ispanyoletlama3.jpg',
                'IL > İspanyolet Lamalar 4': '/dilleranahtarlar/İspanyoletLama/ispanyoletlama4.jpg',
                'ILP > Çok Noktadan Kitleyici Lama 1': '/dilleranahtarlar/İspanyoletLama/coknoktadankitleyicilama1.jpg',
                'ILP > Çok Noktadan Kitleyici Lama 2': '/dilleranahtarlar/İspanyoletLama/coknoktadankitleyicilama2.jpg',
                'LKY1 > Lama Kitleyici Yatağı': '/dilleranahtarlar/İspanyoletLama/lky1lamakitleyiciyatagi.jpg',
                'LKY2 > Lama Kitleyici Yatağı': '/dilleranahtarlar/İspanyoletLama/lky2lamakitleyiciyatagi.jpg',
                'LY1 > Lama Yatağı': '/dilleranahtarlar/İspanyoletLama/ly1lamayatagi.jpg',
                'LY2 > Lama Yatağı': '/dilleranahtarlar/İspanyoletLama/ly2lamayatagi.jpg',
                'LY3 > Lama Yatağı (Kolay Montoj)': '/dilleranahtarlar/İspanyoletLama/ly3lamayatagikolaymontaj.jpg',
                'LY40 > Lama Yatağı': '/dilleranahtarlar/İspanyoletLama/ly40lamayatagi.jpg',
                'RCC > Köşe Bağlantı': '/dilleranahtarlar/İspanyoletLama/rcckosebaglanti.jpg',
                'LKY3 > Lama Kilitleyici Yatağı': '/dilleranahtarlar/İspanyoletLama/lky3lamakilitleyiciyatagi.jpg',
              }
              img = ispanyoletLamaImageMap[item] || '/dilleranahtarlar/ispanyoletLama.jpg'
            } else if (sectionTitle === 'Anahtarlar') {
              // Anahtarlar section'ı için özel resim mapping
              const anahtarlarImageMap = {
                '369 > Metal Anahtarlar': '/dilleranahtarlar/anahtarlar/369.jpg',
                '568 > Çoklu Anahtarlar (Metal)': '/dilleranahtarlar/anahtarlar/568.jpg',
                '569 > Çoklu Anahtarlar (Metal)': '/dilleranahtarlar/anahtarlar/569.jpg',
                '668 > Çoklu Anahtar (Metal)': '/dilleranahtarlar/anahtarlar/668.jpg',
                '669 > Plastik Anahtarlar': '/dilleranahtarlar/anahtarlar/669.jpg',
                '267 > Metal Anahtarlar (Kısa)': '/dilleranahtarlar/anahtarlar/267.jpg',
                '368 > Metal Anahtarlar (Uzun)': '/dilleranahtarlar/anahtarlar/368.jpg',
              }
              img = anahtarlarImageMap[item] || '/dilleranahtarlar/anahtarlar.jpg'
            } else if (sectionTitle === 'SİLİNDİRLİ KİLİTLER') {
              // SİLİNDİRLİ KİLİTLER section'ı için özel resim mapping
              const silindirliKilitlerImageMap = {
                '163 > Silindirli Kilit Yaylı Dilli': '/silindirlikilitler/163_krom.jpg',
                '063 > Silindirli Kilit': '/silindirlikilitler/063.jpg',
                '761 > Silindirli Kilit Kolay Montaj': '/silindirlikilitler/761_fiseli.jpg',
                '261 > Silindirli Tutamaklı Kilit': '/silindirlikilitler/261_fiseli.jpg',
                '065 > Silindirli Kelebek Kilit': '/silindirlikilitler/065_krom.jpg',
                '165 > Mini Silindirli Kelebek Kilit': '/silindirlikilitler/165_krom.jpg',
                '110 > Silindirli "T" Kollu Kilit': '/silindirlikilitler/110_krom.jpg',
                '111 > Silindirli "L" Kollu Kilit': '/silindirlikilitler/111_krom.jpg',
                '064 > Silindirli "T" Kollu Kilit': '/silindirlikilitler/064_T_Kollu.jpg',
                '064 > Silindirli "L" Kollu Kilit': '/silindirlikilitler/064_L_kollu.jpg',
                '240 > Sıkıştırmalı': '/silindirlikilitler/240.jpg',
                '240 > Sıkıştırmalı T Kollu Kilit': '/silindirlikilitler/240_T_Kollu.jpg',
                '340 > Sıkıştırmalı Kelebek Kilit': '/silindirlikilitler/340_v1.jpg',
                '340 > Sıkıştırmalı Kelebek Kilit v2': '/silindirlikilitler/340_v2.jpg',
                '050 > Silindirli Kilit v1': '/silindirlikilitler/050_v1.jpg',
                '050 > Silindirli Kilit v2': '/silindirlikilitler/050_v2.jpg',
                '050 A3 > Kilit Tutamağı': '/silindirlikilitler/050_a3.jpg',
                '050 A4 > Toz Kapağı': '/silindirlikilitler/050_a4_toz-kapak.jpg',
                '050 A1 > Cam Bağlantı Sacı': '/silindirlikilitler/050_a1.jpg',
                '030 A1 > Kilit Karşılık Sacı': '/silindirlikilitler/030-a1-2.jpg',
                '055 A1 > Ahşap Bağlantı Sacı': '/silindirlikilitler/silindirlikilitler.png',
                '550 > Silindirli Kilit Kolay Montaj': '/silindirlikilitler/550.jpg',
                '450 > Yaylı Silindirli Kilit': '/silindirlikilitler/450.jpg',
                '150 > Silindirli Kilit': '/silindirlikilitler/150_fis.jpg',
                '250 > Silindirli Kilit': '/silindirlikilitler/250.jpg',
                '057 > Mini Silindirli Kilit': '/silindirlikilitler/057.jpg',
                '157 > Mini Silindirli Kilit': '/silindirlikilitler/157.jpg',
                '257 > Mini Silindirli Kilit': '/silindirlikilitler/257.jpg',
                '056 > Silindirli Kilit': '/silindirlikilitler/056_18.jpg',
              }
              img = silindirliKilitlerImageMap[item] || '/silindirlikilitler.png'
            } else if (sectionTitle === 'Çeyrek Dönüşlü Kilitler') {
              // Çeyrek Dönüşlü Kilitler section'ı için özel resim mapping
              const ceyrekDonusluKilitlerImageMap = {
                'AA > Kovan, Somun, Rondela, Yay, Civata, Oring': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/AA_kovan_civata.jpg',
                'DD > Göbekler': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/gobekler1.jpg',
                '060 AX > Çeyrek Dönüşlü Kilit Aksesuarları': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/060-ax.jpg',
                '060 > Çeyrek Dönüşlü Yaylı Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/060_siyah-boyad.jpg',
                '062 > Çeyrek Dönüşlü Kelebek Kilit': '/ceyrekdonuslukilitler/ceyrek.jpg',
                '362 > Çeyrek Dönüşlü Kelebek Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/362_siyah-boya111.jpg',
                '562 > Asma Klit Hamili Pano Kilidi': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/562_krom.jpg',
                '262 > Asma Kilit Hamili Pano Kilidi': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/262_krom.jpg',
                '260 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/260_krom.jpg',
                '162 > Pako Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/162.jpg',
                '064 > Çeyrek Dönüşlü Yaylı Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/064_ceyrek_donuslu_yayli.jpg',
                '064 > Çeyrek Dönüşlü Kelebek Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/064_kelebek.jpg',
                '064 > Çeyrek Dönüşlü Kademeli Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/064_kademeli.jpg',
                '266 > Mini Çeyrek Dönüşlü Yaylı Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/266-aaad.jpg',
                '166 > Mini Çeyrek Dönüşlü Kelebek': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/166_kromd.jpg',
                '066 > Mini Çeyrek Dönüşlü Yaylı Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/066_plastikd.jpg',
                '662 > Asma Kilit Hamili Çeyrek Dönüşlü Kili v1': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/662_v1.jpg',
                '662 > Asma Kilit Hamili Çeyrek Dönüşlü Kil v2': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/662_v2.jpg',
                '211 > Asma Kilit Hamili \'L\' Kollu Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/211_krom.jpg',
                '960 > Çeyrek Dönüşlü Kilit - Modüler Tutamak': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/960_pat2.jpg',
                '361 > Emniyetli Çeyrek Dönüşlü Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/361_krom.jpg',
                '461 > Emniyetli Çeyrek Dönüşlü Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/461_krom.jpg',
                '760 > Çeyrek Dönüşlü Yaylı Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/760-yeniii.jpg',
                '360 > Çeyrek Dönüşlü Yaylı Kilit (Topraklamalı)': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/360-dd.jpg',
                '561 > Tutamaklı Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/561.jpg',
                '261 > Tutamaklı Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/261.jpg',
                '161 > Tutamaklı Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/161.jpg',
                '160 > Dili Yaylı Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/160_krom.jpg',
                '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v5': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/055_v5.jpg',
                '050 > Bilyalı Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/050_bil.jpg',
                '350 > Çeyrek Dönüşlü Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/350.jpg',
                '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v1': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/055_v1.jpg',
                '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v2': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/055_v2.jpg',
                '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v3': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/055_v3.jpg',
                '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v4': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/055_v4.jpg',
                '103 > Çeyrek Dönüşlü Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/103.jpg',
                '666 > Çeyrek Dönüşlü Kilit': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/666_siyah-boyad.jpg',
                '203 > Çeyrek Dönüşlü Kilit v1': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/203_v1.jpg',
                '203 > Çeyrek Dönüşlü Kelebek Kilit v2': '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/203_v2.jpg',
              }
              img = ceyrekDonusluKilitlerImageMap[item] || '/ceyrekdonuslukilitler/ceyrek.jpg'
            } else if (sectionTitle === 'MOBİLYA VE ÇELİK EŞYA KİLİTLERİ') {
              // MOBİLYA VE ÇELİK EŞYA KİLİTLERİ section'ı için özel resim mapping
              const mobilyaVeCelikEsyaKilitleriImageMap = {
                '010 > Silindirli "T" Kollu Kilit': '/mobilyacecelikesya/010.jpg',
                '011 > Silindirli "L" Kollu Kilit': '/mobilyacecelikesya/011.jpg',
                '021 > Cam Kapak Kilidi': '/mobilyacecelikesya/021.jpg',
                '020 > Sürgülü Cam Kilidi': '/mobilyacecelikesya/020.jpg',
                '132 > Çekmece Kilidi': '/mobilyacecelikesya/132.jpg',
                '032 > Çekmece Kilidi': '/mobilyacecelikesya/032.jpg',
                '033 > Çekmece Kilidi': '/mobilyacecelikesya/033.jpg',
                '030 > Çekmece Kilidi': '/mobilyacecelikesya/030.jpg',
                '159 > Sürgülü Kapak Kilidi': '/mobilyacecelikesya/159.jpg',
                '059 > Sürgülü Kapak Kilidi': '/mobilyacecelikesya/059.jpg',
                '4150 > Şifreli Kilit': '/mobilyacecelikesya/4150.jpg',
                '035 > Dosya Dolabı Kilidi': '/mobilyacecelikesya/035_yeni.jpg',
                '058 > Çelik Eşya Kilidi': '/mobilyacecelikesya/058.jpg',
                '158 > Çelik Eşya Kilidi': '/mobilyacecelikesya/158.jpg',
                '013 > Yangın Dolabı Kilidi': '/mobilyacecelikesya/013_v2.jpg',
                '113 > Yangın Dolabı Kilidi': '/mobilyacecelikesya/113_v2.jpg',
              }
              img = mobilyaVeCelikEsyaKilitleriImageMap[item] || '/mobilyavecelikesya.png'
            } else if (sectionTitle === 'ELEKTRONİK KOLLU KİLİTLER') {
              // ELEKTRONİK KOLLU KİLİTLER section'ı için özel resim mapping
              const elektronikKolluKilitlerImageMap = {
                '3114 > Elektronik Kollu Kilit - Standalone': '/elektronikkollukilitler/3114.jpg',
                '3101 > Elektronik Kollu Kilit': '/elektronikkollukilitler/3101.jpg',
                '3102 > Elektronik Kollu Kilit': '/elektronikkollukilitler/3102.jpg',
                '3103 > Elektronik Kollu Kilit': '/elektronikkollukilitler/3103.jpg',
                '3104 > Elektronik Kollu Kilit': '/elektronikkollukilitler/3104.jpg',
                '3111 > Elektronik Kollu Kilit': '/elektronikkollukilitler/3111.jpg',
                '3112 > Elektronik Kollu Kilit': '/elektronikkollukilitler/3112.jpg',
                '3105 > Elektronik Kollu Kilit': '/elektronikkollukilitler/3105.jpg',
                '3106 > Elektronik Kollu Kilit': '/elektronikkollukilitler/3106.jpg',
                '3113 > Elektronik Kollu Kilit - Standalone': '/elektronikkollukilitler/3113.jpg',
              }
              img = elektronikKolluKilitlerImageMap[item] || '/elektronikkollukilitler.png'
            } else if (sectionTitle === 'İZLEME VE ERİŞİM KONTROL SİSTEMİ') {
              // İZLEME VE ERİŞİM KONTROL SİSTEMİ section'ı için özel resim mapping
              const izlemeVeErisimKontrolImageMap = {
                '3402 > ACU Erişim Kontrol Ünitesi': '/izlemeveerisimkontrol/3402.jpg',
                '3403 > ACU Plus Erişim Kontrol Ünitesi': '/izlemeveerisimkontrol/3403.jpg',
                '3416 > S-AIK Standalone Erişim Arayüzü Tuş Takımı': '/izlemeveerisimkontrol/3416.jpg',
                '3417 > S-AIP Standalone Erişim Arayüzü Kart Okuyucu': '/izlemeveerisimkontrol/3417.jpg',
                '3414 > AIK Erişim Arayüzü Tuş Takımı': '/izlemeveerisimkontrol/3414.jpg',
                '3415 > AIP Erişim Arayüzü Kart Okuyucu': '/izlemeveerisimkontrol/3415.jpg',
              }
              img = izlemeVeErisimKontrolImageMap[item] || '/izlemeveerisimkontrol.png'
            } else if (sectionTitle === 'ELEKTRONİK DOLAP KİLİTLERİ') {
              // ELEKTRONİK DOLAP KİLİTLERİ section'ı için özel resim mapping
              const elektronikDolapKilitleriImageMap = {
                '3204 > Elektronik Dolap Kilidi': '/elektronikdolapkilitleri/3204.jpg',
                '3205 > Elektronik Dolap Kilidi': '/elektronikdolapkilitleri/3205.jpg',
                '3211 > Elektronik Dolap Kilidi': '/elektronikdolapkilitleri/3211.jpg',
                '3212 > Elektronik Dolap Kilidi': '/elektronikdolapkilitleri/3212.jpg',
                '3213 > Elektronik Dolap Kilidi': '/elektronikdolapkilitleri/3213.jpg',
                '3214 > Elektronik Dolap Kilidi': '/elektronikdolapkilitleri/3214.jpg',
                '3202 > Elektronik Dolap Kilidi': '/elektronikdolapkilitleri/3202.jpg',
                '3203 > Elektronik Dolap Kilidi': '/elektronikdolapkilitleri/3203.jpg',
                '3201 > Elektronik Dolap Kilidi': '/elektronikdolapkilitleri/3201.jpg',
              }
              img = elektronikDolapKilitleriImageMap[item] || '/elektronikdolapkilitleri.png'
            } else if (sectionTitle === 'DİĞER ELEKTRONİK KİLİTLER') {
              // DİĞER ELEKTRONİK KİLİTLER section'ı için özel resim mapping
              const digerElektronikKilitlerImageMap = {
                '3341 > Elektronik Kilit': '/digerelektronikkilitler/3341.jpg',
                '3311 > Selenoid Kilit': '/digerelektronikkilitler/3311.jpg',
                '3301 > Elektronik Dolap Kilidi': '/digerelektronikkilitler/3301.jpg',
                '3331 > Elektronik Kancalı Kilit': '/digerelektronikkilitler/3331.jpg',
                '3501 > Acil Durum Durdurma Butonu': '/digerelektronikkilitler/3501.jpg',
              }
              img = digerElektronikKilitlerImageMap[item] || getPumpImage(item) || '/cesitliurunler/cucesitli.jpg'
            } else if (sectionTitle === 'KENAR MENTEŞELER') {
              // KENAR MENTEŞELER section'ı için özel resim mapping
              const kenarMenteselerImageMap = {
                '090 > Kenar Menteşe (10mm)': '/kenarmenteseler/090_nikel.jpg',
                '091 > Kenar Menteşe (12mm)': '/kenarmenteseler/091_nikel.jpg',
                '092 > Kenar Menteşe (12mm)': '/kenarmenteseler/092_krom.jpg',
                '192 > Kenar Menteşe (12mm)': '/kenarmenteseler/192_krom.jpg',
                '093 > Kenar Menteşe (14mm)': '/kenarmenteseler/093_krom.jpg',
                '193 > Kenar Menteşe (16mm)': '/kenarmenteseler/193_krom.jpg',
                '793 > Kenar Menteşe': '/kenarmenteseler/793.jpg',
                '893 > Kenar Menteşe': '/kenarmenteseler/893.jpg',
                '191 > Kenar Menteşe (10mm)': '/kenarmenteseler/191.jpg',
                '1093 > Kenar Menteşe': '/kenarmenteseler/1093.jpg',
                '993 > Kenar Menteşe': '/kenarmenteseler/993.jpg',
                '1193 > Kenar Menteşe': '/kenarmenteseler/1193_krom.jpg',
                '393 > Kenar Menteşe': '/kenarmenteseler/393.jpg',
                '293 > Kenar Menteşe': '/kenarmenteseler/293.jpg',
                '493 > Kenar Menteşe': '/kenarmenteseler/493_v1_krom.jpg',
                '593 > Kenar Menteşe': '/kenarmenteseler/593_krom.jpg',
                '693 > Kenar Menteşe': '/kenarmenteseler/693_kenar_krom.jpg',
              }
              img = kenarMenteselerImageMap[item] || getPumpImage(item) || '/kenarmenteseler.png'
            } else if (sectionTitle === 'GİZLİ MENTEŞELER') {
              // GİZLİ MENTEŞELER section'ı için özel resim mapping
              const gizliMenteselerImageMap = {
                '094 > Gizli Menteşe': '/gizlimenteseler/094.jpg',
                '194 > Gizli Menteşe': '/gizlimenteseler/194.jpg',
                '096 > Gizli Menteşe': '/gizlimenteseler/096_1.jpg',
                '196 > Gizli Menteşe': '/gizlimenteseler/196.jpg',
                '294 > Gizli Menteşe': '/gizlimenteseler/294.jpg',
                '296 > Gizli Menteşe': '/gizlimenteseler/296.jpg',
                '095 > Gizli Menteşe': '/gizlimenteseler/095_1.jpg',
                '195 > Gizli Menteşe': '/gizlimenteseler/195_1.jpg',
                '295 > Gizli Menteşe': '/gizlimenteseler/295_v3.jpg',
                '395 > Gizli Menteşe': '/gizlimenteseler/395_1.jpg',
                '695 > Gizli Menteşe': '/gizlimenteseler/695_v1.jpg',
                '795 > Gizli Menteşe': '/gizlimenteseler/795.jpg',
                '1795 > Gizli Menteşe': '/gizlimenteseler/1795.jpg',
                '895 > Gizli Menteşe': '/gizlimenteseler/895.jpg',
                '1095 > Gizli Menteşe': '/gizlimenteseler/1095.jpg',
                '995 > Gizli Menteşe v1': '/gizlimenteseler/995_v1.jpg',
                '995 > Gizli Menteşe v2': '/gizlimenteseler/995_v2.jpg',
                '1995 > Gizli Menteşe': '/gizlimenteseler/1995_v4.jpg',
                '595 > Gizli Menteşe': '/gizlimenteseler/595.jpeg',
                '189 > Yaylı Mil Menteşe': '/gizlimenteseler/189.jpg',
                '389 > Gizli Menteşe': '/gizlimenteseler/389.jpg',
                '089 > Yaylı Mil Menteşe': '/gizlimenteseler/089.jpg',
                '289 > Gizli Menteşe': '/gizlimenteseler/289_v2.jpg',
                '394 > Gizli Menteşe': '/gizlimenteseler/394.jpg',
                '1495 > Gizli Menteşe': '/gizlimenteseler/1495.jpg',
              }
              img = gizliMenteselerImageMap[item] || getPumpImage(item) || '/gizlimenteseler.png'
            }
            const productSlug = encodeURIComponent(item.toLowerCase().replace(/\s+/g, '-'))
            // Ürün adından sayıyı çıkar (örn: "001 > Kollu Kilit" -> code: "001", name: "Kollu Kilit")
            // IC, CT, CY, IL, ILP, LKY1, LKY2, LKY3, LY1, LY2, LY3, LY40, RCC, AA, DD, 060 AX gibi kodlar için özel kontrol
            const match = item.match(/^((?:\d+(?:\s*[A-Z]+\d+)?)|(?:\d+\s+[A-Z]+)|(?:IC|CT\d+|CY\d+|IL|ILP|LKY\d+|LY\d+|LY40|RCC|AA|DD))\s*>\s*(.+)$/)
            const productCode = match ? match[1] : null
            const productName = match ? match[2] : item
            
            // TRAFO VE KABİN KİLİTLERİ için özel kontrol - "Kabin Kilitleri" ve "T Kollu Kabin Kilitleri" section sayfasına yönlendir
            const isSubSection = sectionTitle === 'TRAFO VE KABİN KİLİTLERİ' && (item === 'Kabin Kilitleri' || item === 'T Kollu Kabin Kilitleri')
            // ÇEŞİTLİ ÜRÜNLER için özel kontrol - "Sıkıştırmalı Kilitler", "Sürgü Kilitler" ve "Diğer Ürünler" section sayfasına yönlendir
            const isSikistirmaliKilitler = sectionTitle === 'ÇEŞİTLİ ÜRÜNLER' && item === 'Sıkıştırmalı Kilitler'
            const isSurguKilitler = sectionTitle === 'ÇEŞİTLİ ÜRÜNLER' && item === 'Sürgü Kilitler'
            const isDigerUrunler = sectionTitle === 'ÇEŞİTLİ ÜRÜNLER' && item === 'Diğer Ürünler'
            // DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR için özel kontrol - "Diller", "İspanyolet Çubuk ve Aksesuarları", "İspanyolet Lama ve Aksesuarları", "Paslanmaz İspanyolet Çubuk ve Aksesuarları" ve "Paslanmaz İspanyolet Lama ve Aksesuarları" section sayfasına yönlendir
            const isDiller = sectionTitle === 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR' && item === 'Diller'
            const isIspanyoletCubuk = sectionTitle === 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR' && item === 'İspanyolet Çubuk ve Aksesuarları'
            const isIspanyoletLama = sectionTitle === 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR' && item === 'İspanyolet Lama ve Aksesuarları'
            const isPaslanmazIspanyoletCubuk = sectionTitle === 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR' && item === 'Paslanmaz İspanyolet Çubuk ve Aksesuarları'
            const isPaslanmazIspanyoletLama = sectionTitle === 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR' && item === 'Paslanmaz İspanyolet Lama ve Aksesuarları'
            const isAnahtarlar = sectionTitle === 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR' && item === 'Anahtarlar'
            // ÇEYREK DÖNÜŞLÜ KİLİTLER için özel kontrol
            const isCeyrekDonusluKilitler = sectionTitle === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' && item === 'Çeyrek Dönüşlü Kilitler'
            const isSikistirmaliKilitlerCeyrek = sectionTitle === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' && item === 'Sıkıştırmalı Kilitler'
            const isKolayMontajCeyrek = sectionTitle === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' && item === 'Kolay Montaj Ç.D. Kilitler'
            const sectionSlugMap = {
              'Kabin Kilitleri': 'kabin-kilitleri',
              'T Kollu Kabin Kilitleri': 't-kollu-kabin-kilitleri',
              'Sıkıştırmalı Kilitler': isSikistirmaliKilitlerCeyrek ? 'ceyrek-donuslu-kilitler/sikistirmali-kilitler' : 'sikistirmali-kilitler',
              'Sürgü Kilitler': 'surgu-kilitler',
              'Diğer Ürünler': 'diger-urunler',
              'Diller': 'diller',
              'İspanyolet Çubuk ve Aksesuarları': 'ispanyolet-cubuk-ve-aksesuarlari',
              'İspanyolet Lama ve Aksesuarları': 'ispanyolet-lama-ve-aksesuarlari',
              'Paslanmaz İspanyolet Çubuk ve Aksesuarları': 'paslanmaz-ispanyolet-cubuk-ve-aksesuarlari',
              'Paslanmaz İspanyolet Lama ve Aksesuarları': 'paslanmaz-ispanyolet-lama-ve-aksesuarlari',
              'Anahtarlar': 'anahtarlar',
              'Çeyrek Dönüşlü Kilitler': 'ceyrek-donuslu-kilitler/ceyrek-donuslu-kilitler',
              'Kolay Montaj Ç.D. Kilitler': 'kolay-montaj-cd-kilitler',
            }
            const sectionSlug = (isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isPaslanmazIspanyoletCubuk || isPaslanmazIspanyoletLama || isAnahtarlar || isCeyrekDonusluKilitler || isSikistirmaliKilitlerCeyrek || isKolayMontajCeyrek) ? sectionSlugMap[item] : null
            
            // Alt section'lar için resim belirleme
            const getSubSectionImage = (sectionName) => {
              const subSectionImageMap = {
                'Kabin Kilitleri': '/kabinkilitleri.jpg',
                'T Kollu Kabin Kilitleri': '/t_kollu_kabinkilitleri.jpg',
                'Sıkıştırmalı Kilitler': '/cesitliurunler/cu-sikistirmali.jpg',
                'Sürgü Kilitler': '/cesitliurunler/cusurgulu.jpg',
                'Diğer Ürünler': '/cesitliurunler/cucesitli.jpg',
                // DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR için özel resimler
                'Diller': '/dilleranahtarlar/diller.jpg',
                'İspanyolet Çubuk ve Aksesuarları': '/dilleranahtarlar/ispanyoletcubuk-ve-aksesuarlari.jpg',
                'İspanyolet Lama ve Aksesuarları': '/dilleranahtarlar/ispanyoletLama.jpg',
                'Paslanmaz İspanyolet Çubuk ve Aksesuarları': '/dilleranahtarlar/paslanmazispanyoletcubuk.png',
                'Paslanmaz İspanyolet Lama ve Aksesuarları': '/dilleranahtarlar/paslanmazispanyoletlama.png',
                'Anahtarlar': '/dilleranahtarlar/anahtarlar.jpg',
                // ÇEYREK DÖNÜŞLÜ KİLİTLER için özel resimler
                'Çeyrek Dönüşlü Kilitler': '/ceyrekdonuslukilitler/ceyrek.jpg',
                'Kolay Montaj Ç.D. Kilitler': '/ceyrekdonuslukilitler/gr_kolay_montaj.jpg',
              }
              // ÇEYREK DÖNÜŞLÜ KİLİTLER section'ındaki Sıkıştırmalı Kilitler için özel resim
              if (sectionName === 'Sıkıştırmalı Kilitler' && sectionTitle === 'ÇEYREK DÖNÜŞLÜ KİLİTLER') {
                return '/ceyrekdonuslukilitler/gr_sikistirmali_ceyrek1.jpg'
              }
              return subSectionImageMap[sectionName] || (sectionName === 'Sıkıştırmalı Kilitler' ? '/cesitliurunler/cu-sikistirmali.jpg' : sectionName === 'Sürgü Kilitler' ? '/cesitliurunler/cusurgulu.jpg' : sectionName === 'Diğer Ürünler' ? '/cesitliurunler/cucesitli.jpg' : '/trafovekabinkilitleri.png')
            }
            
            // ÇEYREK DÖNÜŞLÜ KİLİTLER'den geldiğini kontrol et
            const isFromCeyrekDonuslu = sectionTitle === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' ||
                                         (sectionTitle === 'Sıkıştırmalı Kilitler' && (location?.state?.fromSection === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' || fullSectionSlug === 'ceyrek-donuslu-kilitler/sikistirmali-kilitler')) ||
                                         sectionTitle === 'Kolay Montaj Ç.D. Kilitler'
            
            return (
              <Link
                key={item}
                to={sectionSlug ? `/urunler/${sectionSlug}` : `/urun-detay/${productSlug}`}
                state={sectionSlug ? {} : { 
                  productName: item, 
                  productImage: img, 
                  productLogo: getProductLogo(item),
                  fromSection: isFromCeyrekDonuslu ? 'ÇEYREK DÖNÜŞLÜ KİLİTLER' : undefined
                }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#16a34a]/50 hover:shadow-xl"
              >
                {/* Ürün Görseli */}
                <div className="relative flex h-80 items-center justify-center overflow-hidden bg-white p-6">
                  {(isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isCeyrekDonusluKilitler || isSikistirmaliKilitlerCeyrek || isKolayMontajCeyrek) ? (
                    <img 
                      src={getSubSectionImage(item)} 
                      alt={item} 
                      className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105" 
                    />
                  ) : (
                    <img 
                      src={img} 
                      alt={item} 
                      className="h-full w-full object-contain transition-all duration-500 group-hover:scale-105" 
                    />
                  )}
                </div>
                
                {/* Ürün Bilgileri */}
                <div className="flex flex-1 flex-col justify-between border-t border-slate-100 bg-white p-5">
                  <div>
                    {/* Ürün Kodu ve Adı */}
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      {productCode && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#16a34a]/10 text-[#16a34a] text-xs font-semibold">
                          {productCode}
                        </span>
                      )}
                      {((isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isPaslanmazIspanyoletCubuk || isPaslanmazIspanyoletLama) && item.startsWith('CC >')) || (!(isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isPaslanmazIspanyoletCubuk || isPaslanmazIspanyoletLama) && productName.startsWith('CC >')) ? (
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-[#16a34a]/10 text-[#16a34a] text-xs font-semibold min-w-[2rem]">
                          CC
                        </span>
                      ) : null}
                      {((isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isPaslanmazIspanyoletCubuk || isPaslanmazIspanyoletLama) && item.startsWith('320.02.180 >')) || (!(isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isPaslanmazIspanyoletCubuk || isPaslanmazIspanyoletLama) && productName.startsWith('320.02.180 >')) ? (
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-[#16a34a]/10 text-[#16a34a] text-xs font-semibold">
                          320.02.180
                        </span>
                      ) : null}
                      {((isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isPaslanmazIspanyoletCubuk || isPaslanmazIspanyoletLama) && (item.startsWith('IC >') || item.startsWith('CT') || item.startsWith('CY') || item.startsWith('IL >') || item.startsWith('ILP >') || item.startsWith('LKY') || item.startsWith('LY') || item.startsWith('RCC >'))) || (!(isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isPaslanmazIspanyoletCubuk || isPaslanmazIspanyoletLama) && (productName.startsWith('IC >') || productName.startsWith('CT') || productName.startsWith('CY') || productName.startsWith('IL >') || productName.startsWith('ILP >') || productName.startsWith('LKY') || productName.startsWith('LY') || productName.startsWith('RCC >'))) ? (
                        <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-[#16a34a]/10 text-[#16a34a] text-xs font-semibold">
                          {(isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isPaslanmazIspanyoletCubuk || isPaslanmazIspanyoletLama) ? (item.match(/^(IC|CT\d+|CY\d+|IL|ILP|LKY\d+|LY\d+|LY40|RCC)\s*>/)?.[1] || '') : (productName.match(/^(IC|CT\d+|CY\d+|IL|ILP|LKY\d+|LY\d+|LY40|RCC)\s*>/)?.[1] || '')}
                        </span>
                      ) : null}
                      <h3 className="line-clamp-2 flex-1 text-base font-semibold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-[#16a34a]">
                        {(isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isPaslanmazIspanyoletCubuk || isPaslanmazIspanyoletLama) ? (
                          item.startsWith('CC >') ? (
                            item.replace('CC >', '').trim()
                          ) : item.startsWith('320.02.180 >') ? (
                            item.replace('320.02.180 >', '').trim()
                          ) : item.startsWith('IC >') ? (
                            item.replace('IC >', '').trim()
                          ) : item.startsWith('CT') ? (
                            item.replace(/^CT\d+\s*>\s*/, '').trim()
                          ) : item.startsWith('CY') ? (
                            item.replace(/^CY\d+\s*>\s*/, '').trim()
                          ) : item.startsWith('IL >') ? (
                            item.replace('IL >', '').trim()
                          ) : item.startsWith('ILP >') ? (
                            item.replace('ILP >', '').trim()
                          ) : item.startsWith('LKY') ? (
                            item.replace(/^LKY\d+\s*>\s*/, '').trim()
                          ) : item.startsWith('LY') ? (
                            item.replace(/^LY\d+\s*>\s*/, '').trim()
                          ) : item.startsWith('RCC >') ? (
                            item.replace('RCC >', '').trim()
                          ) : item
                        ) : productName.startsWith('CC >') ? (
                          productName.replace('CC >', '').trim()
                        ) : productName.startsWith('320.02.180 >') ? (
                          productName.replace('320.02.180 >', '').trim()
                        ) : productName.startsWith('IC >') ? (
                          productName.replace('IC >', '').trim()
                        ) : productName.startsWith('CT') ? (
                          productName.replace(/^CT\d+\s*>\s*/, '').trim()
                        ) : productName.startsWith('CY') ? (
                          productName.replace(/^CY\d+\s*>\s*/, '').trim()
                        ) : productName.startsWith('IL >') ? (
                          productName.replace('IL >', '').trim()
                        ) : productName.startsWith('ILP >') ? (
                          productName.replace('ILP >', '').trim()
                        ) : productName.startsWith('LKY') ? (
                          productName.replace(/^LKY\d+\s*>\s*/, '').trim()
                        ) : productName.startsWith('LY') ? (
                          productName.replace(/^LY\d+\s*>\s*/, '').trim()
                        ) : productName.startsWith('RCC >') ? (
                          productName.replace('RCC >', '').trim()
                        ) : (
                          productName
                        )}
                      </h3>
                    </div>
                    {/* ÇEŞİTLİ ÜRÜNLER, TRAFO VE KABİN KİLİTLERİ, DİLLER ve ÇEYREK DÖNÜŞLÜ KİLİTLER için Ürün Grup Çeşitleri yazısı */}
                    {(sectionTitle === 'ÇEŞİTLİ ÜRÜNLER' || sectionTitle === 'TRAFO VE KABİN KİLİTLERİ' || sectionTitle === 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR' || sectionTitle === 'ÇEYREK DÖNÜŞLÜ KİLİTLER') && !isSubSection && !isSikistirmaliKilitler && !isSurguKilitler && !isDigerUrunler && !isDiller && !isIspanyoletCubuk && !isIspanyoletLama && !isPaslanmazIspanyoletCubuk && !isPaslanmazIspanyoletLama && !isAnahtarlar && !isCeyrekDonusluKilitler && !isSikistirmaliKilitlerCeyrek && !isKolayMontajCeyrek && (
                      <p className="mb-3 text-xs text-slate-500">Ürün Grup Çeşitleri</p>
                    )}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default SectionProducts
