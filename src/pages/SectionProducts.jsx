import { useMemo } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

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
      '995 > Gizli Menteşe',
      '995 > Gizli Menteşe',
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
    return slugToTitle[sectionSlug] || null
  }, [sectionSlug])

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
  }, [sectionTitle])

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
      '090 > Kenar Menteşe (10mm)': 'https://via.placeholder.com/320x200.png?text=090+Kenar+Menteşe',
      '091 > Kenar Menteşe (12mm)': 'https://via.placeholder.com/320x200.png?text=091+Kenar+Menteşe',
      '092 > Kenar Menteşe (12mm)': 'https://via.placeholder.com/320x200.png?text=092+Kenar+Menteşe',
      '192 > Kenar Menteşe (12mm)': 'https://via.placeholder.com/320x200.png?text=192+Kenar+Menteşe',
      '093 > Kenar Menteşe (14mm)': 'https://via.placeholder.com/320x200.png?text=093+Kenar+Menteşe',
      '193 > Kenar Menteşe (16mm)': 'https://via.placeholder.com/320x200.png?text=193+Kenar+Menteşe',
      '793 > Kenar Menteşe': 'https://via.placeholder.com/320x200.png?text=793+Kenar+Menteşe',
      '893 > Kenar Menteşe': 'https://via.placeholder.com/320x200.png?text=893+Kenar+Menteşe',
      '191 > Kenar Menteşe (10mm)': 'https://via.placeholder.com/320x200.png?text=191+Kenar+Menteşe',
      '1093 > Kenar Menteşe': 'https://via.placeholder.com/320x200.png?text=1093+Kenar+Menteşe',
      '993 > Kenar Menteşe': 'https://via.placeholder.com/320x200.png?text=993+Kenar+Menteşe',
      '1193 > Kenar Menteşe': 'https://via.placeholder.com/320x200.png?text=1193+Kenar+Menteşe',
      '393 > Kenar Menteşe': 'https://via.placeholder.com/320x200.png?text=393+Kenar+Menteşe',
      '293 > Kenar Menteşe': 'https://via.placeholder.com/320x200.png?text=293+Kenar+Menteşe',
      '493 > Kenar Menteşe': 'https://via.placeholder.com/320x200.png?text=493+Kenar+Menteşe',
      '593 > Kenar Menteşe': 'https://via.placeholder.com/320x200.png?text=593+Kenar+Menteşe',
      '693 > Kenar Menteşe': 'https://via.placeholder.com/320x200.png?text=693+Kenar+Menteşe',
      // Gizli Menteşeler
      '094 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=094+Gizli+Menteşe',
      '194 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=194+Gizli+Menteşe',
      '096 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=096+Gizli+Menteşe',
      '196 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=196+Gizli+Menteşe',
      '294 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=294+Gizli+Menteşe',
      '296 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=296+Gizli+Menteşe',
      '095 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=095+Gizli+Menteşe',
      '195 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=195+Gizli+Menteşe',
      '295 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=295+Gizli+Menteşe',
      '395 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=395+Gizli+Menteşe',
      '695 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=695+Gizli+Menteşe',
      '795 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=795+Gizli+Menteşe',
      '1795 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=1795+Gizli+Menteşe',
      '895 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=895+Gizli+Menteşe',
      '1095 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=1095+Gizli+Menteşe',
      '995 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=995+Gizli+Menteşe',
      '1995 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=1995+Gizli+Menteşe',
      '595 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=595+Gizli+Menteşe',
      '189 > Yaylı Mil Menteşe': 'https://via.placeholder.com/320x200.png?text=189+Yaylı+Mil+Menteşe',
      '389 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=389+Gizli+Menteşe',
      '089 > Yaylı Mil Menteşe': 'https://via.placeholder.com/320x200.png?text=089+Yaylı+Mil+Menteşe',
      '289 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=289+Gizli+Menteşe',
      '394 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=394+Gizli+Menteşe',
      '1495 > Gizli Menteşe': 'https://via.placeholder.com/320x200.png?text=1495+Gizli+Menteşe',
      // Köşe Menteşeler
      '097 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=097+Köşe+Menteşe',
      '197 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=197+Köşe+Menteşe',
      '297 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=297+Köşe+Menteşe',
      '397 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=397+Köşe+Menteşe',
      '298 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=298+Köşe+Menteşe',
      '098 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=098+Köşe+Menteşe',
      '398 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=398+Köşe+Menteşe',
      '497 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=497+Köşe+Menteşe',
      '498 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=498+Köşe+Menteşe',
      '400 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=400+Köşe+Menteşe',
      '200 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=200+Köşe+Menteşe',
      '100 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=100+Köşe+Menteşe',
      '600 > Klima Santral Menteşesi': 'https://via.placeholder.com/320x200.png?text=600+Klima+Santral+Menteşesi',
      '600 > Köşe Menteşe': 'https://via.placeholder.com/320x200.png?text=600+Köşe+Menteşe',
      '700 > Klima Santral Menteşesi': 'https://via.placeholder.com/320x200.png?text=700+Klima+Santral+Menteşesi',
      // Düz Menteşeler
      '1299 > Mini Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=1299+Mini+Yaprak+Menteşe',
      '299 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=299+Yaprak+Menteşe',
      '199 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=199+Yaprak+Menteşe',
      '099 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=099+Yaprak+Menteşe',
      '399 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=399+Yaprak+Menteşe',
      '1399 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=1399+Yaprak+Menteşe',
      '1699 > Kaldır - Çıkar Menteşe': 'https://via.placeholder.com/320x200.png?text=1699+Kaldır+Çıkar+Menteşe',
      '1499 > Kaldır - Çıkar Menteşe': 'https://via.placeholder.com/320x200.png?text=1499+Kaldır+Çıkar+Menteşe',
      '900 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=900+Yaprak+Menteşe',
      '899 > Kaldır - Çıkar Menteşe': 'https://via.placeholder.com/320x200.png?text=899+Kaldır+Çıkar+Menteşe',
      '499 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=499+Yaprak+Menteşe',
      '599 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=599+Yaprak+Menteşe',
      '1599 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=1599+Yaprak+Menteşe',
      '799 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=799+Yaprak+Menteşe',
      '4599 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=4599+Yaprak+Menteşe',
      '2899 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=2899+Yaprak+Menteşe',
      '4299 > Kaldır - Çıkar Menteşe': 'https://via.placeholder.com/320x200.png?text=4299+Kaldır+Çıkar+Menteşe',
      '1199 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=1199+Yaprak+Menteşe',
      '2099 > Tork Menteşe': 'https://via.placeholder.com/320x200.png?text=2099+Tork+Menteşe',
      '2199 > Tork Menteşe': 'https://via.placeholder.com/320x200.png?text=2199+Tork+Menteşe',
      '2599 > Yaprak Menteşe': 'https://via.placeholder.com/320x200.png?text=2599+Yaprak+Menteşe',
      '2399 > Ayarlı Tork Menteşe': 'https://via.placeholder.com/320x200.png?text=2399+Ayarlı+Tork+Menteşe',
      '2499 > Ayarlı Tork Menteşe': 'https://via.placeholder.com/320x200.png?text=2499+Ayarlı+Tork+Menteşe',
      '699 > Kaldır - Çıkar Menteşe': 'https://via.placeholder.com/320x200.png?text=699+Kaldır+Çıkar+Menteşe',
      '693 > Yataklı Menteşe': 'https://via.placeholder.com/320x200.png?text=693+Yataklı+Menteşe',
      '800 > Klima Santral Menteşesi (3D)': 'https://via.placeholder.com/320x200.png?text=800+Klima+Santral+Menteşesi+3D',
      '500 > Klima Santral Menteşesi': 'https://via.placeholder.com/320x200.png?text=500+Klima+Santral+Menteşesi',
      '300 > Klima Santral Menteşesi': 'https://via.placeholder.com/320x200.png?text=300+Klima+Santral+Menteşesi',
      '1500 > Klima Santral Menteşesi': 'https://via.placeholder.com/320x200.png?text=1500+Klima+Santral+Menteşesi',
      '0000 > Karoser Menteşe': 'https://via.placeholder.com/320x200.png?text=0000+Karoser+Menteşe',
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
              } else {
                img = '/cesitliurunler/cu-sikistirmali.jpg'
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
            }
            const productSlug = encodeURIComponent(item.toLowerCase().replace(/\s+/g, '-'))
            // Ürün adından sayıyı çıkar (örn: "001 > Kollu Kilit" -> code: "001", name: "Kollu Kilit")
            // IC, CT, CY, IL, ILP, LKY1, LKY2, LKY3, LY1, LY2, LY3, LY40, RCC kodları için özel kontrol
            const match = item.match(/^((?:\d+(?:\s*[A-Z]\d+)?)|(?:IC|CT\d+|CY\d+|IL|ILP|LKY\d+|LY\d+|LY40|RCC))\s*>\s*(.+)$/)
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
            const sectionSlugMap = {
              'Kabin Kilitleri': 'kabin-kilitleri',
              'T Kollu Kabin Kilitleri': 't-kollu-kabin-kilitleri',
              'Sıkıştırmalı Kilitler': 'sikistirmali-kilitler',
              'Sürgü Kilitler': 'surgu-kilitler',
              'Diğer Ürünler': 'diger-urunler',
              'Diller': 'diller',
              'İspanyolet Çubuk ve Aksesuarları': 'ispanyolet-cubuk-ve-aksesuarlari',
              'İspanyolet Lama ve Aksesuarları': 'ispanyolet-lama-ve-aksesuarlari',
              'Paslanmaz İspanyolet Çubuk ve Aksesuarları': 'paslanmaz-ispanyolet-cubuk-ve-aksesuarlari',
              'Paslanmaz İspanyolet Lama ve Aksesuarları': 'paslanmaz-ispanyolet-lama-ve-aksesuarlari',
              'Anahtarlar': 'anahtarlar',
            }
            const sectionSlug = (isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama || isPaslanmazIspanyoletCubuk || isPaslanmazIspanyoletLama || isAnahtarlar) ? sectionSlugMap[item] : null
            
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
              }
              return subSectionImageMap[sectionName] || (sectionName === 'Sıkıştırmalı Kilitler' ? '/cesitliurunler/cu-sikistirmali.jpg' : sectionName === 'Sürgü Kilitler' ? '/cesitliurunler/cusurgulu.jpg' : sectionName === 'Diğer Ürünler' ? '/cesitliurunler/cucesitli.jpg' : '/trafovekabinkilitleri.png')
            }
            
            return (
              <Link
                key={item}
                to={sectionSlug ? `/urunler/${sectionSlug}` : `/urun-detay/${productSlug}`}
                state={sectionSlug ? {} : { productName: item, productImage: img, productLogo: getProductLogo(item) }}
                className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-[#16a34a]/50 hover:shadow-xl"
              >
                {/* Ürün Görseli */}
                <div className="relative flex h-80 items-center justify-center overflow-hidden bg-white p-6">
                  {(isSubSection || isSikistirmaliKilitler || isSurguKilitler || isDigerUrunler || isDiller || isIspanyoletCubuk || isIspanyoletLama) ? (
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
                    {(sectionTitle === 'ÇEŞİTLİ ÜRÜNLER' || sectionTitle === 'TRAFO VE KABİN KİLİTLERİ' || sectionTitle === 'DİLLER - ANAHTARLAR ÇUBUK VE LAMALAR' || sectionTitle === 'ÇEYREK DÖNÜŞLÜ KİLİTLER') && !isSubSection && !isSikistirmaliKilitler && !isSurguKilitler && !isDigerUrunler && !isDiller && !isIspanyoletCubuk && !isIspanyoletLama && !isPaslanmazIspanyoletCubuk && !isPaslanmazIspanyoletLama && !isAnahtarlar && (
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
