import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

// Ürün detay verileri
const productDetails = {
  '001 > Kollu Kilit (Küçük Versiyon)': {
    code: '001',
    name: 'Kollu Kilit (Küçük Versiyon)',
    description: 'Sac ve polyester panolara uygulanır. 40 mm pirinç barel uygulaması yapılabilir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6GFR 30',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '001 > Kollu Kilit': {
    code: '001',
    name: 'Kollu Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Asma kilit takılma özelliği opsiyoneldir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '101 > Kollu Kilit': {
    code: '101',
    name: 'Kollu Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Asma kilit takılma özelliği opsiyoneldir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '501 > Kollu Kilit': {
    code: '501',
    name: 'Kollu Kilit',
    description: '• Güvenlik seviyesi yüksek bir kilittir.\n• 14.4 mm lik dış çıkıntı ile estetik bir görünüm sağlar.\n• Yüksek güvenlik için özel barel uygulaması yapılır.\n• Toz kapağı uygulaması opsiyoneldir.\n• Asma kilit hamili opsiyoneldir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
      'ASMA KİLİT HAMİLİ': 'Paslanmaz Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '601 > Kollu Kilit': {
    code: '601',
    name: 'Kollu Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Yüksek güvenlik için özel barel uygulaması yapılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KAPAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '408 > Kollu Kilit': {
    code: '408',
    name: 'Kollu Kilit',
    description: '• Özel geometrisi ile dış saldırılara dayanıklıdır\n• Yüksek korozyon dayanımına sahiptir.\n• DIN EN 1627:2011-09 RC2 testine uygundur.\n• Mafsalda kullanılan çift oring sayesinde yüksek sızdırmazlık sağlar.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
      'KAPAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '306 > Kollu Kilit': {
    code: '306',
    name: 'Kollu Kilit',
    description: '• Sürgü kapaklı uygulama mevcuttur.\n• Ergonomik kola sahiptir.\n• Asma kilit uygulaması opsiyoneldir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'PA6 GFR 30 veya Zamak',
      'DİL': 'Çelik –PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '504 > Dikey Hareketli Kollu Kilit': {
    code: '504',
    name: 'Dikey Hareketli Kollu Kilit',
    description: '• Kol, kolay açma kapama sağlamak için dikey yönde 70 derece yukarı / aşağı hareket eder.\n• Metal kola sahiptir.\n• Sürgü kapaklı uygulama\n• Asma kilit uygulaması opsiyoneldir.\n• Geçiş ölçüsü standarttır.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '201 > Kollu Kilit': {
    code: '201',
    name: 'Kollu Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Asma kilit takılma özelliği opsiyoneldir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'TOZ KAPAĞI': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '206 > Kollu Kilit': {
    code: '206',
    name: 'Kollu Kilit',
    description: '• Sürgü kapaklı uygulama mevcuttur.\n• Ergonomik kola sahiptir.\n• Asma kilit uygulaması opsiyoneldir.\n• 40 mm pirinç barel uygulaması yapılabilir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '406 > Kollu Kilit': {
    code: '406',
    name: 'Kollu Kilit',
    description: '• Kilitleme sistemi modüler olup uygulama esnasında isteğe göre değiştirilebilir.\n• Kilitleme modülleri bağımsız sipariş edilebilir.\n• Tek noktadan veya 3 noktadan kilitleme aynı gövde üzerinde yapılabilir.\n• Asma kilit uygulaması opsiyoneldir.\n• Gövde alt kısmında klips uygulaması ile hızlı montaj yapılabilir.',
    materials: {
      'GÖVDE': 'PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '106 > Kollu Kilit': {
    code: '106',
    name: 'Kollu Kilit',
    description: '• Yaylı kol açılırken dışarı hareket eder çarpmalı şekilde kapanır.\n• Sürgülü toz kapağına sahiptir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '808 > Kollu Kilit': {
    code: '808',
    name: 'Kollu Kilit',
    description: '',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik –PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '008 > Kollu Kilit': {
    code: '008',
    name: 'Kollu Kilit',
    description: '• Geçiş ölçüsü 25x150 mm dir.\n• Montaj sacı yüksek bağlantı güvenliği ve topraklama sağlar.\n• 8 mm lik yüzey çıkıntısı ile estetik bir görünüme sahiptir.\n• Kolda yay uygulaması vardır.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '908 > Kollu Kilit': {
    code: '908',
    name: 'Kollu Kilit',
    description: '• Basmalı tip kollu kilit\n• Kolda yay uygulaması vardır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya PA6 GFR30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '108 > Kollu Kilit': {
    code: '108',
    name: 'Kollu Kilit',
    description: '• Dış ortam kullanımı için yüksek korozyon dayanımına sahiptir\n• Anahtarı kopyalanamaz yüksek güvenlikli barel seçeneği vardır.\n• Kilit bölgesini kapatan hareketli kapak ve iç yüzeyindeki conta sayesinde yüksek seviyede sızdırmazlık sağlar.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '208 > Kollu Kilit': {
    code: '208',
    name: 'Kollu Kilit',
    description: '• Kolda yay uygulaması yoktur.\n• İç mekan panolarda kullanılabilir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik veya PA6 GFR30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '308 > Kollu Kilit': {
    code: '308',
    name: 'Kollu Kilit',
    description: '• İç mekan panolarda kullanılabilir.\n• Geçiş ölçüsü 25x100 mm dir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1 yada PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '708 > Kollu Kilit': {
    code: '708',
    name: 'Kollu Kilit',
    description: '• İç mekan panolarda kullanılabilir.\n• Geçiş ölçüsü 25x75 mm dir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'BUTON': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '508 > Kollu Kilit': {
    code: '508',
    name: 'Kollu Kilit',
    description: '• Komple metal.\n• Basmalı tip kollu kilit\n• Kilit montajı tek bir bağlantı sacı ile yapılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya PA6 GFR30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '006 > Kollu Kilit': {
    code: '006',
    name: 'Kollu Kilit',
    description: '• Kolda yay uygulaması mevcuttur.\n• İç ve dış mekan panolarda kullanılabilir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik veya PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '205 > Kollu Kilit': {
    code: '205',
    name: 'Kollu Kilit',
    description: '',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '002 > İspanyolet Sistemli Kollu Kilit': {
    code: '002',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Asma kilit takılma özelliği opsiyoneldir.\n• Geçiş ölçüsüne dikkat ediniz.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '102 > İspanyolet Sistemli Kollu Kilit': {
    code: '102',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Asma kilit takılma özelliği opsiyoneldir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '502 > İspanyolet Sistemli Kollu Kilit': {
    code: '502',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Güvenlik seviyesi yüksek bir kilittir.\n• 14.5 mm lik dış çıkıntı ile estetik bir görünüm sağlar.\n• Yüksek güvenlik için özel barel uygulaması yapılır.\n• Toz kapağı uygulaması opsiyoneldir.\n• Asma kilit hamili opsiyoneldir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '602 > İspanyolet Sistemli Kollu Kilit': {
    code: '602',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Tamamı metal malzemeden üretilir.\n• Sac ve polyester panolara uygulanır.\n• 40 mm pirinç barel uygulaması yapılabilir.\n• Dış ortamlarda kullanıldığından yüksek korozyon dayanımına sahiptir.\n• Yüksek güvenlik için özel barel uygulaması yapılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KAPAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '409 > İspanyolet Sistemli Kollu Kilit': {
    code: '409',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Özel geometrisi ile dış saldırılara karşı dayanıklıdır.\n• Yüksek korozyon dayanımına sahipir.\n• DIN EN 1627:2011-09 RC2 testine uygundur.\n• Mafsalda kullanılan çift oring sayesinde yüksek sızdırmazlık sağlar.\n• Hareketli toz kapağı ekstra güvenlik sağlar.\n• 40 mm pirinç barel uygulanılabilir.\n• Farklı kalınlıklarda sac kullanımı için iletişime geçiniz.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'CONTA': 'Poliüretan',
      'KAPAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '107 > İspanyolet Sistemli Kollu Kilit': {
    code: '107',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• İç ortam ve conta içi uygulumalarda kullanılır.\n• Yaylı kol açılırken dışarı hareket eder ve çarpmalı şekilde kapanır.\n• Sürgülü toz kapağına sahiptir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '207 > İspanyolet Sistemli Kollu Kilit': {
    code: '207',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Sürgü kapaklı uygulama\n• Ergonomik kola sahiptir.\n• Asma kilit uygulaması opsiyoneldir.\n• 40 mm pirinç barel uygulaması yapılabilir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'PA6 GFR 30',
      'MEKANİZMA': 'PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '307 > İspanyolet Sistemli Kollu Kilit': {
    code: '307',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Sürgü kapaklı uygulama\n• Ergonomik kola sahiptir.\n• Asma kilit uygulaması opsiyoneldir.\n• Barelli versiyona göre daha ekonomik bir kilittir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'PA6 GFR 30 veya Zamak',
      'MEKANİZMA': 'PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '407 > İspanyolet Sistemli Kollu Kilit': {
    code: '407',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Kilitleme sistemi modüler olup uygulama esnasında isteğe göre değiştirilebilir.\n• Kilitleme modülleri bağımsız sipariş edilebilir.\n• Tek noktadan veya 3 noktadan kilitleme aynı gövde üzerinde yapılabilir.\n• Asma kilit uygulaması opsiyoneldir.\n• Gövde alt kısmında klips uygulaması ile hızlı montaj yapılabilir.',
    materials: {
      'GÖVDE': 'PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'PA6 GFR 30',
      'MODÜL': 'Zamak',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '204 > Dikey Hareketli Kollu Kilit': {
    code: '204',
    name: 'Dikey Hareketli Kollu Kilit',
    description: '• Ergonomik ve modern tasarım,\n• Kolun dikey hareketi ile kilitleme ve açma sağlar.\n• Conta içi ve dışı uygulamalar için uygundur.\n• Standart mekanizma ile çoklu kilitleme olanağı sağlar.',
    materials: {
      'GÖVDE': 'PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Çelik',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '104 > Dikey Mekanizmalı Kollu Kilit': {
    code: '104',
    name: 'Dikey Mekanizmalı Kollu Kilit',
    description: '• Kolun dikey hareketi ile kilitleme ve açma sağlar.\n• Conta dışı uygulamalar için uygundur.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Çelik',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '109 > İspanyolet Sistemli Kollu Kilit': {
    code: '109',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Korozyon dayanımı geliştirilmiştir.\n• Kullanılan özel kilit göbeği sayesinde yüksek güvenlik sağlar.\n• Kilit bölgesini kapatan hareketli kapak sayesinde yüksek seviyede sızdırmazlık sağlar.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '909 > İspanyolet Sistemli Kollu Kilit': {
    code: '909',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Basmalı tip kollu kilit\n• Özel renkler için Mesan ile iletişime geçiniz.\n• Kolda yay uygulaması vardır.\n• Asma kilit hamili versiyonlarda IP sağlanamamaktadır.',
    materials: {
      'GÖVDE': 'Zamak veya PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '309 > İspanyolet Sistemli Kollu Kilit': {
    code: '309',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Conta dışı uygulamalarda kullanılabilir.\n• Özel mekanizma uygulanmıştır.\n• Üç noktadan kilitlemeye de uygundur.\n• Geçiş ölçüsü 25 x100 mm dir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'MEKANİZMA': 'PA66',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1 yada PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '209 > İspanyolet Sistemli Kollu Kilit': {
    code: '209',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Yüksek güvenlik ve estetik sağlar.\n• Kolda ve fişe dilinde yay uygulaması yoktur.\n• Açık konumda anahtar çıkabilir ve kol gövdeye yerleşebilir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'MEKANİZMA': 'PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '007 > İspanyolet Sistemli Kollu Kilit': {
    code: '007',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Kolda yay uygulaması mevcuttur.\n• İç ve dış mekan panolarda kullanılabilir.\n• Plastik mekanizma sayesinde rekabetçi bir üründür.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'PA6 GFR 30',
      'MEKANİZMA': 'PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '809 > İspanyolet Sistemli Kollu Kilit': {
    code: '809',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• İç ve dış mekan panolarda kullanılabilir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '103 > İspanyolet Sistemli Kollu Kilit': {
    code: '103',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• 3 noktadan kilitleme özelliği sayesinde Göbek, Kelebek , T ve L kol uygulanabilir.\n• Fişesiz uygulama özelliği vardır .\n• Standart geçiş ölçülerine uygundur.',
    materials: {
      'GÖVDE': 'Zamak yada PA6 GFR 30',
      'KOL': 'Zamak yada PA6 GFR 30',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '203 > İspanyolet Sistemli Kollu Kilit': {
    code: '203',
    name: 'İspanyolet Sistemli Kollu Kilit',
    description: '• Gövdede bulunan klips sayesinde kolay montaj sağlanır.\n• 3 noktadan kilitleme özelliği sayesinde Göbek, kelebek , T ve L kol uygulanabilir.\n• Fişesiz uygulama özelliği vardır.\n• Standart geçiş ölçülerine uygunluğu sayesinde kollu kilitler için hazırlanmış pano kapaklarına uygulanabilir.',
    materials: {
      'GÖVDE': 'PA6 GFR 30',
      'KOL': 'Zamak or PA6 GFR 30',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '203 > İspanyolet Sistemli Pano Kilit': {
    code: '203',
    name: 'İspanyolet Sistemli Pano Kilit',
    description: '• Gövdede bulunan klips sayesinde kolay montaj sağlanır.\n• Mekanizma uygulaması ile 3 noktadan kilitleme sağlar.',
    materials: {
      'GÖVDE': 'PA6 GFR 30',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '03030 > İç Kilitleme Sistemi': {
    code: '03030',
    name: 'İç Kilitleme Sistemi',
    description: '• Çift kapılı kabinlerde kapılardan birinin içeriden kilitlenmesini sağlar.\n• Özel Montaj alternatifleri için satış ekibi ile görüşün.',
    materials: {
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '003 > İspanyolet Sistemli Pano Kilidi': {
    code: '003',
    name: 'İspanyolet Sistemli Pano Kilidi',
    description: '',
    materials: {},
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '103 > İspanyolet Sistemli Pano Kilidi': {
    code: '103',
    name: 'İspanyolet Sistemli Pano Kilidi',
    description: '',
    materials: {},
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '4001 > İspanyolet sistem': {
    code: '4001',
    name: 'İspanyolet sistem',
    description: '',
    materials: {},
    versions: [
      { version: '1', mekanizmaGovde: 'Zamak', mekanizmaLama: 'Çelik', A: '39', B: '29', C: '55', D: '22' },
      { version: '2', mekanizmaGovde: 'Plastik', mekanizmaLama: 'Çelik', A: '39', B: '29', C: '55', D: '22' },
      { version: '3', mekanizmaGovde: 'Zamak (Stoplamalı)', mekanizmaLama: 'Çelik', A: '39', B: '29', C: '55', D: '22' },
      { version: '4', mekanizmaGovde: 'Paslanmaz Çelik', mekanizmaLama: 'Paslanmaz Çelik', A: '39', B: '29', C: '55', D: '22' },
      { version: '5', mekanizmaGovde: 'Zamak (D:19mm)', mekanizmaLama: 'Çelik', A: '39', B: '27', C: '55', D: '19' },
      { version: '6', mekanizmaGovde: 'Zamak (A:38mm)', mekanizmaLama: 'Çelik', A: '39', B: '27', C: '55', D: '22' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '016 > Kabin Kilidi (Metal Gövde)': {
    code: '016',
    name: 'Kabin Kilidi (Metal Gövde)',
    description: '• Kapıyı iterek kilitleme özelliği vardır.\n• Kilitleme için dil bağlantı aparatı gereklidir.\n• Kilitli konumda iken içeriden dil itilerek kilit açılabilir.',
    materials: {
      'GÖVDE': 'Çelik',
      'KOL': 'Çelik',
      'DİL': 'Pirinç',
      'CİVATA': 'Paslanmaz Çelik',
      'CONTA': 'Poliüretan',
      'YÜZEY': 'Siyah boya',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '016 > Kabin Kilidi (Plastik Gövde)': {
    code: '016',
    name: 'Kabin Kilidi (Plastik Gövde)',
    description: '• Kapıyı iterek kilitleme özelliği vardır.\n• Kilitleme için dil bağlantı aparatı gereklidir.\n• Kilitli konumda iken içeriden dil itilerek kilit açılabilir.',
    materials: {
      'GÖVDE': 'Polyamid DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Pirinç veya Delrin',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '016 > Kabin Kilidi (Kancalı Kilit Entegreli)': {
    code: '016',
    name: 'Kabin Kilidi (Kancalı Kilit Entegreli)',
    description: '• Kapıyı iterek kilitleme\n• Kancalı kilit ile entegreli kilitleme sistemi\n• Karşılık civatası ile kullanılır.',
    materials: {
      'GÖVDE': 'Çelik',
      'KOL': 'Çelik',
      'DİL': 'Pirinç',
      'CİVATA': 'Paslanmaz çelik',
      'KANCALI KİLİT': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '316 > Kabin Kilidi': {
    code: '316',
    name: 'Kabin Kilidi',
    description: '• Kapıyı iterek kilitleme özelliği vardır.\n• Kilitleme için dil bağlantı aparatı gereklidir.\n• Kilitli konumda iken içeriden dil itilerek kilit açılabilir.',
    materials: {
      'GÖVDE': 'Polyamid DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '216 > Kabin Kilidi': {
    code: '216',
    name: 'Kabin Kilidi',
    description: '• Kapıyı iterek kilitleme özelliği vardır.\n• Kilitleme için dil bağlantı aparatı gereklidir.\n• Kilitli konumda iken içeriden dil itilerek kilit açılabilir.',
    materials: {
      'GÖVDE': 'Çelik veya Polyamid DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Pirinç veya Delrin',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '116 > Mini Kabin Kilidi': {
    code: '116',
    name: 'Mini Kabin Kilidi',
    description: '• Dil malzemesi delrindir. Kilit karşılığı gerekmez.\n• Kilitli konumda iken içeriden dil ; itilerek kilit açılabilir.',
    materials: {
      'GÖVDE': 'Polyamid DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Delrin',
      'BAĞLANTI SACI': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '214 > "T" Kollu Kabin Kilidi': {
    code: '214',
    name: '"T" Kollu Kabin Kilidi',
    description: '• Yalıtımlı kapılarda sıkıştırma özelliği sayesinde sızdırmazlık sağlar.\n• Kilitleme mesafesi ayarlanabilir.\n• Makaralı dil sayesinde kolay kilitleme sağlar.\n• Asma kilit uygulaması mevcuttur.',
    materials: {
      'GÖVDE': 'Çelik',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CİVATA': 'Paslanmaz çelik',
      'CONTA': 'Poliüretan',
      'YÜZEY': 'KOL: Krom kaplama veya siyah boya\nGÖVDE: Siyah boya',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '214 > T Kollu Kabin Kilidi': {
    code: '214',
    name: 'T Kollu Kabin Kilidi',
    description: '• Yalıtımlı kapılarda sıkıştırma özelliği sayesinde sızdırmazlık sağlar.\n• Kilitleme mesafesi ayarlanabilir.\n• Makaralı dil sayesinde kolay kilitleme sağlar.\n• Asma kilit uygulaması mevcuttur.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
      'YÜZEY': 'KOL: Krom kaplama veya siyah boya\nKOVAN: Siyah boya',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '014 > "T" Kollu Kabin Kilidi': {
    code: '014',
    name: '"T" Kollu Kabin Kilidi',
    description: '• Sabit kilitleme mesafesi mümkündür.\n• Tek noktadan kilitleme sağlar.\n• Makaralı dil sayesinde kolay kilitleme sağlar.\n• Yalıtımlı kapılarda sıkıştırma özelliği ile sızdırmazlık sağlar.\n• Asma kilit uygulaması mevcuttur.\n• Kilit, civata veya perçinleme metodu ile montaj edilebilir.\n• İstenirse fişesiz olarak temin edilebilir.',
    materials: {
      'GÖVDE': 'Polyamid DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'YÜZEY': 'KOL: Krom kaplama veya siyah boya',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '114 > Mini \'T\' Kollu Kabin Kilidi': {
    code: '114',
    name: 'Mini \'T\' Kollu Kabin Kilidi',
    description: '• Tek noktadan kilitleme sağlar.\n• Tekerlekli dil sayesinde kolay kilitleme\n• 4 mm sıkıştırma özelliği vardır.\n• Asma kilit takılabilir.\n• Kendinden civatalı, harici civatalı ve sac parça ile montajı mümkündür.\n• Sabit kilitleme mesafesi mümkündür.\n• Farklı kilitleme mesafeleri için (LH) Mesan ile kontağa geçiniz.',
    materials: {
      'GÖVDE': 'Polyamid DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'YÜZEY': 'KOL: Krom kaplama veya siyah boya',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '315 > "T" Kollu Kabin Kilidi': {
    code: '315',
    name: '"T" Kollu Kabin Kilidi',
    description: '• Fişeli kilitleme\n• Özel amaçlı malzeme dolaplarında uygulanır.\n• Asma kilit kanca çapı max 9 mm olmalıdır.\n• Ayarlanabilir dil sayesinde farklı ölçülerde kilitleme sağlar.\n• Özel dizayn T kol, kullanım kolaylığı sağlar.',
    materials: {
      'GÖVDE': 'Paslanmaz çelik',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ASMA KİLİT HAMİLİ': 'Paslanmaz çelik',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '215 > "T" Kollu Kabin Kilidi': {
    code: '215',
    name: '"T" Kollu Kabin Kilidi',
    description: '• Fişeli kilitleme\n• Özel amaçlı malzeme dolaplarında uygulanır.\n• Ayarlanabilir dil sayesinde farklı ölçülerde kilitleme sağlar.\n• Özel dizayn T kol kullanım kolaylığı sağlar.',
    materials: {
      'GÖVDE': 'Paslanmaz çelik',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '115 > "T" Kollu Kabin Kilidi': {
    code: '115',
    name: '"T" Kollu Kabin Kilidi',
    description: '• Özel amaçlı malzeme dolaplarında uygulanır.\n• Asma kilit kanca çapı max 9 mm olmalıdır.\n• Ayarlanabilir dil sayesinde farklı ölçülerde kilitleme sağlar.\n• Özel dizayn T kol, kullanım kolaylığı sağlar.',
    materials: {
      'GÖVDE': 'Paslanmaz çelik',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ASMA KİLİT HAMİLİ': 'Paslanmaz çelik',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '015 > T Kollu Kabin Kilidi': {
    code: '015',
    name: 'T Kollu Kabin Kilidi',
    description: '• Asma kilit uygulaması sayesinde yüksek güvenlik sağlar.\n• Max. 9 mm lik kanca çaplı asma kilit uygulanmalıdır.\n• Yatay ve dikey uygulama yapılır.\n• 3 Noktadan kilitleme sağlar.',
    materials: {
      'GÖVDE': 'Çelik',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CİVATA': 'Paslanmaz çelik',
      'CONTA': 'Poliüretan',
      'YÜZEY': 'GÖVDE: Siyah boya\nKOL: Krom kaplama veya siyah boya',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '018 > Trafo Kilidi': {
    code: '018',
    name: 'Trafo Kilidi',
    description: '• Orta gerilim panolarında uygulanır.\n• Dökme conta sayesinde sızdırmazlık sağlar.\n• Max 9 mm kanca çaplı asma kilit takılır.\n• Boyasız olarak da satışı gerçekleştirilebilir.\n• Daha fazla dil seçeneği için lütfen Mesan ile iletişime geçiniz.',
    materials: {
      'GÖVDE': 'Alüminyum',
      'KAPAK': 'Alüminyum',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz çelik',
      'ASMA KİLİT HAMİLİ': 'Zamak',
    },
    versions: [
      { version: '1', malzeme: 'Alüminyum', yuzey: 'Toz boya (Siyah)', dil: '00' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '118 > Trafo Kilidi': {
    code: '118',
    name: 'Trafo Kilidi',
    description: '• Alçak gerilim uygulamaları için kullanılabilir.\n• Sızdırmazlık contası isteğe bağlıdır.\n• Max10 mm kanca çaplı asma kilit takılır.\n• Opsiyonel olarak kaplamasız veya boyasız sevk edilir.\n• Dil seçenekleri için Mesan ile iletişime geçiniz.',
    materials: {
      'GÖVDE': 'Alüminyum',
      'KAPAK': 'Alüminyum',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ASMA KİLİT HAMİLİ': 'Alüminyum',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '012 > Klima Santral Kilidi (Versiyon 1)': {
    code: '012',
    name: 'Klima Santral Kilidi (Versiyon 1)',
    description: '• Sökülebilir çevirme kolu.\n• Döner makaralı dil sayesinde kolay kilitleme sağlar.\n• Anahtarlı anahtarsız ve göbekli kullanım mevcuttur.\n• Farklı kapı kalınlıklarında kullanılabilir.\n• Kabin içinden kolu çevirerek açacak emniyet kolu vardır.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '012 > Klima Santral Kilidi (Versiyon 2)': {
    code: '012',
    name: 'Klima Santral Kilidi (Versiyon 2)',
    description: '• İçeriden basınçlı klima santrallerinde basınçlı kilitleme yapar.\n• Makaralı dil sayesinde kolay kilitleme yapar.\n• Farklı kapı kalınlıklarında kullanılabilir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '012 > Klima Santral Kilidi (Versiyon 3)': {
    code: '012',
    name: 'Klima Santral Kilidi (Versiyon 3)',
    description: '• Döner makaralı dil sayesinde kolay kilitleme sağlar\n• Anahtarsız uygulamalarda kullanılır\n• Farklı kapı kalınlıkları için uygundur.\n• T Kolun küçük yapısı sayesinde az yer tutar.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
      'AYAR CİVATASI': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '012 > Klima Santral Kilidi Aksesuarı': {
    code: '012',
    name: 'Klima Santral Kilidi Aksesuarı',
    description: 'Emniyet Kolu\n\n• İçeriden çevirme kolu dışardan kilitlemenin olmadığı durumlarda kullanılır.\n• Emniyet kolu opsiyonel olup talep halinde temin edilir.',
    materials: {},
    versions: [
      { urunKodu: '012 A1', urunResmi: '/012a1.jpg', urunAdi: 'Emniyet Kolu', aciklama: 'Çelik, Plastik Kaplama' },
      { urunKodu: '012 A2', urunResmi: '/012a2.jpg', urunAdi: 'Kilit Karşılığı', aciklama: 'Zamak' },
      { urunKodu: '012 A3', urunResmi: '/012a3.jpg', urunAdi: 'Emniyet Kolu', aciklama: 'Plastik' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '012 > Klima Santral Kilidi (Versiyon 4)': {
    code: '012',
    name: 'Klima Santral Kilidi (Versiyon 4)',
    description: '• Kol olmaksızın harici 10 mm metal anahtar ile açılması mümkündür.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
      'AYAR CİVATASI': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '012 > Klima Santral Kilidi': {
    code: '012',
    name: 'Klima Santral Kilidi',
    description: '• Kol olmaksızın harici 10 mm metal anahtar ile açılması mümkündür.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
      'AYAR CİVATASI': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '112 > Klima Santral Kilidi': {
    code: '112',
    name: 'Klima Santral Kilidi',
    description: '• Ergonomik ve estetik kol\n• Hızlı montaj\n• Güçlü kilitleme yapısı\n• Ayarlanabilir kilitleme aralığı\n• Dışa doğru açılan kapılar için uygundur.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'PA6 GFR 30',
      'DİL': 'Çelik – PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '112 > Klima Santral Kilidi (Versiyon 2)': {
    code: '112',
    name: 'Klima Santral Kilidi (Versiyon 2)',
    description: '• Ergonomik ve estetik kol\n• Hızlı montaj\n• Güçlü kilitleme yapısı\n• Ayarlı dil sayesinde ayarlanabilir kilitleme aralığı\n• İçe doğru açılan kapılar için uygundur.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'PA6 GFR 30',
      'DİL': 'Çelik – PA6 GFR 30',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '112 > Klima Santral Kilidi (Versiyon 3)': {
    code: '112',
    name: 'Klima Santral Kilidi (Versiyon 3)',
    description: '• Kolsuz uygulama\n• Hızlı montaj\n• Güçlü kilitleme yapısı\n• Ayarlanabilir kilitleme aralığı',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik – PA6 GFR 30',
      'AYAR CİVATASI': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '112 > Klima Santral Kilidi (Versiyon 4)': {
    code: '112',
    name: 'Klima Santral Kilidi (Versiyon 4)',
    description: '• Kolsuz uygulama\n• Hızlı montaj\n• Güçlü kilitleme yapısı\n• Ayarlanabilir kilitleme aralığı',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik – PA6 GFR 30',
      'AYAR CİVATASI': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '712 > Fonsiyonel Kilit Menteşe': {
    code: '712',
    name: 'Fonsiyonel Kilit Menteşe',
    description: 'Hem menteşe hem kilit olarak kullanılır. Bu özellik dolayısıyla kapılar hem SAĞ hem de SOL el açılımlı çalışır. İstenirse kapak komple yerinden çıkartılabilir. 3 eksende montaj ayar yapma özelliği mevcuttur. Montaj vidalarını gizleyen plastik tapaları mevcuttur. İçeriden basınçlı kabinler için uygundur.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL KARŞILIĞI': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    versions: [
      { urunKodu: '71220', urunAdi: 'Fonsiyonel Kilitlemeli Menteşe', malzeme: 'Plastik', yuzey: 'Siyah' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '612 > Klima Santral Kilidi': {
    code: '612',
    name: 'Klima Santral Kilidi',
    description: '• Pozitif basınçlı klima santrallerinde dışarıdan kilitleme sağlar.\n• Logo uygulaması için Mesan ile kontağa geçiniz.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '612 > Klima Santral Kilidi T Kollu': {
    code: '612',
    name: 'Klima Santral Kilidi T Kollu',
    description: '• Pozitif basınçlı klima santrallerinde dışarıdan kilitleme sağlar.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4C yada PA6 GFR 30',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '612 > Klima Kabin Kilidi L Kollu': {
    code: '612',
    name: 'Klima Kabin Kilidi L Kollu',
    description: '• Pozitif basınçlı klima santrallerinde dışarıdan kilitleme sağlar.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4C yada PA6 GFR 30',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '078 > Profil Bağlantı Parçası (3D)': {
    code: '078',
    name: 'Profil Bağlantı Parçası (3D)',
    description: '• Komple metal malzeme.\n• 3 boyut ayar imkanı sağlar.\n• Yüksek mekanik dayanım.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'CİVATA': 'Çelik',
      'SOMUN': 'Çelik',
      'YÜZEY': 'Çinko kaplama veye siyah boya',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '462 > Sıkıştırmalı Kilit': {
    code: '462',
    name: 'Sıkıştırmalı Kilit',
    description: '',
    materials: {
      'KOVAN': 'PA6 GFR 30',
      'KELEBEK': 'PA6 GFR 30',
      'CİVATA': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '077 > Sıkıştırmalı Kilit': {
    code: '077',
    name: 'Sıkıştırmalı Kilit',
    description: '• Gömme buton tasarımı\n• Fişeli ve fişesiz modelleri mevcuttur.\n• 0-24mm veya 24-46mm ayarlanabilir kilitleme aralığı\n• Max 2 mm sac kalınlığı için uygundur.\n• Tek noktadan bağlama sacı kullanılarak kolay montaj olur.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MONTAJ SACI': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '177 > Sıkıştırmalı Kilit': {
    code: '177',
    name: 'Sıkıştırmalı Kilit',
    description: '• Kalkık buton tasarımı\n• Fişeli , fişesiz ve göbekli modelleri mevcuttur.\n• 0-24mm veya 24-46mm ayarlanabilir kilitleme aralığı\n• Max 2 mm sac kalınlığı için uygundur.\n• Tek noktadan bağlama sacı kullanılarak kolay montaj olur.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MONTAJ SACI': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '377 > Sıkıştırmalı Kilit': {
    code: '377',
    name: 'Sıkıştırmalı Kilit',
    description: '• Fişeli ve fişesiz modelleri mevcuttur.\n• 36 - 48 mm veya 51 - 63 mm Grip aralıklarında ayarlanabilir.\n• Max 2 mm sac kalınlığı için uygundur.\n• Tek noktadan bağlama sacı kullanılarak montaj olur.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MONTAJ SACI': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '477 > Sıkıştırmalı Kilit': {
    code: '477',
    name: 'Sıkıştırmalı Kilit',
    description: '• Fişesiz uygulama\n• 9 - 19 mm veya 33 - 43 mm Grip aralıklarında ayarlanabilir.\n• Max 2 mm sac kalınlığı için uygundur.\n• Tek noktadan bağlama sacı kullanılarak montaj olur.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MONTAJ SACI': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '072 > Fonksiyonel Kilit': {
    code: '072',
    name: 'Fonksiyonel Kilit',
    description: '• Sac ve polyester panolara uygulanır.\n• Geçiş ölçüsü her iki versiyonda da standarttır.\n• Klipsli versiyonda sac kalınlığı 0.8 mm - 2.0 mm arasındadır .',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik yada PA6 GFR 30',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '070 > Kaldır-Çevir': {
    code: '070',
    name: 'Kaldır-Çevir',
    description: '• Sac ve polyester panolara uygulanır.\n• Sıkıştırma özelliği vardır.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '170 > Kaldır-Çevir': {
    code: '170',
    name: 'Kaldır-Çevir',
    description: '• Sac ve polyester panolara uygulanır.\n• Titreşime maruz kalan ve ses izolasyonu gereken kabinlerde kullanılır.\n• 5 mm sıkıştırma özelliğine sahiptir.\n• 3 farklı tip dil uygulanır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'YÜZEY': 'Krom kaplama veya siyah boya',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '270 > Sıkıştırmalı Kilit': {
    code: '270',
    name: 'Sıkıştırmalı Kilit',
    description: '• Titreşime maruz kalan ve ses izolasyonu gereken kabinlerde kullanılır.\n• Çeşitli sac kalınlıklarına farklı kesim ölçüsü açılarak uygulanabilir.',
    materials: {
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'BURÇ': 'SBR Kauçuk',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '270 > Sıkıştırmalı Kilit 2': {
    code: '270',
    name: 'Sıkıştırmalı Kilit',
    description: '• Titreşime maruz kalan ve ses izolasyonu gereken kabinlerde kullanılır.\n• Çeşitli sac kalınlıklarına farklı kesim ölçüsü açılarak uygulanabilir.',
    materials: {
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'BURÇ': 'SBR Kauçuk',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '071 > Sürgü Kilit': {
    code: '071',
    name: 'Sürgü Kilit',
    description: '• Kolay montaj imkanı sağlar. Özel dizayn edilmiş paslanmaz yay sayesinde uzun süreli kullanım imkanı sağlar.\n• Sac kalınlığı 0.8 mm-1.5 mm arasındadır.\n• Küçük kapılar ve yan kapılarda uygulanır.\n• Farklı renkler için satış ekibimizle iletişime geçiniz.',
    materials: {
      'GÖVDE': 'ABS',
      'YAY': 'Paslanmaz çelik',
    },
    versions: [
      { urunKodu: '07112', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '0.8 -1.2 mm arası saclar için', kapıKalınlığı: '0.8 -1.2 mm arası saclar için' },
      { urunKodu: '07115', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '1.2 -1.5 mm arası saclar için', kapıKalınlığı: '1.2 -1.5 mm arası saclar için' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '171 > Mini Sürgü Kilit': {
    code: '171',
    name: 'Mini Sürgü Kilit',
    description: '• Panoların küçük boyutlu iç kapaklarında kullanılır .\n• Sac kalınlığı 0.8 mm - 1.5 mm arasındadır.',
    materials: {
      'GÖVDE': 'ABS',
      'YAY': 'Paslanmaz çelik',
    },
    versions: [
      { urunKodu: '171', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '0.8 -1.2 mm arası saclar için' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '271 > Sürgü Kilit': {
    code: '271',
    name: 'Sürgü Kilit',
    description: '• İki parça tasarım sayesinde montaj yerinde boya çizilmesini engeller.\n• Küçük kapılar ve yan kapaklarda kullanılır.\n• Klips yapısı ile kolay montaj imkanı sağlar.\n• 0.8 - 1.5 mm kalınlıktaki saclar için uygundur.',
    materials: {
      'GÖVDE': 'ABS',
      'YAY': 'Paslanmaz çelik',
    },
    versions: [
      { urunKodu: '271', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '0.8 -1.2 mm arası saclar için' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '371 > Sürgü Kilit': {
    code: '371',
    name: 'Sürgü Kilit',
    description: '• Oval ve estetik bir tasarıma sahiptir.\n• Kolay montaj imkanı sağlar. Özel dizayn edilmiş paslanmaz yay sayesinde uzun süreli kullanım imkanı sağlar.\n• Sac kalınlığı 0.8 mm-1.5 mm arasındadır.\n• Küçük kapılar ve yan kapılarda uygulanır.\n• Farklı renkler için satış ekibimizle iletişime geçiniz.',
    materials: {
      'GÖVDE': 'ABS',
      'YAY': 'Paslanmaz çelik',
    },
    versions: [
      { urunKodu: '37112', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '0.8 -1.2 mm arası saclar için' },
      { urunKodu: '37115', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '1.2 -1.5 mm arası saclar için' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '471 > Mini Sürgü Kilit': {
    code: '471',
    name: 'Mini Sürgü Kilit',
    description: '• Panoların küçük boyutlu iç kapaklarında kullanılır .\n• Sac kalınlığı 0.8 mm-1.5 mm arasındadır.',
    materials: {
      'GÖVDE': 'ABS',
      'YAY': 'Paslanmaz çelik',
    },
    versions: [
      { urunKodu: '47112', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '0.8 -1.2 mm arası saclar için' },
      { urunKodu: '47115', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '1.2 -1.5 mm arası saclar için' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '571 > Fişeli Sürgü Kilit': {
    code: '571',
    name: 'Fişeli Sürgü Kilit',
    description: '• Fişeli kilitleme özelliğine sahiptir.\n• İki parçalı özel tasarım sayesinde montaj yerinde boya çizilmesini engeller.\n• Küçük kapılar ve yan kapaklarda kullanılır.\n• Klips yapısı ile kolay montaj imkanı sağlar.\n• 0.8 - 1.5 mm kalınlıktaki saclar için uygundur.',
    materials: {
      'GÖVDE': 'ABS',
      'YAY': 'Paslanmaz çelik',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    versions: [
      { urunKodu: '57103', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '0.8 -1.5 mm arası saclar için', silindirFise: 'Paslanmaz toz kapaklı fişe (Aynı şifre)' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '671 > Fişeli Sürgü Kilit': {
    code: '671',
    name: 'Fişeli Sürgü Kilit',
    description: '• Fişeli kilitleme özelliğine sahiptir.\n• İki parçalı özel tasarım sayesinde montaj yerinde boya çizilmesini engeller.\n• Küçük kapılar ve yan kapaklarda kullanılır.\n• Klips yapısı ile kolay montaj imkanı sağlar.\n• 0.8 - 1.5 mm kalınlıktaki saclar için uygundur.',
    materials: {
      'GÖVDE': 'ABS',
      'YAY': 'Paslanmaz çelik',
      'SİLİNDİR': 'PA6 GFR 30',
    },
    versions: [
      { urunKodu: '67101', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '0.8 -1.5 mm arası saclar için', silindirFise: 'Aynı şifre' },
      { urunKodu: '67105', urunResmi: '', urunAdi: 'Kapı Kalınlığı (DT)', aciklama: '0.8 -1.5 mm arası saclar için', silindirFise: 'Euro anahtar (5333)' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '073 > Perde Sacı Kilidi': {
    code: '073',
    name: 'Perde Sacı Kilidi',
    description: '• Küçük panellerin gövdeye tutturulmasını sağlar.\n• Çok noktadan çeyrek dönüşlü kilitleme sağlar.\n• Kolay montaj özelliği sağlamaktadır.\n• 24.5 mm eğimli kapaklarda uygulanır.\n• Sac ve profilere montaj imkanı vardır.',
    materials: {
      'TUTAMAK': 'ABS',
      'MONTAJ PARÇASI': 'Çelik',
    },
    versions: [
      { urunKodu: '073', urunResmi: '', urunAdi: 'Perde Sacı Kilidi', malzeme: 'ABS', yuzey: 'Siyah' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '075 > Allen Göbekli Pano Kilidi': {
    code: '075',
    name: 'Allen Göbekli Pano Kilidi',
    description: '',
    materials: {
      'GÖVDE': 'Çelik',
      'DİL': 'Çelik',
      'KAPAK': 'Plastik',
    },
    versions: [
      { urunKodu: '669-66', urunResmi: '', urunAdi: 'Allen Anahtar', malzeme: 'Plastik', yuzey: 'Siyah' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '176 > Kancalı Kilit': {
    code: '176',
    name: 'Kancalı Kilit',
    description: '• Jeneratörlerde yan ve arka kapaklarda kilit kullanılmadan kapanma sağlar.\n• Açma işlemi kancanın el ile itilmesi ile gerçekleşir.',
    materials: {
      'MALZEME': 'Çelik veya paslanmaz çelik',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '2800 > Kancalı Kilit': {
    code: '2800',
    name: 'Kancalı Kilit',
    description: '• 6 çeşit kaldıraç tipi mevcuttur.\n• Tek veya çift kademeli çalıştırma hareketi vardır.\n• Titreşim ve sesli alanlar için tamponlu versiyonu önerilir.',
    materials: {
      'GÖVDE': 'Çelik',
      'TAMPON': 'PA6',
    },
    surface: 'Çinko kaplama',
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '2810 > Kancalı Kilit (Büyük)': {
    code: '2810',
    name: 'Kancalı Kilit (Büyük)',
    description: '• 3 çeşit kaldıraç tipi mevcuttur.\n• Çift kademeli çalıştırma hareketi vardır.',
    materials: {
      'GÖVDE': 'Çelik',
    },
    surface: 'Çinko kaplama',
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '3341 > Elektronik Kilit': {
    code: '3341',
    name: 'Elektronik Kilit',
    description: '• Erişim kontrol sistemleri ile uyumlu Bas Kapat\n• İki farklı mekanik açılma opsiyonu\n• Otomatik kilitleme\n• Mikroişlemci kontrollü redüktörlü\n• DC motor\n• 12 Volt DC besleme voltajı\n• Dahili mikrosiviç',
    materials: {
      'GÖVDE': 'Plastik',
      'DİL': 'Zamak',
    },
    surface: 'Siyah',
    technicalSpecs: {
      'Kablo Uzunluğu': '180 mm',
      'Çalışma Voltajı': '12 Volt',
      'Akım': 'Max. 500 mA',
      'Stroke': '9 mm',
    },
    versions: [
      {
        'Ürün Kodu': '3341',
        'Ürün Adı': 'Elektronik Kilit',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3311 > Selenoid Kilit': {
    code: '3311',
    name: 'Selenoid Kilit',
    description: '• Erişim kontrol sistemleri ile uyumlu.\n• Özel karşılık parçası ile bas kapa özelliği\n• Kilit gövdesine monte edilebilen yüksek güvenlikli çeyrek dönüşlü kilit ile mekanik olarak açılabilme imkanı\n• Otomatik kilitlenme\n• Selenoid kutupsal değildir.\n• Selenoid direnci uygulanan voltaja göre değişiklik gösterir.\n• Selenoid sürekli enerji altında kaldığı zaman ısınır (yaklaşık 80 derece), yanıklara karşı önlem alınmalıdır.',
    materials: {
      'GÖVDE': 'Çelik',
      'DİL': 'Çelik',
      'KİLİT KARŞILIĞI': 'Delrin',
    },
    surface: 'Siyah',
    technicalSpecs: {
      'Çalışma Voltajı': '24 V DC',
      'Akım Tüketimi': '550 mA',
      'Güç Tüketimi': '13,2 W',
      'Çalışma Sıcaklığı': '- 5 °C / + 40 °C',
      'Kablo uzunluğu': '30 cm',
      'Stroke': '10 mm',
    },
    versions: [],
    relatedProducts: [],
  },
  '3301 > Elektronik Dolap Kilidi': {
    code: '3301',
    name: 'Elektronik Dolap Kilidi',
    description: '• Mikroişlemci kontrollü çalışma voltajı 220 volt AC ( Özel trafosu ile)\n• Uzaktan Kumanda; Açma - Kapama\n• Sesli Uyarı\n• Enerji kesintisi durumu için manuel açma slotu\n• Yeni kumanda öğretme\n• Tek kumanda ile birden çok kilit kontrol edebilme\n• Bir kilidi birden çok kumanda ile kontrol edebilme\n• Strok: 8 mm',
    materials: {
      'GÖVDE': 'Plastik',
      'KİLİT DİLİ': 'Çelik',
      'DİL KARŞILIĞI': 'Delrin',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3301',
        'Ürün Adı': 'Elektronik Dolap Kilidi',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3331 > Elektronik Kancalı Kilit': {
    code: '3331',
    name: 'Elektronik Kancalı Kilit',
    description: '• Kapıyı iterek kilitlenmesini sağlar\n• Mekanik olarak da tetiklenebilir.\n• Paslanmaz çelik dil ve tetik\n• Dahili mikro siviç ile kilidin açık olup olmadığını görülebilir.\n• Mikro işlemci kontrollü redüktörlü DC motor yapısı\n• Erişim kontrol sistemleri ile uyumlu',
    materials: {
      'GÖVDE': 'Çelik and PA6 GFR 30',
      'DİL': 'Paslanmaz çelik',
    },
    technicalSpecs: {
      'Çalışma Voltajı': '9 - 24 VDC',
      'Kablo Uzunluğu': '150 mm',
      'Akım': 'Max 500 MA',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '3501 > Acil Durum Durdurma Butonu': {
    code: '3501',
    name: 'Acil Durum Durdurma Butonu',
    description: '• Kolay montaj\n• Farklı kontak seçenekleri (max. 3 kontak)\n• Standart kablo ölçüsü 2.5 m spiral boru ölçüsü 2m dir. İsteğe bağlı değişebilir.',
    materials: {
      'ÇANAK': 'Polyamid DIN-EN ISO 1043-1 PA6 GFR 30',
      'KORUYUCU KAPAK': 'PVC',
      'CONTA': 'EPDM',
      'SPİRAL BORU': 'PA6',
      'RAKOR': 'PA66',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3501',
        'Ürün Adı': 'Acil Durdurma Butonu',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '466 > Mini Butonlu Kilit': {
    code: '466',
    name: 'Mini Butonlu Kilit',
    description: '• Buton sayesinde kolay açma kapama sağlar.\n• Küçük torpido kapakları için uygundur.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'BUTON': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '112 > Klima Santral Kilidi Aksesuarları': {
    code: '112',
    name: 'Klima Santral Kilidi Aksesuarları',
    description: '',
    materials: {},
    versions: [
      { urunKodu: '112H.1.00', urunResmi: '', urunAdi: 'Tutamak', aciklama: 'Silindirsiz - Fişesiz' },
      { urunKodu: '112H.1.03', urunResmi: '', urunAdi: 'Tutamak', aciklama: 'Aynı Şifre (Paslanmaz Çelik Kapaklı)' },
      { urunKodu: '112H.1.32', urunResmi: '', urunAdi: 'Tutamak', aciklama: 'Farklı Şifre (Paslanmaz toz kapaklı)' },
      { urunKodu: '112H.1.05', urunResmi: '', urunAdi: 'Tutamak', aciklama: 'Euro Key' },
      { urunKodu: '112H.1.28', urunResmi: '', urunAdi: 'Tutamak', aciklama: '8 mm Kare' },
      { urunKodu: '112H.1.20', urunResmi: '', urunAdi: 'Tutamak', aciklama: '10 mm Kare' },
      { urunKodu: '112H.1.37', urunResmi: '', urunAdi: 'Tutamak', aciklama: '7 mm Üçgen' },
      { urunKodu: '112H.1.68', urunResmi: '', urunAdi: 'Tutamak', aciklama: '8 mm Altıgen' },
      { urunKodu: '112H.2.00', urunResmi: '', urunAdi: 'Tutamak', aciklama: 'Silindirsiz - Fişesiz' },
      { urunKodu: '112H.2.03', urunResmi: '', urunAdi: 'Tutamak', aciklama: 'Aynı Şifre (Paslanmaz Çelik Kapaklı)' },
      { urunKodu: '112H.2.32', urunResmi: '', urunAdi: 'Tutamak', aciklama: 'Farklı Şifre (Paslanmaz toz kapaklı)' },
      { urunKodu: '112H.2.05', urunResmi: '', urunAdi: 'Tutamak', aciklama: 'Euro Key' },
      { urunKodu: '112H.2.28', urunResmi: '', urunAdi: 'Tutamak', aciklama: '8mm Kare' },
      { urunKodu: '112H.2.20', urunResmi: '', urunAdi: 'Tutamak', aciklama: '10 mm Kare' },
      { urunKodu: '112H.2.37', urunResmi: '', urunAdi: 'Tutamak', aciklama: '7 mm Üçgen' },
      { urunKodu: '112H.2.68', urunResmi: '', urunAdi: 'Tutamak', aciklama: '8 mm Altıgen' },
      { urunKodu: '112C01', urunResmi: '', urunAdi: 'Sabit Dil', aciklama: 'Yuvarlak makaralı' },
      { urunKodu: '112C02', urunResmi: '', urunAdi: 'Sabit Dil', aciklama: 'Üçgen makaralı' },
      { urunKodu: '112C03', urunResmi: '', urunAdi: 'Ayarlı Dil', aciklama: 'Yuvarlak makaralı' },
      { urunKodu: '112C04', urunResmi: '', urunAdi: 'Ayarlı Dil', aciklama: 'Üçgen makaralı' },
      { urunKodu: '112A102', urunResmi: '', urunAdi: 'Emniyet Kolu', aciklama: 'Versiyon 4 de kullanılır' },
      { urunKodu: '112A101', urunResmi: '', urunAdi: 'Emniyet Kolu', aciklama: 'Versiyon 1,2,3 de kullanılır' },
      { urunKodu: '112A502', urunResmi: '', urunAdi: 'Çoklu kilitleme ünitesi', aciklama: 'Versiyon 4 de kullanılır' },
      { urunKodu: '112A501', urunResmi: '', urunAdi: 'Çoklu kilitleme ünitesi', aciklama: 'Versiyon 1,2,3 de kullanılır' },
      { urunKodu: '112A2', urunResmi: '', urunAdi: 'Emniyet Kilit Kolu', aciklama: 'Plastik' },
      { urunKodu: '112A4', urunResmi: '', urunAdi: 'Çubuk tutucu', aciklama: 'Çoklu Kilitleme için kullanılır' },
      { urunKodu: '112IC', urunResmi: '', urunAdi: 'Çubuk', aciklama: 'Çoklu Kilitleme için kullanılır' },
      { urunKodu: '112A6', urunResmi: '', urunAdi: 'Kapak', aciklama: 'Plastik' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Tırnaklı Diller 1': {
    code: 'CC',
    name: 'Tırnaklı Diller 1',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/tirnaklidil/tirnaklidilurun1.png',
    versions: [
      { stokKodu: '30403033Y', CC: '30', CH: '0', CL: '45', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '21', LH30: '30', LH32: '32', LH35: '35', LH40: '40', LH50: '50', LH60: '60' },
      { stokKodu: '30403439Y', CC: '17', CH: '1', CL: '45', LH18: '19', LH18_5: '19.5', LH20: '21', LH21: '22', LH30: '31', LH32: '33', LH35: '36', LH40: '41', LH50: '51', LH60: '61' },
      { stokKodu: '30403159Y', CC: '35', CH: '2', CL: '45', LH18: '20', LH18_5: '20.5', LH20: '22', LH21: '23', LH30: '32', LH32: '34', LH35: '37', LH40: '42', LH50: '52', LH60: '62' },
      { stokKodu: '30403063Y', CC: '31', CH: '3', CL: '45', LH18: '21', LH18_5: '21.5', LH20: '23', LH21: '24', LH30: '33', LH32: '35', LH35: '38', LH40: '43', LH50: '53', LH60: '63' },
      { stokKodu: '30403149Y', CC: '33', CH: '4', CL: '45', LH18: '22', LH18_5: '22.5', LH20: '24', LH21: '25', LH30: '34', LH32: '37', LH35: '39', LH40: '44', LH50: '54', LH60: '64' },
      { stokKodu: '30403160Y', CC: '34', CH: '6', CL: '45', LH18: '24', LH18_5: '24.5', LH20: '26', LH21: '27', LH30: '36', LH32: '38', LH35: '41', LH40: '46', LH50: '56', LH60: '66' },
      { stokKodu: '30403161Y', CC: '36', CH: '8', CL: '45', LH18: '26', LH18_5: '26.5', LH20: '28', LH21: '29', LH30: '38', LH32: '40', LH35: '43', LH40: '48', LH50: '58', LH60: '68' },
      { stokKodu: '30403162Y', CC: '47', CH: '10', CL: '45', LH18: '28', LH18_5: '28.5', LH20: '30', LH21: '31', LH30: '40', LH32: '42', LH35: '45', LH40: '50', LH50: '60', LH60: '70' },
      { stokKodu: '30403045Y', CC: '44', CH: '12', CL: '45', LH18: '30', LH18_5: '30.5', LH20: '32', LH21: '33', LH30: '42', LH32: '44', LH35: '47', LH40: '42', LH50: '62', LH60: '72' },
      { stokKodu: '30403163Y', CC: '48', CH: '14', CL: '45', LH18: '32', LH18_5: '32.5', LH20: '34', LH21: '35', LH30: '44', LH32: '46', LH35: '49', LH40: '54', LH50: '64', LH60: '74' },
      { stokKodu: '30403151Y', CC: '49', CH: '16', CL: '45', LH18: '34', LH18_5: '34.5', LH20: '36', LH21: '37', LH30: '46', LH32: '48', LH35: '51', LH40: '56', LH50: '66', LH60: '76' },
      { stokKodu: '30403165Y', CC: '55', CH: '18', CL: '45', LH18: '36', LH18_5: '36.5', LH20: '38', LH21: '39', LH30: '48', LH32: '50', LH35: '53', LH40: '58', LH50: '68', LH60: '78' },
      { stokKodu: '30403166Y', CC: '56', CH: '20', CL: '45', LH18: '38', LH18_5: '38.5', LH20: '40', LH21: '41', LH30: '50', LH32: '52', LH35: '55', LH40: '60', LH50: '70', LH60: '80' },
      { stokKodu: '30403167Y', CC: '57', CH: '22', CL: '45', LH18: '40', LH18_5: '40.5', LH20: '42', LH21: '43', LH30: '52', LH32: '54', LH35: '57', LH40: '62', LH50: '72', LH60: '82' },
      { stokKodu: '30403168Y', CC: '58', CH: '24', CL: '45', LH18: '42', LH18_5: '42.5', LH20: '44', LH21: '45', LH30: '54', LH32: '56', LH35: '59', LH40: '64', LH50: '74', LH60: '84' },
      { stokKodu: '30403169Y', CC: '37', CH: '-2', CL: '45', LH18: '16', LH18_5: '16.5', LH20: '18', LH21: '19', LH30: '28', LH32: '30', LH35: '33', LH40: '38', LH50: '48', LH60: '58' },
      { stokKodu: '30403170Y', CC: '38', CH: '-4', CL: '45', LH18: '14', LH18_5: '14.5', LH20: '16', LH21: '17', LH30: '26', LH32: '28', LH35: '31', LH40: '36', LH50: '46', LH60: '56' },
      { stokKodu: '30403171Y', CC: '39', CH: '-6', CL: '45', LH18: '12', LH18_5: '12.5', LH20: '14', LH21: '15', LH30: '24', LH32: '26', LH35: '29', LH40: '34', LH50: '44', LH60: '54' },
      { stokKodu: '30403172Y', CC: '59', CH: '-8', CL: '45', LH18: '10', LH18_5: '10.5', LH20: '12', LH21: '13', LH30: '22', LH32: '24', LH35: '27', LH40: '32', LH50: '42', LH60: '52' },
      { stokKodu: '30403173Y', CC: '60', CH: '-10', CL: '45', LH18: '8', LH18_5: '8.5', LH20: '10', LH21: '11', LH30: '20', LH32: '22', LH35: '25', LH40: '30', LH50: '40', LH60: '50' },
      { stokKodu: '30403174Y', CC: '61', CH: '-12', CL: '45', LH18: '6', LH18_5: '6.5', LH20: '8', LH21: '9', LH30: '18', LH32: '20', LH35: '23', LH40: '28', LH50: '38', LH60: '48' },
      { stokKodu: '30403175Y', CC: '62', CH: '-14', CL: '45', LH18: '4', LH18_5: '4.5', LH20: '6', LH21: '7', LH30: '16', LH32: '18', LH35: '21', LH40: '26', LH50: '36', LH60: '46' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Tırnaklı Diller 2': {
    code: 'CC',
    name: 'Tırnaklı Diller 2',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/tirnaklidil/tirnaklidilurun2.png',
    versions: [
      { stokKodu: '30403187Y', CC: '11', CH: '-2', CL: '35', LH18: '16', LH18_5: '16.5', LH20: '18', LH21: '19', LH30: '28', LH32: '30', LH35: '33', LH40: '38', LH50: '48', LH60: '58' },
      { stokKodu: '30403185Y', CC: '12', CH: '0', CL: '35', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '21', LH30: '30', LH32: '32', LH35: '35', LH40: '40', LH50: '50', LH60: '60' },
      { stokKodu: '30403186Y', CC: '13', CH: '2', CL: '35', LH18: '20', LH18_5: '20.5', LH20: '22', LH21: '23', LH30: '32', LH32: '34', LH35: '37', LH40: '42', LH50: '52', LH60: '62' },
      { stokKodu: '30403188Y', CC: '14', CH: '4', CL: '35', LH18: '22', LH18_5: '22.5', LH20: '24', LH21: '25', LH30: '34', LH32: '36', LH35: '39', LH40: '44', LH50: '54', LH60: '64' },
      { stokKodu: '30403470Y', CC: '15', CH: '6', CL: '35', LH18: '24', LH18_5: '24.5', LH20: '26', LH21: '27', LH30: '36', LH32: '38', LH35: '41', LH40: '46', LH50: '56', LH60: '66' },
      { stokKodu: '30403471Y', CC: '16', CH: '7', CL: '35', LH18: '25', LH18_5: '25.5', LH20: '27', LH21: '28', LH30: '37', LH32: '39', LH35: '42', LH40: '47', LH50: '57', LH60: '67' },
      { stokKodu: '30403189Y', CC: '23', CH: '10', CL: '35', LH18: '28', LH18_5: '28.5', LH20: '30', LH21: '31', LH30: '40', LH32: '42', LH35: '45', LH40: '50', LH50: '60', LH60: '70' },
      { stokKodu: '30403046Y', CC: '52', CH: '26', CL: '35', LH18: '44', LH18_5: '44.5', LH20: '46', LH21: '47', LH30: '56', LH32: '58', LH35: '61', LH40: '66', LH50: '76', LH60: '86' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Tırnaklı Diller 3': {
    code: 'CC',
    name: 'Tırnaklı Diller 3',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/tirnaklidil/tirnaklidilurun3.png',
    versions: [
      { stokKodu: '30403031Y', CC: '10', CH: '0', CL: '29', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '21', LH30: '30', LH32: '32', LH35: '35', LH40: '40', LH50: '50', LH60: '60' },
      { stokKodu: '30403032Y', CC: '20', CH: '0', CL: '38', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '21', LH30: '30', LH32: '32', LH35: '35', LH40: '40', LH50: '50', LH60: '60' },
      { stokKodu: '30403036Y', CC: '70', CH: '0', CL: '66', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '21', LH30: '30', LH32: '32', LH35: '35', LH40: '40', LH50: '50', LH60: '60' },
      { stokKodu: '30403034Y', CC: '40', CH: '0', CL: '51', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '21', LH30: '30', LH32: '32', LH35: '35', LH40: '40', LH50: '50', LH60: '60' },
      { stokKodu: '30403037Y', CC: '21', CH: '3', CL: '38', LH18: '21', LH18_5: '21.5', LH20: '23', LH21: '24', LH30: '33', LH32: '35', LH35: '38', LH40: '43', LH50: '53', LH60: '63' },
      { stokKodu: '30403038Y', CC: '41', CH: '3', CL: '51', LH18: '21', LH18_5: '21.5', LH20: '23', LH21: '24', LH30: '33', LH32: '35', LH35: '38', LH40: '43', LH50: '53', LH60: '63' },
      { stokKodu: '30403129Y', CC: '22', CH: '6', CL: '37', LH18: '24', LH18_5: '24.5', LH20: '26', LH21: '27', LH30: '36', LH32: '38', LH35: '41', LH40: '46', LH50: '56', LH60: '66' },
      { stokKodu: '30403039Y', CC: '32', CH: '7', CL: '44', LH18: '25', LH18_5: '25.5', LH20: '27', LH21: '28', LH30: '37', LH32: '39', LH35: '42', LH40: '47', LH50: '57', LH60: '67' },
      { stokKodu: '30403040Y', CC: '42', CH: '7', CL: '49', LH18: '25', LH18_5: '25.5', LH20: '27', LH21: '28', LH30: '37', LH32: '39', LH35: '42', LH40: '47', LH50: '57', LH60: '67' },
      { stokKodu: '30403043Y', CC: '43', CH: '10', CL: '48', LH18: '28', LH18_5: '28.5', LH20: '30', LH21: '31', LH30: '40', LH32: '42', LH35: '45', LH40: '50', LH50: '60', LH60: '70' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Tırnaklı Diller 4': {
    code: 'CC',
    name: 'Tırnaklı Diller 4',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/tirnaklidil/tirnaklidilurun4.png',
    versions: [
      { stokKodu: '30403140Y', CC: '03', CH: '0', CL: '51', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '', LH30: '30', LH32: '32', LH35: '35', LH40: '40', LH50: '50', LH60: '60' },
      { stokKodu: '30403522Y', CC: '06', CH: '0', CL: '45', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '', LH30: '30', LH32: '32', LH35: '35', LH40: '40', LH50: '50', LH60: '60' },
      { stokKodu: '30403047Y', CC: '01', CH: '7', CL: '49', LH18: '25', LH18_5: '25.5', LH20: '27', LH21: '', LH30: '37', LH32: '39', LH35: '42', LH40: '47', LH50: '57', LH60: '67' },
      { stokKodu: '30403524Y', CC: '07', CH: '2', CL: '45', LH18: '20', LH18_5: '20.5', LH20: '22', LH21: '', LH30: '32', LH32: '34', LH35: '37', LH40: '42', LH50: '52', LH60: '62' },
      { stokKodu: '30403526Y', CC: '08', CH: '3', CL: '45', LH18: '21', LH18_5: '21.5', LH20: '23', LH21: '', LH30: '33', LH32: '35', LH35: '38', LH40: '43', LH50: '53', LH60: '63' },
      { stokKodu: '30403528Y', CC: '09', CH: '4', CL: '45', LH18: '22', LH18_5: '22.5', LH20: '24', LH21: '', LH30: '34', LH32: '36', LH35: '39', LH40: '44', LH50: '54', LH60: '64' },
      { stokKodu: '30403530Y', CC: '100', CH: '5', CL: '45', LH18: '23', LH18_5: '23.5', LH20: '25', LH21: '', LH30: '35', LH32: '37', LH35: '40', LH40: '45', LH50: '55', LH60: '65' },
      { stokKodu: '30403532Y', CC: '101', CH: '6', CL: '45', LH18: '24', LH18_5: '24.5', LH20: '26', LH21: '', LH30: '36', LH32: '38', LH35: '41', LH40: '46', LH50: '56', LH60: '66' },
      { stokKodu: '30403534Y', CC: '102', CH: '7', CL: '45', LH18: '25', LH18_5: '25.5', LH20: '27', LH21: '', LH30: '37', LH32: '39', LH35: '42', LH40: '47', LH50: '57', LH60: '67' },
      { stokKodu: '30403147Y', CC: '02', CH: '12', CL: '46', LH18: '30', LH18_5: '30.5', LH20: '32', LH21: '', LH30: '42', LH32: '44', LH35: '47', LH40: '52', LH50: '62', LH60: '72' },
      { stokKodu: '30403536Y', CC: '103', CH: '14', CL: '45', LH18: '32', LH18_5: '32.5', LH20: '34', LH21: '', LH30: '44', LH32: '46', LH35: '49', LH40: '54', LH50: '64', LH60: '74' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Tırnaklı Diller 5': {
    code: 'CC',
    name: 'Tırnaklı Diller 5',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/tirnaklidil/tirnaklidilurun5.png',
    versions: [
      { stokKodu: '30402004Y', CC: '90', CH: '0', CL: '35', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '21', LH30: '30', LH32: '32', LH35: '35', LH40: '40', LH50: '50', LH60: '60' },
      { stokKodu: '30402011Y', CC: '93', CH: '0', CL: '25', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '21', LH30: '30', LH32: '32', LH35: '35', LH40: '40', LH50: '50', LH60: '60' },
      { stokKodu: '30402005Y', CC: '91', CH: '6', CL: '35', LH18: '24', LH18_5: '24.5', LH20: '26', LH21: '27', LH30: '36', LH32: '38', LH35: '41', LH40: '46', LH50: '56', LH60: '66' },
      { stokKodu: '30402008Y', CC: '92', CH: '4', CL: '45', LH18: '22', LH18_5: '22.5', LH20: '24', LH21: '25', LH30: '34', LH32: '36', LH35: '39', LH40: '44', LH50: '54', LH60: '64' },
      { stokKodu: '30402013Y', CC: '94', CH: '-4', CL: '45', LH18: '14', LH18_5: '14.5', LH20: '16', LH21: '17', LH30: '26', LH32: '28', LH35: '41', LH40: '36', LH50: '56', LH60: '66' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Tırnaksız Diller 1': {
    code: 'CC',
    name: 'Tırnaksız Diller 1',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/tirnaksizdil/tirnaksizdilurun1.png',
    versions: [
      { stokKodu: '30403117Y', CC: '30', CH: '0', CL: '45', LH14: '14', LH18_5: '18.5', LH19: '19', LH20: '20', LH22: '22', LH25: '25', LH32: '32', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403557Y', CC: '17', CH: '1', CL: '45', LH14: '15', LH18_5: '19.5', LH19: '20', LH20: '21', LH22: '23', LH25: '26', LH32: '33', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403581Y', CC: '35', CH: '2', CL: '45', LH14: '16', LH18_5: '20.5', LH19: '21', LH20: '22', LH22: '24', LH25: '27', LH32: '34', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403054Y', CC: '31', CH: '3', CL: '45', LH14: '17', LH18_5: '21.5', LH19: '22', LH20: '23', LH22: '25', LH25: '28', LH32: '35', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403197Y', CC: '33', CH: '4', CL: '45', LH14: '18', LH18_5: '22.5', LH19: '23', LH20: '24', LH22: '26', LH25: '29', LH32: '36', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403128Y', CC: '34', CH: '6', CL: '45', LH14: '20', LH18_5: '24.5', LH19: '25', LH20: '26', LH22: '29', LH25: '31', LH32: '38', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403583Y', CC: '36', CH: '8', CL: '45', LH14: '22', LH18_5: '26.5', LH19: '27', LH20: '28', LH22: '30', LH25: '33', LH32: '40', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403584Y', CC: '47', CH: '10', CL: '45', LH14: '24', LH18_5: '28.5', LH19: '29', LH20: '30', LH22: '32', LH25: '35', LH32: '42', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403123Y', CC: '44', CH: '12', CL: '45', LH14: '26', LH18_5: '30.5', LH19: '31', LH20: '32', LH22: '34', LH25: '37', LH32: '44', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403422Y', CC: '48', CH: '14', CL: '45', LH14: '28', LH18_5: '32.5', LH19: '33', LH20: '34', LH22: '36', LH25: '39', LH32: '46', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403410Y', CC: '49', CH: '16', CL: '45', LH14: '30', LH18_5: '34.5', LH19: '35', LH20: '36', LH22: '38', LH25: '41', LH32: '48', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403429Y', CC: '55', CH: '18', CL: '45', LH14: '32', LH18_5: '36.5', LH19: '37', LH20: '38', LH22: '40', LH25: '43', LH32: '50', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403585Y', CC: '56', CH: '20', CL: '45', LH14: '34', LH18_5: '38.5', LH19: '39', LH20: '40', LH22: '42', LH25: '45', LH32: '52', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403586Y', CC: '57', CH: '22', CL: '45', LH14: '36', LH18_5: '40.5', LH19: '41', LH20: '42', LH22: '44', LH25: '47', LH32: '54', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403411Y', CC: '58', CH: '24', CL: '45', LH14: '38', LH18_5: '42.5', LH19: '43', LH20: '44', LH22: '46', LH25: '49', LH32: '56', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403425Y', CC: '37', CH: '-2', CL: '45', LH14: '12', LH18_5: '16.5', LH19: '17', LH20: '18', LH22: '20', LH25: '23', LH32: '30', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403198Y', CC: '38', CH: '-4', CL: '45', LH14: '10', LH18_5: '14.5', LH19: '15', LH20: '16', LH22: '18', LH25: '21', LH32: '28', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403423Y', CC: '39', CH: '-6', CL: '45', LH14: '8', LH18_5: '12.5', LH19: '13', LH20: '14', LH22: '16', LH25: '19', LH32: '26', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403412Y', CC: '59', CH: '-8', CL: '45', LH14: '6', LH18_5: '10.5', LH19: '11', LH20: '12', LH22: '14', LH25: '17', LH32: '24', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403552Y', CC: '60', CH: '-10', CL: '45', LH14: '4', LH18_5: '8.5', LH19: '9', LH20: '10', LH22: '12', LH25: '15', LH32: '22', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403587Y', CC: '61', CH: '-12', CL: '45', LH14: '2', LH18_5: '6.5', LH19: '7', LH20: '8', LH22: '10', LH25: '13', LH32: '20', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403420Y', CC: '62', CH: '-14', CL: '45', LH14: '0', LH18_5: '4.5', LH19: '5', LH20: '6', LH22: '8', LH25: '11', LH32: '18', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Tırnaksız Diller 2': {
    code: 'CC',
    name: 'Tırnaksız Diller 2',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/tirnaksizdil/tirnaksizdilurun2.png',
    versions: [
      { stokKodu: '30403069Y', CC: '11', CH: '-2', CL: '35', LH14: '12', LH18_5: '16.5', LH19: '18', LH20: '18', LH22: '20', LH25: '23', LH32: '30', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403444Y', CC: '12', CH: '0', CL: '35', LH14: '14', LH18_5: '18.5', LH19: '20', LH20: '20', LH22: '22', LH25: '25', LH32: '32', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403519Y', CC: '13', CH: '2', CL: '35', LH14: '16', LH18_5: '20.5', LH19: '22', LH20: '22', LH22: '24', LH25: '27', LH32: '34', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403588Y', CC: '14', CH: '4', CL: '35', LH14: '18', LH18_5: '22.5', LH19: '24', LH20: '24', LH22: '26', LH25: '29', LH32: '36', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403477Y', CC: '15', CH: '6', CL: '35', LH14: '20', LH18_5: '24.5', LH19: '26', LH20: '26', LH22: '28', LH25: '31', LH32: '38', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403589Y', CC: '16', CH: '7', CL: '35', LH14: '21', LH18_5: '25.5', LH19: '27', LH20: '27', LH22: '29', LH25: '32', LH32: '39', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403407Y', CC: '23', CH: '10', CL: '35', LH14: '24', LH18_5: '28.5', LH19: '30', LH20: '30', LH22: '32', LH25: '35', LH32: '42', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403075Y', CC: '52', CH: '26', CL: '35', LH14: '40', LH18_5: '44.5', LH19: '46', LH20: '36', LH22: '48', LH25: '51', LH32: '58', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Tırnaksız Diller 3': {
    code: 'CC',
    name: 'Tırnaksız Diller 3',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/tirnaksizdil/tirnaksizdilurun3.png',
    versions: [
      { stokKodu: '30403006Y', CC: '10', CH: '0', CL: '29', LH14: '14', LH18_5: '18.5', LH19: '19', LH20: '20', LH22: '22', LH25: '25', LH32: '32', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403130Y', CC: '20', CH: '0', CL: '38', LH14: '14', LH18_5: '18.5', LH19: '19', LH20: '20', LH22: '22', LH25: '25', LH32: '32', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403117Y', CC: '30', CH: '0', CL: '45', LH14: '14', LH18_5: '18.5', LH19: '19', LH20: '20', LH22: '22', LH25: '25', LH32: '32', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403003Y', CC: '40', CH: '0', CL: '51', LH14: '14', LH18_5: '18.5', LH19: '19', LH20: '20', LH22: '22', LH25: '25', LH32: '32', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403005Y', CC: '70', CH: '0', CL: '66', LH14: '14', LH18_5: '18.5', LH19: '19', LH20: '20', LH22: '22', LH25: '25', LH32: '32', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403064Y', CC: '21', CH: '3', CL: '38', LH14: '17', LH18_5: '21.5', LH19: '22', LH20: '23', LH22: '25', LH25: '28', LH32: '35', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403054Y', CC: '31', CH: '3', CL: '45', LH14: '17', LH18_5: '21.5', LH19: '22', LH20: '23', LH22: '25', LH25: '28', LH32: '35', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403141Y', CC: '41', CH: '3', CL: '51', LH14: '17', LH18_5: '21.5', LH19: '22', LH20: '23', LH22: '25', LH25: '28', LH32: '35', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403138Y', CC: '22', CH: '6', CL: '37', LH14: '20', LH18_5: '24.5', LH19: '25', LH20: '26', LH22: '28', LH25: '31', LH32: '38', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403128Y', CC: '34', CH: '6', CL: '45', LH14: '20', LH18_5: '24.5', LH19: '25', LH20: '26', LH22: '28', LH25: '31', LH32: '38', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403073Y', CC: '32', CH: '7', CL: '44', LH14: '21', LH18_5: '25.5', LH19: '26', LH20: '27', LH22: '29', LH25: '32', LH32: '39', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403002Y', CC: '42', CH: '7', CL: '49', LH14: '21', LH18_5: '25.5', LH19: '26', LH20: '27', LH22: '29', LH25: '32', LH32: '39', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403004Y', CC: '43', CH: '10', CL: '48', LH14: '24', LH18_5: '28.5', LH19: '29', LH20: '30', LH22: '32', LH25: '35', LH32: '40', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403123Y', CC: '44', CH: '12', CL: '45', LH14: '26', LH18_5: '30.5', LH19: '31', LH20: '32', LH22: '34', LH25: '37', LH32: '44', LH18: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Tırnaksız Diller 4': {
    code: 'CC',
    name: 'Tırnaksız Diller 4',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/tirnaksizdil/tirnaksizdilurun4.png',
    versions: [
      { stokKodu: '30403135Y', CC: '03', CH: '0', CL: '51', LH18_5: '18.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403123Y', CC: '06', CH: '0', CL: '45', LH18_5: '18.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403001Y', CC: '01', CH: '7', CL: '49', LH18_5: '25.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403525Y', CC: '07', CH: '2', CL: '45', LH18_5: '20.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403527Y', CC: '08', CH: '3', CL: '45', LH18_5: '21.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403529Y', CC: '09', CH: '4', CL: '45', LH18_5: '22.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403531Y', CC: '100', CH: '5', CL: '45', LH18_5: '23.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403533Y', CC: '101', CH: '6', CL: '45', LH18_5: '24.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403535Y', CC: '102', CH: '7', CL: '45', LH18_5: '25.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403568Y', CC: '02', CH: '12', CL: '46', LH18_5: '30.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403537Y', CC: '103', CH: '14', CL: '45', LH18_5: '32.5', LH14: '', LH18: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Tırnaksız Diller 5': {
    code: 'CC',
    name: 'Tırnaksız Diller 5',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/tirnaksizdil/tirnaksizdilurun5.png',
    versions: [
      { stokKodu: '30402002Y', CC: '90', CH: '0', CL: '35', LH18_5: '18.5', LH20: '20', LH25: '25', LH14: '', LH18: '', LH19: '', LH21: '', LH22: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30402010Y', CC: '93', CH: '0', CL: '25', LH18_5: '18.5', LH20: '20', LH25: '25', LH14: '', LH18: '', LH19: '', LH21: '', LH22: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30402007Y', CC: '92', CH: '4', CL: '45', LH18_5: '22.5', LH20: '24', LH25: '29', LH14: '', LH18: '', LH19: '', LH21: '', LH22: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30402003Y', CC: '91', CH: '6', CL: '35', LH18_5: '24.5', LH20: '26', LH25: '31', LH14: '', LH18: '', LH19: '', LH21: '', LH22: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30402014Y', CC: '94', CH: '-4', CL: '45', LH18_5: '14.5', LH20: '16', LH25: '21', LH14: '', LH18: '', LH19: '', LH21: '', LH22: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Paslanmaz Çelik Diller (Tırnaklı)': {
    code: 'CC',
    name: 'Paslanmaz Çelik Diller (Tırnaklı)',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/paslanmaz/paslanmazcelikdiltirnakliurun.png',
    versions: [
      { stokKodu: '30405004Y', CC: '30', CH: '0', CL: '45', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '', LH22: '22', LH25: '', LH30: '30', LH32: '32', LH35: '', LH40: '40', LH50: '50', LH60: '60', LH14: '', LH19: '' },
      { stokKodu: '30405003Y', CC: '40', CH: '0', CL: '45', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '', LH22: '22', LH25: '', LH30: '30', LH32: '32', LH35: '', LH40: '40', LH50: '50', LH60: '60', LH14: '', LH19: '' },
      { stokKodu: '30405159Y', CC: '35', CH: '2', CL: '45', LH18: '20', LH18_5: '20.5', LH20: '22', LH21: '', LH22: '24', LH25: '', LH30: '32', LH32: '34', LH35: '', LH40: '42', LH50: '52', LH60: '62', LH14: '', LH19: '' },
      { stokKodu: '30405063Y', CC: '31', CH: '3', CL: '45', LH18: '21', LH18_5: '21.5', LH20: '23', LH21: '', LH22: '25', LH25: '', LH30: '33', LH32: '35', LH35: '', LH40: '43', LH50: '53', LH60: '63', LH14: '', LH19: '' },
      { stokKodu: '30405149Y', CC: '33', CH: '4', CL: '45', LH18: '22', LH18_5: '22.5', LH20: '24', LH21: '', LH22: '26', LH25: '', LH30: '34', LH32: '36', LH35: '', LH40: '44', LH50: '54', LH60: '64', LH14: '', LH19: '' },
      { stokKodu: '30405160Y', CC: '34', CH: '6', CL: '45', LH18: '24', LH18_5: '24.5', LH20: '26', LH21: '', LH22: '28', LH25: '', LH30: '36', LH32: '38', LH35: '', LH40: '46', LH50: '56', LH60: '66', LH14: '', LH19: '' },
      { stokKodu: '30405040Y', CC: '42', CH: '7', CL: '49', LH18: '25', LH18_5: '25.5', LH20: '27', LH21: '', LH22: '29', LH25: '', LH30: '37', LH32: '39', LH35: '', LH40: '47', LH50: '57', LH60: '67', LH14: '', LH19: '' },
      { stokKodu: '30405006Y', CC: '36', CH: '8', CL: '45', LH18: '26', LH18_5: '26.5', LH20: '28', LH21: '', LH22: '30', LH25: '', LH30: '38', LH32: '41', LH35: '', LH40: '48', LH50: '58', LH60: '68', LH14: '', LH19: '' },
      { stokKodu: '30405162Y', CC: '47', CH: '10', CL: '45', LH18: '28', LH18_5: '28.5', LH20: '30', LH21: '', LH22: '32', LH25: '', LH30: '40', LH32: '42', LH35: '', LH40: '50', LH50: '60', LH60: '70', LH14: '', LH19: '' },
      { stokKodu: '30405045Y', CC: '44', CH: '12', CL: '45', LH18: '30', LH18_5: '30.5', LH20: '32', LH21: '', LH22: '34', LH25: '', LH30: '42', LH32: '44', LH35: '', LH40: '52', LH50: '62', LH60: '72', LH14: '', LH19: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Paslanmaz Çelik Diller (Tırnaklı) 1': {
    code: 'CC',
    name: 'Paslanmaz Çelik Diller (Tırnaklı) 1',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/paslanmaz/paslanmazcelikdiltirnakliurun.png',
    versions: [
      { stokKodu: '30405004Y', CC: '30', CH: '0', CL: '45', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '', LH22: '22', LH25: '', LH30: '30', LH32: '32', LH35: '', LH40: '40', LH50: '50', LH60: '60', LH14: '', LH19: '' },
      { stokKodu: '30405003Y', CC: '40', CH: '0', CL: '45', LH18: '18', LH18_5: '18.5', LH20: '20', LH21: '', LH22: '22', LH25: '', LH30: '30', LH32: '32', LH35: '', LH40: '40', LH50: '50', LH60: '60', LH14: '', LH19: '' },
      { stokKodu: '30405159Y', CC: '35', CH: '2', CL: '45', LH18: '20', LH18_5: '20.5', LH20: '22', LH21: '', LH22: '24', LH25: '', LH30: '32', LH32: '34', LH35: '', LH40: '42', LH50: '52', LH60: '62', LH14: '', LH19: '' },
      { stokKodu: '30405063Y', CC: '31', CH: '3', CL: '45', LH18: '21', LH18_5: '21.5', LH20: '23', LH21: '', LH22: '25', LH25: '', LH30: '33', LH32: '35', LH35: '', LH40: '43', LH50: '53', LH60: '63', LH14: '', LH19: '' },
      { stokKodu: '30405149Y', CC: '33', CH: '4', CL: '45', LH18: '22', LH18_5: '22.5', LH20: '24', LH21: '', LH22: '26', LH25: '', LH30: '34', LH32: '36', LH35: '', LH40: '44', LH50: '54', LH60: '64', LH14: '', LH19: '' },
      { stokKodu: '30405160Y', CC: '34', CH: '6', CL: '45', LH18: '24', LH18_5: '24.5', LH20: '26', LH21: '', LH22: '28', LH25: '', LH30: '36', LH32: '38', LH35: '', LH40: '46', LH50: '56', LH60: '66', LH14: '', LH19: '' },
      { stokKodu: '30405040Y', CC: '42', CH: '7', CL: '49', LH18: '25', LH18_5: '25.5', LH20: '27', LH21: '', LH22: '29', LH25: '', LH30: '37', LH32: '39', LH35: '', LH40: '47', LH50: '57', LH60: '67', LH14: '', LH19: '' },
      { stokKodu: '30405006Y', CC: '36', CH: '8', CL: '45', LH18: '26', LH18_5: '26.5', LH20: '28', LH21: '', LH22: '30', LH25: '', LH30: '38', LH32: '41', LH35: '', LH40: '48', LH50: '58', LH60: '68', LH14: '', LH19: '' },
      { stokKodu: '30405162Y', CC: '47', CH: '10', CL: '45', LH18: '28', LH18_5: '28.5', LH20: '30', LH21: '', LH22: '32', LH25: '', LH30: '40', LH32: '42', LH35: '', LH40: '50', LH50: '60', LH60: '70', LH14: '', LH19: '' },
      { stokKodu: '30405045Y', CC: '44', CH: '12', CL: '45', LH18: '30', LH18_5: '30.5', LH20: '32', LH21: '', LH22: '34', LH25: '', LH30: '42', LH32: '44', LH35: '', LH40: '52', LH50: '62', LH60: '72', LH14: '', LH19: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Paslanmaz Çelik Diller (Tırnaksız)': {
    code: 'CC',
    name: 'Paslanmaz Çelik Diller (Tırnaksız)',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/paslanmaz/paslanmazcelikdiltirnaksizurun.png',
    versions: [
      { stokKodu: '30405117Y', CC: '30', CH: '0', CL: '45', LH18_5: '18.5', LH20: '20', LH22: '22', LH25: '25', LH32: '32', LH14: '', LH18: '', LH19: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405058Y', CC: '40', CH: '0', CL: '51', LH18_5: '18.5', LH20: '20', LH22: '22', LH25: '25', LH32: '32', LH14: '', LH18: '', LH19: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405012Y', CC: '35', CH: '2', CL: '45', LH18_5: '20.5', LH20: '22', LH22: '24', LH25: '27', LH32: '34', LH14: '', LH18: '', LH19: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405013Y', CC: '31', CH: '3', CL: '45', LH18_5: '21.5', LH20: '23', LH22: '25', LH25: '28', LH32: '35', LH14: '', LH18: '', LH19: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405015Y', CC: '34', CH: '4', CL: '45', LH18_5: '22.5', LH20: '24', LH22: '26', LH25: '29', LH32: '36', LH14: '', LH18: '', LH19: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405002Y', CC: '42', CH: '7', CL: '49', LH18_5: '25.5', LH20: '27', LH22: '29', LH25: '32', LH32: '39', LH14: '', LH18: '', LH19: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405016Y', CC: '36', CH: '8', CL: '45', LH18_5: '26.5', LH20: '28', LH22: '30', LH25: '33', LH32: '40', LH14: '', LH18: '', LH19: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405017Y', CC: '47', CH: '10', CL: '45', LH18_5: '28.5', LH20: '30', LH22: '32', LH25: '35', LH32: '42', LH14: '', LH18: '', LH19: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405018Y', CC: '44', CH: '12', CL: '45', LH18_5: '30.5', LH20: '32', LH22: '34', LH25: '37', LH32: '44', LH14: '', LH18: '', LH19: '', LH21: '', LH30: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Paslanmaz Çelik Diller (Tırnaklı) 2': {
    code: 'CC',
    name: 'Paslanmaz Çelik Diller (Tırnaklı) 2',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/paslanmaz/paslanmazcelikdiltirnakliurun2.png',
    versions: [
      { stokKodu: '30405084Y', CC: '10', CH: '0', CL: '33', LH13_5: '13.5', LH14: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405085Y', CC: '11', CH: '7', CL: '30', LH13_5: '20.5', LH14: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405184Y', CC: '20', CH: '0', CL: '25', LH13_5: '13.5', LH14: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30405196Y', CC: '22', CH: '-6', CL: '25', LH13_5: '7.5', LH14: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Diğer Diller 1': {
    code: 'CC',
    name: 'Diğer Diller 1',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/digerdiller/digerdiller1.png',
    versions: [
      { stokKodu: '30403124Y', CC: '50', CH: '0', CL: '43', LH16_5: '16.5', LH20: '20', LH25: '25', LH29: '29', LH30: '30', LH32: '32', LH13_5: '', LH14: '', LH18: '', LH18_5: '', LH19: '', LH21: '', LH22: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '31403010Y', CC: '56', CH: '0', CL: '23', LH16_5: '16.5', LH20: '20', LH25: '25', LH29: '29', LH30: '30', LH32: '32', LH13_5: '', LH14: '', LH18: '', LH18_5: '', LH19: '', LH21: '', LH22: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '31403011Y', CC: '30', CH: '0', CL: '33', LH16_5: '16.5', LH20: '20', LH25: '25', LH29: '29', LH30: '30', LH32: '32', LH13_5: '', LH14: '', LH18: '', LH18_5: '', LH19: '', LH21: '', LH22: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403157Y', CC: '57', CH: '3', CL: '48', LH16_5: '19.5', LH20: '23', LH25: '28', LH29: '32', LH30: '33', LH32: '35', LH13_5: '', LH14: '', LH18: '', LH18_5: '', LH19: '', LH21: '', LH22: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403125Y', CC: '51', CH: '7', CL: '40', LH16_5: '23.5', LH20: '27', LH25: '32', LH29: '36', LH30: '37', LH32: '39', LH13_5: '', LH14: '', LH18: '', LH18_5: '', LH19: '', LH21: '', LH22: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403110Y', CC: '52', CH: '10', CL: '37', LH16_5: '26.5', LH20: '30', LH25: '35', LH29: '39', LH30: '40', LH32: '42', LH13_5: '', LH14: '', LH18: '', LH18_5: '', LH19: '', LH21: '', LH22: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403111Y', CC: '53', CH: '14', CL: '33', LH16_5: '30.5', LH20: '34', LH25: '39', LH29: '43', LH30: '44', LH32: '46', LH13_5: '', LH14: '', LH18: '', LH18_5: '', LH19: '', LH21: '', LH22: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Diğer Diller 2': {
    code: 'CC',
    name: 'Diğer Diller 2',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/digerdiller/digerdiller2.png',
    versions: [
      { stokKodu: '30403014Y', CC: '10', CH: '0', CL: '38', LH16_5: '16.5', LH13_5: '', LH13: '', LH14: '', LH16: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403100Y', CC: '30', CH: '0', CL: '33', LH16_5: '16.5', LH13_5: '', LH13: '', LH14: '', LH16: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403019Y', CC: '20', CH: '0', CL: '49', LH16_5: '16.5', LH13_5: '', LH13: '', LH14: '', LH16: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403082Y', CC: '11', CH: '3', CL: '38', LH16_5: '19.5', LH13_5: '', LH13: '', LH14: '', LH16: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403015Y', CC: '12', CH: '7', CL: '36', LH16_5: '23.5', LH13_5: '', LH13: '', LH14: '', LH16: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403016Y', CC: '21', CH: '7', CL: '47', LH16_5: '23.5', LH13_5: '', LH13: '', LH14: '', LH16: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403017Y', CC: '22', CH: '10', CL: '44', LH16_5: '26.5', LH13_5: '', LH13: '', LH14: '', LH16: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403022Y', CC: '13', CH: '0', CL: '39', LH16_5: '16.5', LH13_5: '', LH13: '', LH14: '', LH16: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Diğer Diller 3': {
    code: 'CC',
    name: 'Diğer Diller 3',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/digerdiller/digerdiller3.png',
    versions: [
      { stokKodu: '30403084Y', CC: '10', CH: '0', CL: '33', LH13_5: '13.5', LH16: '16', LH13: '', LH14: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403184Y', CC: '20', CH: '0', CL: '25', LH13_5: '13.5', LH16: '16', LH13: '', LH14: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403183Y', CC: '21', CH: '6', CL: '25', LH13_5: '19.5', LH16: '22', LH13: '', LH14: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403085Y', CC: '11', CH: '7', CL: '30', LH13_5: '20.5', LH16: '23', LH13: '', LH14: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403196Y', CC: '22', CH: '-6', CL: '25', LH13_5: '7.5', LH16: '10', LH13: '', LH14: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  'CC > Diğer Diller 4': {
    code: 'CC',
    name: 'Diğer Diller 4',
    description: '',
    materials: {},
    productImage: '/dilleranahtarlar/diller/digerdiller/digerdiller4.png',
    versions: [
      { stokKodu: '30403158Y', CC: '10', CH: '0', CL: '24', LH13: '13', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '31403016Y', CC: '50', CH: '0', CL: '21', LH13: '13', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403029Y', CC: '20', CH: '0', CL: '31', LH13: '13', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403028Y', CC: '30', CH: '0', CL: '36', LH13: '13', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403089Y', CC: '21', CH: '3', CL: '30', LH13: '16', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403030Y', CC: '22', CH: '7', CL: '26', LH13: '20', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403058Y', CC: '40', CH: '0', CL: '31', LH13: '13', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
  },
  '320.02.180 > Geçme Dil Aparatı': {
    code: '320.02.180',
    name: 'Geçme Dil Aparatı',
    description: '• Kilitleme mesafesinde 2 mm\'lik bir kısalmaya neden olur, Dikkat ediniz',
    materials: {
      'Delrin': ''
    },
    productImage: '',
    versions: [],
    relatedProducts: [],
  },
  '30403485 > Kancalı Diller': {
    code: '30403485',
    name: 'Kancalı Diller',
    description: '',
    materials: {
      'Çelik': ''
    },
    surface: 'Çinko kaplama',
    productImage: '',
    versions: [
      { stokKodu: '30403485', CC: '485', CH: '0', CL: '55', LH13: '', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403516', CC: '516', CH: '0', CL: '55', LH13: '', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403672', CC: '672', CH: '-5', CL: '49', LH13: '', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
      { stokKodu: '30403712', CC: '712', CH: '0', CL: '32', LH13: '', LH13_5: '', LH14: '', LH16: '', LH16_5: '', LH18: '', LH18_5: '', LH19: '', LH20: '', LH21: '', LH22: '', LH25: '', LH29: '', LH30: '', LH32: '', LH35: '', LH40: '', LH50: '', LH60: '' },
    ],
    relatedProducts: [],
  },
  '30403499 > İspanyolet Dil Adaptörü': {
    code: '30403499',
    name: 'İspanyolet Dil Adaptörü',
    description: '',
    materials: {
      'Çelik': ''
    },
    surface: 'Çinko kaplama',
    productImage: '',
    versions: [
      { urunKodu: '30403495', urunAdi: 'Dil İspanyolet Adaptörü', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
      { urunKodu: '30403496', urunAdi: 'Dil İspanyolet Adaptörü', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
      { urunKodu: '30403499', urunAdi: 'Dil İspanyolet Adaptörü', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
      { urunKodu: '30403563', urunAdi: 'Dil İspanyolet Adaptörü', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
      { urunKodu: '30403632', urunAdi: 'Dil İspanyolet Adaptörü', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
    ],
    relatedProducts: [],
  },
  'IC > İspanyolet Çubuklar 1': {
    code: 'IC',
    name: 'İspanyolet Çubuklar 1',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler\n• İspanyolet dilli kilitler.'
    },
    materials: {
      'Malzeme': '• Çelik\n• Çinko Kaplama'
    },
    versions: [
      { Lmm: '400', urunKodu: 'IC 1-400' },
      { Lmm: '500', urunKodu: 'IC 1-500' },
      { Lmm: '600', urunKodu: 'IC 1-600' },
      { Lmm: '700', urunKodu: 'IC 1-700' },
      { Lmm: '800', urunKodu: 'IC 1-800' },
      { Lmm: '900', urunKodu: 'IC 1-900' },
      { Lmm: '1000', urunKodu: 'IC 1-1000' },
    ],
    relatedProducts: [],
  },
  'IC > İspanyolet Çubuklar 2': {
    code: 'IC',
    name: 'İspanyolet Çubuklar 2',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler\n• İspanyolet dilli kilitler.'
    },
    materials: {
      'Malzeme': '• Çelik\n• Çinko Kaplama'
    },
    versions: [
      { Lmm: '400', urunKodu: 'IC 2 - 400' },
      { Lmm: '500', urunKodu: 'IC 2 - 500' },
      { Lmm: '600', urunKodu: 'IC 2 - 600' },
      { Lmm: '700', urunKodu: 'IC 2 - 700' },
      { Lmm: '800', urunKodu: 'IC 2 - 800' },
      { Lmm: '900', urunKodu: 'IC 2 - 900' },
      { Lmm: '1000', urunKodu: 'IC 2 - 1000' },
    ],
    relatedProducts: [],
  },
  'IC > İspanyolet Çubuk 3': {
    code: 'IC',
    name: 'İspanyolet Çubuk 3',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet dilli kilitler.'
    },
    materials: {
      'Malzeme': '• Çelik\n• Çinko Kaplama'
    },
    versions: [
      { Lmm: '400', urunKodu: 'IC 3 - 400' },
      { Lmm: '500', urunKodu: 'IC 3 - 500' },
      { Lmm: '600', urunKodu: 'IC 3 - 600' },
      { Lmm: '700', urunKodu: 'IC 3 - 700' },
      { Lmm: '800', urunKodu: 'IC 3 - 800' },
      { Lmm: '900', urunKodu: 'IC 3 - 900' },
      { Lmm: '1000', urunKodu: 'IC 3 - 1000' },
    ],
    relatedProducts: [],
  },
  'IC > İspanyolet Çubuklar 4': {
    code: 'IC',
    name: 'İspanyolet Çubuklar 4',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler'
    },
    materials: {
      'Malzeme': '• Çelik\n• Çinko Kaplama'
    },
    versions: [
      { Lmm: '400', urunKodu: 'IC 4 - 400' },
      { Lmm: '500', urunKodu: 'IC 4 - 500' },
      { Lmm: '600', urunKodu: 'IC 4 - 600' },
      { Lmm: '700', urunKodu: 'IC 4 - 700' },
      { Lmm: '800', urunKodu: 'IC 4 - 800' },
      { Lmm: '900', urunKodu: 'IC 4 - 900' },
      { Lmm: '1000', urunKodu: 'IC 4 - 1000' },
    ],
    relatedProducts: [],
  },
  'IC > İspanyolet Çubuklar 5': {
    code: 'IC',
    name: 'İspanyolet Çubuklar 5',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler.\n• İspanyolet dilli kilitler.'
    },
    materials: {
      'Malzeme': '• Çelik\n• Çinko Kaplama'
    },
    versions: [
      { Lmm: '400', urunKodu: 'IC 5 - 400' },
      { Lmm: '500', urunKodu: 'IC 5 - 500' },
      { Lmm: '600', urunKodu: 'IC 5 - 600' },
      { Lmm: '700', urunKodu: 'IC 5 - 700' },
      { Lmm: '800', urunKodu: 'IC 5 - 800' },
      { Lmm: '900', urunKodu: 'IC 5 - 900' },
      { Lmm: '1000', urunKodu: 'IC 5 - 1000' },
    ],
    relatedProducts: [],
  },
  'IC > İspanyolet Çubuklar 6': {
    code: 'IC',
    name: 'İspanyolet Çubuklar 6',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler\n• İspanyolet dilli kilitler.'
    },
    materials: {
      'Malzeme': '• Çelik\n• Çinko Kaplama'
    },
    versions: [
      { Lmm: '400', urunKodu: 'IC 6 - 400', cad3d: '' },
      { Lmm: '500', urunKodu: 'IC 6 - 500', cad3d: '' },
      { Lmm: '600', urunKodu: 'IC 6 - 600', cad3d: '' },
      { Lmm: '700', urunKodu: 'IC 6 - 700', cad3d: '' },
      { Lmm: '800', urunKodu: 'IC 6 - 800', cad3d: '' },
      { Lmm: '900', urunKodu: 'IC 6 - 900', cad3d: '' },
      { Lmm: '1000', urunKodu: 'IC 6 - 1000', cad3d: '' },
    ],
    relatedProducts: [],
  },
  'CT1 > Çubuk Tutucu': {
    code: 'CT1',
    name: 'Çubuk Tutucu',
    description: '',
    materials: {
      'Malzeme': '• Zamak DIN-EN 1774-ZnAl4Cu1\n• Paslanmaz çelik'
    },
    surface: 'Çinko kaplama',
    versions: [
      { urunKodu: 'CT113', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: 'CT140', malzeme: 'Paslanmaz Çelik', yuzey: 'Kaplamasız' },
    ],
    relatedProducts: [],
  },
  'CT2 > Çubuk Tutucu': {
    code: 'CT2',
    name: 'Çubuk Tutucu',
    description: '',
    materials: {
      'Malzeme': '• Zamak DIN-EN 1774-ZnAl4Cu1'
    },
    surface: 'Çinko kaplama',
    versions: [
      { urunKodu: 'CT2', malzeme: 'Zamak', yuzey: 'Çinko Kaplama' },
    ],
    relatedProducts: [],
  },
  'IL > İspanyolet Lamalar 1': {
    code: 'IL',
    name: 'İspanyolet Lamalar 1',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler'
    },
    materials: {
      'Malzeme': '• Çelik\n• Çinko Kaplama'
    },
    versions: [
      { Hmm: '27', Lmm: '1020', urunKodu: 'IL 1 - 27 - 1020' },
      { Hmm: '13', Lmm: '1020', urunKodu: 'IL 1 - 13 - 1020' },
    ],
    relatedProducts: [],
  },
  'IL > İspanyolet Lamalar 2': {
    code: 'IL',
    name: 'İspanyolet Lamalar 2',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler'
    },
    materials: {
      'Malzeme': '• Çelik\n• Çinko Kaplama'
    },
    versions: [
      { Hmm: '21', Lmm: '1020', urunKodu: 'IL 2 - 21 - 1020' },
      { Hmm: '16', Lmm: '1020', urunKodu: 'IL 2 - 16 - 1020' },
    ],
    relatedProducts: [],
  },
  'IL > İspanyolet Lamalar 3': {
    code: 'IL',
    name: 'İspanyolet Lamalar 3',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler'
    },
    materials: {
      'Malzeme': '• Çelik\n• Çinko Kaplama'
    },
    versions: [
      { Xmm: '21 - 600', urunKodu: 'IL 3 - 21 - 600' },
      { Xmm: '21 - 500', urunKodu: 'IL 3 - 21 - 500' },
      { Xmm: '21 - 700', urunKodu: 'IL 3 - 21 - 700' },
    ],
    relatedProducts: [],
  },
  'IL > İspanyolet Lamalar 4': {
    code: 'IL',
    name: 'İspanyolet Lamalar 4',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler'
    },
    materials: {
      'Malzeme': '• Çelik\n• Çinko Kaplama'
    },
    versions: [],
    relatedProducts: [],
  },
  'ILP > Çok Noktadan Kitleyici Lama 1': {
    code: 'ILP',
    name: 'Çok Noktadan Kitleyici Lama 1',
    description: '',
    materials: {
      'Malzeme': 'Çelik'
    },
    surface: 'Çinko kaplama',
    versions: [
      { Xmm: 'ILP 1 - 575', urunKodu: 'ILP 1 - 575' },
    ],
    relatedProducts: [],
  },
  'ILP > Çok Noktadan Kitleyici Lama 2': {
    code: 'ILP',
    name: 'Çok Noktadan Kitleyici Lama 2',
    description: '',
    materials: {
      'Malzeme': 'Çelik'
    },
    surface: 'Çinko kaplama',
    versions: [
      { Xmm: '250', urunKodu: 'ILP.2.250' },
      { Xmm: '300', urunKodu: 'ILP.2.300' },
      { Xmm: '350', urunKodu: 'ILP.2.350' },
      { Xmm: '400', urunKodu: 'ILP.2.400' },
      { Xmm: '450', urunKodu: 'ILP.2.450' },
      { Xmm: '500', urunKodu: 'ILP.2.500' },
    ],
    relatedProducts: [],
  },
  'LKY1 > Lama Kitleyici Yatağı': {
    code: 'LKY1',
    name: 'Lama Kitleyici Yatağı',
    description: '',
    versions: [
      { urunKodu: 'LKY120', malzeme: 'Plastik', yuzey: 'Kaplamasız' },
      { urunKodu: 'LKY113', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: 'LKY112', malzeme: 'Zamak', yuzey: 'Siyah Boya' },
      { urunKodu: 'LKY140', malzeme: 'Paslanmaz Çelik', yuzey: 'Kaplamasız' },
    ],
    relatedProducts: [],
  },
  'LKY2 > Lama Kitleyici Yatağı': {
    code: 'LKY2',
    name: 'Lama Kitleyici Yatağı',
    description: '',
    versions: [
      { urunKodu: 'LKY263', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
      { urunKodu: 'LKY240', malzeme: 'Paslanmaz Çelik', yuzey: 'Kaplamasız' },
    ],
    relatedProducts: [],
  },
  'LY1 > Lama Yatağı': {
    code: 'LY1',
    name: 'Lama Yatağı',
    description: '',
    versions: [
      { urunKodu: 'LY120', malzeme: 'Plastik', yuzey: 'Kaplamasız' },
      { urunKodu: 'LY140', malzeme: 'Paslanmaz Çelik', yuzey: 'Kaplamasız' },
    ],
    relatedProducts: [],
  },
  'LY2 > Lama Yatağı': {
    code: 'LY2',
    name: 'Lama Yatağı',
    description: '',
    materials: {
      'Malzeme': 'Polyamide PA6 GFR 30'
    },
    versions: [
      { urunKodu: 'LY2', malzeme: 'Polyamide PA6 GFR 30', yuzey: 'Siyah' },
    ],
    relatedProducts: [],
  },
  'LY3 > Lama Yatağı (Kolay Montoj)': {
    code: 'LY3',
    name: 'Lama Yatağı (Kolay Montoj)',
    description: '',
    materials: {
      'Malzeme': 'Polyamide PA6 GFR 30'
    },
    versions: [
      { urunKodu: 'LY3', malzeme: 'Polyamide PA6 GFR 30', yuzey: 'Siyah' },
    ],
    relatedProducts: [],
  },
  'LY40 > Lama Yatağı': {
    code: 'LY40',
    name: 'Lama Yatağı',
    description: '',
    materials: {
      'Malzeme': 'Paslanmaz Çelik'
    },
    versions: [
      { urunKodu: 'LY40', malzeme: 'Paslanmaz Çelik', yuzey: 'Kaplamasız', cad3d: '' },
    ],
    relatedProducts: [],
  },
  'RCC > Köşe Bağlantı': {
    code: 'RCC',
    name: 'Köşe Bağlantı',
    description: '• Çubukların dikey ve yatay hareketini sağlar.\n• 8 noktadan kilitleme için kullanılır.',
    materials: {
      'GÖVDE': 'Polyamide PA6 GFR 30',
      'ÇUBUK TUTUCU': 'Zamak DIN-EN 1774-ZnAl4Cu1'
    },
    versions: [
      { urunKodu: 'RCC', malzeme: 'Zamak', yuzey: 'Polyamide' },
    ],
    relatedProducts: [],
  },
  'LKY3 > Lama Kilitleyici Yatağı': {
    code: 'LKY3',
    name: 'Lama Kilitleyici Yatağı',
    description: '',
    materials: {
      'Malzeme': 'Zamak DIN-EN 1774-ZnAl4Cu1'
    },
    surface: 'Çinko kaplama',
    versions: [
      { urunKodu: 'LKY3', urunAdi: 'Lama Kilitleyici Yatağı', malzeme: 'Zamak', yuzey: 'Çinko Kaplama' },
    ],
    relatedProducts: [],
  },
  'CY1 > Çubuk Yatağı': {
    code: 'CY1',
    name: 'Çubuk Yatağı',
    description: '',
    materials: {
      'Malzeme': '• Polyamide PA6 GFR 30'
    },
    versions: [
      { urunKodu: 'CY120', baglantiCivatasi: 'M6 x 16', H1: '20', H2: '12', H3: '32' },
      { urunKodu: 'CY124', baglantiCivatasi: 'M6 x 20', H1: '24', H2: '16', H3: '36' },
      { urunKodu: 'CY126', baglantiCivatasi: 'M6 x 22', H1: '26', H2: '18', H3: '38' },
    ],
    relatedProducts: [],
  },
  'CY2 > Çubuk Yatağı': {
    code: 'CY2',
    name: 'Çubuk Yatağı',
    description: '',
    materials: {
      'Malzeme': '• Delrin'
    },
    versions: [
      { urunKodu: 'CY2', malzeme: 'Delrin', yuzey: 'Beyaz' },
    ],
    relatedProducts: [],
  },
  'IC > Paslanmaz Çelik İspanyolet Çubuk 1': {
    code: 'IC',
    name: 'Paslanmaz Çelik İspanyolet Çubuk 1',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler.\n• İspanyolet dilli kilitler.'
    },
    accessories: {
      'Aksesuarlar': '• Çubuk yatağı (CY)'
    },
    versions: [
      { Lmm: '400', urunKodu: 'IC 4-0-1-400' },
      { Lmm: '500', urunKodu: 'IC 4-0-1-500' },
      { Lmm: '600', urunKodu: 'IC 4-0-1-600' },
      { Lmm: '700', urunKodu: 'IC 4-0-1-700' },
      { Lmm: '800', urunKodu: 'IC 4-0-1-800' },
      { Lmm: '900', urunKodu: 'IC 4-0-1-900' },
      { Lmm: '1000', urunKodu: 'IC 4-0-1-1000' },
    ],
    relatedProducts: [],
  },
  'IC > Paslanmaz Çelik İspanyolet Çubuk 2': {
    code: 'IC',
    name: 'Paslanmaz Çelik İspanyolet Çubuk 2',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler\n• İspanyolet dilli kilitler.'
    },
    accessories: {
      'Aksesuarlar': '• Çubuk yatağı (CY)\n• Çubuk tutucu (CT)'
    },
    versions: [
      { Lmm: '400', urunKodu: 'IC 4-0-2-400' },
      { Lmm: '500', urunKodu: 'IC 4-0-2-500' },
      { Lmm: '600', urunKodu: 'IC 4-0-2-600' },
      { Lmm: '700', urunKodu: 'IC 4-0-2-700' },
      { Lmm: '800', urunKodu: 'IC 4-0-2-800' },
      { Lmm: '900', urunKodu: 'IC 4-0-2-900' },
      { Lmm: '1000', urunKodu: 'IC 4-0-2-1000' },
    ],
    relatedProducts: [],
  },
  'IC > Paslanmaz Çelik İspanyolet Çubuk 3': {
    code: 'IC',
    name: 'Paslanmaz Çelik İspanyolet Çubuk 3',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet dilli kilitler.'
    },
    accessories: {
      'Aksesuarlar': '• Çubuk yatağı (CY)'
    },
    versions: [
      { Lmm: '400', urunKodu: 'IC 4-0-3-400' },
      { Lmm: '500', urunKodu: 'IC 4-0-3-500' },
      { Lmm: '600', urunKodu: 'IC 4-0-3-600' },
      { Lmm: '700', urunKodu: 'IC 4-0-3-700' },
      { Lmm: '800', urunKodu: 'IC 4-0-3-800' },
      { Lmm: '900', urunKodu: 'IC 4-0-3-900' },
      { Lmm: '1000', urunKodu: 'IC 4-0-3-1000' },
    ],
    relatedProducts: [],
  },
  'IC > Paslanmaz Çelik İspanyolet Çubuk 4': {
    code: 'IC',
    name: 'Paslanmaz Çelik İspanyolet Çubuk 4',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler.'
    },
    accessories: {
      'Aksesuarlar': '• Çubuk yatağı (CY)'
    },
    versions: [
      { Lmm: '400', urunKodu: 'IC 4-0-4-400' },
      { Lmm: '500', urunKodu: 'IC 4-0-4-500' },
      { Lmm: '600', urunKodu: 'IC 4-0-4-600' },
      { Lmm: '700', urunKodu: 'IC 4-0-4-700' },
      { Lmm: '800', urunKodu: 'IC 4-0-4-800' },
      { Lmm: '900', urunKodu: 'IC 4-0-4-900' },
      { Lmm: '1000', urunKodu: 'IC 4-0-4-1000' },
    ],
    relatedProducts: [],
  },
  'IL > Paslanmaz Çelik İspanyolet Lama 1': {
    code: 'IL',
    name: 'Paslanmaz Çelik İspanyolet Lama 1',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler.'
    },
    accessories: {
      'Aksesuarlar': '• Lama yatağı (LY)'
    },
    versions: [
      { Hmm: '27', Lmm: '1020', urunKodu: 'IL 4-0-1-27-1020' },
      { Hmm: '13', Lmm: '1020', urunKodu: 'IL 4-0-1-13-1020' },
    ],
    relatedProducts: [],
  },
  'IL > Paslanmaz Çelik İspanyolet Lama 2': {
    code: 'IL',
    name: 'Paslanmaz Çelik İspanyolet Lama 2',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler.'
    },
    accessories: {
      'Aksesuarlar': '• Lama yatağı (LY)'
    },
    versions: [
      { Hmm: '16', Lmm: '1020', urunKodu: 'IL 4-0-2-16-1020' },
      { Hmm: '21', Lmm: '1020', urunKodu: 'IL 4-0-2-21-1020' },
    ],
    relatedProducts: [],
  },
  'ILP > Paslanmaz Çelik Çok Noktadan Kitleyici Lama': {
    code: 'ILP',
    name: 'Paslanmaz Çelik Çok Noktadan Kitleyici Lama',
    description: '',
    applicationArea: {
      'Uygulama Alanı': '• İspanyolet mekanizmalı kilitler.'
    },
    accessories: {
      'Aksesuarlar': '• Lama yatağı (LY)\n• Lama kilitleyici yatağı (LKY)'
    },
    versions: [
      { Xmm: '575', urunKodu: 'ILP 4-0-1-575' },
    ],
    relatedProducts: [],
  },
  '369 > Metal Anahtarlar': {
    code: '369',
    name: 'Metal Anahtarlar',
    description: '',
    versions: [
      { urunKodu: '36911', gobekCesidi: 'Tüp Anahtar', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36912', gobekCesidi: 'Tüp Anahtar', malzeme: 'Zamak', yuzey: 'Siyah Boya' },
      { urunKodu: '46911', gobekCesidi: 'Tüp Anahtar', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '46912', gobekCesidi: 'Tüp Anahtar', malzeme: 'Zamak', yuzey: 'Siyah Boya' },
    ],
    relatedProducts: [],
  },
  '568 > Çoklu Anahtarlar (Metal)': {
    code: '568',
    name: 'Çoklu Anahtarlar (Metal)',
    description: '',
    versions: [
      { urunKodu: '56813', gobekCesidi: '5mm Çentikli, 8mm Kare, Demiryolu', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
    ],
    relatedProducts: [],
  },
  '569 > Çoklu Anahtarlar (Metal)': {
    code: '569',
    name: 'Çoklu Anahtarlar (Metal)',
    description: '',
    versions: [
      { urunKodu: '56913', gobekCesidi: '8mm Kare, Demiryolu', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
    ],
    relatedProducts: [],
  },
  '668 > Çoklu Anahtar (Metal)': {
    code: '668',
    name: 'Çoklu Anahtar (Metal)',
    description: '',
    versions: [
      { urunKodu: '66811', gobekCesidi: '5mm Çentikli, 6mm Altıgen, 8mm Kare, 9mm Üçgen', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '66812', gobekCesidi: '5mm Çentikli, 6mm Altıgen, 8mm Kare, 9mm Üçgen', malzeme: 'Zamak', yuzey: 'Siyah Boya' },
    ],
    relatedProducts: [],
  },
  '669 > Plastik Anahtarlar': {
    code: '669',
    name: 'Plastik Anahtarlar',
    description: '',
    versions: [
      { urunKodu: '66966', gobekCesidi: '6mm Altıgen', malzeme: 'Plastik', yuzey: 'Siyah' },
      { urunKodu: '66915', gobekCesidi: '5mm Çentikli', malzeme: 'Plastik', yuzey: 'Siyah' },
      { urunKodu: '66928', gobekCesidi: '8mm Kare', malzeme: 'Plastik', yuzey: 'Siyah' },
      { urunKodu: '66939', gobekCesidi: '9mm Üçgen', malzeme: 'Plastik', yuzey: 'Siyah' },
      { urunKodu: '26915', gobekCesidi: '5mm Çentikli', malzeme: 'Plastik', yuzey: 'Siyah' },
      { urunKodu: '66993', gobekCesidi: 'Tüp Anahtar', malzeme: 'Plastik', yuzey: 'Siyah' },
      { urunKodu: '76993', gobekCesidi: 'Tüp Anahtar', malzeme: 'Plastik', yuzey: 'Siyah' },
    ],
    relatedProducts: [],
  },
  '267 > Metal Anahtarlar (Kısa)': {
    code: '267',
    name: 'Metal Anahtarlar (Kısa)',
    description: '',
    versions: [
      { urunKodu: '26713', gobekCesidi: '3mm Çentikli', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '26715', gobekCesidi: '5mm Çentikli', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '26726', gobekCesidi: '6mm Kare', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '26727', gobekCesidi: '7mm Kare', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '26728', gobekCesidi: '8mm Kare', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '26737', gobekCesidi: '7mm Üçgen', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '26738', gobekCesidi: '8mm Üçgen', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '26739', gobekCesidi: '9mm Üçgen', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
    ],
    relatedProducts: [],
  },
  '368 > Metal Anahtarlar (Uzun)': {
    code: '368',
    name: 'Metal Anahtarlar (Uzun)',
    description: '',
    versions: [
      { urunKodu: '36813', gobekCesidi: '3mm Çentikli', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36815', gobekCesidi: '5mm Çentikli', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36826', gobekCesidi: '6mm Kare', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36827', gobekCesidi: '7mm Kare', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36828', gobekCesidi: '8mm Kare', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36896', gobekCesidi: 'Ebr', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36837', gobekCesidi: '8mm Üçgen', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36838', gobekCesidi: '8mm Üçgen', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36839', gobekCesidi: '9mm Üçgen', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36891', gobekCesidi: 'Ay Parçası', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
      { urunKodu: '36868', gobekCesidi: '8mm Altıgen Dişi', malzeme: 'Zamak', yuzey: 'Krom Kaplama' },
    ],
    relatedProducts: [],
  },
  '040 > Sıkıştırmalı Kilit v1': {
    code: '040',
    name: 'Sıkıştırmalı Kilit v1',
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 6 mm sıkıştırma özelliği vardır.\n• Ses yalıtımı sağlar.\n• Farklı göbek seçenekleri mevcuttur.\n• Standart tırnaksız diller uygulanır.\n• Demiryolu uygulamarı için DIN EN 61373 Kategori 1-B standardına göre darbe ve titreşime karşı test edilmiştir.\n• Çalışma sıcaklık aralığı: -50 /+80 C\n• M22 somun 60 Nm ile sıkılmalı\n• M10 somun 10 Nm ile sıkılmalı\n• Titreşim ve darbeye karşı ekstra sıkılık elde etmek için somunun dişlerine özel yapıştırıcı uygulanmaktadır.\n• Max taşıma kapasitesi: 562 N',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '040 > Sıkıştırmalı Kilit v2': {
    code: '040',
    name: 'Sıkıştırmalı Kilit v2',
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 6 mm sıkıştırma özelliği vardır.\n• Uzun mafsalı sayesinde geniş bir kilitleme aralığı mevcuttur.\n• Ses yalıtımı sağlar.\n• Farklı göbek seçenekleri mevcuttur.\n• 3 farklı tip dil uygulanır.\n• Demiryolu uygulamarı için DIN EN 61373 Kategori 1-B standardına göre darbe ve titreşime karşı test edilmiştir.\n• Çalışma sıcaklık aralığı: -50 /+80 C\n• M22 somun 60 Nm ile sıkılmalı\n• M10 somun 10 Nm ile sıkılmalı\n• Titreşim ve darbeye karşı ekstra sıkılık elde etmek için somunun dişlerine özel yapıştırıcı uygulanmaktadır.\n• Max taşıma kapasitesi: 562 N',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '640 > Sıkıştırmalı Kilit v1': {
    code: '640',
    name: 'Sıkıştırmalı Kilit v1',
    description: '• Titreşime maruz kalan sızdırmazlık gereken kabinlerde kullanılır.\n• IP66 Sızdırmazlık Seviyesi\n• 4 mm sıkıştırma özelliği sağlar\n• Ses yalıtımı sağlar\n• Farklı göbek seçenekleri mevcuttur.\n• Standart tırnaksız diller uygulanır.\n• Çalışma sıcaklık aralığı -50/+80°C\n• M22 Somun 15 Nm ile sıkılmalı\n• Titresşim ve darbeye karşı ekstra sıkılık elde etmek için somunun dişlerine özel yapıştırıcı uygulanmakatadır.\n• Maksimum taşıma kapasitesi 1000 N',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '640 > Sıkıştırmalı Kilit v2': {
    code: '640',
    name: 'Sıkıştırmalı Kilit v2',
    description: '• Titreşime maruz kalan sızdırmazlık gereken kabinlerde kullanılır.\n• IP66 Sızdırmazlık Seviyesi\n• 4 mm sıkıştırma özelliği sağlar\n• Ses yalıtımı sağlar\n• Farklı göbek seçenekleri mevcuttur.\n• 3 farklı tip dil uygulanır.\n• Çalışma sıcaklık aralığı -50/+80°C\n• M22 Somun 15 Nm ile sıkılmalı\n• Titresşim ve darbeye karşı ekstra sıkılık elde etmek için somunun dişlerine özel yapıştırıcı uygulanmakatadır.\n• Maksimum taşıma kapasitesi 1000 N\n• Demiryolu uygulamaları için DIN EN 61373 Kategori 1-B standardına göre darbe ve titreşime karşı test edilmiştir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '140 > Mini Sıkıştırmalı Kilit': {
    code: '140',
    name: 'Mini Sıkıştırmalı Kilit',
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 4 mm sıkıştırma özelliği vardır.\n• Farklı göbek seçenekleri mevcuttur.\n• 9 farklı tip dil uygulanır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '045 > Sıkıştırmalı Kilit': {
    code: '045',
    name: 'Sıkıştırmalı Kilit',
    description: '• Küçük panoların kolay ve hızlı kilitlenip ve açılması mümkündür.\n• Sıkıştırarak kilitleme özelliği mevcuttur.',
    materials: {
      'GÖVDE': 'Çelik',
      'GÖBEK': 'Çelik',
      'YAY': 'Paslanmaz çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '560 > Çeyrek Dönüşlü Segmanlı Kilit': {
    code: '560',
    name: 'Çeyrek Dönüşlü Segmanlı Kilit',
    description: '• Segman sayesinde kolay montaj sağlar.\n• Montaj için somun gerekmez.\n• Özel tasarlanmış yay sayesinde 1.5 mm lik yaylanma sağlayarak kapaklardaki boşluğu alır.\n• Özel renkler için Mesan ile iletişime geçiniz.',
    materials: {
      'KOVAN': 'PA6 GFR 30',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
    },
    versions: [],
    relatedProducts: [],
  },
  '660 > Çeyrek Dönüşlü Klipsli Kilit': {
    code: '660',
    name: 'Çeyrek Dönüşlü Klipsli Kilit',
    description: '• Klipsleri sayesinde kolay montaj sağlar.\n• Montaj için somun gerekmez.\n• Özel tasarlanmış yay sayesinde 1.5 mm lik yaylanma sağlayarak kapaklardaki boşluğu alır.\n• 0.8 mm minimum - 1.5 mm maximum sac kalınlığında kullanılır.\n• Özel renkler için Mesan ile iletişime geçiniz.',
    materials: {
      'KOVAN': 'PA6 GFR 30',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
    },
    versions: [],
    relatedProducts: [],
  },
  '661 > Çeyrek Dönüşlü Kilit Kolay Montaj': {
    code: '661',
    name: 'Çeyrek Dönüşlü Kilit Kolay Montaj',
    description: '• Kolay montaj - aletsiz\n• Standart geçiş ölçüsü\n• Maksimum 2.0 mm kalınlığındaki panolara montaj olur.',
    materials: {
      'KOVAN': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'GÖBEK': 'PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '761 > Çeyrek Dönüşlü Kilit Kolay Montaj': {
    code: '761',
    name: 'Çeyrek Dönüşlü Kilit Kolay Montaj',
    description: '• Plastik segman ile alet kullanmadan hızlı montaj yapılır.\n• Farklı pano kapı kalınlıkarına uygulanabilir.\n• Plastik ve zamak tüm göbek seçenekleri mevcuttur.',
    materials: {
      'KOVAN': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'GÖBEK': 'Plastik veya zamak',
      'DİL': 'Plastik veya çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '366 > Mini Çeyrek Dönüşlü Klipsli Kilit': {
    code: '366',
    name: 'Mini Çeyrek Dönüşlü Klipsli Kilit',
    description: '• Klipsleri sayesinde kolay montaj sağlar.\n• Özel yay uygulaması sayesinde 1 mm\' lik sıkıştırma sağlar.',
    materials: {
      'KOVAN': 'PA6 GFR 30',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '566 > Mini Dönüşlü Klipsli Kilit': {
    code: '566',
    name: 'Mini Dönüşlü Klipsli Kilit',
    description: '• Klipsleri sayeysinde kolay montaj sağlar.\n• Özel yay uygulaması sayesinde 1 mm\' lik sıkıştırma sağlar.',
    materials: {
      'KOVAN': 'PA6 GFR 30',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  'AA > Kovan, Somun, Rondela, Yay, Civata, Oring': {
    code: 'AA',
    name: 'Kovan, Somun, Rondela, Yay, Civata, Oring',
    description: '',
    materials: {},
    versions: [
      { urunAdi: 'Kovan', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30301019Y' },
      { urunAdi: 'Kovan', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30301035Y' },
      { urunAdi: 'Kovan', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30301226Y' },
      { urunAdi: 'Kovan', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30301283Y' },
      { urunAdi: 'Kovan', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30302061Y' },
      { urunAdi: 'Somun', malzeme: 'Zamak', yuzey: 'Kaplamasız', urunKodu: '20501015Y' },
      { urunAdi: 'Somun', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30502002Y' },
      { urunAdi: 'Rondela', malzeme: 'Plastik', yuzey: 'Siyah', urunKodu: '30802021Y' },
      { urunAdi: 'Yay', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', urunKodu: '30703001Y' },
      { urunAdi: 'Civata (6x10 Kombi)', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', urunKodu: '30603002Y' },
      { urunAdi: 'Civata (5x11 RYSB)', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', urunKodu: '30603055Y' },
      { urunAdi: '0\'Ring (IP 65)', malzeme: 'Plastik', yuzey: 'Siyah', urunKodu: '30802002Y' },
    ],
    relatedProducts: [],
  },
  'DD > Göbekler': {
    code: 'DD',
    name: 'Göbekler',
    description: '',
    materials: {},
    versions: [
      { gobek: '3 mm Çentikli', gobekNo: '13', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101127Y' },
      { gobek: '3 mm Çentikli', gobekNo: '13', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101126Y' },
      { gobek: '3 mm Çentikli', gobekNo: '13', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30102012Y' },
      { gobek: '5 mm Çentikli', gobekNo: '15', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101099Y' },
      { gobek: '5 mm Çentikli', gobekNo: '15', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101125Y' },
      { gobek: '5 mm Çentikli', gobekNo: '15', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30102001Y' },
      { gobek: '8 mm Kare', gobekNo: '28', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101113Y' },
      { gobek: '8 mm Kare', gobekNo: '28', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101065Y' },
      { gobek: '8 mm Kare', gobekNo: '28', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30102011Y' },
      { gobek: '6 mm Kare', gobekNo: '26', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101058Y' },
      { gobek: '6 mm Kare', gobekNo: '26', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101139Y' },
      { gobek: '6 mm Kare', gobekNo: '26', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30102009Y' },
      { gobek: '7 mm Kare', gobekNo: '27', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101039Y' },
      { gobek: '7 mm Kare', gobekNo: '27', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101138Y' },
      { gobek: '7 mm Kare', gobekNo: '27', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30102010Y' },
      { gobek: '9 mm Üçgen', gobekNo: '39', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101066Y' },
      { gobek: '9 mm Üçgen', gobekNo: '39', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101140Y' },
      { gobek: '9 mm Üçgen', gobekNo: '39', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30102007Y' },
      { gobek: '7 mm Üçgen', gobekNo: '37', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101124Y' },
      { gobek: '7 mm Üçgen', gobekNo: '37', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101120Y' },
      { gobek: '7 mm Üçgen', gobekNo: '37', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30102008Y' },
      { gobek: '8 mm Üçgen', gobekNo: '38', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101114Y' },
      { gobek: '8 mm Üçgen', gobekNo: '38', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101064Y' },
      { gobek: '8 mm Üçgen', gobekNo: '38', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30102006Y' },
      { gobek: 'Para açmaz', gobekNo: '42', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101146Y' },
      { gobek: 'Para açmaz', gobekNo: '42', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101149Y' },
      { gobek: 'Para açmaz', gobekNo: '42', malzeme: 'Plastik', yuzey: 'Kaplamasız', urunKodu: '30102005Y' },
      { gobek: 'Para Açmaz (2x4)', gobekNo: '52', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101146Y' },
      { gobek: 'Para Açmaz (2x4)', gobekNo: '52', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101149Y' },
      { gobek: 'Tornavida başlı 8 mm kare', gobekNo: '58', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101175Y' },
      { gobek: 'Tornavida başlı 8 mm kare', gobekNo: '58', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101176Y' },
      { gobek: '10 mm Altıgen dişi', gobekNo: '61', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101169Y' },
      { gobek: '10 mm Altıgen dişi', gobekNo: '61', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101170Y' },
      { gobek: '8 mm Altıgen dişi', gobekNo: '68', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101195Y' },
      { gobek: '8 mm Altıgen dişi', gobekNo: '68', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101196Y' },
      { gobek: '5x10 Dikdörtgen', gobekNo: '71', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101188Y' },
      { gobek: '5x10 Dikdörtgen', gobekNo: '71', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101189Y' },
      { gobek: '6 mm Kare dişi', gobekNo: '76', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101173Y' },
      { gobek: '6 mm Kare dişi', gobekNo: '76', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101174Y' },
      { gobek: 'Demiryolu', gobekNo: '88', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101171Y' },
      { gobek: 'Demiryolu', gobekNo: '88', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101172Y' },
      { gobek: 'Ayparçası', gobekNo: '91', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101177Y' },
      { gobek: 'Ayparçası', gobekNo: '91', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101178Y' },
      { gobek: 'Tork (T-30)', gobekNo: '92', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101213Y' },
      { gobek: '11 mm Altıgen erkek', gobekNo: '97', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101675Y' },
      { gobek: '11 mm Altıgen erkek', gobekNo: '97', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101676Y' },
      { gobek: 'Fiat', gobekNo: '95', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101677Y' },
      { gobek: 'Fiat', gobekNo: '95', malzeme: 'Zamak', yuzey: 'Siyah Boyalı', urunKodu: '30101678Y' },
      { gobek: 'EBR', gobekNo: '86', malzeme: 'Zamak', yuzey: 'Krom Kaplama', urunKodu: '30101939Y' },
    ],
    relatedProducts: [],
  },
  '060 AX > Çeyrek Dönüşlü Kilit Aksesuarları': {
    code: '060 AX',
    name: 'Çeyrek Dönüşlü Kilit Aksesuarları',
    description: '',
    materials: {},
    versions: [
      { urunKodu: '060 A2', urunAdi: 'Kilit Tutamağı', aciklama: 'Plastik' },
      { urunKodu: '060 A3', urunAdi: 'Sabitleyici', aciklama: 'Çelik, Çinko Kaplama' },
      { urunKodu: '060 A5', urunAdi: 'Sabitleyici', aciklama: 'Zamak, Zinc Plated' },
      { urunKodu: '060 A6', urunAdi: 'Ayar Tası', aciklama: 'Çelik, Çinko Kaplama' },
      { urunKodu: '060 A7', urunAdi: 'Toz Kapağı Bağımsız', aciklama: 'Paliüretan' },
      { urunKodu: '060 A8', urunAdi: 'Asma Kilit Sacı', aciklama: 'Çelik, Çinko Kaplama' },
    ],
    relatedProducts: [],
  },
  '060 > Çeyrek Dönüşlü Yaylı Kilit': {
    code: '060',
    name: 'Çeyrek Dönüşlü Yaylı Kilit',
    description: '• Özel tasarlanmış yay sayesinde 1.5 mm lik yaylanma sağlayarak kapak lardaki boşluğu alır.\n• Kovandaki stop uygulaması sayesinde titreşim halinde dilin kendilğinden düşmesi engellenir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '062 > Çeyrek Dönüşlü Kelebek Kilit': {
    code: '062',
    name: 'Çeyrek Dönüşlü Kelebek Kilit',
    description: '• Kelebek tutamak ve anahtar görevi yapar.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '362 > Çeyrek Dönüşlü Kelebek Kilit': {
    code: '362',
    name: 'Çeyrek Dönüşlü Kelebek Kilit',
    description: '• Kelebek tutamak ve anahtar görevi yapar.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '562 > Asma Klit Hamili Pano Kilidi': {
    code: '562',
    name: 'Asma Klit Hamili Pano Kilidi',
    description: '• İki farklı asma kilit uygulanabilir.\n• Çap 11 de min. 8.5 mm max. 10 mm kanca çapı\n• Çap 8.5 de min. 6 mm max. 7.5 mm kanca çapı',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '262 > Asma Kilit Hamili Pano Kilidi': {
    code: '262',
    name: 'Asma Kilit Hamili Pano Kilidi',
    description: '• Asma kilit uygulanabilir. Asma kilit kanca çapı max. 6 mm olmalıdır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '260 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit': {
    code: '260',
    name: 'Asma Kilit Hamili Çeyrek Dönüşlü Kilit',
    description: '• Çift kilit kullanıldığında çubuk yardımı ile asma kilit uygulanabilir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '162 > Pako Kilit': {
    code: '162',
    name: 'Pako Kilit',
    description: '• Pako şaltere uyumlu olarak dizayn edilmiştir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '064 > Çeyrek Dönüşlü Yaylı Kilit': {
    code: '064',
    name: 'Çeyrek Dönüşlü Yaylı Kilit',
    description: '• Özellikle ahşap ses, ısı ve sızdırmazlık izolasyonu yapılmış kapaklarda kullanılır.\n• Kovan boyuna uygun adaptörler standart olarak uygulanır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '064 > Çeyrek Dönüşlü Kelebek Kilit': {
    code: '064',
    name: 'Çeyrek Dönüşlü Kelebek Kilit',
    description: '• Özellikle ses, ısı ve sızdırmazlık izolasyonu yapılmış kapaklarda kullanılır.\n• Kovan boyuna uygun adaptörler standart olarak uygulanır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '064 > Çeyrek Dönüşlü Kademeli Kilit': {
    code: '064',
    name: 'Çeyrek Dönüşlü Kademeli Kilit',
    description: '• Özellikle ses, ısı ve sızdırmazlık izolasyonu yapılmış kapaklarda kullanılır.\n• 270 ° lik rotasyonu ve kademeli dil sayesinde çok sıkı bir kilitleme sağlar.\n• Kovan boyuna uygun adaptörler standart olarak uygulanır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '266 > Mini Çeyrek Dönüşlü Yaylı Kilit': {
    code: '266',
    name: 'Mini Çeyrek Dönüşlü Yaylı Kilit',
    description: '• 45º lik geçiş ölçüsüne uygun kovan özelliği vardır.\n• Özel yay uygulaması sayesinde 1 mm lik yaylanma sağlar.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '166 > Mini Çeyrek Dönüşlü Kelebek': {
    code: '166',
    name: 'Mini Çeyrek Dönüşlü Kelebek',
    description: '• Özel kelebek tutamak ve anahtar görevi yapar.\n• Özel yay uygulaması sayesinde 1 mm lik yaylanma sağlar.\n• IP 65 özelliği mevcut değildir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '066 > Mini Çeyrek Dönüşlü Yaylı Kilit': {
    code: '066',
    name: 'Mini Çeyrek Dönüşlü Yaylı Kilit',
    description: '• Özel yay uygulaması sayesinde 1 mm\' lik sıkıştırma sağlar.\n• Standart uygulamada rondela mevcut değildir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '662 > Asma Kilit Hamili Çeyrek Dönüşlü Kili v1': {
    code: '662',
    name: 'Asma Kilit Hamili Çeyrek Dönüşlü Kilit v1',
    description: '• Asma kilit uygulanabilir.\n• Kilitleme mesafesi 14 mm dir. DİL seçiminde dikkat ediniz.\n• Standart tınraksız diller kullanılır.\n• Asma kilit kanca çapı max. 8 mm olmalıdır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '662 > Asma Kilit Hamili Çeyrek Dönüşlü Kil v2': {
    code: '662',
    name: 'Asma Kilit Hamili Çeyrek Dönüşlü Kilit v2',
    description: '• Asma kilit uygulanabilir.\n• Ayarlanabilir kilitleme mesafesi\n• 3 farklı tip dil uygulanır.\n• Asma kilit kanca çapı max. 8 mm olmalıdır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '211 > Asma Kilit Hamili \'L\' Kollu Kilit': {
    code: '211',
    name: 'Asma Kilit Hamili \'L\' Kollu Kilit',
    description: '• Asma kilitli tasarımından dolayı dış ortam panolarında kullanılabilir.\n• Hijyenik pano ve klima santrallerinde uygulanabilir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '960 > Çeyrek Dönüşlü Kilit - Modüler Tutamak': {
    code: '960',
    name: 'Çeyrek Dönüşlü Kilit - Modüler Tutamak',
    description: '• Asma kilitli tasarımından dolayı dış ortam panolarında kullanılabilir.\n• Hijyenik pano ve klima santrallerinde uygulanabilir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '361 > Emniyetli Çeyrek Dönüşlü Kilit': {
    code: '361',
    name: 'Emniyetli Çeyrek Dönüşlü Kilit',
    description: '• Açık konumda iken anahtar tutamak görevi yapar.\n• Anahtar özel olarak bu kilit için dizayn edilmiştir ve kilitle beraber sipariş verilmelidir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '461 > Emniyetli Çeyrek Dönüşlü Kilit': {
    code: '461',
    name: 'Emniyetli Çeyrek Dönüşlü Kilit',
    description: '• Açık konumda iken anahtar tutamak görevi yapar.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '760 > Çeyrek Dönüşlü Yaylı Kilit': {
    code: '760',
    name: 'Çeyrek Dönüşlü Yaylı Kilit',
    description: '• Özel tasarlanmış yay sayesinde 1.5 mm lik yaylanma sağlayarak kapaklardaki boşluğu alır.\n• Kovandaki stop uygulaması sayesinde titreşim halinde dilin kendilğinden düşmesi engellenir.',
    materials: {
      'KOVAN': 'PA6 GFR 30',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Poliüretan',
    },
    versions: [],
    relatedProducts: [],
  },
  '360 > Çeyrek Dönüşlü Yaylı Kilit (Topraklamalı)': {
    code: '360',
    name: 'Çeyrek Dönüşlü Yaylı Kilit (Topraklamalı)',
    description: '• Topraklama amaçlı özel sac kullanılır.\n• Kovan içinde kullanılan yay sayesinde 1.5 mm\'lik bir sıkıştırma sağlar.\n• Stoper tırnağı sayesinde sadece 90° dönebilir.\n• IP 65\' i standart olarak sağlar.\n• IP 66 opsiyoneldir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
      'TOPRAKLAMA SACI': 'Paslanmaz çelik',
    },
    surface: 'Krom veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '561 > Tutamaklı Kilit': {
    code: '561',
    name: 'Tutamaklı Kilit',
    description: '• Kovan özel dizaynı sayesinde tutamak özelliğine sahiptir.\n• Özel renkler için Mesan ile iletişime geçiniz.',
    materials: {
      'KOVAN': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'GÖBEK': 'Zamak veya PA6 GFR 30',
      'SOMUN': 'Zamak veya PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
    },
    versions: [],
    relatedProducts: [],
  },
  '261 > Tutamaklı Kilit': {
    code: '261',
    name: 'Tutamaklı Kilit',
    description: '• Kovandaki klipsler sayesinde kolay montaj sağlar.\n• Montaj için somun gerekmez.\n• Geçiş ölçüsü ( 20x 27 mm ) özeldir.',
    materials: {
      'KOVAN': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'GÖBEK': 'Zamak veya PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
    },
    versions: [],
    relatedProducts: [],
  },
  '161 > Tutamaklı Kilit': {
    code: '161',
    name: 'Tutamaklı Kilit',
    description: '• Kovan özel dizaynı sayesinde tutamak özelliğine sahiptir.\n• Özel renkler için Mesan ile iletişime geçiniz..',
    materials: {
      'KOVAN': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'GÖBEK': 'Zamak veya PA6 GFR 30',
      'SOMUN': 'Zamak veya PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
    },
    versions: [],
    relatedProducts: [],
  },
  '160 > Dili Yaylı Kilit': {
    code: '160',
    name: 'Dili Yaylı Kilit',
    description: '• Dildeki özel yay sayesinde kapak açık iken iterek kilitleme sağlar.\n• Kilitleme mesafesi 22.5 mm olarak sabittir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v5': {
    code: '055',
    name: 'Asma Kilit Hamili Çeyrek Dönüşlü Kilit v5',
    description: '• Segman sayesinde kolay montaj sağlar.\n• Montaj için somun gerekmez.\n• 0.8 mm minimum - 1.2 mm maximum sac kalınlığında kullanılır.\n• Asma kilit uygulanabilir.\n• Max. 6 mm kanca çaplı asma kilit kullanılmalıdır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Nikel kaplama',
    versions: [],
    relatedProducts: [],
  },
  '050 > Bilyalı Kilit': {
    code: '050',
    name: 'Bilyalı Kilit',
    description: '• Kovanda uygulanan bilye, kilitleme hissiyatını arttırıp, dilin düşmesini engeller.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '350 > Çeyrek Dönüşlü Kilit': {
    code: '350',
    name: 'Çeyrek Dönüşlü Kilit',
    description: '• Titreşimli uygulamalar için önerilir.\n• Kilit anatarı içeri bastırmak sureti ile açılır.\n• Bu kilitte sadece 267 grup kodlu anahtar kullanılır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'SOMUN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v1': {
    code: '055',
    name: 'Asma Kilit Hamili Çeyrek Dönüşlü Kilit v1',
    description: '• Asma kilit uygulanabilir.\n• Max. 6 mm kanca çaplı asma kilit kullanılmalıdır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Nikel kaplama',
    versions: [],
    relatedProducts: [],
  },
  '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v2': {
    code: '055',
    name: 'Asma Kilit Hamili Çeyrek Dönüşlü Kilit v2',
    description: '• Asma kilit uygulanabilir.\n• Max. 6 mm kanca çaplı asma kilit kullanılmalıdır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Nikel kaplama',
    versions: [],
    relatedProducts: [],
  },
  '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v3': {
    code: '055',
    name: 'Asma Kilit Hamili Çeyrek Dönüşlü Kilit v3',
    description: '• Asma kilit uygulanabilir.\n• Max. 6 mm kanca çaplı asma kilit kullanılmalıdır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Nikel kaplama',
    versions: [],
    relatedProducts: [],
  },
  '055 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit v4': {
    code: '055',
    name: 'Asma Kilit Hamili Çeyrek Dönüşlü Kilit v4',
    description: '',
    materials: {
      'GÖVDE': 'PA6 GFR 30',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    versions: [],
    relatedProducts: [],
  },
  '103 > Çeyrek Dönüşlü Kilit': {
    code: '103',
    name: 'Çeyrek Dönüşlü Kilit',
    description: '',
    materials: {
      'GÖVDE': 'PA6 GFR 30',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    versions: [],
    relatedProducts: [],
  },
  '666 > Çeyrek Dönüşlü Kilit': {
    code: '666',
    name: 'Çeyrek Dönüşlü Kilit',
    description: '',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'GÖBEK': 'Paslanmaz çelik',
      'DİL': 'Paslanmaz çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '203 > Çeyrek Dönüşlü Kilit v1': {
    code: '203',
    name: 'Çeyrek Dönüşlü Kilit v1',
    description: '',
    materials: {
      'GÖVDE': 'PA6 GFR 30',
      'GÖBEK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    versions: [],
    relatedProducts: [],
  },
  '203 > Çeyrek Dönüşlü Kelebek Kilit v2': {
    code: '203',
    name: 'Çeyrek Dönüşlü Kelebek Kilit v2',
    description: '',
    materials: {
      'GÖVDE': 'PA6 GFR 30',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    versions: [],
    relatedProducts: [],
  },
  '163 > Silindirli Kilit Yaylı Dilli': {
    code: '163',
    name: 'Silindirli Kilit Yaylı Dilli',
    description: '• Dildeki özel yay sayesinde kapak açık iken iterek kilitleme sağlar.\n• Kilitleme mesafesi 24 mm olarak sabittir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '063 > Silindirli Kilit': {
    code: '063',
    name: 'Silindirli Kilit',
    description: '• Çeyrek dönüş uygulaması sağlar.\n• Kovan ölçüsü 20 mm dir. Dil seçiminde dikkate alınmalıdır.\n• Zamak ve plastik kovan uygulaması mevcuttur.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '761 > Silindirli Kilit Kolay Montaj': {
    code: '761',
    name: 'Silindirli Kilit Kolay Montaj',
    description: '• Plastik segman ile alet kullanmadan hızlı montaj yapılır.\n• Farklı pano kapı kalınlıkarına uygulanabilir.',
    materials: {
      'KOVAN': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
    },
    versions: [],
    relatedProducts: [],
  },
  '261 > Silindirli Tutamaklı Kilit': {
    code: '261',
    name: 'Silindirli Tutamaklı Kilit',
    description: '• Kovandaki klipsler sayesinde kolay montaj sağlar.\n• Montaj için somun gerekmez.\n• Geçiş ölçüsü ( 20x 27 mm ) özeldir.',
    materials: {
      'KOVAN': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik veya plastik',
    },
    versions: [],
    relatedProducts: [],
  },
  '065 > Silindirli Kelebek Kilit': {
    code: '065',
    name: 'Silindirli Kelebek Kilit',
    description: '• Çeyrek dönüş uygulaması sağlar.\n• Komple zamak ve zamak üzeri plastik kelebek uygulaması vardır .\n• Fişesiz uygulama özelliği vardır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '165 > Mini Silindirli Kelebek Kilit': {
    code: '165',
    name: 'Mini Silindirli Kelebek Kilit',
    description: '• Çeyrek dönüş uygulaması sağlar.\n• Komple metal bir üründür .\n• Küçük ebatlı kabinler ve dolaplar için uygundur.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '110 > Silindirli "T" Kollu Kilit': {
    code: '110',
    name: 'Silindirli "T" Kollu Kilit',
    description: '• Çeyrek dönüş uygulaması sağlar.\n• Komple zamak ve zamak üzeri plastik kol uygulaması vardır .\n• Fişesiz uygulama özelliği vardır.',
    materials: {
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6',
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '111 > Silindirli "L" Kollu Kilit': {
    code: '111',
    name: 'Silindirli "L" Kollu Kilit',
    description: '• Çeyrek dönüş uygulaması sağlar.\n• Komple zamak ve zamak üzeri plastik kol uygulaması vardır .\n• Fişesiz uygulama özelliği vardır.',
    materials: {
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6',
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '064 > Silindirli "T" Kollu Kilit': {
    code: '064',
    name: 'Silindirli "T" Kollu Kilit',
    description: '• Özellikle ahşap, ses, ısı ve sızdırmazlık izolasyonu yapılmış kapaklarda kullanılır.\n• Kovan boyuna uygun adaptörler standart olarak uygulanır.\n• Komple zamak ve zamak üzeri plastik kol uygulaması vardır .\n• Fişesiz uygulama özelliği vardır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '064 > Silindirli "L" Kollu Kilit': {
    code: '064',
    name: 'Silindirli "L" Kollu Kilit',
    description: '• Özellikle ahşap, ses, ısı ve sızdırmazlık izolasyonu yapılmış kapaklarda kullanılır.\n• Kovan boyuna uygun adaptörler standart olarak uygulanır.\n• Komple zamak ve zamak üzeri plastik kol uygulaması vardır .\n• Fişesiz uygulama özelliği vardır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik veya plastik',
      'CONTA': 'Kauçuk',
    },
    versions: [],
    relatedProducts: [],
  },
  '240 > Sıkıştırmalı': {
    code: '240',
    name: 'Sıkıştırmalı',
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 6 mm sıkıştırma özelliği vardır.\n• Ses yalıtımı sağlar.\n• Standart tırnaksız diller uygulanır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '240 > Sıkıştırmalı T Kollu Kilit': {
    code: '240',
    name: 'Sıkıştırmalı T Kollu Kilit',
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 6 mm sıkıştırma özelliği vardır.\n• Uzun mafsalı sayesinde geniş bir kilitleme aralığı mevcuttur.\n• Ses yalıtımı sağlar.\n• 3 farklı tip dil uygulanır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '340 > Sıkıştırmalı Kelebek Kilit v1': {
    code: '340',
    name: 'Sıkıştırmalı Kelebek Kilit v1',
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 6 mm sıkıştırma özelliği vardır.\n• Ses yalıtımı sağlar.\n• Standart tırnaksız diller uygulanır.\n• İki farklı asma kilit uygulanabilir.\n\nÇap 11 de min. 8.5 mm max. 10 mm kanca çapı\nÇap 8.5 de min. 6 mm max. 7.5 mm kanca çapı',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '340 > Sıkıştırmalı Kelebek Kilit v2': {
    code: '340',
    name: 'Sıkıştırmalı Kelebek Kilit v2',
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 6 mm sıkıştırma özelliği vardır.\n• Uzun mafsalı sayesinde geniş bir kilitleme aralığı mevcuttur.\n• Ses yalıtımı sağlar.\n• 3 farklı tip dil uygulanır.\n• İki farklı asma kilit uygulanabilir.\n\nÇap 11 de min. 8.5 mm max. 10 mm kanca çapı\nÇap 8.5 de min. 6 mm max. 7.5 mm kanca çapı',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Kauçuk',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '550 > Silindirli Kilit Kolay Montaj': {
    code: '550',
    name: 'Silindirli Kilit Kolay Montaj',
    description: '• Kovandaki klipsler sayesinde kolay montaj sağlar\n• Montaj için somun gerekmez\n• 1-1,5 mm pano kapı kalınlıklarına uygun',
    materials: {
      'KOVAN': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 15',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '450 > Yaylı Silindirli Kilit': {
    code: '450',
    name: 'Yaylı Silindirli Kilit',
    description: '',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '150 > Silindirli Kilit': {
    code: '150',
    name: 'Silindirli Kilit',
    description: '• Özel kovan yüksekligi sayesinde, çıkıntısız bir yüzey sağlar.\n• Geçiş ölçüsü özeldir. Lütfen dikkat ediniz.\n• Açık konumda anahtar çıkmaz özelliği mevcuttur.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '250 > Silindirli Kilit': {
    code: '250',
    name: 'Silindirli Kilit',
    description: '',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '057 > Mini Silindirli Kilit': {
    code: '057',
    name: 'Mini Silindirli Kilit',
    description: '• Farklı şifre max 100 kombinasyon yapılabilir.\n• Segmanlı versiyonda sac kalınlığı 0.8 mm-1.2 mm arasındadır.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '157 > Mini Silindirli Kilit': {
    code: '157',
    name: 'Mini Silindirli Kilit',
    description: '• Geçiş özelliği sayesinde alüminyum profillerde kolaylıkla kullanılabilir.',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '257 > Mini Silindirli Kilit': {
    code: '257',
    name: 'Mini Silindirli Kilit',
    description: '• Klips sayesinde kolay montaj olanağı sağlar.\n• Sac kalınlığı max 1,7 mm dir.',
    materials: {
      'KOVAN': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '056 > Silindirli Kilit': {
    code: '056',
    name: 'Silindirli Kilit',
    description: '• Yüksek güvenlik seçeneği\n• Müşteriye özel şifre\n• İki farklı grip seçeneği (18 mm - 25 mm)\n• Farklı dil seçenekleri için mesan ile iletişime geçiniz.',
    materials: {
      'KOVAN': 'Pirinç',
      'DİL': 'Çelik',
      'SOMUN': 'Pirinç',
    },
    versions: [],
    relatedProducts: [],
  },
  '050 A3 > Kilit Tutamağı': {
    code: '050 A3',
    name: 'Kilit Tutamağı',
    description: '',
    materials: {},
    versions: [],
    relatedProducts: [],
  },
  '050 A4 > Toz Kapağı': {
    code: '050 A4',
    name: 'Toz Kapağı',
    description: '',
    materials: {},
    versions: [],
    relatedProducts: [],
  },
  '050 A1 > Cam Bağlantı Sacı': {
    code: '050 A1',
    name: 'Cam Bağlantı Sacı',
    description: '',
    materials: {},
    versions: [],
    relatedProducts: [],
  },
  '030 A1 > Kilit Karşılık Sacı': {
    code: '030 A1',
    name: 'Kilit Karşılık Sacı',
    description: '',
    materials: {},
    versions: [],
    relatedProducts: [],
  },
  '055 A1 > Ahşap Bağlantı Sacı': {
    code: '055 A1',
    name: 'Ahşap Bağlantı Sacı',
    description: '',
    materials: {},
    versions: [],
    relatedProducts: [],
  },
  '010 > Silindirli "T" Kollu Kilit': {
    code: '010',
    name: 'Silindirli "T" Kollu Kilit',
    description: '',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '011 > Silindirli "L" Kollu Kilit': {
    code: '011',
    name: 'Silindirli "L" Kollu Kilit',
    description: '',
    materials: {
      'KOVAN': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '021 > Cam Kapak Kilidi': {
    code: '021',
    name: 'Cam Kapak Kilidi',
    description: '',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '020 > Sürgülü Cam Kilidi': {
    code: '020',
    name: 'Sürgülü Cam Kilidi',
    description: '',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'SÜRGÜ': 'Paslanmaz Çelik (AISI 304)',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '132 > Çekmece Kilidi': {
    code: '132',
    name: 'Çekmece Kilidi',
    description: '',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '032 > Çekmece Kilidi': {
    code: '032',
    name: 'Çekmece Kilidi',
    description: '',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '033 > Çekmece Kilidi': {
    code: '033',
    name: 'Çekmece Kilidi',
    description: '',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 10431 Pa6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '030 > Çekmece Kilidi': {
    code: '030',
    name: 'Çekmece Kilidi',
    description: '',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '159 > Sürgülü Kapak Kilidi': {
    code: '159',
    name: 'Sürgülü Kapak Kilidi',
    description: '',
    materials: {
      'GÖVDE': 'Paslanmaz Çelik',
      'GÖBEK': 'Paslanmaz Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '059 > Sürgülü Kapak Kilidi': {
    code: '059',
    name: 'Sürgülü Kapak Kilidi',
    description: '• Yatay soğutucuların sürgülü kapak kilitlerinde kullanılır.\n• Kilitleme anahtarın 90° çevrilmesi ve butona basmak suretiyle yapılır. Tersi yönde hareket ile kilit açılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '4150 > Şifreli Kilit': {
    code: '4150',
    name: 'Şifreli Kilit',
    description: '',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [
      {
        urunKodu: '4150',
        urunAdi: 'Şifreli Kilit',
        malzeme: 'Çelik',
        yuzey: 'Krom Kaplama',
      },
    ],
    relatedProducts: [],
  },
  '035 > Dosya Dolabı Kilidi': {
    code: '035',
    name: 'Dosya Dolabı Kilidi',
    description: '• Çelik dosya dolaplarında kullanılır.\n• Bağlantı sacı sayesinde çubukların hızlı montajı mümkündür.\n• Klipsli gövde kolay montaj imkanı verir.\n• İki veya üç noktadan kilitleme yapmak mümkündür.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 Pa6 GFR 30',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    versions: [],
    relatedProducts: [],
  },
  '058 > Çelik Eşya Kilidi': {
    code: '058',
    name: 'Çelik Eşya Kilidi',
    description: '• Takım dolaplarında merkezi kilit sisteminde kullanılır.\n• Segman yardımıyla hızlı montaj yapılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '158 > Çelik Eşya Kilidi': {
    code: '158',
    name: 'Çelik Eşya Kilidi',
    description: '• Takım dolaplarında merkezi kilit sisteminde kullanılır.\n• Segman yardımıyla hızlı montaj yapılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'SİLİNDİR': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '013 > Yangın Dolabı Kilidi': {
    code: '013',
    name: 'Yangın Dolabı Kilidi',
    description: '• Özellikle yangın dolaplarında veya küçük ebatlı panolarda kullanılır.\n• Komple metal olduğu için yangında zarar görmeyip açma kapama işlemini gerçekleştirir.\n• Pano kapağı üzerinde minimum çıkıntı olacak şekilde dizayn edilmiştir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'TUTAMAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'BAĞLANTI SACI': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '113 > Yangın Dolabı Kilidi': {
    code: '113',
    name: 'Yangın Dolabı Kilidi',
    description: '• Özellikle yangın dolaplarında veya küçük ebatlı panolarda kullanılır.\n• Komple metal olduğu için yangında zarar görmeyip açma kapama işlemini gerçekleştirir.\n• Pano kapağı üzerinde minimum çıkıntı olacak şekilde dizayn edilmiştir.',
    materials: {
      'GÖVDE': 'Çelik',
      'TUTAMAK': 'Çelik',
      'DİL': 'Çelik',
      'BAĞLANTI SACI': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '3114 > Elektronik Kollu Kilit - Standalone': {
    code: '3114',
    name: 'Elektronik Kollu Kilit - Standalone',
    description: '• LED göstergeler\n• Entegre RFID okuyucu\n• Enerji kesintisi durumunda mekanik olarak açılabilme imkanı.\n• Dahili kapı ve kilit sensörü\n• Kilit ve okuyucu üzerinde LED göstergeler\n• Standalone olarak çalışır.\n• Kendisinden başka bir kilit daha kontrol edebilir. (3101,3102,3103 ve 3104)\n• 12 VDC çalışma voltajı',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '3101 > Elektronik Kollu Kilit': {
    code: '3101',
    name: 'Elektronik Kollu Kilit',
    description: '• Komple metal\n• Estetik tasarım\n• Enerji kesintisi durumunda mekanik olarak açılabilme imkanı.\n• 12 V DC çalışma voltajı\n• Dahili kapı ve kilit sensörü\n• İzleme ve erişim kontrol sistemlerine bağlanma imkanı',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    versions: [],
    relatedProducts: [],
  },
  '3102 > Elektronik Kollu Kilit': {
    code: '3102',
    name: 'Elektronik Kollu Kilit',
    description: '• Komple metal\n• Estetik tasarım\n• Enerji kesintisi durumunda mekanik olarak açılabilme imkanı.\n• 12 V DC çalışma voltajı\n• Dahili kapı ve kilit sensörü\n• İzleme ve erişim kontrol sistemlerine bağlanma imkanı',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'KOL': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
      'CONTA': 'Poliüretan',
    },
    versions: [],
    relatedProducts: [],
  },
  '3103 > Elektronik Kollu Kilit': {
    code: '3103',
    name: 'Elektronik Kollu Kilit',
    description: '• LED göstergeler\n• Estetik tasarım\n• Enerji kesintisi durumunda mekanik olarak açılabilme imkanı.\n• 12 V DC çalışma voltajı\n• Dahili kapı ve kilit sensörü\n• İzleme ve erişim kontrol sistemlerine bağlanma imkanı',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '3104 > Elektronik Kollu Kilit': {
    code: '3104',
    name: 'Elektronik Kollu Kilit',
    description: '',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '3111 > Elektronik Kollu Kilit': {
    code: '3111',
    name: 'Elektronik Kollu Kilit',
    description: '• LED göstergeler\n• Entegre RFID okuyucu\n• Enerji kesintisi durumunda mekanik olarak açılabilme imkanı.\n• Dahili kapı ve kilit sensörü\n• Kilit ve okuyucu üzerinde LED göstergeler\n• RS485 protokolünü destekler, diğer protokoller için Mesan ile iletişime geçiniz\n• Kendisinden başka bir kilit daha kontrol edebilir. (3101,3102,3103 ve 3104)\n• 12 VDC çalışma voltajı',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '3112 > Elektronik Kollu Kilit': {
    code: '3112',
    name: 'Elektronik Kollu Kilit',
    description: '',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '3105 > Elektronik Kollu Kilit': {
    code: '3105',
    name: 'Elektronik Kollu Kilit',
    description: '• Erişim kontrol sistemleri ile uyumludur.\n• Yüksek emniyetli iç ve dış ortam Elektromekanik uygulama panolarında uygulanır.\n• Çift cidarlı dış ortam kabinleri içinde uygundur.\n• Özel geometrisi ile dış saldırılara dayanıklıdır.\n• Yüksek korozyon dayanımına sahiptir.\n• DIN V ENV 1630:1999-04 / WK2 testine uygundur.\n• Mafsalda kullanılan çift oring sayesinde yüksek sızdırmazlık sağlar.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'CONTA': 'Poliüretan',
      'KAPAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    versions: [],
    relatedProducts: [],
  },
  '3106 > Elektronik Kollu Kilit': {
    code: '3106',
    name: 'Elektronik Kollu Kilit',
    description: '• Erişim kontrol sistemleri ile uyumludur.\n• Yüksek emniyetli iç ve dış ortam Elektromekanik uygulama panolarında uygulanır.\n• Çift cidarlı dış ortam kabinleri içinde uygundur.\n• Özel geometrisi ile dış saldırılara dayanıklıdır.\n• Yüksek korozyon dayanımına sahiptir.\n• DIN V ENV 1630:1999-04 / WK2 testine uygundur.\n• Mafsalda kullanılan çift oring sayesinde yüksek sızdırmazlık sağlar.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'CONTA': 'Poliüretan',
      'KAPAK': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    versions: [],
    relatedProducts: [],
  },
  '3113 > Elektronik Kollu Kilit - Standalone': {
    code: '3113',
    name: 'Elektronik Kollu Kilit - Standalone',
    description: '• LED göstergeler\n• Entegre RFID okuyucu\n• Enerji kesintisi durumunda mekanik olarak açılabilme imkanı.\n• Dahili kapı ve kilit sensörü\n• Kilit ve okuyucu üzerinde LED göstergeler\n• Standalone olarak çalışır.\n• Kendisinden başka bir kilit daha kontrol edebilir. (3101,3102,3103 ve 3104)\n• 12 VDC çalışma voltajı',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'KOL': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'DİL': 'Çelik',
    },
    versions: [],
    relatedProducts: [],
  },
  '3402 > ACU Erişim Kontrol Ünitesi': {
    code: '3402',
    name: 'ACU Erişim Kontrol Ünitesi',
    description: 'Erişim Kontrol Ünitesi (ACU);\n\nElektronik kilitleri kontrol etmek ve kapı durumunu izlemek için kullanılabilecek ve akıllı bir cihazdır.\n• Kabine fiziksel erişimin kontrolünü sağlar.\n• Güvenlik koşullarını IP üzerinden izler ve yönetir.\n• Kullanıcı veritabanına sahiptir.\n• Yönetim yazılımı üzerinden izleme ve yapılandırma.\n• Kapı konumunu tespit edebilmek için iki adet sensör girişi vardır.\n• 16 adet erişim arayüzü (3414 veya 3415) bağlanabilir.\n\nYÖNETİM YAZILIMI\n\n• Ağ ayarlarını (IP adresi, alt ağ maskesi, varsayılan ağ geçidi, DNS vb.) ve kullanıcı yönetim ayarlarının yapılandırma.\n• Kullanıcı ekleme ve kaldırma.\n• Olay kayıtlarını görüntüleme ve silme.\n\nUYGULAMALAR\n\nVeri merkezleri, co-location merkezleri, Web hosting tesisleri, Telekom kabinleri veya izlenmesi gereken herhangi bir insansız bölge için uygundur.',
    materials: {
      'MALZEME': 'Plastik',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3402',
        'Ürün Adı': 'ACU Erişim Kontrol Ünitesi',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3403 > ACU Plus Erişim Kontrol Ünitesi': {
    code: '3403',
    name: 'ACU Plus Erişim Kontrol Ünitesi',
    description: 'Erişim Kontrol Ünitesi (ACU Plus); Sıcaklık, nem, duman, su baskını gibi çevresel değişimleri izleme için kullanılabilecek ve akıllı bir cihazdır. Elektronik kilitleri kontrol eder ve kapı durumunu izler.\n• Kabine fiziksel erişimin kontrolünü sağlar.\n• Çevresel koşulları ve güvenlik koşullarını IP üzerinden izler ve yönetir.\n• Takip edilen herhangi bir çevresel koşul kullanıcı tarafından belirlenen sınırların dışına çıktığında, uyarılar e-mail kullanılarak kullanıcılara iletilir.\n• Kullanıcı veritabanına sahiptir.\n• Yönetim yazılımı üzerinden izleme ve yapılandırma.\n• Kapı konumunu tespit edebilmek için iki adet sensör girişi vardır.\n• İki adet erişim arayüzü (3414 veya 3415) bağlanabilir.\n\nUYGULAMALAR\n\nVeri merkezleri, co-location merkezleri, Web hosting tesisleri, Telekom kabinleri veya izlenmesi gereken herhangi bir insansız bölge için uygundur.',
    materials: {
      'MALZEME': 'Plastik',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3403',
        'Ürün Adı': 'ACU Plus Erişim Kontrol Ünitesi',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3416 > S-AIK Standalone Erişim Arayüzü Tuş Takımı': {
    code: '3416',
    name: 'S-AIK Standalone Erişim Arayüzü Tuş Takımı',
    description: '• İki seviyeli şifreleme (Master ve Kullanıcı)\n• İki adet kilit çıkışı ile kabine fiziksel erişim kontrolü\n• Kollu kilitlerin de dahil olduğu geniş bir kilit yelpazesi ile çalışabilir.\n• 12 Volt DC besleme voltajı\n• Malzeme: ABS Kapak ve Zamak Gövde\n• Kilitler ayrı ayrı kontrol edilebilir.\n• Erişim arayüzleri, üzerinde bulunan görsel uyarı LED\'leri ve buzzer ile giriş denemesinin kabul edilip edilmediği hakkında kullanıcıya görsel ve işitsel olarak bilgi verilir.',
    materials: {
      'KAPAK': 'ABS',
      'GÖVDE': 'Zamak',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3416',
        'Ürün Adı': 'S-AIK Standalone Erişim Arayüzü Tuş Takımı',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3417 > S-AIP Standalone Erişim Arayüzü Kart Okuyucu': {
    code: '3417',
    name: 'S-AIP Standalone Erişim Arayüzü Kart Okuyucu',
    description: '• İki seviyeli kart (RFID tag) yönetim sistemi (Master ve Kullanıcı) Standard ISO-14443A RFID\n• İki adet kilit çıkışı ile kabine fiziksel erişim kontrolü\n• Kollu kilitlerin de dahil olduğu geniş bir kilit yelpazesi ile çalışabilir.\n• 12 Volt DC besleme voltajı\n• Malzeme: ABS Kapak ve Zamak Gövde\n• Kilitler ayrı ayrı kontrol edilebilir.\n• Erişim arayüzleri, üzerinde bulunan görsel uyarı LED\'leri ve buzzer ile giriş denemesinin kabul edilip edilmediği hakkında kullanıcıya görsel ve işitsel olarak bilgi verilir.',
    materials: {
      'KAPAK': 'ABS',
      'GÖVDE': 'Zamak',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3417',
        'Ürün Adı': 'S-AIP Standalone Erişim Arayüzü Kart Okuyucu',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3414 > AIK Erişim Arayüzü Tuş Takımı': {
    code: '3414',
    name: 'AIK Erişim Arayüzü Tuş Takımı',
    description: 'Erişim arayüzleri, kullanıcı arabirim cihazları olup, şifre girilerek yada bir RFID kartı okutularak erişime izin verir. Erişim arayüzleri, üzerinde bulunan görsel uyarı LED\'leri ve buzzer ile giriş denemesinin kabul edilip edilmediği hakkında kullanıcıya görsel ve işitsel olarak bilgi verilir.',
    materials: {
      'MALZEME': 'Plastik',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3414',
        'Ürün Adı': 'AIK Erişim Arayüzü Tuş Takımı',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3415 > AIP Erişim Arayüzü Kart Okuyucu': {
    code: '3415',
    name: 'AIP Erişim Arayüzü Kart Okuyucu',
    description: 'Bu arayüzler erişim kontrol üniteleri ile birlikte kullanılır ve iki kilidi kontrol edebilir. ( ACU Plus - 3403 ve ACU - 3402 )\n\nRFID kart: 13.56Mhz MIFARE - Standart ISO14443A\n\nAyrıca sipariş edilir.\n\nBaskılı: 34002639\nBaskısız: 34002640',
    materials: {
      'MALZEME': 'Plastik',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3415',
        'Ürün Adı': 'AIP Erişim Arayüzü Kart Okuyucu',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3204 > Elektronik Dolap Kilidi': {
    code: '3204',
    name: 'Elektronik Dolap Kilidi',
    description: '• Anahtar ve kart ihtiyacı olmadan şifre ile açılabilme\n• Ofis ortamına uygun zarif tasarım\n• Çoklu kullanıcı desteği\n• Mikro USB acil durum harici pil beslemesi\n• Düşük pil seviyesi göstergesi\n• İki farklı kullanım şekli;\n- Genel kullanım\n- Özel kullanım\n• Montaj kolaylığı\n• Kullanım kolaylığı\n• Yüksek güvenlik\n• Hırsız alarmı\n• Melodi evet / hayır ayarı\n• Şık görsel uyarı LED\'leri',
    materials: {
      'GÖVDE': 'Alüminyum',
      'TUTAMAK': 'Alüminyum',
      'DİL': 'Çelik',
      'PANEL': 'Plastik',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3204',
        'Ürün Adı': 'Elekronik Dolap Kilidi',
        'Malzeme': 'Alüminyum',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3205 > Elektronik Dolap Kilidi': {
    code: '3205',
    name: 'Elektronik Dolap Kilidi',
    description: '• Anahtar ihtiyacı olmaksızın RFID kart ile açılabilme\n• Ofis ortamına uygun zarif tasarım\n• Çoklu kullanıcı desteği\n• Mikro USB acil durum harici pil beslemesi\n• Düşük pil seviyesi göstergesi\n• İki farklı kullanım şekli;\n- Genel kullanım\n- Özel kullanım\n• Montaj kolaylığı\n• Kullanım kolaylığı\n• Yüksek güvenlik\n• Hırsız alarmı\n• Melodi evet / hayır ayarı\n• Şık görsel uyarı LED\'leri',
    materials: {
      'GÖVDE': 'Alüminyum',
      'TUTAMAK': 'Alüminyum',
      'DİL': 'Çelik',
      'PANEL': 'Plastik',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3205',
        'Ürün Adı': 'Elektronik Dolap Kilidi',
        'Malzeme': 'Alüminyum',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3211 > Elektronik Dolap Kilidi': {
    code: '3211',
    name: 'Elektronik Dolap Kilidi',
    description: '• Anahtar ve kart ihtiyacı olmadan şifre ile açılabilme\n• Ofis ortamına uygun zarif tasarım\n• Şifre unutulduğunda, uzaktan veya USB-Key ile şifre çözme imkanı\n• Mikro USB acil durum için harici pil beslemesi\n• Düşük pil seviyesi göstergesi\n• İki farklı kullanım şekli;\n- Genel kullanım\n- Özel kullanım\n• 4 kez yanlış şifre girildiğinde alarm aktif hale gelecektir ve kilit 60 saniye korumaya geçer.\n• Hırsızlığa karşı sahte PIN şifresi tanımlayabilme\n• Montaj kolaylığı\n• Kullanım kolaylığı\n• Yüksek güvenlik\n• Melodi evet / hayır ayarı\n• Şık görsel uyarı LED\'leri',
    materials: {
      'GÖVDE': 'Alüminyum',
      'TUTAMAK': 'Alüminyum',
      'DİL': 'Çelik',
    },
    surface: 'Çelik',
    versions: [
      {
        'Ürün Kodu': '3211',
        'Ürün Adı': 'Elektronik Dolap Kilidi',
        'Malzeme': 'Alüminyum',
        'Yüzey': 'Çelik',
      },
    ],
    relatedProducts: [],
  },
  '3212 > Elektronik Dolap Kilidi': {
    code: '3212',
    name: 'Elektronik Dolap Kilidi',
    description: '• Anahtar ve kart ihtiyacı olmadan şifre ile açılabilme\n• Ofis ortamına uygun zarif tasarım\n• Şifre unutulduğunda, uzaktan veya USB-Key ile şifre çözme imkanı\n• Mikro USB acil durum için harici pil beslemesi\n• Düşük pil seviyesi göstergesi\n• İki farklı kullanım şekli;\n- Genel kullanım\n- Özel kullanım\n• 4 kez yanlış şifre girildiğinde alarm aktif hale gelecektir ve kilit 60 saniye korumaya geçer.\n• Hırsızlığa karşı sahte PIN şifresi tanımlayabilme\n• Montaj kolaylığı\n• Kullanım kolaylığı\n• Yüksek güvenlik\n• Melodi evet / hayır ayarı\n• Şık görsel uyarı LED\'leri',
    materials: {
      'GÖVDE': 'Alüminyum',
      'TUTAMAK': 'Alüminyum',
      'DİL': 'Çelik',
    },
    surface: 'Çelik',
    versions: [
      {
        'Ürün Kodu': '3212',
        'Ürün Adı': 'Elektronik Dolap Kilidi',
        'Malzeme': 'Alüminyum',
        'Yüzey': 'Çelik',
      },
    ],
    relatedProducts: [],
  },
  '3213 > Elektronik Dolap Kilidi': {
    code: '3213',
    name: 'Elektronik Dolap Kilidi',
    description: '• Anahtar ve kart ihtiyacı olmadan şifre ile açılabilme\n• Ofis ortamına uygun zarif tasarım\n• Şifre unutulduğunda, uzaktan veya USB-Key ile şifre çözme imkanı\n• Mikro USB acil durum için harici pil beslemesi\n• Düşük pil seviyesi göstergesi\n• İki farklı kullanım şekli;\n- Genel kullanım\n- Özel kullanım\n• 4 kez yanlış şifre girildiğinde alarm aktif hale gelecektir ve kilit 60 saniye korumaya geçer.\n• Hırsızlığa karşı sahte PIN şifresi tanımlayabilme\n• Montaj kolaylığı\n• Kullanım kolaylığı\n• Yüksek güvenlik\n• Melodi evet / hayır ayarı\n• Şık görsel uyarı LED\'leri',
    materials: {
      'GÖVDE': 'Alüminyum',
      'DİL': 'Çelik',
    },
    surface: 'Çelik',
    versions: [
      {
        'Ürün Kodu': '3213',
        'Ürün Adı': 'Elektronik Dolap Kilidi',
        'Malzeme': 'Alüminyum',
        'Yüzey': 'Çelik',
      },
    ],
    relatedProducts: [],
  },
  '3214 > Elektronik Dolap Kilidi': {
    code: '3214',
    name: 'Elektronik Dolap Kilidi',
    description: '• Anahtar ve kart ihtiyacı olmadan şifre ile açılabilme\n• Ofis ortamına uygun zarif tasarım\n• Şifre unutulduğunda, uzaktan veya USB-Key ile şifre çözme imkanı\n• Mikro USB acil durum için harici pil beslemesi\n• Düşük pil seviyesi göstergesi\n• İki farklı kullanım şekli;\n- Genel kullanım\n- Özel kullanım\n• 4 kez yanlış şifre girildiğinde alarm aktif hale gelecektir ve kilit 60 saniye korumaya geçer.\n• Hırsızlığa karşı sahte PIN şifresi tanımlayabilme\n• Montaj kolaylığı\n• Kullanım kolaylığı\n• Yüksek güvenlik\n• Melodi evet / hayır ayarı\n• Şık görsel uyarı LED\'leri',
    materials: {
      'GÖVDE': 'Plastik',
      'DİL': 'Çelik',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3214',
        'Ürün Adı': 'Elektronik Dolap Kilidi',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3202 > Elektronik Dolap Kilidi': {
    code: '3202',
    name: 'Elektronik Dolap Kilidi',
    description: '• Anahtar ve kart ihtiyacı olmadan şifre ile açılabilme\n• Ofis ortamına uygun zarif tasarım\n• Çoklu kullanıcı desteği\n• Sürgülü kapak arkasına gizlenmiş mikro USB acil durum harici pil beslemesi\n• Düşük pil seviyesi göstergesi\n• İki farklı kullanım şekli;\n- Genel kullanım\n- Özel kullanım\n• Montaj kolaylığı\n• Kullanım kolaylığı\n• Yüksek güvenlik\n• Hırsız alarmı\n• Melodi evet / hayır ayarı\n• Şık görsel uyarı LED\'leri',
    materials: {
      'GÖVDE': 'Plastik',
      'KİLİT PANELİ': 'Plastik',
      'CONTA': 'Kauçuk',
      'DİL': 'Çelik',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3202',
        'Ürün Adı': 'Elektronik Dolap Kilidi',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3203 > Elektronik Dolap Kilidi': {
    code: '3203',
    name: 'Elektronik Dolap Kilidi',
    description: '• Anahtar ihtiyacı olmaksızın RFID kart ile açılabilme\n• Ofis ortamına uygun zarif tasarım\n• Çoklu kullanıcı desteği\n• Sürgülü kapak arkasına gizlenmiş mikro USB acil durum harici pil beslemesi\n• Düşük pil seviyesi göstergesi\n• İki farklı kullanım şekli;\n- Genel kullanım\n- Özel kullanım\n• Montaj kolaylığı\n• Kullanım kolaylığı\n• Yüksek güvenlik\n• Hırsız alarmı\n• Melodi evet / hayır ayarı\n• Şık görsel uyarı LED\'leri',
    materials: {
      'GÖVDE': 'Plastik',
      'KİLİT PANELİ': 'Plastik',
      'CONTA': 'Kauçuk',
      'DİL': 'Çelik',
    },
    surface: 'Siyah',
    versions: [
      {
        'Ürün Kodu': '3203',
        'Ürün Adı': 'Elektronik Dolap Kilidi',
        'Malzeme': 'Plastik',
        'Yüzey': 'Siyah',
      },
    ],
    relatedProducts: [],
  },
  '3201 > Elektronik Dolap Kilidi': {
    code: '3201',
    name: 'Elektronik Dolap Kilidi',
    description: '• Kart veya anahtar ihtiyacı olmaksızın şifre ile açılabilme.\n• 2 farklı kullanım şekli;\n- Geçici şifre,\n- Sabit şifre\n• Master ve kullanıcı kodu ile açılabilme\n• Düşük pil göstergesi\n• Acil durum harici pil beslemesi',
    materials: {
      'TUŞ TAKIMI GÖVDE': 'Zamak',
      'TUŞLAR': 'Plastik',
      'KİLİT GÖVDESİ': 'Plastik',
      'DİL': 'Zamak',
    },
    surface: 'Beyaz',
    versions: [
      {
        'Ürün Kodu': '3201',
        'Ürün Adı': 'Elektronik Dolap Kilidi',
        'Malzeme': 'Plastik',
        'Yüzey': 'Beyaz',
      },
    ],
    relatedProducts: [],
  },
  '090 > Kenar Menteşe (10mm)': {
    code: '090',
    name: 'Kenar Menteşe (10mm)',
    description: '• Kenar montajlı kapaklarda uygulanır.\n• 10 mm lik demonte parçalardan oluşur.\n• Farklı ölçüler için iletişime geçiniz.',
    materials: {},
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '091 > Kenar Menteşe (12mm)': {
    code: '091',
    name: 'Kenar Menteşe (12mm)',
    description: '• Kenar montajlı kapaklarda uygulanır.\n• 12 mm lik demonte parçalardan oluşur.\n• Farklı ölçüler için iletişime geçiniz.',
    materials: {},
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '092 > Kenar Menteşe (12mm)': {
    code: '092',
    name: 'Kenar Menteşe (12mm)',
    description: '• Kenar montajlı kapaklarda uygulanır.\n• 12 mm lik parçalardan oluşur. Pullar pirinçtir. ve parçalar montajlıdır.\n• Farklı ölçüler için Mesan ile iletişime geçiniz.\n• 90° ve 180° rotasyonlu versiyonları mevcuttur.',
    materials: {},
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '192 > Kenar Menteşe (12mm)': {
    code: '192',
    name: 'Kenar Menteşe (12mm)',
    description: '• Kenar montajlı kapaklarda uygulanır.\n• 12 mm lik parçalardan oluşur. Pullar pirinçtir ve parçalar sıkı geçmelidir.',
    materials: {},
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '093 > Kenar Menteşe (14mm)': {
    code: '093',
    name: 'Kenar Menteşe (14mm)',
    description: '• Kenar montajlı kapaklarda uygulanır.\n• 14 mm lik parçalardan oluşur. Pullar pirinçtir ve parçalar montajlıdır.',
    materials: {},
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '193 > Kenar Menteşe (16mm)': {
    code: '193',
    name: 'Kenar Menteşe (16mm)',
    description: '• Kenar montajlı kapaklarda uygulanır.\n• 16 mm lik parçalardan oluşur. Pullar pirinçtir ve parçalar sıkı geçmelidir.',
    materials: {},
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '793 > Kenar Menteşe': {
    code: '793',
    name: 'Kenar Menteşe',
    description: '• Orta gerilim ve ağır kapılı panolarda kullanılır.\n• Menteşe parçaları yekpare çelik malzemeden üretilmiştir.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'Çinko kaplama',
    versions: [],
    relatedProducts: [],
  },
  '893 > Kenar Menteşe': {
    code: '893',
    name: 'Kenar Menteşe',
    description: '• Orta gerilim ve ağır kapılı panolarda kullanılır.\n• Menteşe parçaları yekpare çelik malzemeden üretilmiştir.',
    materials: {
      'MALZEME': 'C45 Çelik',
    },
    surface: 'Çinko kaplama',
    versions: [],
    relatedProducts: [],
  },
  '191 > Kenar Menteşe (10mm)': {
    code: '191',
    name: 'Kenar Menteşe (10mm)',
    description: '• 12 mm lik demir parçalardan oluşur.\n• Parçalar demontedir.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'Çinko kaplama',
    versions: [],
    relatedProducts: [],
  },
  '1093 > Kenar Menteşe': {
    code: '1093',
    name: 'Kenar Menteşe',
    description: '• Kenar montajlı kapaklarda uygulanır.\n• Pim Uzunluğu değiştirilebilir\n• Farklı boylar için lütfen satış ekibimiz ile irtibata geçiniz.',
    materials: {
      'GÖVDE': 'Pirinç',
      'PİM': 'Çelik',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '993 > Kenar Menteşe': {
    code: '993',
    name: 'Kenar Menteşe',
    description: '• Kenar montajlı kapaklarda uygulanır.\n• Pirinç 12 mm parçalardan oluşur.\n• Farklı boylar için lütfen satış ekibimiz ile irtibata geçiniz.',
    materials: {
      'MALZEME': 'Pirinç',
    },
    surface: 'Krom kaplama',
    versions: [],
    relatedProducts: [],
  },
  '1193 > Kenar Menteşe': {
    code: '1193',
    name: 'Kenar Menteşe',
    description: '',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Paslanmaz çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '393 > Kenar Menteşe': {
    code: '393',
    name: 'Kenar Menteşe',
    description: '• Orta Gerilim panolarında uygulanır.\n• Pirinç profilden üretilmiştir.\n• Parçalar demontedir.\n• Civatalı tasarımı sayesinde mukavemetli bir bağlantı sağlanır.',
    materials: {
      'MALZEME': 'Pirinç: DIN 17672 CuZn39Pb3',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '293 > Kenar Menteşe': {
    code: '293',
    name: 'Kenar Menteşe',
    description: '• Orta Gerilim panolarında uygulanır.\n• Pirinç profilden üretilmiştir.\n• Parçalar demontedir.\n• Civatalı tasarımı sayesinde mukavemetli bir bağlantı sağlanır.',
    materials: {
      'MALZEME': 'Pirinç: DIN 17672 CuZn39Pb3',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '493 > Kenar Menteşe': {
    code: '493',
    name: 'Kenar Menteşe',
    description: '• Kapağın açık durumda çıkmasını sağlar.\n• Sağ / Sol kapak uygulaması yapılabilir. Kapak Max 180 ° açılır.',
    materials: {
      'MALZEME': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM V1': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM V2': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '593 > Kenar Menteşe': {
    code: '593',
    name: 'Kenar Menteşe',
    description: '• Adaptör sayesinde iki farklı ölçüde montaj imkanı sağlar.\n• Tırtıllı pim paslanmaz çeliktir.',
    materials: {
      'MALZEME': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '693 > Kenar Menteşe': {
    code: '693',
    name: 'Kenar Menteşe',
    description: '• Kenar montajlı kapaklarda uygulanır.\n• Tırtıllı pim paslanmaz çeliktir. Parçalar montajlıdır.',
    materials: {
      'MALZEME': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '094 > Gizli Menteşe': {
    code: '094',
    name: 'Gizli Menteşe',
    description: '• 25 mm eğimli kapaklarda uygulanır. Kolay kaynak için kaynak parçası bakır kaplıdır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya Aluminyum',
      'SABIT PARÇA': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama veya kaplamasız\nSabit Parça: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '194 > Gizli Menteşe': {
    code: '194',
    name: 'Gizli Menteşe',
    description: '• 18-27mm bükümlü kapaklarda uygulanır.\n• Kolay kaynak için kaynak parçası bakır kaplıdır.\n• Farklı kaynak parçaları (orta parça ) mevcuttur.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ORTA PARÇA': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama veya kaplamasız\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '096 > Gizli Menteşe': {
    code: '096',
    name: 'Gizli Menteşe',
    description: '• 24.5 mm bükümlü kapaklarda uygulanır.\n• Sac ve profilere montaj imkanı vardır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ORTA PARÇA': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama veya kaplamasız\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '196 > Gizli Menteşe': {
    code: '196',
    name: 'Gizli Menteşe',
    description: '• 21.5 ve 24.5 mm arasında bükümlü kapaklarda uygulanır. 2 ayrı ölçüsü vardır.\n• 096 menteşeye alternatif daha küçük bir menteşedir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ORTA PARÇA': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama veya kaplamasız\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '294 > Gizli Menteşe': {
    code: '294',
    name: 'Gizli Menteşe',
    description: '• Küçük pano kapaklarında kullanılır\n• 10 mm iç eğim sayesinde pano içi kullanım alanını arttırır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ORTA PARÇA': 'Çelik',
      'PİM': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama veya kaplamasız\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '296 > Gizli Menteşe': {
    code: '296',
    name: 'Gizli Menteşe',
    description: '• Özel tasarım sayesinde pimler sökülmeden kapak gövdeden çıkartılabilir.\n• Kolay montaj özelliği sağlamaktadır.\n• 23.5 mm eğimli kapaklarda uygulanır.\n• Sac ve profillere montaj imkanı vardır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ORTA PARÇA': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama veya kaplamasız\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '095 > Gizli Menteşe': {
    code: '095',
    name: 'Gizli Menteşe',
    description: '• Min 22.5 mm bükümlü kapaklarda uygulanır. Kendinden civatalı versiyonu mevcuttur.\n• Farklı kaynak parçaları (orta parça ) mevcuttur.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '195 > Gizli Menteşe': {
    code: '195',
    name: 'Gizli Menteşe',
    description: '• 23.5 - 25.5 mm arası bükümlü kapaklarda uygulanır.\n• Menteşe eğimi sayesinde saca ve profile montaj imkanı sağlar.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '295 > Gizli Menteşe': {
    code: '295',
    name: 'Gizli Menteşe',
    description: '',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '395 > Gizli Menteşe': {
    code: '395',
    name: 'Gizli Menteşe',
    description: '',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'Çinko kaplama',
    versions: [],
    relatedProducts: [],
  },
  '695 > Gizli Menteşe': {
    code: '695',
    name: 'Gizli Menteşe',
    description: '• 18.5 mm bükümlü panolarda kullanılır .\n• Orta parça civata ile montaj edilir, kenar parça kaynak veya kendinden civatalı kapağa somun ile montaj edilir.\n• Sağ ve Sol kapağa uygulanabilir.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'Çinko kaplama',
    versions: [],
    relatedProducts: [],
  },
  '795 > Gizli Menteşe': {
    code: '795',
    name: 'Gizli Menteşe',
    description: '• 20 mm bükümlü kapakların profil çerçeveye montajında kullanılır.\n• Orta Parça civata ile montaj edilir, kenar parça kaynak veya kendinden civatalı kapağa somun ile montaj edilir.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'Çinko kaplama',
    versions: [],
    relatedProducts: [],
  },
  '1795 > Gizli Menteşe': {
    code: '1795',
    name: 'Gizli Menteşe',
    description: '• 20 mm eğimli kapakların profil çerçeveye montajında kullanılır.\n• Orta Parça civata ile montaj edilir, kenar parça kaynak veya kendinden civatalı kapağa somun ile montaj edilir.',
    materials: {
      'GÖVDE': 'Çelik',
      'ORTA PARÇA': 'Çelik',
      'PİM': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '895 > Gizli Menteşe': {
    code: '895',
    name: 'Gizli Menteşe',
    description: '• Bir tarafı kaynak edilebilir diğer tarafı bağlantılı.\n• Genelikle ağır tip uygulamalarda kullanılan büyük ebatlı bir menteşedir.\n• Orta parça iletkenlik açısından bakır kaplanmıştır.\n• Pim tırtıllı olup montaj esnasında çakılır.\n• M5 Havşa başlı civata ile bağlanır.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '1095 > Gizli Menteşe': {
    code: '1095',
    name: 'Gizli Menteşe',
    description: '• 23 mm eğimli panolarda uygulanır .\n• Orta parça civata ile kenar parça kaynak ile montaj olur .\n• Sağ ve sol kapağa uygulanabilir.',
    materials: {
      'GÖVDE': 'Çelik',
      'ORTA PARÇA': 'Çelik',
      'PİM': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '995 > Gizli Menteşe v1': {
    code: '995',
    name: 'Gizli Menteşe v1',
    description: '• Bir tarafı kaynak edilebilir diğer tarafı bağlantılı.\n• Nispeten ağır tip uygulamalarda kullanılan büyük ebatlı bir menteşedir.\n• Orta parça iletkenlik açısından bakır kaplanmıştır.\n• Sağ ve sol kapaklara uygulanabilir\n• 25 mm bükümlü kapaklarda kullanılır.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama\nORTA PARÇA: Bakır kaplama',
    versions: [],
    relatedProducts: [],
  },
  '995 > Gizli Menteşe v2': {
    code: '995',
    name: 'Gizli Menteşe v2',
    description: '• Kolay montaj ve demontaj\n• Genellikle ağır tip uygulamalarda kullanılan büyük ebatlı bir menteşedir.\n• Sağ ve sol kapaklara uygulanabilir\n• 25 mm bükümlü kapaklarda kullanılır.\n• Bir vida yardımıyla orta parça kenar parçadan ayrılır ve kapıyı çıkarmak mümkün olur.',
    materials: {
      'GÖVDE': 'Çelik',
      'ORTA PARÇA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    surface: 'GÖVDE: Çinko kaplama\nORTA PARÇA: Çinko kaplama',
    versions: [],
    relatedProducts: [],
  },
  '1995 > Gizli Menteşe': {
    code: '1995',
    name: 'Gizli Menteşe',
    description: '• Çıkarılabilir pim, kapıyı çıkarmanıza izin verir.\n• 24 mm bükümlü kapaklarda kullanılır.\n• Orta parça iletkenlik açısından bakır kaplanmıştır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik',
      'ORTA PARÇA': 'Çelik',
    },
    surface: 'GÖVDE: Çinko kaplama\nORTA PARÇA: (MP1) Bakır kaplama (MP2) Çinko Kaplama',
    versions: [],
    relatedProducts: [],
  },
  '595 > Gizli Menteşe': {
    code: '595',
    name: 'Gizli Menteşe',
    description: '• Küçük ebatlı panoların perde sacında kullanılır.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'Çinko Kaplama',
    versions: [],
    relatedProducts: [],
  },
  '189 > Yaylı Mil Menteşe': {
    code: '189',
    name: 'Yaylı Mil Menteşe',
    description: '• iç bükümlü kapaklarda kullanılır . Menteşenin yaylı olması sayesinde kapağın çıkması sağlanır.\n• Kapaklarda alt ve üst bağlantıda kullanılacağı gibi tek üst menteşe alt montaj pimi ile uygulanır.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'GÖVDE: Bakır kaplama\nDiğer malzemeler : Çinko kaplama',
    versions: [
      { 'Ürün Kodu': '189-9', 'Ürün Adı': 'Yaylı Mil Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Çinko Kaplama' },
      { 'Ürün Kodu': '189-10', 'Ürün Adı': 'Yaylı Mil Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Çinko Kaplama' },
      { 'Ürün Kodu': '189-12', 'Ürün Adı': 'Yaylı Mil Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Çinko Kaplama' },
      { 'Ürün Kodu': '189-15', 'Ürün Adı': 'Yaylı Mil Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Çinko Kaplama' },
    ],
    relatedProducts: [],
  },
  '389 > Gizli Menteşe': {
    code: '389',
    name: 'Gizli Menteşe',
    description: '• İç bükümlü kapaklarda kullanılır . Menteşenin yaylı olması sayesinde kapağın çıkması sağlanır.\n• Gövdedeki klipsli yapı sayesinde kapağa hızlı montaj yapılabilir.\n• Sac kalınlığı 1 mm-1.3 mm arasındadır.\n• Kapaklarda alt ve üst bağlantıda kullanılacağı gibi tek üst menteşe alt montaj pimi ile uygulanır.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO1043-',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '389', 'Ürün Adı': 'Yaylı Mil Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Siyah' },
    ],
    relatedProducts: [],
  },
  '089 > Yaylı Mil Menteşe': {
    code: '089',
    name: 'Yaylı Mil Menteşe',
    description: '• İç bükümlü kapaklarda kullanılır. Menteşenin yaylı olması sayesinde kapağın çıkması sağlanır.\n• Gövdedeki klipsli yapı sayesinde kapağa hızlı montaj yapılabilir.\n• Sac kalınlığı 0.5 mm-0.8 mm arasındadır.\n• Kapaklarda alt ve üst bağlantıda kullanılacağı gibi tek üst menteşe alt montaj pimi ile uygulanır.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO1043-1 PA6 GFR 30',
      'PİM': 'Çelik',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '089', 'Ürün Adı': 'Yaylı Mil Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Siyah' },
    ],
    relatedProducts: [],
  },
  '289 > Gizli Menteşe': {
    code: '289',
    name: 'Gizli Menteşe',
    description: '• İç bükümlü kapaklarda kullanılır. Yaylı pim sayesinde kapak çıkartılabilir.\n• Her iki versiyonda da kaynak ve civata ile montaj yapılabilir.\n• Sağ ve Sol kapağa uygulanabilir.',
    materials: {
      'MALZEME': 'Çelik',
    },
    surface: 'Çinko kaplama',
    versions: [],
    relatedProducts: [],
  },
  '394 > Gizli Menteşe': {
    code: '394',
    name: 'Gizli Menteşe',
    description: '• Hafif pano ve uygulamalara uygun.\n• Sol ya da sağ taraftan uygulama mümkündür.\n• M6 vida ile montajlanır.\n• Menteşe dönüş açısı 90° dir.',
    materials: {
      'MALZEME': 'PA6 GFR30',
      'Somun': 'Çelik',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '394', 'Ürün Adı': 'Gizli Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Siyah' },
    ],
    relatedProducts: [],
  },
  '1495 > Gizli Menteşe': {
    code: '1495',
    name: 'Gizli Menteşe',
    description: '• Her iki parçası kaynak bağlantılı menteşe\n• Özel profilli elektrik pano gövdelerinde kullanılır.',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Çelik',
    },
    surface: 'Çinko Kaplama',
    versions: [],
    relatedProducts: [],
  },
  '097 > Köşe Menteşe': {
    code: '097',
    name: 'Köşe Menteşe',
    description: '• Köşe bağlantılı kapaklarda uygulanır.\n• 1 - 2 mm kalınlığındaki saclara uygulanır.\n• 3 ayrı pim uygulaması mevcuttur.',
    materials: {
      'DÖNEN VE SABİT PARÇA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik ve poliasetal (Delrin)',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '197 > Köşe Menteşe': {
    code: '197',
    name: 'Köşe Menteşe',
    description: '• Köşe bağlantılı kapaklarda uygulanır. Max 1.5 mm kalınlığındaki saclara uygulanır.\n• 3 ayrı pim uygulaması mevcuttur.',
    materials: {
      'GÖVDE': 'Polyamide PA6 GFR 30',
      'PİM': 'Çelik ve poliasetal (Delrin)',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '297 > Köşe Menteşe': {
    code: '297',
    name: 'Köşe Menteşe',
    description: '• Köşe bağlantılı kapaklarda uygulanır. Geçiş şekli sayesinde kapakta mukavemet sağlar.\n• 1 - 1.5 mm kalınlığındaki saclara uygulanır.\n• 3 ayrı pim uygulaması mevcuttur.',
    materials: {
      'DÖNEN VE SABİT PARÇA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik ve poliasetal (Delrin)',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '397 > Köşe Menteşe': {
    code: '397',
    name: 'Köşe Menteşe',
    description: '• Çelik orta parça sayesinde 097 ye göre daha dayanıklı menteşe\n• 1 - 1.5 mm paneller için uygundur.\n• 4 tip pim kullanılabilir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ORTA PARÇA': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '298 > Köşe Menteşe': {
    code: '298',
    name: 'Köşe Menteşe',
    description: '• Köşe bağlantılı kapaklarda uygulanır. Max. 2.0 mm kalınlığındaki saclara uygulanır.\n• Çelik pim önerilir.\n• M6 civata ile pano içinden montaj imkanı sağlar.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '098 > Köşe Menteşe': {
    code: '098',
    name: 'Köşe Menteşe',
    description: '• Köşe bağlantılı kapaklarda uygulanır. Max 2.0 mm kalınlığındaki saclara uygulanır.\n• Çelik pim önerilir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '398 > Köşe Menteşe': {
    code: '398',
    name: 'Köşe Menteşe',
    description: '• Sağ ve sol uygulaması mevcut.\n• 180° açılabilir\n• Kabinde özel kesme geometrisi mevcuttur.\n• Kenar ve orta parçanın birbirini aşındırmaması için arada paslanmaz çelik pullar kullanılmaktadır.\n• 25 mm eğimli kapılar için uygundur.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '497 > Köşe Menteşe': {
    code: '497',
    name: 'Köşe Menteşe',
    description: '• Köşe menteşe\n• Özel bağlantı sacı sayesinde topraklama mümkündür.',
    materials: {
      'KENAR PARÇA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ORTA PARÇA': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'MONTAJ SACI': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '498 > Köşe Menteşe': {
    code: '498',
    name: 'Köşe Menteşe',
    description: '• Kapı 90° açıldığında pim alınırsa pano kapağı yerinden çıkarılabilir.\n• Kapının kapalı konumunda pim alınsa dahi kapı yerinden çıkmaz.\n• 25 mm bükümlü kapılar için uygundur.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Plastik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '400 > Köşe Menteşe': {
    code: '400',
    name: 'Köşe Menteşe',
    description: '• 16.5 mm bükümlü köşe montajlı kapaklarda uygulanır.\n• M5 civatalı versiyonu vardır. Gövde montajında plastik montaj aparatı kullanılır.\n• Plastik gövde sayesinde ekonomik bir versiyondur.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1 veya PA6 GFR 30',
      'ORTA PARÇA': 'Çelik',
      'PİM': 'Çelik',
    },
    surface: 'Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '200 > Köşe Menteşe': {
    code: '200',
    name: 'Köşe Menteşe',
    description: '• 21 mm bükümlü köşe kapaklarda kullanılır.\n• Civatalı ve civatasız versiyonu vardır.\n• Civatalı versiyonda M6 civata kullanılmıştır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'ORTA PARÇA': 'Çelik',
      'PİM': 'Çelik',
    },
    surface: 'Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '100 > Köşe Menteşe': {
    code: '100',
    name: 'Köşe Menteşe',
    description: '• 0 mm - 30 mm farklı bükümlü kapaklarda uygulama imkanı vardır\n• Pim ve plastik yataklar demonte olarak sevk edilir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik',
      'YATAK': 'Delrin',
    },
    surface: 'Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '600 > Klima Santral Menteşesi': {
    code: '600',
    name: 'Klima Santral Menteşesi',
    description: '• Genel olarak bükümlü ve izolasyonlu kapaklarda kullanılır.\n• 0\' dan 15 mm e kadar farklı bükümlü kapaklarda uygulama imkanı vardır.\n• Komple montajlı sevk edilir.\n• 2 boyutta kapı ayarı mevcuttur.\n• Düşey yönde ± 2 mm, yatay yönde ± 1mm ayar yapabilir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik',
      'YATAK': 'Delrin',
    },
    surface: 'Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '600 > Köşe Menteşe': {
    code: '600',
    name: 'Köşe Menteşe',
    description: '• 0\' dan 18 mm e kadar farklı bükümlü kapaklarda uygulama imkanı vardır.\n• Pim ve plastik yataklar demonte olarak sevk edilir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik',
      'YATAK': 'Delrin',
    },
    surface: 'Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '700 > Klima Santral Menteşesi': {
    code: '700',
    name: 'Klima Santral Menteşesi',
    description: '• Genel olarak bükümlü ve izolasyonlu kapaklarda kullanılır.\n• 0\' dan 12 mm e kadar farklı bükümlü kapaklarda uygulama imkanı vardır.\n• Komple montajlı sevk edilir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
      'YATAK': 'Delrin',
    },
    surface: 'Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '1299 > Mini Yaprak Menteşe': {
    code: '1299',
    name: 'Mini Yaprak Menteşe',
    description: '• Genel olarak düz kapak panellerde kullanılır.\n• Tırtıllı pim paslanmazdır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '299 > Yaprak Menteşe': {
    code: '299',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak-panellerde kullanılır.\n• Civatalı versiyonlarda M5 civata kullanılmıştır. Civata boyu 8.5 mm dir.\n• Tırtıllı pim paslanmazdır. 40 mm x 40 mm civatalı ve civatasız versiyonu vardır',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '199 > Yaprak Menteşe': {
    code: '199',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak - panellerde kullanılır.\n• Civatalı versiyonlarda M6 civata kullanılmıştır. Civata boyu 12 mm\n• Tırtıllı pim paslanmazdır. 50 mm x 50 mm civatalı ve civatasız versiyonu vardır',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '099 > Yaprak Menteşe': {
    code: '099',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak-panellerde kullanılır.\n• Civatalı versiyonlarda M6 civata kullanılmıştır. Civata boyu 12 mm\n• Tırtıllı pim paslanmazdır.\n• Civatalı ve civatasız versiyonları vardır.\n\n– 50 mm x 50 mm\n– 50 mm x 63 mm\n– 50 mm x 76 mm',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '099111', 'Malzeme': 'Zamak', 'Yüzey': 'Krom Kaplama', 'Ölçü': '50 x 50' },
      { 'Ürün Kodu': '099121', 'Malzeme': 'Zamak', 'Yüzey': 'Siyah Boya', 'Ölçü': '50 x 50' },
      { 'Ürün Kodu': '099112', 'Malzeme': 'Zamak', 'Yüzey': 'Krom Kaplama', 'Ölçü': '50 x 50' },
      { 'Ürün Kodu': '099122', 'Malzeme': 'Zamak', 'Yüzey': 'Siyah Boya', 'Ölçü': '50 x 50' },
      { 'Ürün Kodu': '099114', 'Malzeme': 'Zamak', 'Yüzey': 'Krom Kaplama', 'Ölçü': '50 x 50' },
      { 'Ürün Kodu': '099124', 'Malzeme': 'Zamak', 'Yüzey': 'Siyah Boya', 'Ölçü': '50 x 50' },
      { 'Ürün Kodu': '099115', 'Malzeme': 'Zamak', 'Yüzey': 'Krom Kaplama', 'Ölçü': '50 x 63' },
      { 'Ürün Kodu': '099125', 'Malzeme': 'Zamak', 'Yüzey': 'Siyah Boya', 'Ölçü': '50 x 63' },
      { 'Ürün Kodu': '099116', 'Malzeme': 'Zamak', 'Yüzey': 'Krom Kaplama', 'Ölçü': '50 x 76' },
      { 'Ürün Kodu': '099126', 'Malzeme': 'Zamak', 'Yüzey': 'Siyah Boya', 'Ölçü': '50 x 76' },
      { 'Ürün Kodu': '099117', 'Malzeme': 'Zamak', 'Yüzey': 'Krom Kaplama', 'Ölçü': '50 x 63' },
      { 'Ürün Kodu': '099127', 'Malzeme': 'Zamak', 'Yüzey': 'Siyah Boya', 'Ölçü': '50 x 63' },
      { 'Ürün Kodu': '099118', 'Malzeme': 'Zamak', 'Yüzey': 'Krom Kaplama', 'Ölçü': '50 x 63' },
      { 'Ürün Kodu': '099128', 'Malzeme': 'Zamak', 'Yüzey': 'Siyah Boya', 'Ölçü': '50 x 63' },
      { 'Ürün Kodu': '099119', 'Malzeme': 'Zamak', 'Yüzey': 'Krom Kaplama', 'Ölçü': '50 x 76' },
      { 'Ürün Kodu': '099129', 'Malzeme': 'Zamak', 'Yüzey': 'Siyah Boya', 'Ölçü': '50 x 76' },
      { 'Ürün Kodu': '0991110', 'Malzeme': 'Zamak', 'Yüzey': 'Krom Kaplama', 'Ölçü': '50 x 76' },
      { 'Ürün Kodu': '0991210', 'Malzeme': 'Zamak', 'Yüzey': 'Siyah Boya', 'Ölçü': '50 x 76' },
    ],
    relatedProducts: [],
  },
  '399 > Yaprak Menteşe': {
    code: '399',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak-panellerde ve zolasyonlu ağır kapaklarda kullanılır.\n• Civatalı versiyonlarda M8 civata kullanılmıştır. Civata boyu 14 mm\n• Tırtıllı pim paslanmazdır. 60 mm x 60 mm - 60 mm x 90 mm ve 60 x 120 mm civatalı ve civatasız versiyonu vardır',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '1399 > Yaprak Menteşe': {
    code: '1399',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak-panellerde ve izolasyonlu ağır kapaklarda kullanılır.\n• Civatalı versiyonlarda M8 civata kullanılmıştır. Civata boyu 14 mm\n• Menteşe pimi paslanmaz çeliktir.\n- 80 mm x 70 mm\n- 80 mm x 110 mm\n- 80 mm x 150 mm\ncivatalı versiyonları vardır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '1699 > Kaldır - Çıkar Menteşe': {
    code: '1699',
    name: 'Kaldır - Çıkar Menteşe',
    description: '• İçeriden montaj sayesinde dışarıdan müdahale imkansız.\n• Kabin kapısının menteşeleri sökmeden çıkarılabilmesi amaçlı kullanılır.\n• Düz kapaklı kabinlerde kullanılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '1499 > Kaldır - Çıkar Menteşe': {
    code: '1499',
    name: 'Kaldır - Çıkar Menteşe',
    description: '• İçeriden montaj sayesinde dışarıdan müdahale imkansız.\n• Kabin kapağı 45˚de iken, menteşeleri sökmeden çıkarılabilmesi amaçlı kullanılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '900 > Yaprak Menteşe': {
    code: '900',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak-panellerde ve izolasyonlu ağır kapaklarda kullanılır.\n• 6 adet M8 civata bağlantısı ve fiberli somunlar ile güçlü bir bağlantı sağlar\n• 270° derece açılabilir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
      'CİVATA': 'Çelik',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '899 > Kaldır - Çıkar Menteşe': {
    code: '899',
    name: 'Kaldır - Çıkar Menteşe',
    description: '• Ağır hizmet tipi kaldır - çıkar menteşe\n• Sağ ve sol kapak için versiyonlar mevcuttur.\n• Açılma açısı 180 derecedir.',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Çelik',
    },
    surface: 'Çinko kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '499 > Yaprak Menteşe': {
    code: '499',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak-panellerde ve izolasyonlu ağır kapaklarda kullanılır.\n• Çelik malzemesi ve M8 x 12 mm özel bağlantı civataları sayesinde yüksek mukavemet sağlar.',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '599 > Yaprak Menteşe': {
    code: '599',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak - panellerde ve izolasyonlu ağır kapaklarda kullanılır.\n• Dış ortam şartlarına uygundur.\n• 180° açılabilir.',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '1599 > Yaprak Menteşe': {
    code: '1599',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak-panellerde ve izolasyonlu ağır kapaklarda kullanılır.\n• Dış ortam şartlarına uygundur.\n• 180 ° açılabilir.',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Paslanmaz çelik',
    },
    surface: 'Çinko kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '799 > Yaprak Menteşe': {
    code: '799',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak panellerde ve izolasyonlu ağır kapaklarda kullanılır.',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '4599 > Yaprak Menteşe': {
    code: '4599',
    name: 'Yaprak Menteşe',
    description: '• Genel olarak düz kapak-panellerde ve izolasyonlu ağır kapaklarda kullanılır.\n• Her iki parça da vida ve somun ile montaj olur.\n• 180° açılabilir.',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Paslanmaz Çelik (AISI 303)',
    },
    surface: 'Çinko kaplama veya Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '2899 > Yaprak Menteşe': {
    code: '2899',
    name: 'Yaprak Menteşe',
    description: '',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '4299 > Kaldır - Çıkar Menteşe': {
    code: '4299',
    name: 'Kaldır - Çıkar Menteşe',
    description: '• Genel olarak düz kapak-panellerde kullanılır.\n• Sağ veya sol uygulama yapılabilir.',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: 'Çinko Kaplama',
    versions: [],
    relatedProducts: [],
  },
  '1199 > Yaprak Menteşe': {
    code: '1199',
    name: 'Yaprak Menteşe',
    description: '• Düz kapak ve profillerde kullanılır. Civatalı versiyonda m5 civata kullanılır.\n• Tırtıllı pim paslanmaz çeliktir.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '2099 > Tork Menteşe': {
    code: '2099',
    name: 'Tork Menteşe',
    description: '• 2.3 Nm simetrik tork özelliğine sahiptir.\n• 25.000 ± 20 % çalışma çevriminde tork sabit değerini korur.\n• M4 civata ile bağlanır.\n• Farklı tork talepleri için satış ekibimizle iletişime geçiniz.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '2199 > Tork Menteşe': {
    code: '2199',
    name: 'Tork Menteşe',
    description: '• 3.4 Nm simetrik tork özelliğine sahiptir.\n• 25.000 ± 20 % çalışma çevriminde tork sabit değerini korur.\n• M5 civata ile bağlanır.\n• Farklı tork talepleri için satış ekibimizle iletişime geçiniz.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '2599 > Yaprak Menteşe': {
    code: '2599',
    name: 'Yaprak Menteşe',
    description: '• Farklı açı ve tork seçeneği mevcuttur\n• Kapılarda pozisyon kontrolu sağlar.\n• 80º, 115º, 150º lik açılarda kapının durmasını sağlanır.',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA6 GFR 30',
      'PİM': 'Plastik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '2399 > Ayarlı Tork Menteşe': {
    code: '2399',
    name: 'Ayarlı Tork Menteşe',
    description: '• Kullanıcı tarafından ayarlanabilen tork\n• Kapılarda pozisyon kontrolu sağlar.\n• Sağ - Sol uygulaması mevcuttur.\n• M4 civata ile bağlanır.',
    materials: {
      'GÖVDE': 'Delrin',
      'AYARLANABİLİR CİVATA VE SOMUN': 'Paslanmaz Çelik (AISI 304)',
    },
    surface: '',
    technicalSpecs: {
      'PERFORMANS DETAYLARI': '',
      'Eksenel Kuvvetler (N)': 'Çalışma Yükü: 700, Yükteki kırılma aralığı: 1100',
      'Radyal Kuvvetler (N)': 'Çalışma Yükü: 1400, Yükteki kırılma aralığı: 1800',
      'Tork değeri': '0.8 N.m.',
      'Çalışma sıcaklık aralığı': '- 5ºC + 65ºC',
      'Bağlantı elemanları': 'Civata ve Somun: M4 (Menteşe ile verilmez)',
    },
    versions: [],
    relatedProducts: [],
  },
  '2499 > Ayarlı Tork Menteşe': {
    code: '2499',
    name: 'Ayarlı Tork Menteşe',
    description: '• Kullanıcı tarafından ayarlanabilen tork\n• Kapılarda pozisyon kontrolu sağlar.\n• Sağ - Sol uygulaması mevcuttur.\n• M6 civata ile bağlanır.',
    materials: {
      'GÖVDE': 'Delrin',
      'AYARLANABİLİR CİVATA ve SOMUN': 'Paslanmaz Çelik (AISI 304)',
    },
    surface: '',
    technicalSpecs: {
      'PERFORMANS DETAYLARI': '',
      'Eksenel Kuvvetler (N)': 'Çalışma Yükü: 1500, Yükteki kırılma aralığı: 2350',
      'Radyal Kuvvetler (N)': 'Çalışma Yükü: 2250, Yükteki kırılma aralığı: 3200',
      'Tork değeri': '4 N.m.',
      'Çalışma sıcaklık aralığı': '- 5ºC + 65ºC',
      'Bağlantı elemanları': 'Civata ve somun: M6 (Menteşe ile verilmez)',
    },
    versions: [],
    relatedProducts: [],
  },
  '699 > Kaldır - Çıkar Menteşe': {
    code: '699',
    name: 'Kaldır - Çıkar Menteşe',
    description: '• İçeriden montaj sayesinde dışarıdan müdahale imkansız.\n• Kabin kapağının menteşeleri sökmeden çıkarılabilmesi amaçlı kullanılır.\n• Sağ veya sol uygulama yapılabilir.\n• Düz kapaklı kabinlerde kullanılır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '693 > Yataklı Menteşe': {
    code: '693',
    name: 'Yataklı Menteşe',
    description: '',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
      'YATAK': 'Delrin',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '800 > Klima Santral Menteşesi (3D)': {
    code: '800',
    name: 'Klima Santral Menteşesi (3D)',
    description: '• 3 boyutlu kapı ayarı menteşeden yapılabilir.\n• Düz kapaklar için uygundur.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Çelik',
      'YATAK': 'Delrin',
    },
    surface: 'Siyah boya',
    versions: [
      { 'Ürün Kodu': '32002017', 'Ürün Adı': 'Menteşe Kapağı', 'Malzeme': 'Plastik', 'Yüzey': 'Siyah Boya' },
    ],
    relatedProducts: [],
  },
  '500 > Klima Santral Menteşesi': {
    code: '500',
    name: 'Klima Santral Menteşesi',
    description: '• Genel olarak düz kapak ve panellerde ve izolasyonlu kapaklarda kullanılır.\n• Klima santralleri için özel dizayn edilmiştir.\n• Menteşe kapağı sayesinde estetik bir görünüm sağlar. Pim paslanmaz çeliktir.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
      'YATAK': 'Delrin',
      'COVER': 'PA6 GFR 30',
    },
    surface: 'Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '300 > Klima Santral Menteşesi': {
    code: '300',
    name: 'Klima Santral Menteşesi',
    description: '',
    materials: {
      'GÖVDE': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
      'PİM': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '1500 > Klima Santral Menteşesi': {
    code: '1500',
    name: 'Klima Santral Menteşesi',
    description: '• Çift cidarlı yalıtımlı kapılarda kolay montaj için özel tasarlanmıştır.\n• 180° açılabilme özelliğine sahiptir.\n• X, Y ve Z eksenlerinde 3 mm ayar özelliği\n• Cıvatalar ve setskur vidalar ürün üzerine montajlıdır.',
    materials: {
      'GÖVDE': 'Zamak DIN-EN 1774-ZnAl4Cu1',
      'PİM': 'Paslanmaz Çelik',
      'CİVATA': 'Paslanmaz Çelik',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '0000 > Karoser Menteşe': {
    code: '0000',
    name: 'Karoser Menteşe',
    description: '• Tır dorse ve frigofrik kamyon kasalarının arka kapaklarında kullanılan mukavemeti yüksek bir menteşedir.\n• 270 derece açılabilir.\n• Siyah boyalı ve çinko kaplamalı temin edilir.\n• Sağ-sol kullanım için uygundur.\n• Farklı ölçüler için Mesan ile iletişime geçiniz.',
    materials: {
      'Kenar Parça': 'Çelik',
      'Orta Parça': 'Çelik',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '34008024', 'Ürün Adı': 'Karoser Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Çinko Kaplama' },
      { 'Ürün Kodu': '34008025', 'Ürün Adı': 'Karoser Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Siyah Boya' },
      { 'Ürün Kodu': '34008023', 'Ürün Adı': 'Karoser Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Çinko Kaplama' },
      { 'Ürün Kodu': '34008029', 'Ürün Adı': 'Karoser Menteşe', 'Malzeme': 'Çelik', 'Yüzey': 'Siyah Boya' },
    ],
    relatedProducts: [],
  },
  '084 > Milenyum Kulp': {
    code: '084',
    name: 'Milenyum Kulp',
    description: '• Ahşap çekmece kapaklarında kullanılan estetik bir kulptur.',
    materials: {
      'MALZEME': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '085 > Çekme Kulpu': {
    code: '085',
    name: 'Çekme Kulpu',
    description: '• Ahşap, çelik çekmece ve rack kabinlerde kullanılan estetik bir kulptur.',
    materials: {
      'MALZEME': 'Zamak DIN-EN 1774-ZnAl4Cu1',
    },
    surface: 'Krom kaplama veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '083 > Alüminyum Tutamak': {
    code: '083',
    name: 'Alüminyum Tutamak',
    description: '',
    materials: {
      'MALZEME': 'Alüminyum',
    },
    surface: 'Krom Kaplama\nMat Eloksal\nSiyah Boya',
    versions: [],
    relatedProducts: [],
  },
  '183 > Alüminyum Tutamak': {
    code: '183',
    name: 'Alüminyum Tutamak',
    description: '',
    materials: {
      'MALZEME': 'Alüminyum',
    },
    surface: 'Krom kaplama, mat eloksal veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '184 > Metal Kulp': {
    code: '184',
    name: 'Metal Kulp',
    description: '',
    materials: {
      'MALZEME': 'Çelik, Alüminyum, Paslanmaz çelik',
    },
    surface: 'Krom kaplama, mat eloksal veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '484 > Metal Kulp': {
    code: '484',
    name: 'Metal Kulp',
    description: '',
    materials: {
      'MALZEME': 'Çelik\nAlüminyum\nPaslanmaz çelik',
    },
    surface: 'Krom kaplama, Mat eloksal veya Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '884 > Alüminyum Kulp': {
    code: '884',
    name: 'Alüminyum Kulp',
    description: '',
    materials: {
      'MALZEME': 'Alüminyum',
    },
    surface: 'Mat eloksal veya siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '284 > Metal Kulp': {
    code: '284',
    name: 'Metal Kulp',
    description: '',
    materials: {
      'MALZEME': 'Çelik\nPaslanmaz çelik',
    },
    surface: 'Krom kaplama\nEl polisajı',
    versions: [
      { 'Ürün Kodu': '284', 'Ürün Adı': 'Metal Kulp', 'Malzeme': 'Çelik', 'Yüzey': 'Krom Kaplama', 'Yükseklik': '70', 'Uzunluk': '250' },
      { 'Ürün Kodu': '284', 'Ürün Adı': 'Metal Kulp', 'Malzeme': 'Çelik', 'Yüzey': 'Krom Kaplama', 'Yükseklik': '70', 'Uzunluk': '300' },
      { 'Ürün Kodu': '284', 'Ürün Adı': 'Metal Kulp', 'Malzeme': 'Çelik', 'Yüzey': 'Krom Kaplama', 'Yükseklik': '70', 'Uzunluk': '400' },
      { 'Ürün Kodu': '284', 'Ürün Adı': 'Metal Kulp', 'Malzeme': 'Çelik', 'Yüzey': 'Krom Kaplama', 'Yükseklik': '70', 'Uzunluk': '500' },
      { 'Ürün Kodu': '284', 'Ürün Adı': 'Metal Kulp', 'Malzeme': 'Çelik', 'Yüzey': 'Krom Kaplama', 'Yükseklik': '40', 'Uzunluk': '80' },
      { 'Ürün Kodu': '284', 'Ürün Adı': 'Metal Kulp', 'Malzeme': 'Çelik', 'Yüzey': 'Krom Kaplama', 'Yükseklik': '40', 'Uzunluk': '100' },
      { 'Ürün Kodu': '284', 'Ürün Adı': 'Metal Kulp', 'Malzeme': 'Paslanmaz Çelik', 'Yüzey': 'El Polisajı', 'Yükseklik': '35', 'Uzunluk': '80' },
      { 'Ürün Kodu': '284', 'Ürün Adı': 'Metal Kulp', 'Malzeme': 'Paslanmaz Çelik', 'Yüzey': 'El Polisajı', 'Yükseklik': '35', 'Uzunluk': '100' },
    ],
    relatedProducts: [],
  },
  '384 > Metal Kulp v1': {
    code: '384',
    name: 'Metal Kulp v1',
    description: '',
    materials: {
      'MALZEME': 'Çelik, Paslanmaz çelik',
    },
    surface: 'Krom kaplama, el polisajı',
    versions: [],
    relatedProducts: [],
  },
  '384 > Metal Kulp v2': {
    code: '384',
    name: 'Metal Kulp v2',
    description: '',
    materials: {
      'MALZEME': 'Çelik\nPaslanmaz çelik',
    },
    surface: 'Krom kaplama\nEl polisajı',
    versions: [],
    relatedProducts: [],
  },
  '584 > Katlanabilir Metal Kulp': {
    code: '584',
    name: 'Katlanabilir Metal Kulp',
    description: '',
    materials: {
      'MALZEME': 'Çelik\nPaslanmaz çelik',
    },
    surface: 'Krom kaplama\nEl polisajı',
    versions: [],
    relatedProducts: [],
  },
  '684 > Metal Kulp': {
    code: '684',
    name: 'Metal Kulp',
    description: '',
    materials: {
      'MALZEME': 'Çelik, Paslanmaz çelik',
    },
    surface: 'Krom kaplama, el polisajı',
    versions: [],
    relatedProducts: [],
  },
  '784 > Metal Kulp': {
    code: '784',
    name: 'Metal Kulp',
    description: '',
    materials: {
      'MALZEME': 'Çelik, Paslanmaz çelik',
    },
    surface: 'Krom kaplama, el polisajı',
    versions: [],
    relatedProducts: [],
  },
  '185 > Parmak Kulp': {
    code: '185',
    name: 'Parmak Kulp',
    description: '',
    materials: {
      'MALZEME': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '086 > Makina Kapak Kulpu': {
    code: '086',
    name: 'Makina Kapak Kulpu',
    description: '• İki ayrı bağlantı civatası vardır.',
    materials: {
      'MALZEME': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '186 > Makina Kapak Kulpu': {
    code: '186',
    name: 'Makina Kapak Kulpu',
    description: '• İki ayrı bağlantı civatası vardır.',
    materials: {
      'MALZEME': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '386 > Kapak Kulpu': {
    code: '386',
    name: 'Kapak Kulpu',
    description: '• Civata ile bağlantı\n• Somun ve pul yanında verilecektir',
    materials: {
      'MALZEME': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
    },
    surface: 'RAL 9005',
    versions: [],
    relatedProducts: [],
  },
  '081 > Kapak Kulpu': {
    code: '081',
    name: 'Kapak Kulpu',
    description: '• İki adet bağlantı vidası vardır.\n• X ekseni yönünde ayarlama özelliği\n• Ergonomik tutamak tasarımı',
    materials: {
      'MALZEME': 'Polipropilen',
    },
    surface: 'RAL9005',
    versions: [],
    relatedProducts: [],
  },
  '087 > Makina Kapak Kulpu': {
    code: '087',
    name: 'Makina Kapak Kulpu',
    description: '• Alüminyum kol mat eloksal kaplıdır\n• Özel boylar ve renkler için Mesan ile İletişime geçiniz.',
    materials: {
      'KENAR PARÇA': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
      'KOL': 'Alüminyum',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '087200', 'Uzunluk (L1)': '148', 'Uzunluk (L)': '200' },
      { 'Ürün Kodu': '087300', 'Uzunluk (L1)': '248', 'Uzunluk (L)': '300' },
      { 'Ürün Kodu': '087400', 'Uzunluk (L1)': '348', 'Uzunluk (L)': '400' },
      { 'Ürün Kodu': '087500', 'Uzunluk (L1)': '448', 'Uzunluk (L)': '500' },
    ],
    relatedProducts: [],
  },
  '287 > Makina Kapak Kulpu': {
    code: '287',
    name: 'Makina Kapak Kulpu',
    description: '• Ergonomik tutamak tasarımı\n• Alüminyum kol mat eloksal kaplıdır\n• Özel boylar ve renkler için Mesan ile İletişime geçiniz.',
    materials: {
      'KENAR PARÇA': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
      'KOL': 'Alüminyum',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '287200', 'Uzunluk (L1)': '154', 'Uzunluk (L)': '200' },
      { 'Ürün Kodu': '287300', 'Uzunluk (L1)': '254', 'Uzunluk (L)': '300' },
      { 'Ürün Kodu': '287400', 'Uzunluk (L1)': '354', 'Uzunluk (L)': '400' },
      { 'Ürün Kodu': '287500', 'Uzunluk (L1)': '454', 'Uzunluk (L)': '500' },
    ],
    relatedProducts: [],
  },
  '187 > Makina Kapak Kulpu': {
    code: '187',
    name: 'Makina Kapak Kulpu',
    description: '• Kol plastik kaplı çeliktir.\n• Özel boylar için Mesan\' la iletişime geçiniz.\n• 1000 mm den uzun kollarda orta parça kullanılır.',
    materials: {
      'KENAR PARÇA': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
      'KOL': 'Plastik kaplama çelik',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '187300', 'Uzunluk (L1)': '269', 'Uzunluk (L)': '300' },
      { 'Ürün Kodu': '187400', 'Uzunluk (L1)': '369', 'Uzunluk (L)': '400' },
      { 'Ürün Kodu': '187500', 'Uzunluk (L1)': '469', 'Uzunluk (L)': '500' },
      { 'Ürün Kodu': '187600', 'Uzunluk (L1)': '569', 'Uzunluk (L)': '600' },
      { 'Ürün Kodu': '187700', 'Uzunluk (L1)': '669', 'Uzunluk (L)': '700' },
      { 'Ürün Kodu': '187800', 'Uzunluk (L1)': '769', 'Uzunluk (L)': '800' },
      { 'Ürün Kodu': '187900', 'Uzunluk (L1)': '869', 'Uzunluk (L)': '900' },
    ],
    relatedProducts: [],
  },
  '487 > Makina Kapak Kulpu': {
    code: '487',
    name: 'Makina Kapak Kulpu',
    description: '• Kol paslanmaz çeliktir.\n• Özel boylar için Mesan\' la iletişime geçiniz.\n• 1000 mm den uzun kollarda orta parça kullanılır.',
    materials: {
      'KENAR PARÇA': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
      'KOL': 'Paslanmaz çelik',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '487300', 'Uzunluk (L1)': '269', 'Uzunluk (L)': '300' },
      { 'Ürün Kodu': '487400', 'Uzunluk (L1)': '369', 'Uzunluk (L)': '400' },
      { 'Ürün Kodu': '487500', 'Uzunluk (L1)': '469', 'Uzunluk (L)': '500' },
      { 'Ürün Kodu': '487600', 'Uzunluk (L1)': '569', 'Uzunluk (L)': '600' },
      { 'Ürün Kodu': '487700', 'Uzunluk (L1)': '669', 'Uzunluk (L)': '700' },
      { 'Ürün Kodu': '487800', 'Uzunluk (L1)': '769', 'Uzunluk (L)': '800' },
      { 'Ürün Kodu': '487900', 'Uzunluk (L1)': '869', 'Uzunluk (L)': '900' },
    ],
    relatedProducts: [],
  },
  '286 > Kapak Kulpu': {
    code: '286',
    name: 'Kapak Kulpu',
    description: '• Ergonomik tutamak tasarımı\n• İki noktadan gizli bağlantı',
    materials: {
      'MALZEME': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '286', 'Ürün Adı': 'Kapak Kulpu', 'Malzeme': 'Plastik', 'Yüzey': 'Siyah' },
    ],
    relatedProducts: [],
  },
  '387 > Makina Kapak Kulpu': {
    code: '387',
    name: 'Makina Kapak Kulpu',
    description: '• Kol plastik kaplı çeliktir.\n• Özel boylar için Mesan\' la iletişime geçiniz.\n• 1000 mm den uzun kollarda orta parça kullanılır.',
    materials: {
      'KENAR PARÇA': 'Polyamide DIN-EN ISO 1043-1 PA 6 GFR 30',
      'KOL': 'Plastik kaplı çelik',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '387300', 'Uzunluk (L1)': '298', 'Uzunluk (L)': '300' },
      { 'Ürün Kodu': '387400', 'Uzunluk (L1)': '398', 'Uzunluk (L)': '400' },
      { 'Ürün Kodu': '387500', 'Uzunluk (L1)': '498', 'Uzunluk (L)': '500' },
      { 'Ürün Kodu': '387600', 'Uzunluk (L1)': '598', 'Uzunluk (L)': '600' },
      { 'Ürün Kodu': '387700', 'Uzunluk (L1)': '698', 'Uzunluk (L)': '700' },
      { 'Ürün Kodu': '387800', 'Uzunluk (L1)': '798', 'Uzunluk (L)': '800' },
      { 'Ürün Kodu': '3871000', 'Uzunluk (L1)': '998', 'Uzunluk (L)': '1000' },
    ],
    relatedProducts: [],
  },
  '082 > Gömme Yaylı Kulp': {
    code: '082',
    name: 'Gömme Yaylı Kulp',
    description: '',
    materials: {
      'GÖVDE': 'Alüminyum',
      'TUTAMAK': 'Alüminyum',
    },
    surface: 'Siyah boya',
    versions: [],
    relatedProducts: [],
  },
  '374 > Geçme Kapak Tutamağı': {
    code: '374',
    name: 'Geçme Kapak Tutamağı',
    description: '• Klipsleri sayesinde kolay montaj edilebilir.\n• Logo ve farklı renk uygulamaları için lütfen satış ekibimiz ile irtibata geçiniz.',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '274 > Geçme Kapak Tutamağı': {
    code: '274',
    name: 'Geçme Kapak Tutamağı',
    description: '• Klipsler sayesinde hızlı montaj.\n• Kapak dış yüzeyinde çıkıntı yapmayan ince tasarım.',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '074 > Geçme Kapak Tutamağı': {
    code: '074',
    name: 'Geçme Kapak Tutamağı',
    description: '• Klipsleri sayesinde kolay montaj edilebilir.',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '074', 'Ürün Adı': 'Geçme Kapak Tutamağı', 'Kapı Kalınlığı': '0,8 - 1,4 mm' },
    ],
    relatedProducts: [],
  },
  '174 > Geçme Kapak Tutamağı': {
    code: '174',
    name: 'Geçme Kapak Tutamağı',
    description: '• Klipsleri sayesinde kolay montaj edilebilir.',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: '',
    versions: [
      { 'Ürün Kodu': '174', 'Ürün Adı': 'Geçme Kapak Tutamağı', 'Kapı Kalınlığı': '1,5 - 2,2 mm' },
    ],
    relatedProducts: [],
  },
  '674 > Geçme Kapak Tutamağı': {
    code: '674',
    name: 'Geçme Kapak Tutamağı',
    description: '• Klipsler sayesinde hızlı montaj\n• Kapak dış yüzeyinde çıkıntı yapmayan ince tasarım',
    materials: {
      'MATERIAL': 'ABS',
    },
    surface: 'RAL9005, RAL7035\nDT: 1,5-2 mm',
    versions: [],
    relatedProducts: [],
  },
  '774 > Geçme Kapak Tutamağı': {
    code: '774',
    name: 'Geçme Kapak Tutamağı',
    description: '• Klipsler sayesinde hızlı montaj\n• Kapak dış yüzeyinde çıkıntı yapmayan ince tasarım',
    materials: {
      'MATERIAL': 'ABS',
    },
    surface: 'RAL9005, RAL7035\nDT: 1,5-2 mm',
    versions: [],
    relatedProducts: [],
  },
  '874 > Geçme Kapak Tutamağı': {
    code: '874',
    name: 'Geçme Kapak Tutamağı',
    description: '• Klipsler sayesinde hızlı montaj\n• Kapak dış yüzeyinde çıkıntı yapmayan ince tasarım',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: 'RAL 9005',
    versions: [],
    relatedProducts: [],
  },
  '574 > Gömme Tutamak': {
    code: '574',
    name: 'Gömme Tutamak',
    description: '• Civata ile bağlantı\n• Kapak dış yüzeyinde çıkıntı yapmayan ince tasarım.',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '474 > Gömme Tutamak': {
    code: '474',
    name: 'Gömme Tutamak',
    description: '• Civata ile bağlantı\n• Kapak dış yüzeyinde çıkıntı yapmayan ince tasarım.',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '974 > Gömme Tutamak': {
    code: '974',
    name: 'Gömme Tutamak',
    description: '• Civata ile bağlantı\n• Kapak dış yüzeyinde çıkıntı yapmayan ince tasarım.',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: 'RAL 9005',
    versions: [],
    relatedProducts: [],
  },
  '2300 > Havalandırma Panjuru': {
    code: '2300',
    name: 'Havalandırma Panjuru',
    description: '• Ergonomik ve modern tasarım\n• Gövde de yer alan klips uygulamsı ile hızlı montaj kolaylığı\n• Kolay açılabilen kapak yapısı\n• 1.2 mm - 2.4 mm aralığındaki sac kalınlıklarına uygundur\n• İsteğe göre dökme conta uygulanabilir\n• Farklı renkler için satış ekibimiz ile irtibata geçiniz',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: '',
    versions: [
      { urunKodu: '2300.2.01.00', renkSecenegi: 'RAL 7035', filtreTipi: 'Filtresiz' },
      { urunKodu: '2300.2.01.01', renkSecenegi: 'RAL 7035', filtreTipi: 'Eko Filtre' },
      { urunKodu: '2300.2.01.02', renkSecenegi: 'RAL 7035', filtreTipi: 'G2 Kalite Filtre' },
      { urunKodu: '2300.2.01.03', renkSecenegi: 'RAL 7035', filtreTipi: 'G3 Kalite Sünger' },
      { urunKodu: '2300.2.02.00', renkSecenegi: 'RAL 7032', filtreTipi: 'Filtresiz' },
      { urunKodu: '2300.2.02.01', renkSecenegi: 'RAL 7032', filtreTipi: 'Eko Filtre' },
      { urunKodu: '2300.2.02.02', renkSecenegi: 'RAL 7032', filtreTipi: 'G2 Kalite Filtre' },
      { urunKodu: '2300.2.02.03', renkSecenegi: 'RAL 7032', filtreTipi: 'G3 Kalite Sünger' },
      { urunKodu: '2300.2.03.00', renkSecenegi: 'RAL 9005', filtreTipi: 'Filtresiz' },
      { urunKodu: '2300.2.03.01', renkSecenegi: 'RAL 9005', filtreTipi: 'Eko Filtre' },
      { urunKodu: '2300.2.03.02', renkSecenegi: 'RAL 9005', filtreTipi: 'G2 Kalite Filtre' },
      { urunKodu: '2300.2.03.03', renkSecenegi: 'RAL 9005', filtreTipi: 'G3 Kalite Sünger' },
    ],
    relatedProducts: [],
  },
  '2150 > Proje Cebi (A4)': {
    code: '2150',
    name: 'Proje Cebi (A4)',
    description: '• A4 ölçüsüne uygundur. Özel renkler ve logo için Mesan ile iletişime geçiniz.\n• Kendinden yapışkanlıdır.',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: 'RAL 7035',
    versions: [
      { urunKodu: '2150', urunAdi: 'Proje Cebi', olculer: 'A4', malzeme: 'ABS', yuzey: 'RAL 7035' },
      { urunKodu: '2152', urunAdi: 'Proje Cebi', olculer: 'A5', malzeme: 'ABS', yuzey: 'RAL 7035' },
    ],
    relatedProducts: [],
  },
  '2152 > Proje Cebi (A5)': {
    code: '2152',
    name: 'Proje Cebi (A5)',
    description: '• A5 ölçüsüne uygundur. Özel renkler ve logo için Mesan ile iletişime geçiniz.\n• Kendinden yapışkanlıdır.',
    materials: {
      'MALZEME': 'ABS',
    },
    surface: 'RAL 7035',
    versions: [
      { urunKodu: '2150', urunAdi: 'Proje Cebi', olculer: 'A4', malzeme: 'ABS', yuzey: 'RAL 7035' },
      { urunKodu: '2152', urunAdi: 'Proje Cebi', olculer: 'A5', malzeme: 'ABS', yuzey: 'RAL 7035' },
    ],
    relatedProducts: [],
  },
  '2220 > Gözetleme Camı': {
    code: '2220',
    name: 'Gözetleme Camı',
    description: '• İklimlendirme kabinlerinde kabin içi gözetleme amacı ile kullanılır.\n• 30-60 mm arası izolasyonlu kapaklar için uygundur\n• 7 civata ile montajlanır.',
    materials: {
      'PENCERE': 'Polycarbon',
      'CONTA': 'Termo kauçuk',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '2216 > Sayaç Çerçevesi': {
    code: '2216',
    name: 'Sayaç Çerçevesi',
    description: '• Pano içindeki sayaçların dışarıdan okunmasını sağlar.',
    materials: {},
    surface: '',
    versions: [
      { urunKodu: '2215', urunAdi: 'Sayaç Çerçevesi', olculer: '117 x 117 mm', malzeme: '-', yuzey: '-' },
      { urunKodu: '2216', urunAdi: 'Sayaç Çerçevesi', olculer: '150 x 190 mm', malzeme: '-', yuzey: '-' },
    ],
    relatedProducts: [],
  },
  '2215 > Sayaç Çerçevesi': {
    code: '2215',
    name: 'Sayaç Çerçevesi',
    description: '• Pano içindeki sayaçların dışarıdan okunmasını sağlar.',
    materials: {},
    surface: '',
    versions: [
      { urunKodu: '2215', urunAdi: 'Sayaç Çerçevesi', olculer: '117 x 117 mm', malzeme: '-', yuzey: '-' },
      { urunKodu: '2216', urunAdi: 'Sayaç Çerçevesi', olculer: '150 x 190 mm', malzeme: '-', yuzey: '-' },
    ],
    relatedProducts: [],
  },
  '2451 > Aybolt': {
    code: '2451',
    name: 'Aybolt',
    description: '• Her türlü makine ve panoların taşınmasını için kullanılır.',
    materials: {},
    surface: '',
    versions: [
      { urunKodu: '2451', D1: 'M8', guvenliCalismaYuku: '140', D4MM: '20', D2MM: '20', HMM: '49.0', LMM: '13.0', birimAgirligi: '0.06', D3MM: '36' },
      { urunKodu: '2452', D1: 'M10', guvenliCalismaYuku: '230', D4MM: '25', D2MM: '25', HMM: '63.0', LMM: '17.0', birimAgirligi: '0.10', D3MM: '45' },
      { urunKodu: '2453', D1: 'M12', guvenliCalismaYuku: '340', D4MM: '30', D2MM: '30', HMM: '73.5', LMM: '20.5', birimAgirligi: '0.18', D3MM: '54' },
      { urunKodu: '2454', D1: 'M14', guvenliCalismaYuku: '490', D4MM: '35', D2MM: '35', HMM: '87.0', LMM: '27.0', birimAgirligi: '0.28', D3MM: '63' },
      { urunKodu: '2455', D1: 'M16', guvenliCalismaYuku: '700', D4MM: '35', D2MM: '35', HMM: '89.0', LMM: '27.0', birimAgirligi: '0.28', D3MM: '63' },
    ],
    relatedProducts: [],
  },
  '2461 > Aybolt': {
    code: '2461',
    name: 'Aybolt',
    description: '• Her türlü makine ve panoların taşınmasını için kullanılır.',
    materials: {},
    surface: '',
    versions: [
      { urunKodu: '2461', D1: 'M8', guvenliCalismaYuku: '140', D4MM: '20', D2MM: '20', HMM: '36', LMM: '8', birimAgirligi: '0.06', D3MM: '36' },
      { urunKodu: '2462', D1: 'M10', guvenliCalismaYuku: '230', D4MM: '25', D2MM: '25', HMM: '45', LMM: '10', birimAgirligi: '0.09', D3MM: '45' },
      { urunKodu: '2463', D1: 'M12', guvenliCalismaYuku: '340', D4MM: '30', D2MM: '30', HMM: '53', LMM: '12', birimAgirligi: '0.16', D3MM: '54' },
    ],
    relatedProducts: [],
  },
  '2400 > Kafesli Somun': {
    code: '2400',
    name: 'Kafesli Somun',
    description: '• Sacların birbirine bağlanmasını sağlar.\n• Geçiş ölçülerine dikkat edilmelidir.',
    materials: {},
    surface: '',
    versions: [
      { urunKodu: '2400', civata: 'M5', somun: '11x11x4.5', P: '1.7 ~ 2.5', G: '36', F: '20', C: '49.0' },
      { urunKodu: '2401', civata: 'M6', somun: '11x11x4.5', P: '25', G: '45', F: '25', C: '63.0' },
      { urunKodu: '2402', civata: 'M8', somun: '14x14x5.5', P: '3.3 ~ 4.1', G: '54', F: '30', C: '73.5' },
    ],
    relatedProducts: [],
  },
  '2700 > Gerdirme Mandalı': {
    code: '2700',
    name: 'Gerdirme Mandalı',
    description: '',
    materials: {
      'MALZEME': 'Çelik',
      'YÜZEY': 'Çinko kaplama',
    },
    surface: '',
    versions: [
      { urunKodu: '2701', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
      { urunKodu: '2702', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
      { urunKodu: '340.00.131', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
      { urunKodu: '340.00.133', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
      { urunKodu: '340.00.135', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
    ],
    relatedProducts: [],
  },
  '2760 > Pim Kilitlemeli Tutamak': {
    code: '2760',
    name: 'Pim Kilitlemeli Tutamak',
    description: '• İnce saclı kapaklar için uygundur.',
    materials: {
      'TUTAMAK': 'Polyamide DIN EN ISO 1043-1 PA6 GFR 30',
      'GÖVDE': 'Çelik',
      'SOMUN': 'Çelik',
      'PİM': 'Paslanmaz Çelik',
      'Yüzey': 'Çinko kaplama',
    },
    surface: '',
    versions: [
      { urunKodu: '2760', D1: '10', strok: '10' },
      { urunKodu: '2761', D1: '8', strok: '8' },
      { urunKodu: '2762', D1: '6', strok: '6' },
    ],
    relatedProducts: [],
  },
  '2750 > Yaylı Yük Mandalı': {
    code: '2750',
    name: 'Yaylı Yük Mandalı',
    description: '• Ağır metal kapaklar için uygundur.',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Çelik',
      'YÜZEY': 'Çinko kaplama',
    },
    surface: '',
    versions: [
      { urunKodu: '2750', urunAdi: 'Yaylı Yük Mandalı', olculer: '42 x 154 mm', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
    ],
    relatedProducts: [],
  },
  '2751 > Yaylı Yük Mandalı (Perçinli)': {
    code: '2751',
    name: 'Yaylı Yük Mandalı (Perçinli)',
    description: '• Perçin sayesinde mandal açık konumda kalabilir.',
    materials: {
      'GÖVDE': 'Çelik',
      'PİM': 'Çelik',
      'Yüzey': 'Çinko kaplama',
    },
    surface: '',
    versions: [
      { urunKodu: '2751', urunAdi: 'Yaylı Yük Mandalı (Perçinli)', olculer: '42 x 154 mm', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
    ],
    relatedProducts: [],
  },
  '320.02.164 > Kablo Kanalı': {
    code: '320.02.164',
    name: 'Kablo Kanalı',
    description: '• 45˚ dönüş ile kare deliklere hızlı montajı yapılır.\n• M6 civata montaj için seçeneklidir.\n• Yatay ve dikey olarak kullanılır',
    materials: {
      'MALZEME': 'PA 6 Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '320.02.164', DT: '1.3 - 1.5 mm arası', malzeme: 'Plastik', yuzey: 'Siyah' },
      { urunKodu: '320.02.165', DT: '1.6 - 2.0 mm arası', malzeme: 'Plastik', yuzey: 'Siyah' },
    ],
    relatedProducts: [],
  },
  '025 > Cam Menteşesi': {
    code: '025',
    name: 'Cam Menteşesi',
    description: '• 6 mm kalınlığa kadar cam kapaklar için uygundur.\n• Montaj için plastik yatak kullanılır.\n• Çelik (m6x6) vida ile montajlanır.',
    materials: {
      'GÖVDE': 'Çelik',
      'CİVATA': 'Çelik',
      'YATAK': 'Delrin',
    },
    surface: '',
    versions: [],
    relatedProducts: [],
  },
  '079 > Kapak Tutucu Makası': {
    code: '079',
    name: 'Kapak Tutucu Makası',
    description: '',
    materials: {
      'MALZEME': 'Çelik',
      'YÜZEY': 'Çinko kaplama',
    },
    surface: '',
    versions: [
      { urunKodu: '07963135001', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '135', yonUygulamasi: 'Sağ Kapak' },
      { urunKodu: '07963135002', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '135', yonUygulamasi: 'Sol Kapak' },
      { urunKodu: '07963202001', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '202', yonUygulamasi: 'Sağ Kapak' },
      { urunKodu: '07963202002', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '202', yonUygulamasi: 'Sol Kapak' },
      { urunKodu: '07963292001', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '292', yonUygulamasi: 'Sağ Kapak' },
      { urunKodu: '07963292002', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '292', yonUygulamasi: 'Sol Kapak' },
    ],
    relatedProducts: [],
  },
  '279 > Kapak Tutucu Makası': {
    code: '279',
    name: 'Kapak Tutucu Makası',
    description: '• Ağır kapak uygulamaları için uygundur.\n• 4 mm malzemeden üretilmiştir.',
    materials: {
      'MALZEME': 'Çelik',
      'YÜZEY': 'Çinko kaplama',
    },
    surface: '',
    versions: [
      { urunKodu: '27963135001', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '135', yonUygulamasi: 'Sağ Kapak' },
      { urunKodu: '27963135002', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '135', yonUygulamasi: 'Sol Kapak' },
      { urunKodu: '27963202001', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '202', yonUygulamasi: 'Sağ Kapak' },
      { urunKodu: '27963202002', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '202', yonUygulamasi: 'Sol Kapak' },
      { urunKodu: '27963292001', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '292', yonUygulamasi: 'Sağ Kapak' },
      { urunKodu: '27963292002', malzeme: 'Çelik', yuzey: 'Çinko Kaplama', uzunluk: '292', yonUygulamasi: 'Sol Kapak' },
    ],
    relatedProducts: [],
  },
  '179 > Kapak Tutucu Makası': {
    code: '179',
    name: 'Kapak Tutucu Makası',
    description: '• Paslanmaz çelik versiyonu sf: 517\n• Elektrik kabinlerinde kapıyı açık konumda kilitlemek amacı ile kullanılır.\n• Sağ ve Sol kapağa uygulanabilir.',
    materials: {
      'MALZEME': 'Çelik',
      'YÜZEY': 'Çinko kaplama',
    },
    surface: '',
    versions: [
      { urunKodu: '17963', malzeme: 'Çelik', yuzey: 'Çinko Kaplama' },
    ],
    relatedProducts: [],
  },
  '340.10.026 > Akustik Sünger': {
    code: '340.10.026',
    name: 'Akustik Sünger',
    description: '• Plakanın arkası bantlı veya bantsız olarak temini mümkündür.\n• Farklı boylarda rulo (1 m x 10 m) veya plaka olarak temin edilebilir.\n• Özellikle ses ve ısı yalıtımı sağlar.\n• Alev geciktirici özelliğe sahiptir.\n• -30 , + 130  C sıcaklıklar arasında kullanılabilir.\n• Resimde belirtilmeyen faklı ölçüler için Mesan ile iletişime geçiniz.',
    materials: {
      'MALZEME': 'Poliüretan köpük',
      'RENK': 'Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '340.10.046', DTMM: '30', urunTipi: 'Düz Tip (Yapışkanlı)' },
      { urunKodu: '340.10.047', DTMM: '40', urunTipi: 'Düz Tip (Yapışkanlı)' },
      { urunKodu: '340.10.048', DTMM: '50', urunTipi: 'Düz Tip (Yapışkanlı)' },
      { urunKodu: '340.10.066', DTMM: '30', urunTipi: 'Düz Tip (Yapışkansız)' },
      { urunKodu: '340.10.067', DTMM: '40', urunTipi: 'Düz Tip (Yapışkansız)' },
      { urunKodu: '340.10.068', DTMM: '50', urunTipi: 'Düz Tip (Yapışkansız)' },
      { urunKodu: '340.10.006', DTMM: '30', urunTipi: 'Viyol Desenli (Yapışkanlı)' },
      { urunKodu: '340.10.007', DTMM: '40', urunTipi: 'Viyol Desenli (Yapışkanlı)' },
      { urunKodu: '340.10.008', DTMM: '50', urunTipi: 'Viyol Desenli (Yapışkanlı)' },
      { urunKodu: '340.10.026', DTMM: '30', urunTipi: 'Viyol Desenli (Yapışkansız)' },
      { urunKodu: '340.10.027', DTMM: '40', urunTipi: 'Viyol Desenli (Yapışkansız)' },
      { urunKodu: '340.10.028', DTMM: '50', urunTipi: 'Viyol Desenli (Yapışkansız)' },
    ],
    relatedProducts: [],
  },
  '340.00.370 > Diyafram Tipi Gromet': {
    code: '340.00.370',
    name: 'Diyafram Tipi Gromet',
    description: '• Pano içinde sonradan kullanılacak delikleri kapatmak için kullanılır.\n• İçinden kablo geçirileceği zaman membran kısmı delinir.\n• Farklı çaplı kablo geçişleri için uygundur.\n• Dizaynı sayesinde kolay montaj edilir.',
    materials: {
      'MALZEME': 'NR Kauçuk, veya TP',
      'RENK': 'Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '340.00.370', D1MM: '29', D2MM: '36', D3MM: '43', TMM: '3.5', EMM: '11.5' },
      { urunKodu: '340.00.371', D1MM: '39', D2MM: '48.5', D3MM: '52', TMM: '3.2', EMM: '12' },
      { urunKodu: '340.00.372', D1MM: '48.5', D2MM: '57', D3MM: '63.5', TMM: '3.5', EMM: '14' },
    ],
    relatedProducts: [],
  },
  '340.00.380 > Diyafram Tipi Gromet': {
    code: '340.00.380',
    name: 'Diyafram Tipi Gromet',
    description: '• Pano içinde sonradan kullanılacak delikleri kapatmak için kullanılır.\n• İçinden kablo geçirileceği zaman membran kısmı delinir.\n• Farklı çaplı kablo geçişleri için uygundur.\n• Dizaynı sayesinde kolay montaj edilir.',
    materials: {
      'MALZEME': 'NR Kauçuk, veya TP',
      'RENK': 'Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '340.00.380', D1MM: '16', D2MM: '20', D3MM: '27', TMM: '3.2', EMM: '9' },
      { urunKodu: '340.00.381', D1MM: '20', D2MM: '25', D3MM: '30', TMM: '3.5', EMM: '9' },
      { urunKodu: '340.00.382', D1MM: '24.5', D2MM: '29', D3MM: '34', TMM: '3.5', EMM: '11.5' },
      { urunKodu: '340.00.383', D1MM: '40.5', D2MM: '46.5', D3MM: '52', TMM: '3.2', EMM: '11.5' },
    ],
    relatedProducts: [],
  },
  '340.08.010 > Kauçuk Stoper': {
    code: '340.08.010',
    name: 'Kauçuk Stoper',
    description: '• Panolarda kapının gövdeye çarparak zarar vermesini önler.\n• Tek noktadan hızlı bağlanma mümkündür.',
    materials: {
      'MALZEME': 'NR Kauçuk, veya TP',
      'RENK': 'Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '340.08.010', D1MM: '20', D2MM: '18', D3MM: '10', D4MM: '4', TMM: '7', EMM: '12' },
      { urunKodu: '340.08.011', D1MM: '19', D2MM: '19', D3MM: '10', D4MM: '4', TMM: '8', EMM: '22.5' },
      { urunKodu: '340.08.012', D1MM: '25', D2MM: '25', D3MM: '14', D4MM: '4.3', TMM: '20', EMM: '30' },
      { urunKodu: '340.08.013', D1MM: '39.5', D2MM: '38', D3MM: '13', D4MM: '6.2', TMM: '12', EMM: '32' },
    ],
    relatedProducts: [],
  },
  '340.00.400 > Kauçuk Tıpa': {
    code: '340.00.400',
    name: 'Kauçuk Tıpa',
    description: '• Pano içinde sonradan kullanılacak delikleri kapatmak için kullanılır.\n• Farklı sac kalınlıklarında ve çaplarda kullanılabilir.\n• Dizaynı sayesinde kolay montaj edilir.',
    materials: {
      'MALZEME': 'NR Kauçuk, veya TP',
      'RENK': 'Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '340.00.400', D1MM: '2.5', D2MM: '4', D3MM: '14', TMM: '2.5', BMM: '13.5', CMM: '3.5', EMM: '8' },
      { urunKodu: '340.00.401', D1MM: '4', D2MM: '7', D3MM: '17.5', TMM: '1.5', BMM: '8.5', CMM: '6', EMM: '5' },
      { urunKodu: '340.00.402', D1MM: '4', D2MM: '7', D3MM: '18', TMM: '2', BMM: '8.5', CMM: '6', EMM: '6' },
    ],
    relatedProducts: [],
  },
  '340.08.001 > Kapak Tutucu': {
    code: '340.08.001',
    name: 'Kapak Tutucu',
    description: '• Kapının gövdeye çarpmasını engeller\n• Kapı açık konumda iken tutucu ile stoplanması sağlanır.',
    materials: {
      'MALZEME': 'NBR Kauçuk',
      'RENK': 'Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '340.08.001', urunAdi: 'Kapak Tutucu (Dişi)', malzeme: 'NBR Kauçuk', yuzey: 'Siyah' },
      { urunKodu: '340.08.001', urunAdi: 'Kapak Tutucu (Erkek)', malzeme: 'NBR Kauçuk', yuzey: 'Siyah' },
    ],
    relatedProducts: [],
  },
  '340.20.005.2000 > Kapı Altı Fırçası': {
    code: '340.20.005.2000',
    name: 'Kapı Altı Fırçası',
    description: '• Civata bağlantılı tip\n• Pano içine dışı ortamlardan girebilecek toz vb. maddelere karşı koruma sağlar.\n• Farklı L boylar için Mesan ile iletişime geçiniz.',
    materials: {
      'GÖVDE': 'Aluminyum',
    },
    surface: '',
    versions: [
      { urunKodu: '340.20.005.2000', HMM: '40' },
      { urunKodu: '340.20.006.2000', HMM: '50' },
      { urunKodu: '340.20.007.2000', HMM: '60' },
      { urunKodu: '340.20.008.2000', HMM: '70' },
      { urunKodu: '340.20.009.2000', HMM: '80' },
      { urunKodu: '340.20.010.2000', HMM: '90' },
      { urunKodu: '340.20.011.2000', HMM: '100' },
    ],
    relatedProducts: [],
  },
  '340.20.025.2000 > Kapı Altı Fırçası': {
    code: '340.20.025.2000',
    name: 'Kapı Altı Fırçası',
    description: '• Geçmeli bağlantılı tip\n• Pano içine dışı ortamlardan girebilecek toz vb. maddelere karşı koruma sağlar.\n• Farklı L boyları için Mesan ile iletişime geçiniz.',
    materials: {
      'GÖVDE': 'Plastik',
    },
    surface: '',
    versions: [
      { urunKodu: '340.20.025.2000', HMM: '40' },
      { urunKodu: '340.20.026.2000', HMM: '50' },
      { urunKodu: '340.20.027.2000', HMM: '60' },
      { urunKodu: '340.20.028.2000', HMM: '70' },
      { urunKodu: '340.20.029.2000', HMM: '80' },
      { urunKodu: '340.20.030.2000', HMM: '90' },
      { urunKodu: '340.20.031.2000', HMM: '100' },
    ],
    relatedProducts: [],
  },
  '1300 > Yapışkanlı Conta': {
    code: '1300',
    name: 'Yapışkanlı Conta',
    description: '',
    materials: {},
    surface: '',
    versions: [
      { urunKodu: '1300.3.10', AMM: '3', BMM: '10', ruloUzunlugu: '50' },
      { urunKodu: '1300.3.15', AMM: '3', BMM: '15', ruloUzunlugu: '50' },
      { urunKodu: '1300.3.20', AMM: '3', BMM: '20', ruloUzunlugu: '50' },
      { urunKodu: '1300.4.10', AMM: '4', BMM: '10', ruloUzunlugu: '50' },
      { urunKodu: '1300.4.15', AMM: '4', BMM: '15', ruloUzunlugu: '50' },
      { urunKodu: '1300.4.20', AMM: '4', BMM: '20', ruloUzunlugu: '50' },
      { urunKodu: '1300.5.10', AMM: '5', BMM: '10', ruloUzunlugu: '50' },
      { urunKodu: '1300.5.15', AMM: '5', BMM: '15', ruloUzunlugu: '50' },
      { urunKodu: '1300.5.20', AMM: '5', BMM: '20', ruloUzunlugu: '50' },
      { urunKodu: '1300.6.10', AMM: '6', BMM: '10', ruloUzunlugu: '25' },
      { urunKodu: '1300.6.15', AMM: '6', BMM: '15', ruloUzunlugu: '25' },
      { urunKodu: '1300.6.20', AMM: '6', BMM: '20', ruloUzunlugu: '25' },
      { urunKodu: '1300.7.10', AMM: '7', BMM: '10', ruloUzunlugu: '25' },
      { urunKodu: '1300.7.15', AMM: '7', BMM: '15', ruloUzunlugu: '25' },
      { urunKodu: '1300.7.25', AMM: '7', BMM: '25', ruloUzunlugu: '25' },
      { urunKodu: '1300.8.10', AMM: '8', BMM: '10', ruloUzunlugu: '25' },
      { urunKodu: '1300.8.15', AMM: '8', BMM: '15', ruloUzunlugu: '25' },
      { urunKodu: '1300.8.20', AMM: '8', BMM: '20', ruloUzunlugu: '25' },
      { urunKodu: '1300.9.15', AMM: '9', BMM: '15', ruloUzunlugu: '25' },
      { urunKodu: '1300.9.20', AMM: '9', BMM: '20', ruloUzunlugu: '25' },
      { urunKodu: '1300.10.15', AMM: '10', BMM: '15', ruloUzunlugu: '25' },
      { urunKodu: '1300.10.20', AMM: '10', BMM: '20', ruloUzunlugu: '25' },
    ],
    relatedProducts: [],
  },
  '1100 > Yapışkanlı Dökme Conta': {
    code: '1100',
    name: 'Yapışkanlı Dökme Conta',
    description: '',
    materials: {},
    surface: '',
    versions: [
      { urunKodu: '1100.2.10', AMM: '2', BMM: '10', ruloUzunlugu: '10' },
      { urunKodu: '1100.2.15', AMM: '2', BMM: '15', ruloUzunlugu: '10' },
      { urunKodu: '1100.2.20', AMM: '2', BMM: '20', ruloUzunlugu: '10' },
      { urunKodu: '1100.2.25', AMM: '2', BMM: '25', ruloUzunlugu: '10' },
      { urunKodu: '1100.2.30', AMM: '2', BMM: '30', ruloUzunlugu: '10' },
      { urunKodu: '1100.3.10', AMM: '3', BMM: '10', ruloUzunlugu: '10' },
      { urunKodu: '1100.3.15', AMM: '3', BMM: '15', ruloUzunlugu: '10' },
      { urunKodu: '1100.3.18', AMM: '3', BMM: '18', ruloUzunlugu: '10' },
      { urunKodu: '1100.3.20', AMM: '3', BMM: '20', ruloUzunlugu: '10' },
      { urunKodu: '1100.3.25', AMM: '3', BMM: '25', ruloUzunlugu: '10' },
      { urunKodu: '1100.3.30', AMM: '3', BMM: '30', ruloUzunlugu: '10' },
      { urunKodu: '1100.3.40', AMM: '3', BMM: '40', ruloUzunlugu: '10' },
      { urunKodu: '1100.5.10', AMM: '5', BMM: '10', ruloUzunlugu: '10' },
      { urunKodu: '1100.5.13', AMM: '5', BMM: '13', ruloUzunlugu: '10' },
      { urunKodu: '1100.5.15', AMM: '5', BMM: '15', ruloUzunlugu: '10' },
      { urunKodu: '1100.5.18', AMM: '5', BMM: '18', ruloUzunlugu: '10' },
      { urunKodu: '1100.5.20', AMM: '5', BMM: '20', ruloUzunlugu: '10' },
      { urunKodu: '1100.5.25', AMM: '5', BMM: '25', ruloUzunlugu: '10' },
      { urunKodu: '1100.5.30', AMM: '5', BMM: '30', ruloUzunlugu: '10' },
      { urunKodu: '1100.5.35', AMM: '5', BMM: '35', ruloUzunlugu: '10' },
      { urunKodu: '1100.5.40', AMM: '5', BMM: '40', ruloUzunlugu: '10' },
      { urunKodu: '1100.5.50', AMM: '5', BMM: '50', ruloUzunlugu: '10' },
      { urunKodu: '1100.8.8', AMM: '8', BMM: '8', ruloUzunlugu: '10' },
      { urunKodu: '1100.8.10', AMM: '8', BMM: '10', ruloUzunlugu: '10' },
      { urunKodu: '1100.8.12', AMM: '8', BMM: '12', ruloUzunlugu: '10' },
      { urunKodu: '1100.8.15', AMM: '8', BMM: '15', ruloUzunlugu: '5' },
      { urunKodu: '1100.8.20', AMM: '8', BMM: '20', ruloUzunlugu: '5' },
      { urunKodu: '1100.8.25', AMM: '8', BMM: '25', ruloUzunlugu: '5' },
      { urunKodu: '1100.8.30', AMM: '8', BMM: '30', ruloUzunlugu: '5' },
      { urunKodu: '1100.8.40', AMM: '8', BMM: '40', ruloUzunlugu: '5' },
      { urunKodu: '1100.10.10', AMM: '10', BMM: '10', ruloUzunlugu: '5' },
      { urunKodu: '1100.10.12', AMM: '10', BMM: '12', ruloUzunlugu: '5' },
      { urunKodu: '1100.10.15', AMM: '10', BMM: '15', ruloUzunlugu: '5' },
      { urunKodu: '1100.10.20', AMM: '10', BMM: '20', ruloUzunlugu: '5' },
      { urunKodu: '1100.10.25', AMM: '10', BMM: '25', ruloUzunlugu: '5' },
      { urunKodu: '1100.10.30', AMM: '10', BMM: '30', ruloUzunlugu: '5' },
      { urunKodu: '1100.10.35', AMM: '10', BMM: '35', ruloUzunlugu: '5' },
      { urunKodu: '1100.10.40', AMM: '10', BMM: '40', ruloUzunlugu: '5' },
    ],
    relatedProducts: [],
  },
  '1200 > Yapışkanlı Conta': {
    code: '1200',
    name: 'Yapışkanlı Conta',
    description: '',
    materials: {},
    surface: '',
    versions: [
      { urunKodu: '1200.2.10', AMM: '2', BMM: '10', ruloUzunlugu: '10' },
      { urunKodu: '1200.2.15', AMM: '2', BMM: '15', ruloUzunlugu: '10' },
      { urunKodu: '1200.2.20', AMM: '2', BMM: '20', ruloUzunlugu: '10' },
      { urunKodu: '1200.2.25', AMM: '2', BMM: '25', ruloUzunlugu: '10' },
      { urunKodu: '1200.2.30', AMM: '2', BMM: '30', ruloUzunlugu: '10' },
      { urunKodu: '1200.3.10', AMM: '3', BMM: '10', ruloUzunlugu: '10' },
      { urunKodu: '1200.3.15', AMM: '3', BMM: '15', ruloUzunlugu: '10' },
      { urunKodu: '1200.3.18', AMM: '3', BMM: '18', ruloUzunlugu: '10' },
      { urunKodu: '1200.3.20', AMM: '3', BMM: '20', ruloUzunlugu: '10' },
      { urunKodu: '1200.3.25', AMM: '3', BMM: '25', ruloUzunlugu: '10' },
      { urunKodu: '1200.3.30', AMM: '3', BMM: '30', ruloUzunlugu: '10' },
      { urunKodu: '1200.3.40', AMM: '3', BMM: '40', ruloUzunlugu: '10' },
      { urunKodu: '1200.5.10', AMM: '5', BMM: '10', ruloUzunlugu: '10' },
      { urunKodu: '1200.5.13', AMM: '5', BMM: '13', ruloUzunlugu: '10' },
      { urunKodu: '1200.5.15', AMM: '5', BMM: '15', ruloUzunlugu: '10' },
      { urunKodu: '1200.5.18', AMM: '5', BMM: '18', ruloUzunlugu: '10' },
      { urunKodu: '1200.5.20', AMM: '5', BMM: '20', ruloUzunlugu: '10' },
      { urunKodu: '1200.5.25', AMM: '5', BMM: '25', ruloUzunlugu: '10' },
      { urunKodu: '1200.5.30', AMM: '5', BMM: '30', ruloUzunlugu: '10' },
      { urunKodu: '1200.5.35', AMM: '5', BMM: '35', ruloUzunlugu: '10' },
      { urunKodu: '1200.5.40', AMM: '5', BMM: '40', ruloUzunlugu: '10' },
      { urunKodu: '1200.5.50', AMM: '5', BMM: '50', ruloUzunlugu: '10' },
      { urunKodu: '1200.8.8', AMM: '8', BMM: '8', ruloUzunlugu: '10' },
      { urunKodu: '1200.8.10', AMM: '8', BMM: '10', ruloUzunlugu: '10' },
      { urunKodu: '1200.8.12', AMM: '8', BMM: '12', ruloUzunlugu: '10' },
      { urunKodu: '1200.8.15', AMM: '8', BMM: '15', ruloUzunlugu: '5' },
      { urunKodu: '1200.8.20', AMM: '8', BMM: '20', ruloUzunlugu: '5' },
      { urunKodu: '1200.8.25', AMM: '8', BMM: '25', ruloUzunlugu: '5' },
      { urunKodu: '1200.8.30', AMM: '8', BMM: '30', ruloUzunlugu: '5' },
      { urunKodu: '1200.8.40', AMM: '8', BMM: '40', ruloUzunlugu: '5' },
      { urunKodu: '1200.10.10', AMM: '10', BMM: '10', ruloUzunlugu: '5' },
      { urunKodu: '1200.10.12', AMM: '10', BMM: '12', ruloUzunlugu: '5' },
      { urunKodu: '1200.10.15', AMM: '10', BMM: '15', ruloUzunlugu: '5' },
      { urunKodu: '1200.10.20', AMM: '10', BMM: '20', ruloUzunlugu: '5' },
      { urunKodu: '1200.10.25', AMM: '10', BMM: '25', ruloUzunlugu: '5' },
      { urunKodu: '1200.10.30', AMM: '10', BMM: '30', ruloUzunlugu: '5' },
      { urunKodu: '1200.10.35', AMM: '10', BMM: '35', ruloUzunlugu: '5' },
      { urunKodu: '1200.10.40', AMM: '10', BMM: '40', ruloUzunlugu: '5' },
    ],
    relatedProducts: [],
  },
  '340.09.966 > Yapışkanlı Conta': {
    code: '340.09.966',
    name: 'Yapışkanlı Conta',
    description: '',
    materials: {
      'Malzeme': 'EPDM',
      'Renk': 'Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '340.09.966', malzeme: 'EPDM', renk: 'Siyah', R1: '-', R2: '-', R3: '-', R4: '-', DT: '-', ambalaj: '200' },
    ],
    relatedProducts: [],
  },
  '340.09.968 > Yapışkanlı Conta': {
    code: '340.09.968',
    name: 'Yapışkanlı Conta',
    description: '',
    materials: {
      'Malzeme': 'EPDM',
      'Renk': 'Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '340.09.968', malzeme: 'EPDM', renk: 'Siyah', R1: '-', R2: '-', R3: '-', R4: '-', DT: '-', ambalaj: '100' },
    ],
    relatedProducts: [],
  },
  '340.09.969 > Yapışkanlı Conta': {
    code: '340.09.969',
    name: 'Yapışkanlı Conta',
    description: '',
    materials: {
      'Malzeme': 'EPDM',
      'Renk': 'Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '340.09.969', malzeme: 'EPDM', renk: 'Siyah', R1: '-', R2: '-', R3: '-', R4: '-', DT: '-', ambalaj: '100' },
    ],
    relatedProducts: [],
  },
  '340.09.970 > Yapışkanlı Conta': {
    code: '340.09.970',
    name: 'Yapışkanlı Conta',
    description: '',
    materials: {
      'Malzeme': 'EPDM',
      'Renk': 'Siyah',
    },
    surface: '',
    versions: [
      { urunKodu: '340.09.970', malzeme: 'EPDM', renk: 'Siyah', R1: '-', R2: '-', R3: '-', R4: '-', DT: '-', ambalaj: '100' },
    ],
    relatedProducts: [],
  },
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

// Paslanmaz Çelik Menteşeler sayfasından gelindiğinde gösterilecek detaylar (menteseler klasöründeki PDF'ler getPdfPath'te atanır)
const paslanmazCelikMenteseDetails = {
  '295 > Gizli Menteşe': {
    description: '• 20 mm - 24 mm bükümlü panolarda kullanılabilen 4 ayrı versiyonu vardır.\n• Orta parçası civata ile montaj olur , kenar parça kaynak yapılır.\n• Sağ ve Sol kapağa uygulanabilir.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '395 > Gizli Menteşe': {
    description: '• 20 mm - 24 mm bükümlü panolarda kullanılabilen 4 ayrı versiyonu vardır.\n• Orta ve kenar parçalar civata veya kaynak ile montaj edilebilir.\n• Sağ ve Sol kapağa uygulanabilir.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '695 > Gizli Menteşe': {
    description: '• 18 mm bükümlü panolarda uygulanır.\n• Orta parça civata ile kenar parça kaynak ile montaj olur .\n• Sağ ve sol kapağa uygulanabilir.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '795 > Gizli Menteşe': {
    description: '• 20 mm bükümlü kapakların profil çerçeveye montajında kullanılır.\n• Orta Parça civata ile montaj edilir, kenar parça kaynak veya kendinden civatalı kapağa somun ile montaj edilir.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '289 > Gizli Menteşe': {
    description: '• İç bükümlü kapaklarda kullanılır. Yaylı pim sayesinde kapak çıkartılabilir.\n• Her iki versiyonda da kaynak ve civata ile montaj yapılabilir.\n• Sağ ve Sol kapağa uygulanabilir.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '1995 > Gizli Menteşe': {
    description: '• Çıkarılabilir pim, kapıyı çıkarmanıza izin verir.\n• 24 mm bükümlü kapaklarda kullanılır.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '995 > Gizli Menteşe': {
    description: '• Çıkarılabilir pim, kapıyı kolayca çıkarmanıza izin verir.\n• 24.5 mm bükümlü kapaklarda kullanılır.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '095 > Gizli Menteşe': {
    description: '• Min 22.5 mm bükümlü kapaklarda uygulanır.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '097 > Köşe Menteşe': {
    description: '• Köşe bağlantılı kapaklarda uygulanır.\n• 1 - 2 mm kalınlığındaki saclara uygulanır.\n• 3 ayrı pim uygulaması mevcuttur.',
    materials: { 'DÖNEN VE SABİT PARÇA': 'Paslanmaz Çelik (AISI 316)', 'PİM': 'Paslanmaz Çelik' },
  },
  '4299 > Yaprak Menteşe (Kaldır-Çıkar)': {
    description: '• Genel olarak düz kapak-panellerde kullanılır.\n• Sağ veya sol uygulama yapılabilir',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '3599 > Kaldır - Çıkar Menteşe': {
    description: '• İçeriden montaj sayesinde dışarıdan müdahale imkansız .\n• Kabin kapağının menteşeleri sökmeden çıkarılabilmesi amaçlı kullanılır.\n• Sağ veya sol uygulama yapılabilir.\n• Düz kapaklı kabinlerde kullanılır.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 316)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '1293 > Kaldır - Çıkar Menteşe': {
    description: '• Kenar montajlı kapaklarda uygulanır.\n• Kapağın açık durumda çıkmasını sağlar.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '1393 > Kaldır Çıkar Menteşe': {
    description: '• Kenar montajlı kapaklarda uygulanır.\n• Kapağın açık durumda çıkmasını sağlar.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '1299 > Mini Yaprak Menteşe': {
    description: '• Genel olarak düz kapak panellerde kullanılır.\n• 270 derece açılır.',
    materials: {},
  },
  '600 > Düz Menteşe': {
    description: '• Düz kapak ve gövdelere uygulanır.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 316)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '3299 > Yaprak Menteşe': {
    description: '• Kaldır - çıkar menteşe\n• Sağ veya sol uygulama yapılabilir.\n• Düz kapaklı kabinlerde kullanılır.',
    materials: { 'MALZEME': 'Paslanmaz çelik (AISI 316)' },
  },
  '3099 > Kaldır - Çıkar Menteşe': {
    description: '• Kaldır - Çıkar menteşe\n• Sağ veya sol uygulama yapılabilir.\n• Düz kapaklı kabinlerde kullanılır.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 316)' },
  },
  '3399 > Yaprak Menteşe': {
    description: '• Kaldır - çıkar menteşe\n• Sağ veya sol uygulama yapılabilir.\n• Düz kapaklı kabinlerde kullanılır.',
    materials: { 'MALZEME': 'Paslanmaz çelik (AISI 316)' },
  },
  '299 > Yaprak Menteşe': {
    description: '• Genel olarak düz kapak-panellerde kullanılır.\n• Menteşe dönme açısı 270 derecedir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 316)' },
  },
  '099 > Yaprak Menteşe v1': {
    description: '• Genel olarak düz kapak - panellerde kullanılan bir yaprak menteşe türüdür.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 316)' },
  },
  '399 > Yaprak Menteşe v1': {
    description: '• Genel olarak düz kapak-panellerde ve izolasyonlu ağır kapaklarda kullanılır.\n• 60 mm x 60 mm - 60 mm x 90 mm ve 60 x 120 mm delikli versiyonu vardır.\n• Menteşe dönme açısı 270 derecedir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 316)' },
  },
  '099 > Yaprak Menteşe v2': {
    description: '• Genel olarak düz kapak-panellerde ve izolasyonlu ağır kapaklarda kullanılır.\n• Civatalı versiyonlarda M6 civata kullanılmıştır .\n• Civata boyu 12 mm',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 316)' },
  },
  '399 > Yaprak Menteşe v2': {
    description: '• Genel olarak düz kapak-panellerde ve izolasyonlu ağır kapaklarda kullanılır.\n• 60 mm x 60 mm - 60 mm x 90 mm ve 60 x 120 mm civatalı versiyon\n• Civatalı versiyonlarda M8 civata kullanılmıştır . Civata boyu 14 mm\n• Menteşe dönme açısı 270 derecedir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 316)' },
  },
  '4599 > Yaprak Menteşe': {
    description: '• Genel olarak düz kapak-panellerde ve izolasyonlu ağır kapaklarda kullanılır.\n• Her iki parça da vida ve somun ile montaj olur.\n• 180° açılabilir.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '599 > Yaprak Menteşe': {
    description: '• Genel olarak düz kapak - panellerde ve izolasyonlu kapaklarda kullanılır.\n• Dış ortam koşullarına uygundur.\n• 180 derece açılabilir.\n• Menteşe dönme açısı 180 derecedir.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '799 > Yaprak Menteşe': {
    description: '• Genel olarak düz kapaklı panellerde ve izolasyonlu ağır kapaklarda kullanılır.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '1599 > Yaprak Menteşe': {
    description: '• Genel olarak düz kapak-panellerde ve izolasyonlu ağır kapaklarda kullanılır\n• Dış ortam şartlarına uygundur.\n• 180 derece açılabilir.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '899 > Yaprak Menteşe (Kaldır-Çıkar)': {
    description: '• Ağır hizmet tipi kaldır - çıkar menteşe.\n• Sağ ve sol kapak için versiyonlar mevcuttur.\n• Açılma açısı 180 derecedir.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '999 > Yaprak Menteşe': {
    description: '• Genel olarak düz kapaklı panellerde kullanılır.\n• Dışı ortam kabinleri için uygundur.\n• 270 derece açılabilir.\n• Gövde paslanmaz çelik olup üzerinde siyah toz boya uygulanabilir.',
    materials: { 'GÖVDE': 'Paslanmaz çelik (AISI 304)', 'PİM': 'Paslanmaz çelik (AISI 303)' },
  },
  '2999 > Yaprak Menteşe': {
    description: '• Genel olarak düz kapaklı panellerde kullanılır.\n• Dış ortam kabinleri için uygundur.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '2890 > Gizli Menteşe': {
    description: '• Dış ortama uygun bir menteşedir.\n• Özel şekli ve 3 mm kalınlığı ile ağır hizmet tipi bir menteşedir.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 304)', 'PİM': 'Paslanmaz Çelik (AISI 303)' },
  },
  '090 > Kenar Menteşe (10mm)': {
    description: '• Kenar montajlı kapaklarda uygulanır.\n• 10 mm lik demonte parçalardan oluşur.\n• Farklı ölçüler için Mesan ile iletişime geçiniz.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 303 / 304)' },
  },
  '092 > Kenar Menteşe (12mm)': {
    description: '• Kenar montajlı kapaklarda uygulanır .\n• 12 mm\'lik parçalardan oluşur. Pullar pirinçtir ve parçalar montajlıdır.\n• Farklı ölçüler için Mesan ile iletişime geçiniz.\n• 90 derece ve 180 derece rotasyonlu versiyonları mevcuttur.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 303 / 304)' },
  },
  '192 > Kenar Menteşe (12mm)': {
    description: '• Kenar montajlı kapaklarda uygulanır .\n• 12 mm\'lik parçalardan oluşur. Pullar pirinçtir ve parçalar sıkı geçmelidir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 303 / 304)' },
  },
  '193 > Kenar Menteşe (16mm)': {
    description: '• Kenar montajlı kapaklarda uygulanır .\n• 16 mm\'lik parçalardan oluşur. Pullar pirinçtir. ve parçalar sıkı geçmelidir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 303 / 304)' },
  },
}

// Paslanmaz Çelik Kilitler sayfasından gelindiğinde gösterilecek detaylar (kilitler klasöründeki PDF'ler getPdfPath'te atanır)
const paslanmazCelikKilitDetails = {
  '401 > Kollu Kilit': {
    applicationArea: { 'UYGULAMA ALANLARI': 'Elektrik panoları, dış ortam kabinler' },
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 316)', 'KOL': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik', 'CONTA': 'Poliüretan' },
  },
  '501 > Kollu Kilit': {
    applicationArea: { 'UYGULAMA ALANLARI': 'Elektrik panoları, dış ortam kabinler' },
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 316)', 'KOL': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik', 'CONTA': 'Poliüretan' },
  },
  '502 > İspanyolet Sistemli Kollu Kilit': {
    description: '• Güvenlik seviyesi yüksek bir kilittir.\n• 14.5 mm lik dış çıkıntı ile estetik bir görünüm sağlar.\n• Yüksek güvenlik için özel barel uygulaması yapılır.',
    applicationArea: { 'UYGULAMA ALANLARI': 'Elektrik panoları, dış ortam kabinler' },
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 316)', 'KOL': 'Paslanmaz Çelik (AISI 316)', 'MEKANİZMA': 'PA6 GFR 30', 'DİL': 'Paslanmaz Çelik', 'CONTA': 'Poliüretan' },
  },
  '402 > İspanyolet Sistemli Kollu Kilit': {
    applicationArea: { 'UYGULAMA ALANLARI': 'Elektrik panoları, dış ortam kabinler' },
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 316)', 'KOL': 'Paslanmaz Çelik (AISI 316)', 'MEKANİZMA': 'PA6 GFR 30', 'DİL': 'Paslanmaz Çelik', 'CONTA': 'Poliüretan' },
  },
  '103 > İspanyolet Sistemli Kollu Kilit': {
    materials: { 'GÖVDE': 'Paslanmaz Çelik', 'KOL': 'Paslanmaz Çelik', 'MEKANİZMA': 'Zamak DIN-EN 1774-ZnAl4Cu1', 'DİL': 'Paslanmaz Çelik', 'CONTA': 'Poliüretan' },
  },
  '016 > Kabin Kilidi': {
    description: '• Kapıyı iterek kilitleme özelliği vardır.\n• Kilitleme için dil bağlantı aparatı gereklidir.\n• Kilitli konumda iken içeriden dil itilerek kilit açılabilir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 304)' },
  },
  '416 > Kabin Kilidi': {
    description: '• Kapıyı iterek kilitleme özelliği vardır.\n• Kilitleme için dil bağlantı aparatı gerekmez.\n• Kilitli konumda iken içeriden dil itilerek kilit açılabilir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 304)' },
  },
  '266 > Mini Çeyrek Dönüşlü Yaylı Kilit': {
    description: '• 45 derecelik geniş ölçüsüne uygun kovan özelliği vardır.\n• Özel yay uygulaması sayesinde 1mm lik yaylanma sağlar.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 3.....)' },
  },
  '066 > Mini Çeyrek Dönüşlü Yaylı Kilit': {
    description: '• Özel yay uygulaması sayesinde 1 mm\' lik sıkıştırma sağlar.\n• Standart uygulamada rondela mevcut değildir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 3.....)', 'YÜZEY': 'Çinko Kaplama' },
  },
  '064 > Çeyrek Dönüşlü Yaylı Kilit': {
    description: '• Özel tasarlanmış yay sayesinde 1.5 mm lik yaylanma sağlayarak kapaklardaki boşluğu alır.\n• IP 66 ( Nema 4) opsiyoneldir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 3.....)' },
  },
  '060 > Çeyrek Dönüşlü Yaylı Kilit': {
    description: '• Özel tasarlanmış yay sayesinde 1.5 mm lik yaylanma sağlayarak kapaklardaki boşluğu alır.\n• IP 66 ( Nema 4) opsiyoneldir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 3.....)' },
  },
  '160 > Dilli Yaylı Kilit': {
    description: '• Dildeki özel yay sayesinde kapak açık iken iterek kilitleme sağlar.\n• Kilitleme mesafesi 22.5 mm olarak sabittir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 3.....)' },
  },
  '260 > Asma Kilit Hamili Çeyrek Dönüşlü Kilit': {
    description: '• Çift kilit kullanıldığında çubuk yardımı ile asma kilit uygulanabilir.',
    materials: { 'MALZEME': 'Paslanmaz Çelik (AISI 3.....)' },
  },
  '140 > Mini Sıkıştırmalı Kilit': {
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 4 mm sıkıştırma özelliği vardır..\n• Farklı göbek seçenekleri mevcuttur.\n• 9 farklı tip dil uygulanır.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'GÖBEK': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'SOMUN': 'Paslanmaz Çelik (AISI 304)' },
  },
  '2040 > Göstergeli Sıkıştırmalı Kilit v1': {
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 5mm sıkıştırma özelliği vardır.\n• Farklı göbek seçenekleri mevcuttur\n• Standart tırnaksız diller uygulanır.\n• Çalışma sıcaklık aralığı: -50 /+80 C\n• M22 somun 60Nm ile sıkılmalı\n• M10 somun 10Nm ile sıkılmalı\n• Max Taşıma kapasitesi 562N\n\nTested\n• Demiryolu uygulamaları için DIN EN 61373 Kategori 1-B standardına göre darbe ve titreşime karşı test edilmiştir.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 304)', 'GÖBEK': 'Paslanmaz Çelik (AISI 304)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'SOMUN': 'Paslanmaz Çelik (AISI 304)' },
  },
  '2040 > Göstergeli Sıkıştırmalı Kilit v2': {
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 5mm sıkıştırma özelliği vardır.\n• Farklı göbek seçenekleri mevcuttur\n• Standart tırnaksız diller uygulanır.\n• Çalışma sıcaklık aralığı: -50 /+80 C\n• M22 somun 60Nm ile sıkılmalı\n• M10 somun 10Nm ile sıkılmalı\n• Max Taşıma kapasitesi 562N\n\nTested\n• Demiryolu uygulamaları için DIN EN 61373 Kategori 1-B standardına göre darbe ve titreşime karşı test edilmiştir.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 304)', 'GÖBEK': 'Paslanmaz Çelik (AISI 304)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'SOMUN': 'Paslanmaz Çelik (AISI 304)' },
  },
  '2060 > Göstergeli Çeyrek Dönüşlü Kilit': {
    description: '• Özel tasarlanmış kovan ve iç kovan sayesinde açık-kapalı bilgisini sağlar.\n• Farklı göbek ve dil seçenekleri mevcuttur.\n• Standart geçiş ölçüsü',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 304)', 'GÖBEK': 'Paslanmaz Çelik (AISI 304)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'SOMUN': 'Paslanmaz Çelik (AISI 304)' },
  },
  '1060 > Çeyrek Dönüşlü Yaylı Kilit': {
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• Kilidi açmak için anahtarla bastırmak ve çevirmek gereklidir.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'GÖBEK': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'SOMUN': 'Paslanmaz Çelik (AISI 30)' },
  },
  '040 > Sıkıştırmalı Kilit v1': {
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 6 mm sıkıştırma özelliği vardır.\n• Ses yalıtımı sağlar.\n• Farklı göbek seçenekleri mevcuttur.\n• Standart tırnaksız diller uygulanır.\n• Demiryolu uygulamarı için DIN EN 61373 Kategori 1-B Standartına göre darbe ve titreşime karşı test edilmiştir.\n• Çalışma sıcaklık aralığı: -50 /+80 C M22 somun 20 Nm ile sıkılmalı M10 somun 10 Nm ile sıkılmalı\n• Titreşim ve darbeye karşı ekstra sıkılık elde etmek için somunun dişlerine özel yapıştırıcı uygulanmaktadır.\n• Max taşıma kapasitesi: 562 N',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'GÖBEK': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'SOMUN': 'Paslanmaz Çelik (AISI 304)' },
  },
  '040 > Sıkıştırmalı Kilit v2': {
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 6 mm sıkıştırma özelliği vardır.\n• Uzun mafsalı sayesinde geniş bir kilitleme aralığı mevcuttur.\n• Ses yalıtımı sağlar.\n• Farklı göbek seçenekleri mevcuttur.\n• 3 farklı tip dil uygulanır.\n• Demiryolu uygulamarı için DIN EN 61373 Kategori 1-B Standartına göre darbe ve titreşime karşı test edilmiştir.\n• Çalışma sıcaklık aralığı: -50 /+80 C M22 somun 60 Nm ile sıkılmalı M10 somun 10 Nm ile sıkılmalı\n• Titreşim ve darbeye karşı ekstra sıkılık elde etmek için somunun dişlerine özel yapıştırıcı uygulanmaktadır.\n• Max taşıma kapasitesi: 562 N',
    materials: { 'KOVAN': 'Paslanmaz çelik (AISI 316)', 'GÖBEK': 'Paslanmaz çelik (AISI 316)', 'DİL': 'Paslanmaz çelik (AISI 304)', 'SOMUN': 'Paslanmaz çelik (AISI 304)' },
  },
  '540 > Sıkıştırmalı Kilit v1': {
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 4 mm sıkıştırma özelliği vardır.\n• Ses yalıtımı sağlar.\n• Farklı göbek seçenekleri mevcuttur.\n• Standart tırnaksız diller uygulanır.\n• Demiryolu uygulamarı için DIN EN 61373 Kategori 1-B standardına göre darbe ve titreşime karşı test edilmiştir.\n• Çalışma sıcaklık aralığı: -50 /+80 C M22 somun 60 Nm ile sıkılmalı M10 somun 10 Nm ile sıkılmalı\n• Titreşim ve darbeye karşı ekstra sıkılık elde etmek için somunun dişlerine özel yapıştırıcı uygulanmaktadır.\n• Max taşıma kapasitesi: 562 N',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'GÖBEK': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'SOMUN': 'Paslanmaz Çelik (AISI 304)' },
  },
  '540 > Sıkıştırmalı Kilit v2': {
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 4 mm sıkıştırma özelliği vardır.\n• Uzun mafsalı sayesinde geniş bir kilitleme aralığı mevcuttur.\n• Ses yalıtımı sağlar.\n• Farklı göbek seçenekleri mevcuttur.\n• 3 farklı tip dil uygulanır.\n• Demiryolu uygulamarı için DIN EN 61373 Kategori 1-B standardına göre darbe ve titreşime karşı test edilmiştir.\n• Çalışma sıcaklık aralığı: -50 /+80 C M22 somun 60 Nm ile sıkılmalı M10 somun 10 Nm ile sıkılmalı\n• Titreşim ve darbeye karşı ekstra sıkılık elde etmek için somunun dişlerine özel yapıştırıcı uygulanmaktadır.\n• Max taşıma kapasitesi: 562 N',
    materials: { 'KOVAN': 'Paslanmaz çelik (AISI 316)', 'GÖBEK': 'Paslanmaz çelik (AISI 316)', 'DİL': 'Paslanmaz çelik (AISI 304)', 'SOMUN': 'Paslanmaz çelik (AISI 304)' },
  },
  '440 > Hijyenik Sıkıştırmalı Kilit v1': {
    description: '• Üzerinde kir ve bakteri biriktirmez.\n• Kolay temizlenir.\n• Özellikle hijyen uygulamaları için tasarlanmıştır.\n• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 6 mm sıkıştırma özelliği vardır.\n• Ses yalıtımı sağlar.\n• Farklı göbek seçenekleri mevcuttur.\n• DIN EN 61373 Kategori 1-B Standartına göre darbe ve titreşime karşı test edilmiştir.\n• GS-NV 6:2015/12 Standartına göre Hijyen gereksinimlerine uygun test edilmiştir.\n• Çalışma sıcaklık aralığı: -50 /+80 C M22 somun 60 Nm ile sıkılmalı M10 somun 10 Nm ile sıkılmalı\n• Titreşim ve darbeye karşı ekstra sıkılık elde etmek için somunun dişlerine özel yapıştırıcı uygulanmaktadır.\n• Max taşıma kapasitesi: 562 N',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI316)', 'GÖBEK': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'SOMUN': 'Paslanmaz Çelik (AISI 304)', 'ORING': 'Silikon' },
  },
  '440 > Hijyenik Sıkıştırmalı Kilit v2': {
    description: '• Titreşime maruz kalan ve sızdırmazlık gereken kabinlerde kullanılır.\n• 4 mm sıkıştırma özelliği vardır.\n• Uzun mafsalı sayesinde geniş bir kilitleme aralığı mevcuttur.\n• Ses yalıtımı sağlar.\n• Farklı göbek seçenekleri mevcuttur.\n• 3 farklı tip dil uygulanır.\n• Demiryolu uygulamarı için DIN EN 61373 Kategori 1-B standardına göre darbe ve titreşime karşı test edilmiştir.\n• Çalışma sıcaklık aralığı: -50 /+80 C M22 somun 60 Nm ile sıkılmalı M10 somun 10 Nm ile sıkılmalı\n• Titreşim ve darbeye karşı ekstra sıkılık elde etmek için somunun dişlerine özel yapıştırıcı uygulanmaktadır.\n• Max taşıma kapasitesi: 562 N',
    materials: { 'KOVAN': 'Paslanmaz çelik (AISI 316)', 'GÖBEK': 'Paslanmaz çelik (AISI 316)', 'DİL': 'Paslanmaz çelik (AISI 304)', 'SOMUN': 'Paslanmaz çelik (AISI 304)' },
  },
  '211 > Asma Kilit Hamili \'L\' Kollu Kilit': {
    description: '• Paslanmaz malzemesi ve asma kilitli tasarımından dolayı dış ortam şartlarında kullanılabilir.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'KOL': 'Paslanmaz Çelik(AISI 316)', 'DİL': 'Paslanmaz Çelik(AISI 304)', 'SOMUN': 'Paslanmaz Çelik(AISI 304)' },
  },
  '045 > Sıkıştırmalı Yaylı Kilit': {
    description: '• Küçük panoların kolay ve hızlı kilitlenip ve açılması mümkündür.\n• Sıkıştırarak kilitleme özelliği mevcuttur.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik', 'GÖBEK': 'Paslanmaz Çelik', 'YAY': 'Paslanmaz Çelik' },
  },
  '460 > Hijyenik Kilit': {
    description: '• Üzerinde kir ve bakteri biriktirmez\n• Kolay temizlenir.\n• Özellikle hijyen uygulamaları için tasarlanmıştır.\n• GS-NV 6:2015/12 Standartına göre Hijyen gereksinimlerine uygun test edilmiştir.\n• Sağ-sol uygulama mevcuttur.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'GÖBEK': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'ORİNG': 'Silikon' },
  },
  '562 > Asma Kilit Hamili Kelebek Kilit': {
    description: '• İki farklı asma kilit uygulanabilir.\nÇap 10 de min. 7.5 mm max. 9 mm kanca çapı\nÇap 7.5 de min. 5 mm max. 6 mm kanca çapı',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'TUTAMAK': 'Paslanmaz Çelik(AISI 316)', 'DİL': 'Paslanmaz Çelik(AISI 304)', 'SOMUN': 'Paslanmaz Çelik(AISI 304)' },
  },
  '110 > Çeyrek Dönüşlü Kilit - \'T\' Kollu': {
    description: '• Çeyrek dönüş uygulaması sağlar.\n• Komple paslanmaz malzemededir.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'KOL': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'CONTA': 'Kauçuk' },
  },
  '111 > "L" Kollu Kilit': {
    description: '• Çeyrek dönüş uygulaması sağlar.\n• Komple paslanmaz malzemededir.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'KOL': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'CONTA': 'Kauçuk' },
  },
  '065 > Kelebek Kilit': {
    description: '• Çeyrek dönüş uygulaması sağlar.\n• Komple paslanmaz malzemededir.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'KELEBEK': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'CONTA': 'Kauçuk' },
  },
  '265 > Asma Kilit Hamili Kelebek Kilit': {
    description: '• Asma kilit uygulanabilir. Asma kilit kanca çapı max. 6 mm olmalıdır.\n• Tüm malzemeler paslanmaz çeliktir.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'KNOB': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'CONTA': 'Kauçuk' },
  },
  '063 > Silindirli Kilit': {
    description: '• Çeyrek dönüş uygulaması sağlar.\n• Komple paslanmaz malzemededir.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'CONTA': 'Kauçuk' },
  },
  '411 > Asma Kilit Hamili \'L\' Kollu Kilit': {
    description: '• Asma kilit uygulanabilir. Asma kilit kanca çapı max. 10 mm olmalıdır.\n• Tüm malzemeler paslanmaz çeliktir.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'KOL': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)', 'CONTA': 'Kauçuk' },
  },
  '860 > Çeyrek Dönüşlü Kilit': {
    description: '• Demiryolu uygulamalarında ilave kilitleme amaçlı kullanılır.',
    materials: { 'KOVAN': 'Paslanmaz Çelik (AISI 316)', 'GÖBEK': 'Paslanmaz Çelik (AISI 316)', 'DİL': 'Paslanmaz Çelik (AISI 304)' },
  },
  '042 > Civatalı Kilit': {
    description: '• Demiryolu uygulamalarında kullanılır.',
    materials: { 'GÖVDE': 'Paslanmaz Çelik (AISI 316)', 'GÖBEK': 'Paslanmaz Çelik (AISI 316)', 'NUT': 'Paslanmaz Çelik (AISI 304)' },
  },
  '276 > Kancalı Mandal': {
    applicationArea: { 'UYGULAMA ALANLARI': 'Demiryolu uygulamaları' },
    materials: { 'MALZEME': 'Paslanmaz Çelik' },
  },
}

// Sızdırmazlık Profilleri ve Kenar Koruma – detay sayfaları (Ürün Varyasyonları tabloları)
const sizdirmazlikProfilleriDetails = {
  '340.09.001 > Geçme Conta': {
    code: '340.09.001',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.001', malzeme: 'EPDM', renk: 'Siyah', R1: '40', R2: '50', R3: '80', R4: '40', DT: '2 - 1 mm', ambalaj: '100' },
    ],
  },
  '340.09.002 > Geçme Conta': {
    code: '340.09.002',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.002', ul94V0: 'Yok', malzeme: 'EPDM', renk: 'Siyah', R1: '50', R2: '60', R3: '180', R4: '40', DT: '3 - 1.5 mm', ambalaj: '100' },
      { urunKodu: '340.09.002.003', ul94V0: 'Var', malzeme: 'EPDM', renk: 'Siyah', R1: '50', R2: '60', R3: '180', R4: '40', DT: '3 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.003 > Geçme Conta': {
    code: '340.09.003',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.003', malzeme: 'EPDM', renk: 'Siyah', R1: '40', R2: '50', R3: '90', R4: '50', DT: '2 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.004 > Geçme Conta': {
    code: '340.09.004',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.004', malzeme: 'EPDM', renk: 'Siyah', R1: '40', R2: '50', R3: '-', R4: '-', DT: '2 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.006 > Geçme Conta': {
    code: '340.09.006',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.006', ul94V0: 'Yok', malzeme: 'EPDM', renk: 'Siyah', R1: '50', R2: '60', R3: '180', R4: '80', DT: '3 - 1.5 mm', ambalaj: '100' },
      { urunKodu: '340.09.006.001', ul94V0: 'Var', malzeme: 'EPDM', renk: 'Siyah', R1: '50', R2: '60', R3: '180', R4: '80', DT: '3 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.007 > Geçme Conta': {
    code: '340.09.007',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.007', malzeme: 'EPDM', renk: 'Siyah', R1: '60', R2: '70', R3: '150', R4: '80', DT: '2 - 1 mm', ambalaj: '100' },
    ],
  },
  '340.09.014 > Geçme Conta': {
    code: '340.09.014',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.014', malzeme: 'EPDM', renk: 'Siyah', R1: '70', R2: '60', R3: '230', R4: '200', DT: '2.5 - 1 mm', ambalaj: '50' },
    ],
  },
  '340.09.971 > Hijyenik Conta': {
    code: '340.09.971',
    name: 'Hijyenik Conta',
    versions: [
      { urunKodu: '340.09.971', malzeme: 'Silikon', renk: 'Mavi', R1: '30', R2: '30', R3: '90', R4: '70', DT: '2 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.701 > Geçme Conta': {
    code: '340.09.701',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.701', malzeme: 'PVC / EPDM', renk: 'Siyah', R1: '20', R2: '25', R3: '55', R4: '30', DT: '2.5 - 1 mm', ambalaj: '2x50' },
    ],
  },
  '340.09.019 > Geçme Conta': {
    code: '340.09.019',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.019', malzeme: 'EPDM', renk: 'Siyah', R1: '60', R2: '70', R3: '220', R4: '200', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.021 > Geçme Conta': {
    code: '340.09.021',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.021', malzeme: 'EPDM', renk: 'Siyah', R1: '80', R2: '80', R3: '250', R4: '230', DT: '3 - 1.5 mm', ambalaj: '40' },
    ],
  },
  '340.09.029 > Geçme Conta': {
    code: '340.09.029',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.029', malzeme: 'EPDM', renk: 'Siyah', R1: '50', R2: '50', R3: '130', R4: '160', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.017 > Geçme Conta': {
    code: '340.09.017',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.017', malzeme: 'EPDM', renk: 'Siyah', R1: '60', R2: '80', R3: '230', R4: '210', DT: '2.5 - 1 mm', ambalaj: '50' },
    ],
  },
  '340.09.705 > Geçme Conta': {
    code: '340.09.705',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.705', malzeme: 'PVC / EPDM', renk: 'Siyah', R1: '50', R2: '60', R3: '130', R4: '70', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.712 > Geçme Conta': {
    code: '340.09.712',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.712', malzeme: 'PVC/EPDM', renk: 'Siyah / Kırmızı', R1: '50', R2: '60', R3: '130', R4: '70', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.707 > Geçme Conta': {
    code: '340.09.707',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.707', malzeme: 'PVC / EPDM', renk: 'Siyah / Kırmızı', R1: '40', R2: '70', R3: '130', R4: '110', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.716 > Geçme Conta': {
    code: '340.09.716',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.716', malzeme: 'PVC / EPDM', renk: 'Siyah / Kırmızı', R1: '40', R2: '60', R3: '130', R4: '110', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.719 > Geçme Conta': {
    code: '340.09.719',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.719', malzeme: 'PVC / EPDM', renk: 'Siyah / Kırmızı', R1: '50', R2: '70', R3: '150', R4: '130', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.729 > Geçme Conta': {
    code: '340.09.729',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.729', malzeme: 'PVC / EPDM', renk: 'Siyah / Beyaz', R1: '90', R2: '90', R3: '150', R4: '150', DT: '4 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.942 > Geçme Conta': {
    code: '340.09.942',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.942', malzeme: '-', renk: '-', R1: '30', R2: '30', R3: '100', R4: '70', DT: '2 - 1 mm', ambalaj: '50' },
    ],
  },
  '340.09.735 > Geçme Conta': {
    code: '340.09.735',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.735', malzeme: '-', renk: '-', R1: '70', R2: '70', R3: '-', R4: '60', DT: '4 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.010 > Geçme Conta': {
    code: '340.09.010',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.010', malzeme: 'EPDM', renk: 'Siyah', R1: '70', R2: '80', R3: '100', R4: '170', DT: '3 - 2 mm', ambalaj: '10' },
    ],
  },
  '340.09.678 > Geçme Conta': {
    code: '340.09.678',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.678', malzeme: 'EPDM', renk: 'Siyah', R1: '70', R2: '70', R3: '50', R4: '-', DT: '-', ambalaj: '100' },
    ],
  },
  '340.09.679 > Geçme Conta': {
    code: '340.09.679',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.679', malzeme: 'EPDM', renk: 'Siyah', R1: '70', R2: '70', R3: '40', R4: '-', DT: '-', ambalaj: '100' },
    ],
  },
  '340.09.101 > Geçme Conta': {
    code: '340.09.101',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.101', malzeme: 'EPDM', renk: 'Siyah', R1: '130', R2: '70', R3: '30', R4: '-', DT: '2.5 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.102 > Geçme Conta': {
    code: '340.09.102',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.102', ul94V0: 'Yok', malzeme: 'EPDM', renk: 'Siyah', R1: '90', R2: '60', R3: '25', R4: '-', DT: '1.5 - 1 mm', ambalaj: '100' },
      { urunKodu: '340.09.102.001', ul94V0: 'Var', malzeme: 'EPDM', renk: 'Siyah', R1: '90', R2: '60', R3: '25', R4: '-', DT: '1.5 - 1 mm', ambalaj: '100' },
    ],
  },
  '340.09.103 > Geçme Conta': {
    code: '340.09.103',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.103', ul94V0: 'Yok', malzeme: 'EPDM', renk: 'Siyah', R1: '70', R2: '60', R3: '25', R4: '-', DT: '2 - 1 mm', ambalaj: '100' },
      { urunKodu: '340.09.103.002', ul94V0: 'Var', malzeme: 'EPDM', renk: 'Siyah', R1: '70', R2: '60', R3: '25', R4: '-', DT: '2 - 1 mm', ambalaj: '100' },
    ],
  },
  '340.09.104 > Geçme Conta': {
    code: '340.09.104',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.104', malzeme: 'EPDM', renk: 'Siyah', R1: '110', R2: '60', R3: '40', R4: '40', DT: '3 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.105 > Geçme Conta': {
    code: '340.09.105',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.105', malzeme: 'EPDM', renk: 'Siyah', R1: '100', R2: '60', R3: '40', R4: '-', DT: '3.5 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.107 > Geçme Conta': {
    code: '340.09.107',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.107', malzeme: 'EPDM', renk: 'Siyah', R1: '100', R2: '60', R3: '40', R4: '-', DT: '3.5 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.124 > Geçme Conta': {
    code: '340.09.124',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.124', malzeme: 'EPDM', renk: 'Siyah', R1: '160', R2: '110', R3: '50', R4: '-', DT: '3.5 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.802 > Geçme Conta': {
    code: '340.09.802',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.802', malzeme: 'PVC / EPDM', renk: 'Siyah / Sarı', R1: '90', R2: '80', R3: '30', R4: '-', DT: '3 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.804 > Geçme Conta': {
    code: '340.09.804',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.804', malzeme: 'PVC / EPDM', renk: 'Siyah / Sarı', R1: '90', R2: '80', R3: '30', R4: '-', DT: '2.5 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.805 > Geçme Conta': {
    code: '340.09.805',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.805', malzeme: 'PVC / EPDM', renk: 'Siyah', R1: '90', R2: '70', R3: '30', R4: '-', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.806 > Geçme Conta': {
    code: '340.09.806',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.806', malzeme: 'PVC / EPDM', renk: 'Siyah', R1: '90', R2: '70', R3: '30', R4: '-', DT: '3.5 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.810 > Geçme Conta': {
    code: '340.09.810',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.810', malzeme: 'PVC / EPDM', renk: 'Siyah', R1: '160', R2: '60', R3: '60', R4: '-', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.100 > Geçme Conta': {
    code: '340.09.100',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.100', malzeme: 'PVC / EPDM', renk: 'Siyah', R1: '60', R2: '40', R3: '30', R4: '-', DT: '2 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.202 > Geçme Conta': {
    code: '340.09.202',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.202', malzeme: 'EPDM', renk: 'Siyah', R1: '60', R2: '60', R3: '-', R4: '-', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.203 > Geçme Conta': {
    code: '340.09.203',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.203', malzeme: 'EPDM', renk: 'Siyah', R1: '120', R2: '90', R3: '-', R4: '-', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.205 > Geçme Conta': {
    code: '340.09.205',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.205', malzeme: 'EPDM', renk: 'Siyah', R1: '60', R2: '110', R3: '140', R4: '220', DT: '4 - 2.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.206 > Geçme Conta': {
    code: '340.09.206',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.206', malzeme: 'EPDM', renk: 'Siyah', R1: '-', R2: '-', R3: '30', R4: '-', DT: '3 - 2 mm', ambalaj: '50' },
    ],
  },
  '340.09.210 > Geçme Conta': {
    code: '340.09.210',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.210', malzeme: 'EPDM', renk: 'Siyah', R1: '-', R2: '-', R3: '60', R4: '-', DT: '3 - 2 mm', ambalaj: '50' },
    ],
  },
  '340.09.902 > Geçme Conta': {
    code: '340.09.902',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.902', malzeme: 'PVC / EPDM', renk: 'Siyah', R1: '50', R2: '50', R3: '160', R4: '160', DT: '3 - 2 mm', ambalaj: '50' },
    ],
  },
  '340.09.904 > Geçme Conta': {
    code: '340.09.904',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.904', malzeme: 'PVC / EPDM', renk: 'Siyah', R1: '50', R2: '50', R3: '160', R4: '160', DT: '3 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.502 > Geçme Conta': {
    code: '340.09.502',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.502', malzeme: 'PVC', renk: 'Siyah', R1: '20', R2: '20', R3: '15', R4: '-', DT: '2 - 1 mm', ambalaj: '200' },
    ],
  },
  '340.09.504 > Geçme Conta': {
    code: '340.09.504',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.504', malzeme: 'PVC', renk: 'Siyah', R1: '20', R2: '20', R3: '15', R4: '-', DT: '2 - 1 mm', ambalaj: '200' },
    ],
  },
  '340.09.516 > Geçme Conta': {
    code: '340.09.516',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.516', malzeme: 'PVC', renk: 'Siyah', R1: '30', R2: '40', R3: '30', R4: '-', DT: '4 - 2 mm', ambalaj: '150' },
    ],
  },
  '340.09.517 > Geçme Conta': {
    code: '340.09.517',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.517', malzeme: 'PVC', renk: 'Siyah / Kırmızı', R1: '30', R2: '40', R3: '30', R4: '-', DT: '3 - 1.5 mm', ambalaj: '150' },
    ],
  },
  '340.09.522 > Geçme Conta': {
    code: '340.09.522',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.522', malzeme: 'PVC', renk: 'Siyah', R1: '30', R2: '40', R3: '30', R4: '-', DT: '2.5 - 1 mm', ambalaj: '150' },
    ],
  },
  '340.09.523 > Geçme Conta': {
    code: '340.09.523',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.523', malzeme: 'PVC', renk: 'Siyah / Kırmızı', R1: '50', R2: '50', R3: '30', R4: '-', DT: '3 - 1.5 mm', ambalaj: '150' },
    ],
  },
  '340.09.527 > Geçme Conta': {
    code: '340.09.527',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.527', malzeme: 'PVC', renk: 'Siyah / Sarı', R1: '50', R2: '60', R3: '30', R4: '-', DT: '2.5 - 1.5 mm', ambalaj: '150' },
    ],
  },
  '340.09.530 > Geçme Conta': {
    code: '340.09.530',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.530', malzeme: 'PVC', renk: 'Siyah / Kırmızı', R1: '30', R2: '40', R3: '30', R4: '-', DT: '4 - 2 mm', ambalaj: '100' },
    ],
  },
  '340.09.538 > Geçme Conta': {
    code: '340.09.538',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.538', malzeme: 'EPDM', renk: 'Siyah / Sarı', R1: '50', R2: '60', R3: '40', R4: '-', DT: '4 - 2 mm', ambalaj: '100' },
    ],
  },
  '340.09.529 > Geçme Conta': {
    code: '340.09.529',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.529', malzeme: '-', renk: '-', R1: '50', R2: '50', R3: '30', R4: '-', DT: '3 - 2 mm', ambalaj: '100' },
    ],
  },
  '340.09.540 > Geçme Conta': {
    code: '340.09.540',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.540', malzeme: 'EPDM', renk: 'Siyah / Sarı', R1: '50', R2: '60', R3: '40', R4: '-', DT: '4 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.419 > Geçme Conta': {
    code: '340.09.419',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.419', malzeme: 'EPDM', renk: 'Siyah', R1: '70', R2: '80', R3: '', R4: '', DT: '3,5', ambalaj: '50' },
    ],
  },
  '340.09.380 > Geçme Conta': {
    code: '340.09.380',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.380', malzeme: 'EPDM', renk: 'Siyah', R1: '40', R2: '40', R3: '', R4: '', DT: '4 - 1 mm', ambalaj: '50' },
    ],
  },
  '340.09.381 > Geçme Conta': {
    code: '340.09.381',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.381', malzeme: 'EPDM', renk: 'Siyah', R1: '40', R2: '40', R3: '', R4: '', DT: '3.5 - 1.5 mm', ambalaj: '50' },
    ],
  },
  '340.09.385 > Geçme Conta': {
    code: '340.09.385',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.385', malzeme: 'EPDM', renk: 'Siyah', R1: '45', R2: '45', R3: '', R4: '', DT: '4.5 - 2 mm', ambalaj: '50' },
    ],
  },
  '340.09.382 > Geçme Conta': {
    code: '340.09.382',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.382', malzeme: 'EPDM', renk: 'Siyah', R1: '30', R2: '30', R3: '', R4: '', DT: '2.5 - 1.5 mm', ambalaj: '100' },
    ],
  },
  '340.09.383 > Geçme Conta': {
    code: '340.09.383',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.383', malzeme: 'EPDM', renk: 'Siyah', ambalaj: '200' },
    ],
  },
  '340.09.611 > Geçme Conta': {
    code: '340.09.611',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.611', malzeme: 'EPDM', renk: 'Siyah', ambalaj: '100' },
    ],
  },
  '340.09.384 > Geçme Conta': {
    code: '340.09.384',
    name: 'Geçme Conta',
    versions: [
      { urunKodu: '340.09.384', malzeme: 'EPDM', renk: 'Siyah', ambalaj: '200' },
    ],
  },
  '34001010 > U Tipi Fitiller': {
    code: '34001010',
    name: 'U Tipi Fitiller',
    versions: [
      { urunKodu: '34001010', malzeme: 'PVC', renk: 'Siyah', ambalaj: '100' },
    ],
  },
  '34001011 > U Tipi Fitiller': {
    code: '34001011',
    name: 'U Tipi Fitiller',
    versions: [
      { urunKodu: '34001011', malzeme: 'PVC', renk: 'Siyah', ambalaj: '100' },
    ],
  },
  '34001012 > U Tipi Fitiller': {
    code: '34001012',
    name: 'U Tipi Fitiller',
    versions: [
      { urunKodu: '34001012', malzeme: 'PVC', renk: 'Siyah', ambalaj: '100' },
    ],
  },
  '34001015 > U Tipi Fitiller': {
    code: '34001015',
    name: 'U Tipi Fitiller',
    versions: [
      { urunKodu: '34001015', malzeme: 'PVC', renk: 'Siyah', ambalaj: '100' },
    ],
  },
}

function ProductDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const { slug } = useParams()
  const { productName, productImage, productLogo, brand, productSlug } = location.state || {}
  const [isPdfFullscreen, setIsPdfFullscreen] = useState(false)

  const handleBack = () => {
    // Aynı akışta (liste -> detay) geldiyse history'den dönmek doğru state'i korur.
    if (typeof window !== 'undefined' && window.history.length > 1) {
      navigate(-1)
      return
    }
    navigate('/urunler')
  }

  // ESC tuşu ile tam ekran modunu kapat
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isPdfFullscreen) {
        setIsPdfFullscreen(false)
      }
    }
    if (isPdfFullscreen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isPdfFullscreen])

  // Atos ürün detay sayfası: Atos için ayrı bir render akışı kullanalım.
  const [atosProduct, setAtosProduct] = useState(null)
  const [atosLoading, setAtosLoading] = useState(false)
  const [atosError, setAtosError] = useState(null)

  useEffect(() => {
    if (brand !== 'Atos') return
    const targetSlug = productSlug || slug
    if (!targetSlug) return

    let cancelled = false
    ;(async () => {
      try {
        setAtosError(null)
        setAtosLoading(true)
        const res = await fetch('/atos-products.json')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()

        let found = null
        for (const main of json || []) {
          for (const sub of main?.subcategories || []) {
            const hit = (sub?.products || []).find((p) => p?.slug === targetSlug)
            if (hit) {
              found = hit
              break
            }
          }
          if (found) break
        }

        if (!cancelled) setAtosProduct(found)
      } catch (e) {
        if (!cancelled) setAtosError(e?.message || String(e))
      } finally {
        if (!cancelled) setAtosLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [brand, productSlug, slug])

  // Oskar ürün detay sayfası: Oskar için ayrı render akışı kullanıyoruz.
  const [oskarProduct, setOskarProduct] = useState(null)
  const [oskarLoading, setOskarLoading] = useState(false)
  const [oskarError, setOskarError] = useState(null)

  useEffect(() => {
    if (brand !== 'Oskar') return
    const targetSlug = productSlug || slug
    if (!targetSlug) return

    let cancelled = false
    ;(async () => {
      try {
        setOskarError(null)
        setOskarLoading(true)
        const res = await fetch('/oskar-products.json')
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json = await res.json()

        let found = null
        for (const main of json || []) {
          for (const sub of main?.subcategories || []) {
            const hit = (sub?.products || []).find((p) => p?.slug === targetSlug)
            if (hit) {
              found = hit
              break
            }
          }
          if (found) break
        }

        if (!cancelled) setOskarProduct(found)
      } catch (e) {
        if (!cancelled) setOskarError(e?.message || String(e))
      } finally {
        if (!cancelled) setOskarLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [brand, productSlug, slug])

  if (brand === 'Oskar') {
    if (oskarLoading) {
      return (
        <div className="bg-slate-50 pb-16 text-slate-900">
          <div className="mx-auto max-w-7xl px-1.5 pt-10 sm:px-2 lg:px-3">
            <button
              onClick={handleBack}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#166534]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </button>
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-base text-slate-600">Oskar ürün verisi yükleniyor...</p>
            </div>
          </div>
        </div>
      )
    }

    if (!oskarProduct) {
      return (
        <div className="bg-slate-50 pb-16 text-slate-900">
          <div className="mx-auto max-w-7xl px-1.5 pt-10 sm:px-2 lg:px-3">
            <button
              onClick={handleBack}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#166534]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </button>
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-base text-slate-600">Oskar ürün bulunamadı.</p>
              {oskarError ? <p className="mt-2 text-xs text-slate-500">{oskarError}</p> : null}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-slate-50 pb-16 text-slate-900">
        <section className="mx-auto w-full max-w-7xl px-1.5 pt-8 sm:px-2 lg:px-3">
          <button
            onClick={handleBack}
            className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#166534]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Geri Dön
          </button>

          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-1">
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4">
                <img
                  src={
                    oskarProduct.image ||
                    `https://via.placeholder.com/320x200.png?text=${encodeURIComponent(oskarProduct.name)}`
                  }
                  alt={oskarProduct.name}
                  className="max-h-64 w-auto object-contain"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
              <h1 className="text-2xl font-bold text-slate-900">{oskarProduct.name}</h1>

              {(() => {
                const teknikRaw = String(oskarProduct.teknikOzellikler || '').trim()
                const aciklamaRaw = String(oskarProduct.description || '').trim()

                // Teknik görseli ve PDF referanslarını temizliyoruz; kullanıcı istemiyor.
                const cleanedTeknik = teknikRaw
                  .split(/\r?\n/)
                  .filter((line) => {
                    const l = line.trim()
                    if (!l) return false
                    if (/(\.pdf\b|\bPDF\b)/i.test(l)) return false
                    if (/teknik\s*g[oö]rsel/i.test(l)) return false
                    if (/https?:\/\//i.test(l) && /resim\/urun/i.test(l)) return false
                    return true
                  })
                  .join('\n')

                const cleanedAciklama = aciklamaRaw
                  .split(/\r?\n/)
                  .map((l) => l.trim())
                  .filter(Boolean)
                  .join('\n')

                // Açıklamadan "Kullanım Alanları" ve "Malzeme" bloklarını ayıkla.
                // Not: Malzeme satırlarının çoğu "GÖVDE : ...", "O’RING : ..." gibi olduğu için
                // "bir sonraki başlık" heuristiği yanlışlıkla bloğu erken kesebiliyor.
                // Bu yüzden Malzeme'yi "Malzeme :" sonrasından başlayıp açıklama sonuna kadar alıyoruz.
                const extractBetween = (text, startRe, endRe = null) => {
                  if (!text) return ''
                  const t = String(text)
                  const start = t.search(startRe)
                  if (start < 0) return ''
                  const afterStart = t.slice(start).replace(startRe, '')
                  if (!endRe) return afterStart.trim()
                  const endIdx = afterStart.search(endRe)
                  const block = endIdx >= 0 ? afterStart.slice(0, endIdx) : afterStart
                  return block.trim()
                }

                const kullanim = extractBetween(
                  cleanedAciklama,
                  /Kullanım\s*Alanları\s*:\s*/i,
                  /\n\s*Malzeme\s*:\s*/i
                )
                const malzeme = extractBetween(cleanedAciklama, /Malzeme\s*:\s*/i, null)

                const hasAny = Boolean(kullanim || malzeme || cleanedTeknik.trim() || cleanedAciklama.trim())
                if (!hasAny) return null

                return (
                  <div className="mt-5 space-y-4">
                    {kullanim ? (
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                        <div className="mb-2 text-sm font-semibold text-slate-900">Kullanım Alanları</div>
                        <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">{kullanim}</div>
                      </div>
                    ) : null}

                    {malzeme ? (
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                        <div className="mb-2 text-sm font-semibold text-slate-900">Malzeme</div>
                        <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">{malzeme}</div>
                      </div>
                    ) : null}

                    {cleanedTeknik.trim() ? (
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                        <div className="mb-2 text-sm font-semibold text-slate-900">Teknik Özellikler</div>
                        <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">{cleanedTeknik}</div>
                      </div>
                    ) : null}
                  </div>
                )
              })()}
            </div>
          </div>
        </section>
      </div>
    )
  }

  if (brand === 'Atos') {
    if (atosLoading) {
      return (
        <div className="bg-slate-50 pb-16 text-slate-900">
          <div className="mx-auto max-w-7xl px-1.5 pt-10 sm:px-2 lg:px-3">
            <button
              onClick={handleBack}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#166534]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </button>
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-base text-slate-600">Atos ürün verisi yükleniyor...</p>
            </div>
          </div>
        </div>
      )
    }

    if (!atosProduct) {
      return (
        <div className="bg-slate-50 pb-16 text-slate-900">
          <div className="mx-auto max-w-7xl px-1.5 pt-10 sm:px-2 lg:px-3">
            <button
              onClick={handleBack}
              className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#166534]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Geri Dön
            </button>
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center shadow-sm">
              <p className="text-base text-slate-600">Atos ürün bulunamadı.</p>
              {atosError ? <p className="mt-2 text-xs text-slate-500">{atosError}</p> : null}
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-slate-50 pb-16 text-slate-900">
        <section className="mx-auto w-full max-w-7xl px-1.5 pt-8 sm:px-2 lg:px-3">
          <button
            onClick={handleBack}
            className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#166534]"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Geri Dön
          </button>

          <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-1">
              <div className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-4">
                <img
                  src={atosProduct.image || `https://via.placeholder.com/320x200.png?text=${encodeURIComponent(atosProduct.name)}`}
                  alt={atosProduct.name}
                  className="max-h-64 w-auto object-contain"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
              <h1 className="text-2xl font-bold text-slate-900">{atosProduct.name}</h1>

              {(() => {
                const raw = String(atosProduct.teknikOzellikler ?? '')
                const lines = raw.split(/\r?\n/)

                // PDF satırlarını temizliyoruz (örn: "KI01_11_PDF ( PDF ) - https://...pdf").
                const cleaned = lines
                  .filter((line) => {
                    const l = line.trim()
                    if (!l) return true
                    if (/(PDF\s*\(\s*PDF\s*\))|(\.pdf\b)/i.test(l)) return false
                    if (/\bPDF\b/i.test(l) && /https?:\/\//i.test(l)) return false
                    return true
                  })
                  .join('\n')

                if (!cleaned.trim()) return null

                return (
                  <div className="mt-5 space-y-4">
                    <div className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                      <div className="mb-2 text-sm font-semibold text-slate-900">Teknik Özellikler</div>
                      <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
                        {cleaned}
                      </div>
                    </div>
                  </div>
                )
              })()}
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Eğer state yoksa geri dön
  if (!productName) {
    return (
      <div className="bg-slate-50 pb-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-1.5 pt-10 sm:px-2 lg:px-3">
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center shadow-sm">
            <p className="text-base text-slate-600">Ürün bulunamadı.</p>
            <button
              onClick={() => navigate('/urunler')}
              className="mt-4 rounded-lg bg-[#166534] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#14532d]"
            >
              Ürünlere Dön
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Ürün adından kod ve ismi çıkar (örn: "001 > Kollu Kilit (Küçük Versiyon)" -> code: "001", name: "Kollu Kilit (Küçük Versiyon)")
  const extractProductInfo = (name) => {
    // IC, CT, CY kodları için özel kontrol
    const match = name.match(/^((?:\d+(?:\s*[A-Z]\d+)?)|(?:IC|CT\d+|CY\d+))\s*>\s*(.+)$/)
    if (match) {
      return { code: match[1], name: match[2] }
    }
    // Kod yoksa, sadece ismi döndür
    if (name.includes('Kollu Kilit') || name.includes('Dikey Hareketli') || name.includes('İspanyolet') || name.includes('Dikey Mekanizmalı') || name.includes('İç Kilitleme') || name.includes('ispanyolet') || name.includes('Kabin Kilidi') || name.includes('T Kollu') || name.includes('"T" Kollu') || name.includes('\'T\' Kollu') || name.includes('Trafo Kilidi') || name.includes('Klima Santral Kilidi') || name.includes('Klima Kabin Kilidi') || name.includes('Fonsiyonel Kilit Menteşe') || name.includes('Profil Bağlantı Parçası') || name.includes('Sıkıştırmalı Kilit')) {
      return { code: null, name: name }
    }
    return null
  }

  const productInfo = extractProductInfo(productName)
  const fromSection = location?.state?.fromSection
  const baseDetail = productDetails[productName]
  const productDetail = (fromSection === 'PASLANMAZ ÇELİK MENTEŞELER' && paslanmazCelikMenteseDetails[productName])
    ? { ...(baseDetail || {}), code: productInfo?.code, name: productInfo?.name || productName, ...paslanmazCelikMenteseDetails[productName] }
    : (fromSection === 'PASLANMAZ ÇELİK KİLİTLER' && paslanmazCelikKilitDetails[productName])
      ? { ...(baseDetail || {}), code: productInfo?.code, name: productInfo?.name || productName, ...paslanmazCelikKilitDetails[productName] }
      : ((fromSection === 'SIZDIRMAZLIK PROFİLLERİ VE KENAR KORUMA' || sizdirmazlikProfilleriDetails[productName]) && sizdirmazlikProfilleriDetails[productName])
        ? { ...(baseDetail || {}), code: productInfo?.code || productName?.split(' > ')[0], name: productInfo?.name || productName?.split(' > ')[1] || productName, ...sizdirmazlikProfilleriDetails[productName] }
        : baseDetail
  
  // Kollu kilit ürünleri için otomatik detay sayfası
  const isLockProduct = productInfo && (productInfo.name.includes('Kollu Kilit') || productInfo.name.includes('Dikey Hareketli') || productInfo.name.includes('İspanyolet') || productInfo.name.includes('Dikey Mekanizmalı') || productInfo.name.includes('İç Kilitleme') || productInfo.name.includes('ispanyolet') || productInfo.name.includes('Kabin Kilidi') || productInfo.name.includes('T Kollu') || productInfo.name.includes('"T" Kollu') || productInfo.name.includes('\'T\' Kollu') || productInfo.name.includes('Trafo Kilidi') || productInfo.name.includes('Klima Santral Kilidi') || productInfo.name.includes('Klima Kabin Kilidi') || productInfo.name.includes('Fonsiyonel Kilit Menteşe') || productInfo.name.includes('Profil Bağlantı Parçası') || productInfo.name.includes('Sıkıştırmalı Kilit') || productInfo.name.includes('Çubuk') || productInfo.name.includes('Köşe Menteşe') || productInfo.name.includes('Kenar Menteşe') || productInfo.name.includes('Gizli Menteşe') || productInfo.name.includes('Klima Santral Menteşesi') || productInfo.code === 'IC' || productInfo.code === 'CT1' || productInfo.code === 'CT2' || productInfo.code === 'CY1' || productInfo.code === 'CY2')
  const hasDetail = !!productDetail || isLockProduct
  
  // Kollu kilit resim mapping (ürün koduna göre)
  const getKolluKilitImage = () => {
    const code = productDetail?.code || productInfo?.code
    if (!code) return productImage || '/kollukilitler.png'
    
    // Kabin kilitleri için özel resim mapping
    if (productName?.includes('Kabin Kilidi')) {
      const kabinKilitImageMap = {
        '016': productName?.includes('Metal Gövde') ? '/016kabinkilidi_metalgovde.jpg' : 
               productName?.includes('Plastik Gövde') ? '/016kabinkilidi_plastikgovde.jpg' :
               productName?.includes('Kancalı') ? '/016kabinkilidi_kancalikilitentegreli.jpg' :
               '/016kabinkilidi_metalgovde.jpg',
        '116': '/116kabinkilidi.jpg',
        '216': '/216kabinkilidi.jpg',
        '316': '/316kabinkilidi.jpg',
      }
      
      if (kabinKilitImageMap[code]) {
        return kabinKilitImageMap[code]
      }
    }
    
    // 612 > Klima Santral Kilidi için özel resim mapping (önce kontrol edilmeli)
    if (code === '612') {
      if (productName?.includes('Klima Santral Kilidi')) {
        // Önce kartlardaki resmi kontrol et (productImage state'i)
        if (productImage) {
          return productImage
        }
        // Eğer productImage yoksa, ürün adına göre resim seç
        if (productName?.includes('T\' Kollu') || productName?.includes('\'T\' Kollu') || productName?.includes('T Kollu')) {
          return '/612_t_kolluklimasantralkilidi.jpg'
        }
        // Genel 612 > Klima Santral Kilidi için
        return '/612klimasantralkilidi.jpg'
      }
      if (productName?.includes('Klima Kabin Kilidi')) {
        // Önce kartlardaki resmi kontrol et (productImage state'i)
        if (productImage) {
          return productImage
        }
        // Eğer productImage yoksa, ürün adına göre resim seç
        if (productName?.includes('L\' Kollu') || productName?.includes('\'L\' Kollu') || productName?.includes('L Kollu')) {
          return '/612_l_kollukabinkilidi.jpg'
        }
        return '/612klimakabinkilidi.jpg'
      }
    }
    
    // 712 > Fonsiyonel Kilit Menteşe için özel resim mapping
    if (code === '712' && productName?.includes('Fonsiyonel Kilit Menteşe')) {
      return '/712fonsiyonelkilitmese.jpg'
    }
    
    // Klima Santral Kilidi için özel resim mapping
    if (productName?.includes('Klima Santral Kilidi')) {
      // Önce code kontrolü yapılmalı (112 ve 012 için farklı resimler)
      if (code === '112') {
        // 112 > Klima Santral Kilidi için - kartlardaki resimlerle aynı
        if (productName?.includes('Aksesuarları')) {
          return '/112-klimasantralkilidiaksesuarlar.jpg'
        }
        if (productName?.includes('Versiyon 1')) {
          return '/112_v1klimasantral.jpg'
        }
        if (productName?.includes('Versiyon 2')) {
          return '/112_v2klimasantralkilidi.jpg'
        }
        if (productName?.includes('Versiyon 3')) {
          return '/112_v4klimasantralkilidi.jpg'
        }
        if (productName?.includes('Versiyon 4')) {
          return '/112_klimasantralkilidi_versiyon4.jpg'
        }
        // Genel 112 > Klima Santral Kilidi için (Versiyon 1 ile aynı resim)
        return '/112_v1klimasantral.jpg'
      }
      if (code === '012') {
        // 012 > Klima Santral Kilidi için
        if (productName?.includes('Versiyon 1')) {
          return '/012klimasantralkilidi.jpg'
        }
        if (productName?.includes('Versiyon 2')) {
          return '/012klimasantralkilidi2.jpg'
        }
        if (productName?.includes('Versiyon 3')) {
          return '/012klimasantralkilidi3.jpg'
        }
        if (productName?.includes('Versiyon 4')) {
          return '/012_v4klimasantral.jpg'
        }
        if (productName?.includes('Aksesuarı')) {
          return '/012klimasantralkilidiaksesuar.jpg'
        }
        // Genel 012 > Klima Santral Kilidi için
        return '/012_v4klimasantral.jpg'
      }
      // Genel durum için
      return '/012klimasantralkilidi.jpg'
    }
    
    // 078 > Profil Bağlantı Parçası için özel resim mapping
    if (code === '078' && productName?.includes('Profil Bağlantı Parçası')) {
      return '/078_profilbaglantıparcasi.jpg'
    }
    
    // 462 > Sıkıştırmalı Kilit için özel resim mapping
    if (code === '462' && productName?.includes('Sıkıştırmalı Kilit')) {
      return '/462_sikistirmalikilit.jpg'
    }
    
    // 077 > Sıkıştırmalı Kilit için özel resim mapping
    if (code === '077' && productName?.includes('Sıkıştırmalı Kilit')) {
      return '/sikistirmalikilit/077sikistirmalikilit.jpg'
    }
    
    // 177 > Sıkıştırmalı Kilit için özel resim mapping
    if (code === '177' && productName?.includes('Sıkıştırmalı Kilit')) {
      return '/sikistirmalikilit/177sikistirmalikilit.jpg'
    }
    
    // 377 > Sıkıştırmalı Kilit için özel resim mapping
    if (code === '377' && productName?.includes('Sıkıştırmalı Kilit')) {
      return '/sikistirmalikilit/377sikistirmalikilit.jpg'
    }
    
    // 477 > Sıkıştırmalı Kilit için özel resim mapping
    if (code === '477' && productName?.includes('Sıkıştırmalı Kilit')) {
      return '/sikistirmalikilit/477sikistirmalikilit.jpg'
    }
    
    // 072 > Fonksiyonel Kilit için özel resim mapping
    if (code === '072' && productName?.includes('Fonksiyonel Kilit')) {
      return '/sikistirmalikilit/072sikistirmalikilit.jpg'
    }
    
    // 070 > Kaldır-Çevir için özel resim mapping
    if (code === '070' && productName?.includes('Kaldır-Çevir')) {
      return '/sikistirmalikilit/070sikistirmalikilit.jpg'
    }
    
    // 170 > Kaldır-Çevir için özel resim mapping
    if (code === '170' && productName?.includes('Kaldır-Çevir')) {
      return '/sikistirmalikilit/170sikistirmalikilit.jpg'
    }
    
    // 270 > Sıkıştırmalı Kilit için özel resim mapping
    if (code === '270' && productName?.includes('Sıkıştırmalı Kilit')) {
      if (productName?.includes('Sıkıştırmalı Kilit 2')) {
        return '/sikistirmalikilit/270sikistirmalikilit2.jpg'
      }
      return '/sikistirmalikilit/270sikistirmalikilit.jpeg'
    }
    
    // ÇEYREK DÖNÜŞLÜ KİLİTLER'deki Sıkıştırmalı Kilitler için özel resim mapping
    if ((code === '040' || code === '640' || code === '140' || code === '045') && productName?.includes('Sıkıştırmalı Kilit')) {
      // location.state'ten veya pathname'den kontrol et
      const isFromCeyrekDonuslu = location?.state?.fromSection === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' ||
                                   location?.pathname?.includes('ceyrek-donuslu-kilitler/sikistirmali-kilitler')
      
      if (isFromCeyrekDonuslu) {
        if (code === '040') {
          return productName?.includes('v1') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/040_v1.jpg' :
                 productName?.includes('v2') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/040_v2.jpg' :
                 '/ceyrekdonuslukilitler/sikistirmalikilitler/040_v1.jpg'
        } else if (code === '640') {
          return productName?.includes('v1') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/640_v1.jpg' :
                 productName?.includes('v2') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/640_v2.jpg' :
                 '/ceyrekdonuslukilitler/sikistirmalikilitler/640_v1.jpg'
        } else if (code === '140') {
          return '/ceyrekdonuslukilitler/sikistirmalikilitler/140.jpg'
        } else if (code === '045') {
          return '/ceyrekdonuslukilitler/sikistirmalikilitler/045.jpg'
        }
      }
    }
    
    // ÇEYREK DÖNÜŞLÜ KİLİTLER'deki Kolay Montaj Ç.D. Kilitler için özel resim mapping
    if ((code === '560' || code === '660' || code === '661' || code === '761' || code === '366' || code === '566') && 
        (productName?.includes('Çeyrek Dönüşlü') || productName?.includes('Dönüşlü'))) {
      // location.state'ten veya pathname'den kontrol et
      const isFromCeyrekDonuslu = location?.state?.fromSection === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' ||
                                   location?.pathname?.includes('ceyrek-donuslu-kilitler') ||
                                   location?.pathname?.includes('kolay-montaj-cd-kilitler')
      
      if (isFromCeyrekDonuslu) {
        const kolayMontajCeyrekImageMap = {
          '560': '/ceyrekdonuslukilitler/kolaymontaj/560-1ccd.jpg',
          '660': '/ceyrekdonuslukilitler/kolaymontaj/6601cc.jpg',
          '661': '/ceyrekdonuslukilitler/kolaymontaj/661dcc.jpg',
          '761': '/ceyrekdonuslukilitler/kolaymontaj/761_gobek.jpg',
          '366': '/ceyrekdonuslukilitler/kolaymontaj/366d.jpg',
          '566': '/ceyrekdonuslukilitler/kolaymontaj/566d.jpg',
        }
        if (kolayMontajCeyrekImageMap[code]) {
          return kolayMontajCeyrekImageMap[code]
        }
      }
    }
    
    // 071 > Sürgü Kilit için özel resim mapping
    if (code === '071' && productName?.includes('Sürgü Kilit')) {
      return '/surgukilit/071surgukilit.jpg'
    }
    
    // 171 > Mini Sürgü Kilit için özel resim mapping
    if (code === '171' && productName?.includes('Mini Sürgü Kilit')) {
      return '/surgukilit/171surgukilit.jpg'
    }
    
    // 271 > Sürgü Kilit için özel resim mapping
    if (code === '271' && productName?.includes('Sürgü Kilit')) {
      return '/surgukilit/271surgukilit.jpg'
    }
    
    // 371 > Sürgü Kilit için özel resim mapping
    if (code === '371' && productName?.includes('Sürgü Kilit')) {
      return '/surgukilit/371surgukilit.jpg'
    }
    
    // 471 > Mini Sürgü Kilit için özel resim mapping
    if (code === '471' && productName?.includes('Mini Sürgü Kilit')) {
      return '/surgukilit/471surgukilit.jpg'
    }
    
    // 571 > Fişeli Sürgü Kilit için özel resim mapping
    if (code === '571' && productName?.includes('Fişeli Sürgü Kilit')) {
      return '/surgukilit/571surgukilit.jpg'
    }
    
    // 671 > Fişeli Sürgü Kilit için özel resim mapping
    if (code === '671' && productName?.includes('Fişeli Sürgü Kilit')) {
      return '/surgukilit/671surgukilit.jpg'
    }
    
    // 073 > Perde Sacı Kilidi için özel resim mapping
    if (code === '073' && productName?.includes('Perde Sacı Kilidi')) {
      return '/cu-digerurunler/073perdesacikilit.jpg'
    }
    
    // 075 > Allen Göbekli Pano Kilidi için özel resim mapping
    if (code === '075' && productName?.includes('Allen Göbekli Pano Kilidi')) {
      return '/cu-digerurunler/075allengobekli.jpg'
    }
    
    // 176 > Kancalı Kilit için özel resim mapping
    if (code === '176' && productName?.includes('Kancalı Kilit')) {
      return '/cu-digerurunler/176kancalikilit.png'
    }
    
    // 2800 > Kancalı Kilit için özel resim mapping
    if (code === '2800' && productName?.includes('Kancalı Kilit')) {
      return '/cu-digerurunler/2800kancalikilit.jpg'
    }
    
    // 2810 > Kancalı Kilit (Büyük) için özel resim mapping
    if (code === '2810' && productName?.includes('Kancalı Kilit (Büyük)')) {
      return '/cu-digerurunler/2810kancalikilitbuyuk.jpg'
    }
    
    // DİĞER ELEKTRONİK KİLİTLER için özel resim mapping
    if (code === '3341' || code === '3311' || code === '3301' || code === '3331' || code === '3501') {
      const digerElektronikKilitlerImageMap = {
        '3341': '/digerelektronikkilitler/3341.jpg',
        '3311': '/digerelektronikkilitler/3311.jpg',
        '3301': '/digerelektronikkilitler/3301.jpg',
        '3331': '/digerelektronikkilitler/3331.jpg',
        '3501': '/digerelektronikkilitler/3501.jpg',
      }
      
      if (digerElektronikKilitlerImageMap[code]) {
        return digerElektronikKilitlerImageMap[code]
      }
      
      // Fallback - dosya yoksa genel resim
      return productImage || '/cesitliurunler/cucesitli.jpg'
    }
    
    // KENAR MENTEŞELER için özel resim mapping
    if (code === '090' || code === '091' || code === '092' || code === '093' || code === '191' || code === '192' || code === '193' || code === '293' || code === '393' || code === '493' || code === '593' || code === '693' || code === '793' || code === '893' || code === '993' || code === '1093' || code === '1193') {
      const kenarMenteselerImageMap = {
        '090': '/kenarmenteseler/090_nikel.jpg',
        '091': '/kenarmenteseler/091_nikel.jpg',
        '092': '/kenarmenteseler/092_krom.jpg',
        '192': '/kenarmenteseler/192_krom.jpg',
        '093': '/kenarmenteseler/093_krom.jpg',
        '193': '/kenarmenteseler/193_krom.jpg',
        '793': '/kenarmenteseler/793.jpg',
        '893': '/kenarmenteseler/893.jpg',
        '191': '/kenarmenteseler/191.jpg',
        '1093': '/kenarmenteseler/1093.jpg',
        '993': '/kenarmenteseler/993.jpg',
        '1193': '/kenarmenteseler/1193_krom.jpg',
        '393': '/kenarmenteseler/393.jpg',
        '293': '/kenarmenteseler/293.jpg',
        '493': '/kenarmenteseler/493_v1_krom.jpg',
        '593': '/kenarmenteseler/593_krom.jpg',
        '693': '/kenarmenteseler/693_kenar_krom.jpg',
      }
      
      if (kenarMenteselerImageMap[code]) {
        return kenarMenteselerImageMap[code]
      }
      
      // Fallback - dosya yoksa genel resim
      return productImage || '/kenarmenteseler.png'
    }
    
    // GİZLİ MENTEŞELER için özel resim mapping
    if (code === '094' || code === '095' || code === '096' || code === '194' || code === '195' || code === '196' || code === '294' || code === '295' || code === '296' || code === '394' || code === '395' || code === '595' || code === '695' || code === '795' || code === '895' || code === '995' || code === '1095' || code === '1495' || code === '1795' || code === '1995' || code === '089' || code === '189' || code === '289' || code === '389') {
      const gizliMenteselerImageMap = {
        '094': '/gizlimenteseler/094.jpg',
        '194': '/gizlimenteseler/194.jpg',
        '096': '/gizlimenteseler/096_1.jpg',
        '196': '/gizlimenteseler/196.jpg',
        '294': '/gizlimenteseler/294.jpg',
        '296': '/gizlimenteseler/296.jpg',
        '095': '/gizlimenteseler/095_1.jpg',
        '195': '/gizlimenteseler/195_1.jpg',
        '295': '/gizlimenteseler/295_v3.jpg',
        '395': '/gizlimenteseler/395_1.jpg',
        '695': '/gizlimenteseler/695_v1.jpg',
        '795': '/gizlimenteseler/795.jpg',
        '1795': '/gizlimenteseler/1795.jpg',
        '895': '/gizlimenteseler/895.jpg',
        '1095': '/gizlimenteseler/1095.jpg',
        '1995': '/gizlimenteseler/1995_v4.jpg',
        '595': '/gizlimenteseler/595.jpeg',
        '189': '/gizlimenteseler/189.jpg',
        '389': '/gizlimenteseler/389.jpg',
        '089': '/gizlimenteseler/089.jpg',
        '289': '/gizlimenteseler/289_v2.jpg',
        '394': '/gizlimenteseler/394.jpg',
        '1495': '/gizlimenteseler/1495.jpg',
      }
      
      // 995 için v1 ve v2 ayrımı
      if (code === '995') {
        if (productName?.includes('v1')) {
          return '/gizlimenteseler/995_v1.jpg'
        } else if (productName?.includes('v2')) {
          return '/gizlimenteseler/995_v2.jpg'
        }
        return '/gizlimenteseler/995_v1.jpg' // Fallback
      }
      
      if (gizliMenteselerImageMap[code]) {
        return gizliMenteselerImageMap[code]
      }
      
      // Fallback - dosya yoksa genel resim
      return productImage || '/gizlimenteseler.png'
    }
    
    // 466 > Mini Butonlu Kilit için özel resim mapping
    if (code === '466' && productName?.includes('Mini Butonlu Kilit')) {
      return '/cu-digerurunler/466minibutonlu.jpg'
    }
    
    // T Kollu Kabin Kilitleri için özel resim mapping (Klima içermeyen Kabin Kilitleri için)
    if (!productName?.includes('Klima') && (productName?.includes('T Kollu') || productName?.includes('"T" Kollu') || productName?.includes('\'T\' Kollu') || productName?.includes('Trafo Kilidi'))) {
      const tKolluKabinKilitImageMap = {
        '014': '/014tkollukabinkilidi.jpg',
        '015': '/015tkollukabinkilidi.jpg',
        '114': '/114tkollukabinkilidi.jpg',
        '115': '/115tkollukabinkilidi.jpg',
        '118': '/118tkollukabinkilidi.jpg',
        '214': productName?.includes('"T"') ? '/214tkollukabinkilidi.jpg' : '/214-2tkollukabinkilidi.jpg',
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
    
    // İspanyolet Çubuk ve Aksesuarları için özel resim mapping
    if (code === 'IC' || code === 'CT1' || code === 'CT2' || code === 'CY1' || code === 'CY2') {
      // Paslanmaz İspanyolet Çubuk kontrolü
      if (productName?.includes('Paslanmaz Çelik İspanyolet Çubuk')) {
        const paslanmazIspanyoletCubukImageMap = {
          'IC': productName?.includes('Paslanmaz Çelik İspanyolet Çubuk 1') ? '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-1.png' :
                productName?.includes('Paslanmaz Çelik İspanyolet Çubuk 2') ? '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-2.png' :
                productName?.includes('Paslanmaz Çelik İspanyolet Çubuk 3') ? '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-3.png' :
                productName?.includes('Paslanmaz Çelik İspanyolet Çubuk 4') ? '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-4.png' :
                '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-1.png',
          'CT1': '/dilleranahtarlar/paslanmazispanyoletcubuk/ct1.jpg',
          'CY1': '/dilleranahtarlar/paslanmazispanyoletcubuk/cy1.jpg',
          'CY2': '/dilleranahtarlar/paslanmazispanyoletcubuk/cy2.jpg',
        }
        
        if (paslanmazIspanyoletCubukImageMap[code]) {
          return paslanmazIspanyoletCubukImageMap[code]
        }
      }
      
      const ispanyoletCubukImageMap = {
        'IC': productName?.includes('İspanyolet Çubuklar 1') ? '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar1.jpg' :
              productName?.includes('İspanyolet Çubuklar 2') ? '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar2.jpg' :
              productName?.includes('İspanyolet Çubuk 3') ? '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar3.jpeg' :
              productName?.includes('İspanyolet Çubuklar 4') ? '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar4.jpeg' :
              productName?.includes('İspanyolet Çubuklar 5') ? '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar4.jpeg' :
              productName?.includes('İspanyolet Çubuklar 6') ? '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar6.jpg' :
              '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ispanyoletcubuklar1.jpg',
        'CT1': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ct1cubuktutucu.jpg',
        'CT2': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ct2cubuktutucu.jpg',
        'CY1': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/cy1cubukyatagi.jpg',
        'CY2': '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/cy2cubukyatagi.jpg',
      }
      
      if (ispanyoletCubukImageMap[code]) {
        return ispanyoletCubukImageMap[code]
      }
    }
    
    // İspanyolet Lama ve Aksesuarları için özel resim mapping
    if (code === 'IL' || code === 'ILP' || code === 'LKY1' || code === 'LKY2' || code === 'LY1' || code === 'LY2' || code === 'LY3' || code === 'LY40' || code === 'LKY3' || code === 'RCC') {
      // Paslanmaz İspanyolet Lama kontrolü
      if (productName?.includes('Paslanmaz Çelik')) {
        const paslanmazIspanyoletLamaImageMap = {
          'IL': productName?.includes('Paslanmaz Çelik İspanyolet Lama 1') ? '/dilleranahtarlar/paslanmazispanyoletlama/il-1.png' :
                productName?.includes('Paslanmaz Çelik İspanyolet Lama 2') ? '/dilleranahtarlar/paslanmazispanyoletlama/il-2.png' :
                '/dilleranahtarlar/paslanmazispanyoletlama/il-1.png',
          'ILP': productName?.includes('Paslanmaz Çelik Çok Noktadan Kitleyici Lama') ? '/dilleranahtarlar/paslanmazispanyoletlama/ilp-1.png' :
                 '/dilleranahtarlar/paslanmazispanyoletlama/ilp-1.png',
          'LKY1': '/dilleranahtarlar/paslanmazispanyoletlama/lky1.jpg',
          'LKY2': '/dilleranahtarlar/paslanmazispanyoletlama/lky2.jpg',
          'LKY3': '/dilleranahtarlar/paslanmazispanyoletlama/lky3.jpg',
          'LY1': '/dilleranahtarlar/paslanmazispanyoletlama/ly1.jpg',
          'LY2': '/dilleranahtarlar/paslanmazispanyoletlama/ly2.jpg',
          'LY40': '/dilleranahtarlar/paslanmazispanyoletlama/ly40.jpg',
          'RCC': '/dilleranahtarlar/paslanmazispanyoletlama/rcc.jpg',
        }
        
        if (paslanmazIspanyoletLamaImageMap[code]) {
          return paslanmazIspanyoletLamaImageMap[code]
        }
      }
      
      const ispanyoletLamaImageMap = {
        'IL': productName?.includes('İspanyolet Lamalar 1') ? '/dilleranahtarlar/İspanyoletLama/ispanyoletlama1.jpg' :
              productName?.includes('İspanyolet Lamalar 2') ? '/dilleranahtarlar/İspanyoletLama/ispanyoletlama2.jpg' :
              productName?.includes('İspanyolet Lamalar 3') ? '/dilleranahtarlar/İspanyoletLama/ispanyoletlama3.jpg' :
              productName?.includes('İspanyolet Lamalar 4') ? '/dilleranahtarlar/İspanyoletLama/ispanyoletlama4.jpg' :
              '/dilleranahtarlar/İspanyoletLama/ispanyoletlama1.jpg',
        'ILP': productName?.includes('Çok Noktadan Kitleyici Lama 1') ? '/dilleranahtarlar/İspanyoletLama/coknoktadankitleyicilama1.jpg' :
               productName?.includes('Çok Noktadan Kitleyici Lama 2') ? '/dilleranahtarlar/İspanyoletLama/coknoktadankitleyicilama2.jpg' :
               '/dilleranahtarlar/İspanyoletLama/coknoktadankitleyicilama1.jpg',
        'LKY1': '/dilleranahtarlar/İspanyoletLama/lky1lamakitleyiciyatagi.jpg',
        'LKY2': '/dilleranahtarlar/İspanyoletLama/lky2lamakitleyiciyatagi.jpg',
        'LY1': '/dilleranahtarlar/İspanyoletLama/ly1lamayatagi.jpg',
        'LY2': '/dilleranahtarlar/İspanyoletLama/ly2lamayatagi.jpg',
        'LY3': '/dilleranahtarlar/İspanyoletLama/ly3lamayatagikolaymontaj.jpg',
        'LY40': '/dilleranahtarlar/İspanyoletLama/ly40lamayatagi.jpg',
        'LKY3': '/dilleranahtarlar/İspanyoletLama/lky3lamakilitleyiciyatagi.jpg',
        'RCC': '/dilleranahtarlar/İspanyoletLama/rcckosebaglanti.jpg',
      }
      
      if (ispanyoletLamaImageMap[code]) {
        return ispanyoletLamaImageMap[code]
      }
    }
    
    // Anahtarlar için özel resim mapping
    if (code === '369' || code === '568' || code === '569' || code === '668' || code === '669' || code === '267' || code === '368') {
      const anahtarlarImageMap = {
        '369': '/dilleranahtarlar/anahtarlar/369.jpg',
        '568': '/dilleranahtarlar/anahtarlar/568.jpg',
        '569': '/dilleranahtarlar/anahtarlar/569.jpg',
        '668': '/dilleranahtarlar/anahtarlar/668.jpg',
        '669': '/dilleranahtarlar/anahtarlar/669.jpg',
        '267': '/dilleranahtarlar/anahtarlar/267.jpg',
        '368': '/dilleranahtarlar/anahtarlar/368.jpg',
      }
      
      if (anahtarlarImageMap[code]) {
        return anahtarlarImageMap[code]
      }
    }
    
    // İspanyolet ürünleri için özel resim mapping
    if (productName?.includes('İspanyolet') || productName?.includes('Dikey Hareketli') || productName?.includes('Dikey Mekanizmalı') || productName?.includes('İç Kilitleme') || productName?.includes('ispanyolet')) {
      const ispanyoletImageMap = {
        '002': '/002ispanyolet.jpg',
        '003': '/003ispanyolet.jpg',
        '007': '/007ispanyolet.jpg',
        '102': '/102ispanyolet.jpg',
        '103': productName?.includes('Pano') ? '/103ispanyoletpano.jpg' : '/103ispanyolet.jpg',
        '104': '/104ispanyolet.jpg',
        '107': '/107ispanyolet.jpg',
        '109': '/109ispanyolet.jpg',
        '203': '/203ispanyolet.jpg',
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
    
    // İZLEME VE ERİŞİM KONTROL SİSTEMİ için özel resim mapping
    if (code === '3402' || code === '3403' || code === '3414' || code === '3415' || code === '3416' || code === '3417') {
      const izlemeVeErisimKontrolImageMap = {
        '3402': '/izlemeveerisimkontrol/3402.jpg',
        '3403': '/izlemeveerisimkontrol/3403.jpg',
        '3414': '/izlemeveerisimkontrol/3414.jpg',
        '3415': '/izlemeveerisimkontrol/3415.jpg',
        '3416': '/izlemeveerisimkontrol/3416.jpg',
        '3417': '/izlemeveerisimkontrol/3417.jpg',
      }
      
      if (izlemeVeErisimKontrolImageMap[code]) {
        return izlemeVeErisimKontrolImageMap[code]
      }
    }
    
    // ELEKTRONİK DOLAP KİLİTLERİ için özel resim mapping
    if (code === '3201' || code === '3202' || code === '3203' || code === '3204' || code === '3205' || code === '3211' || code === '3212' || code === '3213' || code === '3214') {
      const elektronikDolapKilitleriImageMap = {
        '3201': '/elektronikdolapkilitleri/3201.jpg',
        '3202': '/elektronikdolapkilitleri/3202.jpg',
        '3203': '/elektronikdolapkilitleri/3203.jpg',
        '3204': '/elektronikdolapkilitleri/3204.jpg',
        '3205': '/elektronikdolapkilitleri/3205.jpg',
        '3211': '/elektronikdolapkilitleri/3211.jpg',
        '3212': '/elektronikdolapkilitleri/3212.jpg',
        '3213': '/elektronikdolapkilitleri/3213.jpg',
        '3214': '/elektronikdolapkilitleri/3214.jpg',
      }
      
      if (elektronikDolapKilitleriImageMap[code]) {
        return elektronikDolapKilitleriImageMap[code]
      }
    }
    
    // Özel durumlar
    if (code === '001') {
      // Küçük versiyon kontrolü
      if (productDetail?.name?.includes('Küçük Versiyon') || productName?.includes('Küçük Versiyon')) {
        return '/001kollukilit.jpg'
      }
      return '/001kollukilit.jpg'
    }
    
    // Kod bazlı resim mapping
    const imageMap = {
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
    
    return imageMap[code] || productImage || '/kollukilitler.png'
  }
  
  const kolluKilitImage = getKolluKilitImage()
  
  // PDF dosya adını belirle
  const getPdfPath = () => {
    const code = productDetail?.code || productInfo?.code
    const name = productDetail?.name || productInfo?.name || productName
    // Hem productName hem de name'i kontrol etmek için birleştir
    const fullName = productName || name
    const fromSection = location?.state?.fromSection
    
    // Paslanmaz Çelik Aksesuarlar için pcuaksesuarlar klasöründeki PDF'ler
    if (fromSection === 'PASLANMAZ ÇELİK AKSESUARLAR') {
      const pcuaksesuarlarPdfMap = {
        '340.00.132': '/pcuaksesuarlar/34000132-gerdirme-mandali.pdf',
        '079': '/pcuaksesuarlar/079-kapak-tutucu-makasi.pdf',
        '179': '/pcuaksesuarlar/179-kapak-tutucu-makasi.pdf',
        '279': '/pcuaksesuarlar/279-kapak-tutucu-makasi.pdf',
      }
      if (pcuaksesuarlarPdfMap[code]) {
        return pcuaksesuarlarPdfMap[code]
      }
    }
    
    // Paslanmaz Çelik Kilitler için kilitler klasöründeki PDF'ler
    if (fromSection === 'PASLANMAZ ÇELİK KİLİTLER') {
      if (code === '2040' && fullName?.includes('Göstergeli Sıkıştırmalı Kilit')) {
        return fullName?.includes('v1') ? '/kilitler/2040-gostergeli-sikistirmali-kilit.pdf' : '/kilitler/2040-gostergeli-sikistirmali-kilit (1).pdf'
      }
      if (code === '040' && fullName?.includes('Sıkıştırmalı Kilit')) {
        return fullName?.includes('v1') ? '/kilitler/040-sikistirmali-kilit_v1.pdf' : '/kilitler/040-sikistirmali-kilit_v2.pdf'
      }
      if (code === '540' && fullName?.includes('Sıkıştırmalı Kilit')) {
        return fullName?.includes('v1') ? '/kilitler/540-sikistirmali-kilit_v1.pdf' : '/kilitler/540-sikistirmali-kilit_v2.pdf'
      }
      if (code === '440' && fullName?.includes('Hijyenik Sıkıştırmalı Kilit')) {
        return fullName?.includes('v1') ? '/kilitler/440-hijyenik-sikistirmali-kilit_v1.pdf' : '/kilitler/440-hijyenik-sikistirmali-kilit_v2.pdf'
      }
      const kilitlerPdfMap = {
        '401': '/kilitler/401-kollu-kilit.pdf',
        '501': '/kilitler/501-kollu-kilit.pdf',
        '502': '/kilitler/502-ispanyolet-sistemli-kollu-kilit.pdf',
        '402': '/kilitler/402-ispanyolet-sistemli-kollu-kilit.pdf',
        '103': '/kilitler/103-ispanyolet-sistemli-kollu-kilit.pdf',
        '016': '/kilitler/016-kabin-kilidi.pdf',
        '416': '/kilitler/416-kabin-kilidi.pdf',
        '266': '/kilitler/266-mini-ceyrek-donuslu-yayli-kilit.pdf',
        '066': '/kilitler/066-mini-ceyrek-donuslu-yayli-kilit.pdf',
        '064': '/kilitler/064-ceyrek-donuslu-yayli-kilit.pdf',
        '060': '/kilitler/060-ceyrek-donuslu-yayli-kilit.pdf',
        '160': '/kilitler/160-dilli-yayli-kilit.pdf',
        '260': '/kilitler/260-asma-kilit-hamili-ceyrek-donuslu-kilit.pdf',
        '140': '/kilitler/140-mini-sikistirmali-kilit.pdf',
        '2060': '/kilitler/2060-gostergeli-ceyrek-donuslu-kilit.pdf',
        '1060': '/kilitler/1060-ceyrek-donuslu-yayli-kilit.pdf',
        '460': '/kilitler/460-hijyenik-kilit.pdf',
        '045': '/kilitler/045-sikistirmali-yayli-kilit.pdf',
        '211': '/kilitler/211-asma-kilit-hamili-l-kollu-kilit.pdf',
        '562': '/kilitler/562-asma-kilit-hamili-kelebek-kilit.pdf',
        '110': '/kilitler/110-ceyrek-donuslu-kilit-t-kollu.pdf',
        '111': '/kilitler/111-l-kollu-kilit.pdf',
        '065': '/kilitler/065-kelebek-kilit.pdf',
        '265': '/kilitler/265-asma-kilit-hamili-kelebek-kilit.pdf',
        '063': '/kilitler/063-silindirli-kilit.pdf',
        '411': '/kilitler/411-asma-kilit-hamili-l-kollu-kilit.pdf',
        '860': '/kilitler/860-ceyrek-donuslu-kilit.pdf',
        '042': '/kilitler/042-civatali-kilit.pdf',
        '276': '/kilitler/276-kancali-mandal.pdf',
      }
      if (kilitlerPdfMap[code]) {
        return kilitlerPdfMap[code]
      }
    }
    
    // Sızdırmazlık Profilleri ve Kenar Koruma: sizdirmazlikprofilleri klasöründeki PDF'ler (isimlere göre)
    if (fromSection === 'SIZDIRMAZLIK PROFİLLERİ VE KENAR KORUMA' || sizdirmazlikProfilleriDetails[productName]) {
      const codeNorm = (code || '').toString().replace(/\./g, '')
      if (!codeNorm) return null
      if (fullName?.includes('Hijyenik Conta') && codeNorm === '34009971') {
        return '/sizdirmazlikprofilleri/34009971-hijyenik-conta.pdf'
      }
      if (fullName?.includes('U Tipi Fitiller')) {
        const uTipiPdfMap = {
          '34001010': '/sizdirmazlikprofilleri/34001010-u-tipi-fitiller.pdf',
          '34001011': '/sizdirmazlikprofilleri/34001011-u-tipi-fitiller.pdf',
          '34001012': '/sizdirmazlikprofilleri/34001012-u-tipi-fitiller.pdf',
          '34001015': '/sizdirmazlikprofilleri/34001015-u-tipi-fitiller.pdf',
        }
        if (uTipiPdfMap[codeNorm]) return uTipiPdfMap[codeNorm]
      }
      return `/sizdirmazlikprofilleri/${codeNorm}-gecme-conta.pdf`
    }
    
    // Paslanmaz Çelik Menteşeler için menteseler klasöründeki PDF'ler
    if (fromSection === 'PASLANMAZ ÇELİK MENTEŞELER') {
      const menteselerPdfMap = {
        '295': '/menteseler/295-gizli-mentese.pdf',
        '395': '/menteseler/395-gizli-mentese.pdf',
        '695': '/menteseler/695-gizli-mentese.pdf',
        '795': '/menteseler/795-gizli-mentese.pdf',
        '289': '/menteseler/289-gizli-mentese.pdf',
        '1995': '/menteseler/1995-gizli-mentese.pdf',
        '995': '/menteseler/995-gizli-mentese.pdf',
        '095': '/menteseler/095-gizli-mentese.pdf',
        '097': '/menteseler/097-kose-mentese.pdf',
        '4299': '/menteseler/4299-yaprak-mentese-kaldir-cikar.pdf',
        '3599': '/menteseler/3599-kaldir-cikar-mentese.pdf',
        '1293': '/menteseler/1293-kaldir-cikar-mentese.pdf',
        '1393': '/menteseler/1393-kaldir-cikar-mentese.pdf',
        '1299': '/menteseler/1299-mini-yaprak-mentese.pdf',
        '600': '/menteseler/600-duz-mentese.pdf',
        '3299': '/menteseler/3299-yaprak-mentese.pdf',
        '3099': '/menteseler/3099-kaldir-cikar-mentese.pdf',
        '3399': '/menteseler/3399-yaprak-mentese.pdf',
        '299': '/menteseler/299-yaprak-mentese.pdf',
        '4599': '/menteseler/4599-yaprak-mentese.pdf',
        '599': '/menteseler/599-yaprak-mentese.pdf',
        '799': '/menteseler/799-yaprak-mentese.pdf',
        '1599': '/menteseler/1599-yaprak-mentese.pdf',
        '899': '/menteseler/899-yaprak-mentese-kaldir-cikar.pdf',
        '999': '/menteseler/999-yaprak-mentese.pdf',
        '2999': '/menteseler/2999-yaprak-mentese.pdf',
        '2890': '/menteseler/2890-gizli-mentese.pdf',
        '090': '/menteseler/090-kenar-mentese-10mm.pdf',
        '092': '/menteseler/092-kenar-mentese-12mm.pdf',
        '192': '/menteseler/192-kenar-mentese-12mm.pdf',
        '193': '/menteseler/193-kenar-mentese-16mm.pdf',
      }
      if (productName?.includes('v1') && (code === '099' || code === '399')) {
        return code === '099' ? '/menteseler/099-yaprak-mentesev1.pdf' : '/menteseler/399-yaprak-mentesev1.pdf'
      }
      if (productName?.includes('v2') && (code === '099' || code === '399')) {
        return code === '099' ? '/menteseler/099-yaprak-mentesev2.pdf' : '/menteseler/399-yaprak-mentesev2.pdf'
      }
      if (menteselerPdfMap[code]) {
        return menteselerPdfMap[code]
      }
    }
    
    // Aksesuarlar için özel PDF mapping
    const aksesuarlarPdfMap = {
      '2300': '/aksesuarlar/2300-havalandirma-panjuru.pdf',
      '2150': '/aksesuarlar/2150-proje-cebi-a4.pdf',
      '2152': '/aksesuarlar/2152-proje-cebi-a5.pdf',
      '2220': '/aksesuarlar/2220-gozetleme-cami.pdf',
      '2216': '/aksesuarlar/2216-sayac-cercevesi.pdf',
      '2215': '/aksesuarlar/2215-sayac-cercevesi.pdf',
      '2451': '/aksesuarlar/2451-aybolt.pdf',
      '2461': '/aksesuarlar/2461-aybolt.pdf',
      '2400': '/aksesuarlar/2400-kafesli-somun.pdf',
      '2700': '/aksesuarlar/2700-gerdirme-mandali.pdf',
      '2760': '/aksesuarlar/2760-pim-kilitlemeli-tutamak.pdf',
      '2750': '/aksesuarlar/2750-yayli-yuk-mandali.pdf',
      '2751': '/aksesuarlar/2751-yayli-yuk-mandali-percinli.pdf',
      '320.02.164': '/aksesuarlar/32002164-kablo-kanali.pdf',
      '025': '/aksesuarlar/025-cam-mentesesi.pdf',
      '079': '/aksesuarlar/079-kapak-tutucu-makasi.pdf',
      '279': '/aksesuarlar/279-kapak-tutucu-makasi.pdf',
      '179': '/aksesuarlar/179-kapak-tutucu-makasi.pdf',
      '340.10.026': '/aksesuarlar/34010026-akustik-sunger.pdf',
      '340.00.370': '/aksesuarlar/34000370-diyafram-tipi-gromet.pdf',
      '340.00.380': '/aksesuarlar/34000380-diyafram-tipi-gromet.pdf',
      '340.08.010': '/aksesuarlar/34008010-kaucuk-stoper.pdf',
      '340.00.400': '/aksesuarlar/34000400-kaucuk-tipa.pdf',
      '340.08.001': '/aksesuarlar/34008001-kapak-tutucu.pdf',
      '340.20.005.2000': '/aksesuarlar/340200052000-kapi-alti-fircasi.pdf',
      '340.20.025.2000': '/aksesuarlar/340200252000-kapi-alti-fircasi.pdf',
    }
    
    if (aksesuarlarPdfMap[code]) {
      return aksesuarlarPdfMap[code]
    }
    
    // Yapışkanlı Contalar için özel PDF mapping
    const yapiskanliContalarPdfMap = {
      '1300': '/yapiskanlicontalar/1300-yapiskanli-conta.pdf',
      '1100': '/yapiskanlicontalar/1100-yapiskanli-dokme-conta.pdf',
      '1200': '/yapiskanlicontalar/1200-yapiskanli-conta.pdf',
      '340.09.966': '/yapiskanlicontalar/34009966-yapiskanli-conta.pdf',
      '340.09.968': '/yapiskanlicontalar/34009968-yapiskanli-conta.pdf',
      '340.09.969': '/yapiskanlicontalar/34009969-yapiskanli-conta.pdf',
      '340.09.970': '/yapiskanlicontalar/34009970-yapiskanli-conta.pdf',
    }
    
    if (yapiskanliContalarPdfMap[code]) {
      return yapiskanliContalarPdfMap[code]
    }
    
    // Özel durumlar
    if (code === '001' && name?.includes('Küçük Versiyon')) {
      return '/001-kollu-kilit-kucuk-versiyon.pdf'
    }
    
    // Kabin kilitleri için özel PDF mapping
    if (fullName?.includes('Kabin Kilidi')) {
      const kabinKilitPdfMap = {
        '016': productName?.includes('Metal Gövde') ? '/016-kabin-kilidi-metal-govde.pdf' :
               productName?.includes('Plastik Gövde') ? '/016-kabin-kilidi-plastik-govde.pdf' :
               productName?.includes('Kancalı') ? '/016-kabin-kilidi-kancali-kilit-entegreli.pdf' :
               '/016-kabin-kilidi-metal-govde.pdf',
        '116': '/116-mini-kabin-kilidi.pdf',
        '216': '/216-kabin-kilidi.pdf',
        '316': '/316-kabin-kilidi.pdf',
      }
      
      if (kabinKilitPdfMap[code]) {
        return kabinKilitPdfMap[code]
      }
    }
    
    // 612 > Klima Santral Kilidi için özel PDF mapping (önce kontrol edilmeli)
    if (code === '612' && fullName?.includes('Klima Santral Kilidi')) {
      // T Kollu kontrolü - farklı formatları kontrol et
      if (fullName?.includes('T\' Kollu') || 
          fullName?.includes('\'T\' Kollu') || 
          fullName?.includes('T Kollu') ||
          fullName?.includes('"T" Kollu')) {
        return '/612-klima-santral-kilidi-t-kollu.pdf'
      }
      return '/612_Klima_Santral_Kilidi.pdf'
    }
    
    // 712 > Fonsiyonel Kilit Menteşe için özel PDF mapping
    if (code === '712' && fullName?.includes('Fonsiyonel Kilit Menteşe')) {
      return '/712-fonsiyonel-kilit-mentese.pdf'
    }
    
    // Klima Santral Kilidi için özel PDF mapping
    if (fullName?.includes('Klima Santral Kilidi')) {
      // 112 > Klima Santral Kilidi için özel mapping
      if (code === '112') {
        if (fullName?.includes('Aksesuarları')) {
          return '/112-klima-santral-kilidi-aksesuarlari.pdf'
        }
        if (fullName?.includes('Versiyon 2')) {
          return '/112-klima-santral-kilidiversiyon2.pdf'
        }
        if (fullName?.includes('Versiyon 3')) {
          return '/112-klima-santral-kilidiversiyon3.pdf'
        }
        if (fullName?.includes('Versiyon 4')) {
          return '/112-klima-santral-kilidi_Versiyon4.pdf'
        }
        // Versiyon 1 ve genel 112 > Klima Santral Kilidi için
        return '/112-klima-santral-kilidi.pdf'
      }
      // 012 > Klima Santral Kilidi için
      if (fullName?.includes('Versiyon 1')) {
        return '/012-klima-santral-kilidi.pdf'
      }
      if (fullName?.includes('Versiyon 2')) {
        return '/012-klima-santral-kilidi (1).pdf'
      }
      if (fullName?.includes('Versiyon 3')) {
        return '/012-klima-santral-kilidi (2).pdf'
      }
      if (fullName?.includes('Versiyon 4')) {
        return '/012-klima-santral-kilidi (3).pdf'
      }
      if (fullName?.includes('Aksesuarı')) {
        return '/012-klima-santral-kilidi-aksesuari.pdf'
      }
      // Genel 012 > Klima Santral Kilidi için
      return '/012-klima-santral-kilidi (3).pdf'
    }
    
    // 612 > Klima Kabin Kilidi için özel PDF mapping
    if (code === '612' && fullName?.includes('Klima Kabin Kilidi')) {
      if (fullName?.includes('L\' Kollu') || fullName?.includes('\'L\' Kollu') || fullName?.includes('L Kollu') || fullName?.includes('"L" Kollu')) {
        return '/612-klima-kabin-kilidi-l-kollu.pdf'
      }
      return '/612-klima-kabin-kilidi.pdf'
    }
    
    // 078 > Profil Bağlantı Parçası için özel PDF mapping
    if (code === '078' && fullName?.includes('Profil Bağlantı Parçası')) {
      return '/078-profil-baglanti-parcasi-3d.pdf'
    }
    
    // 462 > Sıkıştırmalı Kilit için özel PDF mapping
    if (code === '462' && fullName?.includes('Sıkıştırmalı Kilit')) {
      return '/462-sikistirmali-kilit.pdf'
    }
    
    // 077 > Sıkıştırmalı Kilit için özel PDF mapping
    if (code === '077' && fullName?.includes('Sıkıştırmalı Kilit')) {
      return '/sikistirmalikilit/077-sikistirmali-kilit.pdf'
    }
    
    // 177 > Sıkıştırmalı Kilit için özel PDF mapping
    if (code === '177' && fullName?.includes('Sıkıştırmalı Kilit')) {
      return '/sikistirmalikilit/177-sikistirmali-kilit.pdf'
    }
    
    // 377 > Sıkıştırmalı Kilit için özel PDF mapping
    if (code === '377' && fullName?.includes('Sıkıştırmalı Kilit')) {
      return '/sikistirmalikilit/377-sikistirmali-kilit.pdf'
    }
    
    // 477 > Sıkıştırmalı Kilit için özel PDF mapping
    if (code === '477' && fullName?.includes('Sıkıştırmalı Kilit')) {
      return '/sikistirmalikilit/477-sikistirmali-kilit.pdf'
    }
    
    // 072 > Fonksiyonel Kilit için özel PDF mapping
    if (code === '072' && fullName?.includes('Fonksiyonel Kilit')) {
      return '/sikistirmalikilit/072-fonksiyonel-kilit.pdf'
    }
    
    // 070 > Kaldır-Çevir için özel PDF mapping
    if (code === '070' && fullName?.includes('Kaldır-Çevir')) {
      return '/sikistirmalikilit/070-kaldir-cevir.pdf'
    }
    
    // 170 > Kaldır-Çevir için özel PDF mapping
    if (code === '170' && fullName?.includes('Kaldır-Çevir')) {
      return '/sikistirmalikilit/170-kaldir-cevir.pdf'
    }
    
    // 270 > Sıkıştırmalı Kilit için özel PDF mapping
    if (code === '270' && fullName?.includes('Sıkıştırmalı Kilit')) {
      // 270 > Sıkıştırmalı Kilit 2 için özel kontrol
      if (fullName?.includes('Sıkıştırmalı Kilit 2')) {
        return '/sikistirmalikilit/270-sikistirmali-kilit 2.pdf'
      }
      return '/sikistirmalikilit/270-sikistirmali-kilit.pdf'
    }
    
    // ÇEYREK DÖNÜŞLÜ KİLİTLER'deki Sıkıştırmalı Kilitler için özel PDF mapping
    if ((code === '040' || code === '640' || code === '140' || code === '045') && fullName?.includes('Sıkıştırmalı Kilit')) {
      // location.state'ten veya pathname'den kontrol et
      const isFromCeyrekDonuslu = location?.state?.fromSection === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' ||
                                   location?.pathname?.includes('ceyrek-donuslu-kilitler/sikistirmali-kilitler')
      
      if (isFromCeyrekDonuslu) {
        if (code === '040') {
          return fullName?.includes('v1') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/040-sikistirmali-kilit1.pdf' :
                 fullName?.includes('v2') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/040-sikistirmali-kilit2.pdf' :
                 '/ceyrekdonuslukilitler/sikistirmalikilitler/040-sikistirmali-kilit1.pdf'
        } else if (code === '640') {
          return fullName?.includes('v1') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/640-sikistirmali-kilit1.pdf' :
                 fullName?.includes('v2') ? '/ceyrekdonuslukilitler/sikistirmalikilitler/640-sikistirmali-kilit2.pdf' :
                 '/ceyrekdonuslukilitler/sikistirmalikilitler/640-sikistirmali-kilit1.pdf'
        } else if (code === '140') {
          return '/ceyrekdonuslukilitler/sikistirmalikilitler/140-mini-sikistirmali-kilit.pdf'
        } else if (code === '045') {
          return '/ceyrekdonuslukilitler/sikistirmalikilitler/045-sikistirmali-kilit.pdf'
        }
      }
    }
    
    // ÇEYREK DÖNÜŞLÜ KİLİTLER'deki Kolay Montaj Ç.D. Kilitler için özel PDF mapping
    if ((code === '560' || code === '660' || code === '661' || code === '761' || code === '366' || code === '566') && 
        (fullName?.includes('Çeyrek Dönüşlü') || fullName?.includes('Dönüşlü'))) {
      // location.state'ten veya pathname'den kontrol et
      const isFromCeyrekDonuslu = location?.state?.fromSection === 'ÇEYREK DÖNÜŞLÜ KİLİTLER' ||
                                   location?.pathname?.includes('ceyrek-donuslu-kilitler') ||
                                   location?.pathname?.includes('kolay-montaj-cd-kilitler')
      
      if (isFromCeyrekDonuslu) {
        const kolayMontajCeyrekPdfMap = {
          '560': '/ceyrekdonuslukilitler/kolaymontaj/560-ceyrek-donuslu-segmanli-kilit.pdf',
          '660': '/ceyrekdonuslukilitler/kolaymontaj/660-ceyrek-donuslu-klipsli-kilit.pdf',
          '661': '/ceyrekdonuslukilitler/kolaymontaj/661-ceyrek-donuslu-kilit-kolay-montaj.pdf',
          '761': '/ceyrekdonuslukilitler/kolaymontaj/761-ceyrek-donuslu-kilit-kolay-montaj.pdf',
          '366': '/ceyrekdonuslukilitler/kolaymontaj/366-mini-ceyrek-donuslu-klipsli-kilit.pdf',
          '566': '/ceyrekdonuslukilitler/kolaymontaj/566-mini-donuslu-klipsli-kilit.pdf',
        }
        if (kolayMontajCeyrekPdfMap[code]) {
          return kolayMontajCeyrekPdfMap[code]
        }
      }
    }
    
    // T Kollu Kabin Kilitleri için özel PDF mapping
    if (fullName?.includes('T Kollu') || fullName?.includes('"T" Kollu') || fullName?.includes('\'T\' Kollu') || fullName?.includes('Trafo Kilidi')) {
      const tKolluKabinKilitPdfMap = {
        '014': '/014-t-kollu-kabin-kilidi.pdf',
        '015': '/015-t-kollu-kabin-kilidi.pdf',
        '114': '/114-mini-t-kollu-kabin-kilidi.pdf',
        '115': '/115-t-kollu-kabin-kilidi.pdf',
        '118': '/118-trafo-kilidi.pdf',
        '214': fullName?.includes('"T"') ? '/214-t-kollu-kabin-kilidi.pdf' : '/214-t-kollu-kabin-kilidi (1).pdf',
        '215': '/215-t-kollu-kabin-kilidi.pdf',
        '315': '/315-t-kollu-kabin-kilidi.pdf',
        '018': '/018-trafo-kilidi.pdf',
      }
      
      if (tKolluKabinKilitPdfMap[code]) {
        return tKolluKabinKilitPdfMap[code]
      }
    }
    
    // 071 > Sürgü Kilit için özel PDF mapping
    if (code === '071' && fullName?.includes('Sürgü Kilit')) {
      return '/surgukilit/071-surgu-kilit.pdf'
    }
    
    // 171 > Mini Sürgü Kilit için özel PDF mapping
    if (code === '171' && fullName?.includes('Mini Sürgü Kilit')) {
      return '/surgukilit/171-mini-surgu-kilit.pdf'
    }
    
    // 271 > Sürgü Kilit için özel PDF mapping
    if (code === '271' && fullName?.includes('Sürgü Kilit')) {
      return '/surgukilit/271-surgu-kilit.pdf'
    }
    
    // 371 > Sürgü Kilit için özel PDF mapping
    if (code === '371' && fullName?.includes('Sürgü Kilit')) {
      return '/surgukilit/371-surgu-kilit.pdf'
    }
    
    // 471 > Mini Sürgü Kilit için özel PDF mapping
    if (code === '471' && fullName?.includes('Mini Sürgü Kilit')) {
      return '/surgukilit/471-mini-surgu-kilit.pdf'
    }
    
    // 571 > Fişeli Sürgü Kilit için özel PDF mapping
    if (code === '571' && fullName?.includes('Fişeli Sürgü Kilit')) {
      return '/surgukilit/571-fiseli-surgu-kilit.pdf'
    }
    
    // 671 > Fişeli Sürgü Kilit için özel PDF mapping
    if (code === '671' && fullName?.includes('Fişeli Sürgü Kilit')) {
      return '/surgukilit/671-fiseli-surgu-kilit.pdf'
    }
    
    // 073 > Perde Sacı Kilidi için özel PDF mapping
    if (code === '073' && fullName?.includes('Perde Sacı Kilidi')) {
      return '/cu-digerurunler/073-perde-saci-kilidi.pdf'
    }
    
    // 075 > Allen Göbekli Pano Kilidi için özel PDF mapping
    if (code === '075' && fullName?.includes('Allen Göbekli Pano Kilidi')) {
      return '/cu-digerurunler/075-allen-gobekli-pano-kilidi.pdf'
    }
    
    // 176 > Kancalı Kilit için özel PDF mapping
    if (code === '176' && fullName?.includes('Kancalı Kilit')) {
      return '/cu-digerurunler/176-kancali-kilit.pdf'
    }
    
    // 2800 > Kancalı Kilit için özel PDF mapping
    if (code === '2800' && fullName?.includes('Kancalı Kilit')) {
      return '/cu-digerurunler/2800-kancali-kilit.pdf'
    }
    
    // 2810 > Kancalı Kilit (Büyük) için özel PDF mapping
    if (code === '2810' && fullName?.includes('Kancalı Kilit (Büyük)')) {
      return '/cu-digerurunler/2810-kancali-kilit-buyuk.pdf'
    }
    
    // DİĞER ELEKTRONİK KİLİTLER için özel PDF mapping
    if (code === '3341' && fullName?.includes('Elektronik Kilit')) {
      return '/digerelektronikkilitler/3341-elektronik-kilit.pdf'
    }
    
    if (code === '3311' && fullName?.includes('Selenoid Kilit')) {
      return '/digerelektronikkilitler/3311-selenoid-kilit.pdf'
    }
    
    if (code === '3301' && fullName?.includes('Elektronik Dolap Kilidi')) {
      return '/digerelektronikkilitler/3301-elektronik-dolap-kilidi.pdf'
    }
    
    if (code === '3331' && fullName?.includes('Elektronik Kancalı Kilit')) {
      return '/digerelektronikkilitler/3331-elektronik-kancali-kilit.pdf'
    }
    
    if (code === '3501' && fullName?.includes('Acil Durum Durdurma Butonu')) {
      return '/digerelektronikkilitler/3501-acil-durum-durdurma-butonu.pdf'
    }
    
    // 466 > Mini Butonlu Kilit için özel PDF mapping
    if (code === '466' && fullName?.includes('Mini Butonlu Kilit')) {
      return '/cu-digerurunler/466-mini-butonlu-kilit.pdf'
    }
    
    // CC > Tırnaklı Diller için özel PDF mapping
    if (fullName?.includes('CC > Tırnaklı Diller 1') || (code === 'CC' && fullName?.includes('Tırnaklı Diller 1'))) {
      return '/dilleranahtarlar/diller/tirnaklidil/cc-tirnakli-diller1.pdf'
    }
    if (fullName?.includes('CC > Tırnaklı Diller 2') || (code === 'CC' && fullName?.includes('Tırnaklı Diller 2'))) {
      return '/dilleranahtarlar/diller/tirnaklidil/cc-tirnakli-diller2.pdf'
    }
    if (fullName?.includes('CC > Tırnaklı Diller 3') || (code === 'CC' && fullName?.includes('Tırnaklı Diller 3'))) {
      return '/dilleranahtarlar/diller/tirnaklidil/cc-tirnakli-diller3.pdf'
    }
    if (fullName?.includes('CC > Tırnaklı Diller 4') || (code === 'CC' && fullName?.includes('Tırnaklı Diller 4'))) {
      return '/dilleranahtarlar/diller/tirnaklidil/cc-tirnakli-diller4.pdf'
    }
    if (fullName?.includes('CC > Tırnaklı Diller 5') || (code === 'CC' && fullName?.includes('Tırnaklı Diller 5'))) {
      return '/dilleranahtarlar/diller/tirnaklidil/cc-tirnakli-diller5.pdf'
    }
    if (fullName?.includes('CC > Tırnaksız Diller 1') || (code === 'CC' && fullName?.includes('Tırnaksız Diller 1'))) {
      return '/dilleranahtarlar/diller/tirnaksizdil/cc-tirnaksiz-diller1.pdf'
    }
    if (fullName?.includes('CC > Tırnaksız Diller 2') || (code === 'CC' && fullName?.includes('Tırnaksız Diller 2'))) {
      return '/dilleranahtarlar/diller/tirnaksizdil/cc-tirnaksiz-diller2.pdf'
    }
    if (fullName?.includes('CC > Tırnaksız Diller 3') || (code === 'CC' && fullName?.includes('Tırnaksız Diller 3'))) {
      return '/dilleranahtarlar/diller/tirnaksizdil/cc-tirnaksiz-diller3.pdf'
    }
    if (fullName?.includes('CC > Tırnaksız Diller 4') || (code === 'CC' && fullName?.includes('Tırnaksız Diller 4'))) {
      return '/dilleranahtarlar/diller/tirnaksizdil/cc-tirnaksiz-diller4.pdf'
    }
    if (fullName?.includes('CC > Tırnaksız Diller 5') || (code === 'CC' && fullName?.includes('Tırnaksız Diller 5'))) {
      return '/dilleranahtarlar/diller/tirnaksizdil/cc-tirnaksiz-diller5.pdf'
    }
    if (fullName?.includes('CC > Paslanmaz Çelik Diller (Tırnaklı) 1') || (code === 'CC' && fullName?.includes('Paslanmaz Çelik Diller (Tırnaklı) 1'))) {
      return '/dilleranahtarlar/diller/paslanmaz/cc-paslanmaz-celik-diiler-tirnakli.pdf'
    }
    if (fullName?.includes('CC > Paslanmaz Çelik Diller (Tırnaklı)') || (code === 'CC' && fullName?.includes('Paslanmaz Çelik Diller (Tırnaklı)'))) {
      return '/dilleranahtarlar/diller/paslanmaz/cc-paslanmaz-celik-diiler-tirnakli.pdf'
    }
    if (fullName?.includes('CC > Paslanmaz Çelik Diller (Tırnaksız)') || (code === 'CC' && fullName?.includes('Paslanmaz Çelik Diller (Tırnaksız)'))) {
      return '/dilleranahtarlar/diller/paslanmaz/cc-paslanmaz-celik-diller-tirnaksiz.pdf'
    }
    if (fullName?.includes('CC > Paslanmaz Çelik Diller (Tırnaklı) 2') || (code === 'CC' && fullName?.includes('Paslanmaz Çelik Diller (Tırnaklı) 2'))) {
      return '/dilleranahtarlar/diller/paslanmaz/cc-paslanmaz-celik-diller-tirnakli-2.pdf'
    }
    if (fullName?.includes('CC > Diğer Diller 1') || (code === 'CC' && fullName?.includes('Diğer Diller 1'))) {
      return '/dilleranahtarlar/diller/digerdiller/cc-diger-diller1.pdf'
    }
    if (fullName?.includes('CC > Diğer Diller 2') || (code === 'CC' && fullName?.includes('Diğer Diller 2'))) {
      return '/dilleranahtarlar/diller/digerdiller/cc-diger-diller2.pdf'
    }
    if (fullName?.includes('CC > Diğer Diller 3') || (code === 'CC' && fullName?.includes('Diğer Diller 3'))) {
      return '/dilleranahtarlar/diller/digerdiller/cc-diger-diller3.pdf'
    }
    if (fullName?.includes('CC > Diğer Diller 4') || (code === 'CC' && fullName?.includes('Diğer Diller 4'))) {
      return '/dilleranahtarlar/diller/digerdiller/cc-diger-diller4.pdf'
    }
    if (fullName?.includes('320.02.180 > Geçme Dil Aparatı') || fullName?.includes('Geçme Dil Aparatı')) {
      return '/dilleranahtarlar/diller/32002180-gecme-dil-aparati.pdf'
    }
    if (fullName?.includes('30403485 > Kancalı Diller') || fullName?.includes('Kancalı Diller')) {
      return '/dilleranahtarlar/diller/30403485-kancali-diller.pdf'
    }
    if (fullName?.includes('30403499 > İspanyolet Dil Adaptörü') || fullName?.includes('İspanyolet Dil Adaptörü')) {
      return '/dilleranahtarlar/diller/30403499-ispanyolet-dil-adaptoru.pdf'
    }
    
    // İspanyolet Çubuk ve Aksesuarları için özel PDF mapping
    if (code === 'IC' || code === 'CT1' || code === 'CT2' || code === 'CY1' || code === 'CY2') {
      // Paslanmaz İspanyolet Çubuk PDF'leri
      if (fullName?.includes('Paslanmaz Çelik İspanyolet Çubuk 1')) {
        return '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-paslanmaz-celik-ispanyolet-cubuk1.pdf'
      }
      if (fullName?.includes('Paslanmaz Çelik İspanyolet Çubuk 2')) {
        return '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-paslanmaz-celik-ispanyolet-cubuk2.pdf'
      }
      if (fullName?.includes('Paslanmaz Çelik İspanyolet Çubuk 3')) {
        return '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-paslanmaz-celik-ispanyolet-cubuk3.pdf'
      }
      if (fullName?.includes('Paslanmaz Çelik İspanyolet Çubuk 4')) {
        return '/dilleranahtarlar/paslanmazispanyoletcubuk/ic-paslanmaz-celik-ispanyolet-cubuk4.pdf'
      }
      // Normal İspanyolet Çubuk PDF'leri
      if (fullName?.includes('İspanyolet Çubuklar 1') && !fullName?.includes('Paslanmaz')) {
        return '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ic-ispanyolet-cubuklar1.pdf'
      }
      if (fullName?.includes('İspanyolet Çubuklar 2') && !fullName?.includes('Paslanmaz')) {
        return '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ic-ispanyolet-cubuklar2.pdf'
      }
      if (fullName?.includes('İspanyolet Çubuk 3') && !fullName?.includes('Paslanmaz')) {
        return '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ic-ispanyolet-cubuk3.pdf'
      }
      if (fullName?.includes('İspanyolet Çubuklar 4') && !fullName?.includes('Paslanmaz')) {
        return '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ic-ispanyolet-cubuklar4.pdf'
      }
      if (fullName?.includes('İspanyolet Çubuklar 5')) {
        return '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ic-ispanyolet-cubuklar5.pdf'
      }
      if (fullName?.includes('İspanyolet Çubuklar 6')) {
        return '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ic-ispanyolet-cubuklar6.pdf'
      }
      // CT1, CY1, CY2 için PDF kontrolü
      // Paslanmaz section'da da kullanıldıkları için paslanmaz PDF'lerini kullan
      if (code === 'CT1' && fullName?.includes('Çubuk Tutucu')) {
        // Paslanmaz section'dan geliyorsa paslanmaz PDF'i kullan, aksi halde normal PDF
        const isFromPaslanmazSection = location?.state?.fromSection === 'Paslanmaz İspanyolet Çubuk ve Aksesuarları' ||
                                      location?.pathname?.includes('paslanmaz-ispanyolet-cubuk')
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletcubuk/ct1-cubuk-tutucu.pdf'
        }
        return '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ct1-cubuk-tutucu.pdf'
      }
      if (code === 'CT2' && fullName?.includes('Çubuk Tutucu')) {
        return '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/ct2-cubuk-tutucu.pdf'
      }
      if (code === 'CY1' && fullName?.includes('Çubuk Yatağı')) {
        // Paslanmaz section'dan geliyorsa paslanmaz PDF'i kullan, aksi halde normal PDF
        const isFromPaslanmazSection = location?.state?.fromSection === 'Paslanmaz İspanyolet Çubuk ve Aksesuarları' ||
                                      location?.pathname?.includes('paslanmaz-ispanyolet-cubuk')
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletcubuk/cy1-cubuk-yatagi.pdf'
        }
        return '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/cy1-cubuk-yatagi.pdf'
      }
      if (code === 'CY2' && fullName?.includes('Çubuk Yatağı')) {
        // Paslanmaz section'dan geliyorsa paslanmaz PDF'i kullan, aksi halde normal PDF
        const isFromPaslanmazSection = location?.state?.fromSection === 'Paslanmaz İspanyolet Çubuk ve Aksesuarları' ||
                                      location?.pathname?.includes('paslanmaz-ispanyolet-cubuk')
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletcubuk/cy2-cubuk-yatagi.pdf'
        }
        return '/dilleranahtarlar/İspanyoletCubukveAksesuarlari/cy2-cubuk-yatagi.pdf'
      }
    }
    
    // İspanyolet Lama ve Aksesuarları için özel PDF mapping (genel İspanyolet kontrolünden ÖNCE olmalı)
    if (code === 'IL' || fullName?.includes('İspanyolet Lamalar') || fullName?.includes('Paslanmaz Çelik İspanyolet Lama')) {
      // Paslanmaz İspanyolet Lama PDF'leri
      if (fullName?.includes('Paslanmaz Çelik İspanyolet Lama 1')) {
        return '/dilleranahtarlar/paslanmazispanyoletlama/il-paslanmaz-celik-ispanyolet-lama1.pdf'
      }
      if (fullName?.includes('Paslanmaz Çelik İspanyolet Lama 2')) {
        return '/dilleranahtarlar/paslanmazispanyoletlama/il-paslanmaz-celik-ispanyolet-lama2.pdf'
      }
      if (fullName?.includes('Paslanmaz Çelik Çok Noktadan Kitleyici Lama')) {
        return '/dilleranahtarlar/paslanmazispanyoletlama/ilp-paslanmaz-celik-cok-noktadan-kitleyici-lama.pdf'
      }
      // IL > İspanyolet Lamalar 1
      if (fullName?.includes('İspanyolet Lamalar 1') && !fullName?.includes('Paslanmaz') || 
          (fullName?.includes('IL > İspanyolet Lamalar 1') && !fullName?.includes('Paslanmaz')) ||
          (code === 'IL' && (productDetail?.name === 'İspanyolet Lamalar 1' || name === 'İspanyolet Lamalar 1') && !fullName?.includes('Paslanmaz'))) {
        return '/dilleranahtarlar/İspanyoletLama/il-ispanyolet-lamalar1.pdf'
      }
      // IL > İspanyolet Lamalar 2
      if (fullName?.includes('İspanyolet Lamalar 2') && !fullName?.includes('Paslanmaz') || 
          (fullName?.includes('IL > İspanyolet Lamalar 2') && !fullName?.includes('Paslanmaz')) ||
          (code === 'IL' && (productDetail?.name === 'İspanyolet Lamalar 2' || name === 'İspanyolet Lamalar 2') && !fullName?.includes('Paslanmaz'))) {
        return '/dilleranahtarlar/İspanyoletLama/il-ispanyolet-lamalar2.pdf'
      }
      // IL > İspanyolet Lamalar 3
      if (fullName?.includes('İspanyolet Lamalar 3') || 
          fullName?.includes('IL > İspanyolet Lamalar 3') ||
          (code === 'IL' && (productDetail?.name === 'İspanyolet Lamalar 3' || name === 'İspanyolet Lamalar 3'))) {
        return '/dilleranahtarlar/İspanyoletLama/il-ispanyolet-lamalar3.pdf'
      }
      // IL > İspanyolet Lamalar 4
      if (fullName?.includes('İspanyolet Lamalar 4') || 
          fullName?.includes('IL > İspanyolet Lamalar 4') ||
          (code === 'IL' && (productDetail?.name === 'İspanyolet Lamalar 4' || name === 'İspanyolet Lamalar 4'))) {
        return '/dilleranahtarlar/İspanyoletLama/il-ispanyolet-lamalar4.pdf'
      }
    }
    
    // ILP > Çok Noktadan Kitleyici Lama için özel PDF mapping
    if (code === 'ILP' || fullName?.includes('Çok Noktadan Kitleyici Lama') || fullName?.includes('Paslanmaz Çelik Çok Noktadan Kitleyici Lama')) {
      // Paslanmaz Çok Noktadan Kitleyici Lama
      if (fullName?.includes('Paslanmaz Çelik Çok Noktadan Kitleyici Lama')) {
        return '/dilleranahtarlar/paslanmazispanyoletlama/ilp-paslanmaz-celik-cok-noktadan-kitleyici-lama.pdf'
      }
      // Normal Çok Noktadan Kitleyici Lama
      if (fullName?.includes('Çok Noktadan Kitleyici Lama 1') && !fullName?.includes('Paslanmaz') || 
          (fullName?.includes('ILP > Çok Noktadan Kitleyici Lama 1') && !fullName?.includes('Paslanmaz')) ||
          (code === 'ILP' && (productDetail?.name === 'Çok Noktadan Kitleyici Lama 1' || name === 'Çok Noktadan Kitleyici Lama 1') && !fullName?.includes('Paslanmaz'))) {
        return '/dilleranahtarlar/İspanyoletLama/ilp-cok-noktadan-kitleyici-lama1.pdf'
      }
      if (fullName?.includes('Çok Noktadan Kitleyici Lama 2') && !fullName?.includes('Paslanmaz') || 
          (fullName?.includes('ILP > Çok Noktadan Kitleyici Lama 2') && !fullName?.includes('Paslanmaz')) ||
          (code === 'ILP' && (productDetail?.name === 'Çok Noktadan Kitleyici Lama 2' || name === 'Çok Noktadan Kitleyici Lama 2') && !fullName?.includes('Paslanmaz'))) {
        return '/dilleranahtarlar/İspanyoletLama/ilp-cok-noktadan-kitleyici-lama2.pdf'
      }
    }
    
    // LKY1, LKY2, LKY3, LY1, LY2, LY3, LY40, RCC için özel PDF mapping
    if (code === 'LKY1' || code === 'LKY2' || code === 'LKY3' || code === 'LY1' || code === 'LY2' || code === 'LY3' || code === 'LY40' || code === 'RCC') {
      // Paslanmaz section'dan geliyorsa paslanmaz PDF'lerini kullan
      const isFromPaslanmazSection = location?.state?.fromSection === 'Paslanmaz İspanyolet Lama ve Aksesuarları' ||
                                      location?.pathname?.includes('paslanmaz-ispanyolet-lama')
      
      if (code === 'LKY1' && (fullName?.includes('Lama Kitleyici Yatağı') || productDetail?.name === 'Lama Kitleyici Yatağı' || name === 'Lama Kitleyici Yatağı')) {
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletlama/lky1-lama-kitleyici-yatagi.pdf'
        }
        return '/dilleranahtarlar/İspanyoletLama/lky1-lama-kitleyici-yatagi.pdf'
      }
      if (code === 'LKY2' && (fullName?.includes('Lama Kitleyici Yatağı') || productDetail?.name === 'Lama Kitleyici Yatağı' || name === 'Lama Kitleyici Yatağı')) {
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletlama/lky2-lama-kitleyici-yatagi.pdf'
        }
        return '/dilleranahtarlar/İspanyoletLama/lky2-lama-kitleyici-yatagi.pdf'
      }
      if (code === 'LKY3' && (fullName?.includes('Lama Kilitleyici Yatağı') || productDetail?.name === 'Lama Kilitleyici Yatağı' || name === 'Lama Kilitleyici Yatağı')) {
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletlama/lky3-lama-kilitleyici-yatagi.pdf'
        }
        return '/dilleranahtarlar/İspanyoletLama/lky3-lama-kilitleyici-yatagi.pdf'
      }
      if (code === 'LY1' && (fullName?.includes('Lama Yatağı') && !fullName?.includes('Kolay Montoj') && !fullName?.includes('LY2') && !fullName?.includes('LY3') && !fullName?.includes('LY40') || (productDetail?.name === 'Lama Yatağı' && productDetail?.code === 'LY1') || (name === 'Lama Yatağı' && code === 'LY1'))) {
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletlama/ly1-lama-yatagi.pdf'
        }
        return '/dilleranahtarlar/İspanyoletLama/ly1-lama-yatagi.pdf'
      }
      if (code === 'LY2' && (fullName?.includes('LY2') || fullName?.includes('Lama Yatağı') || productDetail?.name === 'Lama Yatağı' || name === 'Lama Yatağı')) {
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletlama/ly2-lama-yatagi.pdf'
        }
        return '/dilleranahtarlar/İspanyoletLama/ly2-lama-yatagi.pdf'
      }
      if (code === 'LY3' && (fullName?.includes('LY3') || fullName?.includes('Kolay Montoj') || productDetail?.name === 'Lama Yatağı (Kolay Montoj)' || name === 'Lama Yatağı (Kolay Montoj)')) {
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletlama/ly3-lama-yatagi-kolay-montoj.pdf'
        }
        return '/dilleranahtarlar/İspanyoletLama/ly3-lama-yatagi-kolay-montoj.pdf'
      }
      if (code === 'LY40' && (fullName?.includes('LY40') || productDetail?.name === 'Lama Yatağı' || name === 'Lama Yatağı')) {
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletlama/ly40-lama-yatagi.pdf'
        }
        return '/dilleranahtarlar/İspanyoletLama/ly40-lama-yatagi.pdf'
      }
      if (code === 'RCC' && (fullName?.includes('Köşe Bağlantı') || productDetail?.name === 'Köşe Bağlantı' || name === 'Köşe Bağlantı')) {
        if (isFromPaslanmazSection) {
          return '/dilleranahtarlar/paslanmazispanyoletlama/rcc-kose-baglanti.pdf'
        }
        return '/dilleranahtarlar/İspanyoletLama/rcc-kose-baglanti.pdf'
      }
    }
    
    // Anahtarlar için özel PDF mapping
    if (code === '369' || code === '568' || code === '569' || code === '668' || code === '669' || code === '267' || code === '368') {
      const anahtarlarPdfMap = {
        '369': '/dilleranahtarlar/anahtarlar/369-metal-anahtarlar.pdf',
        '568': '/dilleranahtarlar/anahtarlar/568-coklu-anahtarlar-metal.pdf',
        '569': '/dilleranahtarlar/anahtarlar/569-coklu-anahtarlar-metal.pdf',
        '668': '/dilleranahtarlar/anahtarlar/668-coklu-anahtar-metal.pdf',
        '669': '/dilleranahtarlar/anahtarlar/669-plastik-anahtarlar.pdf',
        '267': '/dilleranahtarlar/anahtarlar/267-metal-anahtarlar-kisa.pdf',
        '368': '/dilleranahtarlar/anahtarlar/368-metal-anahtarlar-uzun.pdf',
      }
      
      if (anahtarlarPdfMap[code]) {
        return anahtarlarPdfMap[code]
      }
    }
    
    // İspanyolet ürünleri için özel PDF mapping (IL, ILP, LKY1, LKY2, LKY3, LY1, LY2, LY3, LY40, RCC hariç)
    if ((fullName?.includes('İspanyolet') && !fullName?.includes('İspanyolet Lamalar') && !fullName?.includes('Çok Noktadan Kitleyici Lama')) || fullName?.includes('Dikey Hareketli') || fullName?.includes('Dikey Mekanizmalı') || fullName?.includes('İç Kilitleme') || fullName?.includes('ispanyolet')) {
      const ispanyoletPdfMap = {
        '002': '/002-ispanyolet-sistemli-kollu-kilit.pdf',
        '003': '/003-ispanyolet-sistemli-pano-kilidi.pdf',
        '007': '/007-ispanyolet-sistemli-kollu-kilit.pdf',
        '102': '/102-ispanyolet-sistemli-kollu-kilit.pdf',
        '103': fullName?.includes('Pano') ? '/103-ispanyolet-sistemli-pano-kilidi.pdf' : '/103-ispanyolet-sistemli-kollu-kilit.pdf',
        '104': '/104-dikey-mekanizmali-kollu-kilit.pdf',
        '107': '/107-ispanyolet-sistemli-kollu-kilit.pdf',
        '109': '/109-ispanyolet-sistemli-kollu-kilit.pdf',
        '203': fullName?.includes('Pano') ? '/203-ispanyolet-sistemli-pano-kilit.pdf' : '/203-ispanyolet-sistemli-kollu-kilit.pdf',
        '204': '/204-dikey-hareketli-kollu-kilit.pdf',
        '207': '/207-ispanyolet-sistemli-kollu-kilit.pdf',
        '209': '/209-ispanyolet-sistemli-kollu-kilit.pdf',
        '307': '/307-ispanyolet-sistemli-kollu-kilit.pdf',
        '309': '/309-ispanyolet-sistemli-kollu-kilit.pdf',
        '407': '/407-ispanyolet-sistemli-kollu-kilit.pdf',
        '409': '/409-ispanyolet-sistemli-kollu-kilit.pdf',
        '502': '/502-ispanyolet-sistemli-kollu-kilit.pdf',
        '504': '/504-dikey-hareketli-kollu-kilit.pdf',
        '602': '/602-ispanyolet-sistemli-kollu-kilit.pdf',
        '809': '/809-ispanyolet-sistemli-kollu-kilit.pdf',
        '909': '/909-ispanyolet-sistemli-kollu-kilit.pdf',
        '03030': '/03030-ic-kilitleme-sistemi.pdf',
        '4001': '/4001-ispanyolet-sistem.pdf',
      }
      
      if (ispanyoletPdfMap[code]) {
        return ispanyoletPdfMap[code]
      }
    }
    
    // Çeyrek Dönüşlü Kilitler için özel PDF mapping
    if (code === 'AA' && fullName?.includes('Kovan, Somun, Rondela, Yay, Civata, Oring')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/aa-kovan-somun-rondela-yay-civata-oring.pdf'
    }
    
    if (code === 'DD' && fullName?.includes('Göbekler')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/dd-gobekler.pdf'
    }
    
    if (code === '060 AX' && fullName?.includes('Çeyrek Dönüşlü Kilit Aksesuarları')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/060-ax-ceyrek-donuslu-kilit-aksesuarlari.pdf'
    }
    
    if (code === '060' && fullName?.includes('Çeyrek Dönüşlü Yaylı Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/060-ceyrek-donuslu-yayli-kilit.pdf'
    }
    
    if (code === '062' && fullName?.includes('Çeyrek Dönüşlü Kelebek Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/062-ceyrek-donuslu-kelebek-kilit.pdf'
    }
    
    if (code === '362' && fullName?.includes('Çeyrek Dönüşlü Kelebek Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/362-ceyrek-donuslu-kelebek-kilit.pdf'
    }
    
    if (code === '562' && fullName?.includes('Asma Klit Hamili Pano Kilidi')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/562-asma-klit-hamili-pano-kilidi.pdf'
    }
    
    if (code === '262' && fullName?.includes('Asma Kilit Hamili Pano Kilidi')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/262-asma-kilit-hamili-pano-kilidi.pdf'
    }
    
    if (code === '260' && fullName?.includes('Asma Kilit Hamili Çeyrek Dönüşlü Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/260-asma-kilit-hamili-ceyrek-donuslu-kilit.pdf'
    }
    
    if (code === '162' && fullName?.includes('Pako Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/162-pako-kilit.pdf'
    }
    
    if (code === '064') {
      if (fullName?.includes('Çeyrek Dönüşlü Yaylı Kilit')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/064-ceyrek-donuslu-yayli-kilit v1.pdf'
      }
      if (fullName?.includes('Çeyrek Dönüşlü Kelebek Kilit')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/064-ceyrek-donuslu-kelebek-kilit v2.pdf'
      }
      if (fullName?.includes('Çeyrek Dönüşlü Kademeli Kilit')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/064-ceyrek-donuslu-kademeli-kilit v3.pdf'
      }
    }
    
    if (code === '266' && fullName?.includes('Mini Çeyrek Dönüşlü Yaylı Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/266-mini-ceyrek-donuslu-yayli-kilit.pdf'
    }
    
    if (code === '166' && fullName?.includes('Mini Çeyrek Dönüşlü Kelebek')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/166-mini-ceyrek-donuslu-kelebek-kilit.pdf'
    }
    
    if (code === '066' && fullName?.includes('Mini Çeyrek Dönüşlü Yaylı Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/066-mini-ceyrek-donuslu-yayli-kilit.pdf'
    }
    
    if (code === '662') {
      if (fullName?.includes('v1') || fullName?.includes('Kili v1')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/662-asma-kilit-hamili-ceyrek-donuslu-kilit v1.pdf'
      }
      if (fullName?.includes('v2') || fullName?.includes('Kil v2')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/662-asma-kilit-hamili-ceyrek-donuslu-kilit v2.pdf'
      }
    }
    
    if (code === '211' && fullName?.includes('Asma Kilit Hamili \'L\' Kollu Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/211-asma-kilit-hamili-l-kollu-kilit.pdf'
    }
    
    if (code === '960' && fullName?.includes('Çeyrek Dönüşlü Kilit - Modüler Tutamak')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/960-ceyrek-donuslu-kilit-moduler-tutamak.pdf'
    }
    
    if (code === '361' && fullName?.includes('Emniyetli Çeyrek Dönüşlü Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/361-emniyetli-ceyrek-donuslu-kilit.pdf'
    }
    
    if (code === '461' && fullName?.includes('Emniyetli Çeyrek Dönüşlü Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/461-emniyetli-ceyrek-donuslu-kilit.pdf'
    }
    
    if (code === '760' && fullName?.includes('Çeyrek Dönüşlü Yaylı Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/760-ceyrek-donuslu-yayli-kilit.pdf'
    }
    
    if (code === '360' && fullName?.includes('Çeyrek Dönüşlü Yaylı Kilit (Topraklamalı)')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/360-ceyrek-donuslu-yayli-kilit-topraklamali.pdf'
    }
    
    if (code === '561' && fullName?.includes('Tutamaklı Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/561-tutamakli-kilit.pdf'
    }
    
    if (code === '261' && fullName?.includes('Tutamaklı Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/261-tutamakli-kilit.pdf'
    }
    
    if (code === '161' && fullName?.includes('Tutamaklı Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/161-tutamakli-kilit.pdf'
    }
    
    if (code === '160' && fullName?.includes('Dili Yaylı Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/160-dili-yayli-kilit.pdf'
    }
    
    if (code === '055') {
      if (fullName?.includes('v5')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/055-asma-kilit-hamili-ceyrek-donuslu-kilit v5.pdf'
      }
      if (fullName?.includes('v1')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/055-asma-kilit-hamili-ceyrek-donuslu-kilit v1.pdf'
      }
      if (fullName?.includes('v2')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/055-asma-kilit-hamili-ceyrek-donuslu-kilit v2.pdf'
      }
      if (fullName?.includes('v3')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/055-asma-kilit-hamili-ceyrek-donuslu-kilit v3.pdf'
      }
      if (fullName?.includes('v4')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/055-asma-kilit-hamili-ceyrek-donuslu-kilit v4.pdf'
      }
    }
    
    if (code === '050' && fullName?.includes('Bilyalı Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/050-bilyali-kilit.pdf'
    }
    
    if (code === '350' && fullName?.includes('Çeyrek Dönüşlü Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/350-ceyrek-donuslu-kilit.pdf'
    }
    
    if (code === '103' && fullName?.includes('Çeyrek Dönüşlü Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/103-ceyrek-donuslu-kilit.pdf'
    }
    
    if (code === '666' && fullName?.includes('Çeyrek Dönüşlü Kilit')) {
      return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/666-ceyrek-donuslu-kilit.pdf'
    }
    
    if (code === '203') {
      if (fullName?.includes('Çeyrek Dönüşlü Kilit v1') || (fullName?.includes('Çeyrek Dönüşlü Kilit') && !fullName?.includes('Kelebek'))) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/203-ceyrek-donuslu-kilit.pdf'
      }
      if (fullName?.includes('Çeyrek Dönüşlü Kelebek Kilit v2') || fullName?.includes('Çeyrek Dönüşlü Kelebek Kilit')) {
        return '/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/203-ceyrek-donuslu-kelebek-kilit.pdf'
      }
    }
    
    // SİLİNDİRLİ KİLİTLER için özel PDF mapping
    if (code === '163' && fullName?.includes('Silindirli Kilit Yaylı Dilli')) {
      return '/silindirlikilitler/163-silindirli-kilit-yayli-dilli.pdf'
    }
    
    if (code === '063' && fullName?.includes('Silindirli Kilit')) {
      return '/silindirlikilitler/063-silindirli-kilit.pdf'
    }
    
    if (code === '761' && fullName?.includes('Silindirli Kilit Kolay Montaj')) {
      return '/silindirlikilitler/761-silindirli-kilit-kolay-montaj.pdf'
    }
    
    if (code === '261' && fullName?.includes('Silindirli Tutamaklı Kilit')) {
      return '/silindirlikilitler/261-silindirli-tutamakli-kilit.pdf'
    }
    
    if (code === '065' && fullName?.includes('Silindirli Kelebek Kilit')) {
      return '/silindirlikilitler/065-silindirli-kelebek-kilit.pdf'
    }
    
    if (code === '165' && fullName?.includes('Mini Silindirli Kelebek Kilit')) {
      return '/silindirlikilitler/165-mini-silindirli-kelebek-kilit.pdf'
    }
    
    if (code === '110' && fullName?.includes('Silindirli "T" Kollu Kilit')) {
      return '/silindirlikilitler/110-silindirli-t-kollu-kilit.pdf'
    }
    
    if (code === '111' && fullName?.includes('Silindirli "L" Kollu Kilit')) {
      return '/silindirlikilitler/111-silindirli-l-kollu-kilit.pdf'
    }
    
    if (code === '064') {
      if (fullName?.includes('Silindirli "T" Kollu Kilit')) {
        return '/silindirlikilitler/064-silindirli-t-kollu-kilit.pdf'
      }
      if (fullName?.includes('Silindirli "L" Kollu Kilit')) {
        return '/silindirlikilitler/064-silindirli-l-kollu-kilit.pdf'
      }
    }
    
    if (code === '240') {
      if (fullName?.includes('Sıkıştırmalı T Kollu Kilit')) {
        return '/silindirlikilitler/240-sikistirmali-t-kollu-kilit.pdf'
      }
      if (fullName?.includes('Sıkıştırmalı') && !fullName?.includes('T Kollu')) {
        return '/silindirlikilitler/240-sikistirmali.pdf'
      }
    }
    
    if (code === '340') {
      if (fullName?.includes('v2') || fullName?.includes('Sıkıştırmalı Kelebek Kilit v2')) {
        return '/silindirlikilitler/340-sikistirmali-kelebek-kilit2.pdf'
      }
      if (fullName?.includes('v1') || fullName?.includes('Sıkıştırmalı Kelebek Kilit v1') || fullName?.includes('Sıkıştırmalı Kelebek Kilit')) {
        return '/silindirlikilitler/340-sikistirmali-kelebek-kilit1.pdf'
      }
    }
    
    if (code === '050') {
      if (fullName?.includes('Silindirli Kilit v1') || (fullName?.includes('Silindirli Kilit') && fullName?.includes('v1'))) {
        return '/silindirlikilitler/050-silindirli-kilit1.pdf'
      }
      if (fullName?.includes('Silindirli Kilit v2') || (fullName?.includes('Silindirli Kilit') && fullName?.includes('v2'))) {
        return '/silindirlikilitler/050-silindirli-kilit2.pdf'
      }
      if (fullName?.includes('A3') || fullName?.includes('Kilit Tutamağı')) {
        return '/silindirlikilitler/050-a3-kilit-tutamagi.pdf'
      }
      if (fullName?.includes('A4') || fullName?.includes('Toz Kapağı')) {
        return '/silindirlikilitler/050-a4-toz-kapagi.pdf'
      }
      if (fullName?.includes('A1') || fullName?.includes('Cam Bağlantı Sacı')) {
        return '/silindirlikilitler/050-a1-cam-baglanti-saci.pdf'
      }
    }
    
    if (code === '030 A1' && fullName?.includes('Kilit Karşılık Sacı')) {
      return '/silindirlikilitler/030-a1-kilit-karsilik-saci.pdf'
    }
    
    if (code === '055 A1' && fullName?.includes('Ahşap Bağlantı Sacı')) {
      return '/silindirlikilitler/055-a1-ahsap-baglanti-saci.pdf'
    }
    
    if (code === '550' && fullName?.includes('Silindirli Kilit Kolay Montaj')) {
      return '/silindirlikilitler/550-silindirli-kilit-kolay-montaj.pdf'
    }
    
    if (code === '450' && fullName?.includes('Yaylı Silindirli Kilit')) {
      return '/silindirlikilitler/450-yayli-silindirli-kilit.pdf'
    }
    
    if (code === '150' && fullName?.includes('Silindirli Kilit')) {
      return '/silindirlikilitler/150-silindirli-kilit.pdf'
    }
    
    if (code === '250' && fullName?.includes('Silindirli Kilit')) {
      return '/silindirlikilitler/250-silindirli-kilit.pdf'
    }
    
    if (code === '057' && fullName?.includes('Mini Silindirli Kilit')) {
      return '/silindirlikilitler/057-mini-silindirli-kilit.pdf'
    }
    
    if (code === '157' && fullName?.includes('Mini Silindirli Kilit')) {
      return '/silindirlikilitler/157-mini-silindirli-kilit.pdf'
    }
    
    if (code === '257' && fullName?.includes('Mini Silindirli Kilit')) {
      return '/silindirlikilitler/257-mini-silindirli-kilit.pdf'
    }
    
    if (code === '056' && fullName?.includes('Silindirli Kilit')) {
      return '/silindirlikilitler/056-silindirli-kilit.pdf'
    }
    
    // MOBİLYA VE ÇELİK EŞYA KİLİTLERİ için özel PDF mapping
    if (code === '010' && fullName?.includes('Silindirli "T" Kollu Kilit')) {
      return '/mobilyacecelikesya/010-silindirli-t-kollu-kilit.pdf'
    }
    
    if (code === '011' && fullName?.includes('Silindirli "L" Kollu Kilit')) {
      return '/mobilyacecelikesya/011-silindirli-l-kollu-kilit.pdf'
    }
    
    if (code === '021' && fullName?.includes('Cam Kapak Kilidi')) {
      return '/mobilyacecelikesya/021-cam-kapak-kilidi.pdf'
    }
    
    if (code === '020' && fullName?.includes('Sürgülü Cam Kilidi')) {
      return '/mobilyacecelikesya/020-surgulu-cam-kilidi.pdf'
    }
    
    if (code === '132' && fullName?.includes('Çekmece Kilidi')) {
      return '/mobilyacecelikesya/132-cekmece-kilidi.pdf'
    }
    
    if (code === '032' && fullName?.includes('Çekmece Kilidi')) {
      return '/mobilyacecelikesya/032-cekmece-kilidi.pdf'
    }
    
    if (code === '033' && fullName?.includes('Çekmece Kilidi')) {
      return '/mobilyacecelikesya/033-cekmece-kilidi.pdf'
    }
    
    if (code === '030' && fullName?.includes('Çekmece Kilidi')) {
      return '/mobilyacecelikesya/030-cekmece-kilidi.pdf'
    }
    
    if (code === '159' && fullName?.includes('Sürgülü Kapak Kilidi')) {
      return '/mobilyacecelikesya/159-surgulu-kapak-kilidi.pdf'
    }
    
    if (code === '059' && fullName?.includes('Sürgülü Kapak Kilidi')) {
      return '/mobilyacecelikesya/059-surgulu-kapak-kilidi.pdf'
    }
    
    if (code === '4150' && fullName?.includes('Şifreli Kilit')) {
      return '/mobilyacecelikesya/4150-sifreli-kilit.pdf'
    }
    
    if (code === '035' && fullName?.includes('Dosya Dolabı Kilidi')) {
      return '/mobilyacecelikesya/035-dosya-dolabi-kilidi.pdf'
    }
    
    if (code === '058' && fullName?.includes('Çelik Eşya Kilidi')) {
      return '/mobilyacecelikesya/058-celik-esya-kilidi.pdf'
    }
    
    if (code === '158' && fullName?.includes('Çelik Eşya Kilidi')) {
      return '/mobilyacecelikesya/158-celik-esya-kilidi.pdf'
    }
    
    if (code === '013' && fullName?.includes('Yangın Dolabı Kilidi')) {
      return '/mobilyacecelikesya/013-yangin-dolabi-kilidi.pdf'
    }
    
    if (code === '113' && fullName?.includes('Yangın Dolabı Kilidi')) {
      return '/mobilyacecelikesya/113-yangin-dolabi-kilidi.pdf'
    }
    
    // ELEKTRONİK KOLLU KİLİTLER için özel PDF mapping
    if (code === '3114' && fullName?.includes('Elektronik Kollu Kilit - Standalone')) {
      return '/elektronikkollukilitler/3114-elektronik-kollu-kilit-standalone.pdf'
    }
    
    if (code === '3101' && fullName?.includes('Elektronik Kollu Kilit')) {
      return '/elektronikkollukilitler/3101-elektronik-kollu-kilit.pdf'
    }
    
    if (code === '3102' && fullName?.includes('Elektronik Kollu Kilit')) {
      return '/elektronikkollukilitler/3102-elektronik-kollu-kilit.pdf'
    }
    
    if (code === '3103' && fullName?.includes('Elektronik Kollu Kilit')) {
      return '/elektronikkollukilitler/3103-elektronik-kollu-kilit.pdf'
    }
    
    if (code === '3104' && fullName?.includes('Elektronik Kollu Kilit')) {
      return '/elektronikkollukilitler/3104-elektronik-kollu-kilit.pdf'
    }
    
    if (code === '3111' && fullName?.includes('Elektronik Kollu Kilit')) {
      return '/elektronikkollukilitler/3111-elektronik-kollu-kilit.pdf'
    }
    
    if (code === '3112' && fullName?.includes('Elektronik Kollu Kilit')) {
      return '/elektronikkollukilitler/3112-elektronik-kollu-kilit.pdf'
    }
    
    if (code === '3105' && fullName?.includes('Elektronik Kollu Kilit')) {
      return '/elektronikkollukilitler/3105-elektronik-kollu-kilit.pdf'
    }
    
    if (code === '3106' && fullName?.includes('Elektronik Kollu Kilit')) {
      return '/elektronikkollukilitler/3106-elektronik-kollu-kilit.pdf'
    }
    
    if (code === '3113' && fullName?.includes('Elektronik Kollu Kilit - Standalone')) {
      return '/elektronikkollukilitler/3113-elektronik-kollu-kilit-standalone (1).pdf'
    }
    
    // İZLEME VE ERİŞİM KONTROL SİSTEMİ için özel PDF mapping
    if (code === '3402' && fullName?.includes('ACU Erişim Kontrol Ünitesi')) {
      return '/izlemeveerisimkontrol/3402-acu-erisim-kontrol-unitesi.pdf'
    }
    
    if (code === '3403' && fullName?.includes('ACU Plus Erişim Kontrol Ünitesi')) {
      return '/izlemeveerisimkontrol/3403-acu-plus-erisim-kontrol-unitesi.pdf'
    }
    
    if (code === '3416' && fullName?.includes('S-AIK Standalone Erişim Arayüzü Tuş Takımı')) {
      return '/izlemeveerisimkontrol/3416-s-aik-standalone-erisim-arayuzu-tus-takimi.pdf'
    }
    
    if (code === '3417' && fullName?.includes('S-AIP Standalone Erişim Arayüzü Kart Okuyucu')) {
      return '/izlemeveerisimkontrol/3417-s-aip-standalone-erisim-arayuzu-kart-okuyucu.pdf'
    }
    
    if (code === '3414' && fullName?.includes('AIK Erişim Arayüzü Tuş Takımı')) {
      return '/izlemeveerisimkontrol/3414-aik-erisim-arayuzu-tus-takimi.pdf'
    }
    
    if (code === '3415' && fullName?.includes('AIP Erişim Arayüzü Kart Okuyucu')) {
      return '/izlemeveerisimkontrol/3415-aip-erisim-arayuzu-kart-okuyucu.pdf'
    }
    
    // ELEKTRONİK DOLAP KİLİTLERİ için özel PDF mapping
    if (code === '3204' && fullName?.includes('Elektronik Dolap Kilidi')) {
      return '/elektronikdolapkilitleri/3204-elektronik-dolap-kilidi.pdf'
    }
    
    if (code === '3205' && fullName?.includes('Elektronik Dolap Kilidi')) {
      return '/elektronikdolapkilitleri/3205-elektronik-dolap-kilidi.pdf'
    }
    
    if (code === '3211' && fullName?.includes('Elektronik Dolap Kilidi')) {
      return '/elektronikdolapkilitleri/3211-elektronik-dolap-kilidi.pdf'
    }
    
    if (code === '3212' && fullName?.includes('Elektronik Dolap Kilidi')) {
      return '/elektronikdolapkilitleri/3212-elektronik-dolap-kilidi.pdf'
    }
    
    if (code === '3213' && fullName?.includes('Elektronik Dolap Kilidi')) {
      return '/elektronikdolapkilitleri/3213-elektronik-dolap-kilidi.pdf'
    }
    
    if (code === '3214' && fullName?.includes('Elektronik Dolap Kilidi')) {
      return '/elektronikdolapkilitleri/3214-elektronik-dolap-kilidi.pdf'
    }
    
    if (code === '3202' && fullName?.includes('Elektronik Dolap Kilidi')) {
      return '/elektronikdolapkilitleri/3202-elektronik-dolap-kilidi.pdf'
    }
    
    if (code === '3203' && fullName?.includes('Elektronik Dolap Kilidi')) {
      return '/elektronikdolapkilitleri/3203-elektronik-dolap-kilidi.pdf'
    }
    
    if (code === '3201' && fullName?.includes('Elektronik Dolap Kilidi')) {
      return '/elektronikdolapkilitleri/3201-elektronik-dolap-kilidi.pdf'
    }
    
    // KENAR MENTEŞELER için özel PDF mapping
    if (code === '090' && fullName?.includes('Kenar Menteşe (10mm)')) {
      return '/kenarmenteseler/090-kenar-mentese-10mm.pdf'
    }
    
    if (code === '091' && fullName?.includes('Kenar Menteşe (12mm)')) {
      return '/kenarmenteseler/091-kenar-mentese-12mm.pdf'
    }
    
    if (code === '092' && fullName?.includes('Kenar Menteşe (12mm)')) {
      return '/kenarmenteseler/092-kenar-mentese-12mm.pdf'
    }
    
    if (code === '192' && fullName?.includes('Kenar Menteşe (12mm)')) {
      return '/kenarmenteseler/192-kenar-mentese-12mm.pdf'
    }
    
    if (code === '093' && fullName?.includes('Kenar Menteşe (14mm)')) {
      return '/kenarmenteseler/093-kenar-mentese-14mm.pdf'
    }
    
    if (code === '193' && fullName?.includes('Kenar Menteşe (16mm)')) {
      return '/kenarmenteseler/193-kenar-mentese-16mm.pdf'
    }
    
    if (code === '793' && fullName?.includes('Kenar Menteşe')) {
      return '/kenarmenteseler/793-kenar-mentese.pdf'
    }
    
    if (code === '893' && fullName?.includes('Kenar Menteşe')) {
      return '/kenarmenteseler/893-kenar-mentese.pdf'
    }
    
    if (code === '191' && fullName?.includes('Kenar Menteşe (10mm)')) {
      return '/kenarmenteseler/191-kenar-mentese-10mm.pdf'
    }
    
    if (code === '1093' && fullName?.includes('Kenar Menteşe')) {
      return '/kenarmenteseler/1093-kenar-mentese.pdf'
    }
    
    if (code === '993' && fullName?.includes('Kenar Menteşe')) {
      return '/kenarmenteseler/993-kenar-mentese.pdf'
    }
    
    if (code === '1193' && fullName?.includes('Kenar Menteşe')) {
      return '/kenarmenteseler/1193-kenar-mentese.pdf'
    }
    
    if (code === '393' && fullName?.includes('Kenar Menteşe')) {
      return '/kenarmenteseler/393-kenar-mentese.pdf'
    }
    
    if (code === '293' && fullName?.includes('Kenar Menteşe')) {
      return '/kenarmenteseler/293-kenar-mentese.pdf'
    }
    
    if (code === '493' && fullName?.includes('Kenar Menteşe')) {
      return '/kenarmenteseler/493-kenar-mentese.pdf'
    }
    
    if (code === '593' && fullName?.includes('Kenar Menteşe')) {
      return '/kenarmenteseler/593-kenar-mentese.pdf'
    }
    
    if (code === '693' && fullName?.includes('Kenar Menteşe')) {
      return '/kenarmenteseler/693-kenar-mentese.pdf'
    }
    
    // GİZLİ MENTEŞELER için özel PDF mapping
    if (code === '094' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/094-gizli-mentese.pdf'
    }
    
    if (code === '194' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/194-gizli-mentese.pdf'
    }
    
    if (code === '096' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/096-gizli-mentese.pdf'
    }
    
    if (code === '196' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/196-gizli-mentese.pdf'
    }
    
    if (code === '294' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/294-gizli-mentese.pdf'
    }
    
    if (code === '296' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/296-gizli-mentese.pdf'
    }
    
    if (code === '095' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/095-gizli-mentese.pdf'
    }
    
    if (code === '195' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/195-gizli-mentese.pdf'
    }
    
    if (code === '295' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/295-gizli-mentese.pdf'
    }
    
    if (code === '395' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/395-gizli-mentese.pdf'
    }
    
    if (code === '695' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/695-gizli-mentese.pdf'
    }
    
    if (code === '795' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/795-gizli-mentese.pdf'
    }
    
    if (code === '1795' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/1795-gizli-mentese.pdf'
    }
    
    if (code === '895' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/895-gizli-mentese.pdf'
    }
    
    if (code === '1095' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/1095-gizli-mentese.pdf'
    }
    
    if (code === '995') {
      if (fullName?.includes('v1') || fullName?.includes('Gizli Menteşe v1')) {
        return '/gizlimenteseler/995-gizli-mentese-v1.pdf'
      }
      if (fullName?.includes('v2') || fullName?.includes('Gizli Menteşe v2')) {
        return '/gizlimenteseler/995-gizli-mentese-v2.pdf'
      }
    }
    
    if (code === '1995' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/1995-gizli-mentese.pdf'
    }
    
    if (code === '595' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/595-gizli-mentese.pdf'
    }
    
    if (code === '189' && fullName?.includes('Yaylı Mil Menteşe')) {
      return '/gizlimenteseler/189-yayli-mil-mentese.pdf'
    }
    
    if (code === '389' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/389-gizli-mentese.pdf'
    }
    
    if (code === '089' && fullName?.includes('Yaylı Mil Menteşe')) {
      return '/gizlimenteseler/089-yayli-mil-mentese.pdf'
    }
    
    if (code === '289' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/289-gizli-mentese.pdf'
    }
    
    if (code === '394' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/394-gizli-mentese.pdf'
    }
    
    if (code === '1495' && fullName?.includes('Gizli Menteşe')) {
      return '/gizlimenteseler/1495-gizli-mentese.pdf'
    }
    
    // Köşe Menteşeler için özel PDF mapping
    if (fullName?.includes('Köşe Menteşe') || fullName?.includes('Klima Santral Menteşesi')) {
      if (code === '097' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/097-kose-mentese.pdf'
      }
      if (code === '197' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/197-kose-mentese.pdf'
      }
      if (code === '297' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/297-kose-mentese.pdf'
      }
      if (code === '397' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/397-kose-mentese.pdf'
      }
      if (code === '298' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/298-kose-mentese.pdf'
      }
      if (code === '098' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/098-kose-mentese.pdf'
      }
      if (code === '398' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/398-kose-mentese.pdf'
      }
      if (code === '497' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/497-kose-mentese.pdf'
      }
      if (code === '498' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/498-kose-mentese.pdf'
      }
      if (code === '400' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/400-kose-mentese.pdf'
      }
      if (code === '200' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/200-kose-mentese.pdf'
      }
      if (code === '100' && fullName?.includes('Köşe Menteşe')) {
        return '/kosementeseler/100-kose-mentese.pdf'
      }
      if (code === '600') {
        if (fullName?.includes('Klima Santral Menteşesi')) {
          return '/kosementeseler/600-klima-santral-mentesesi.pdf'
        }
        if (fullName?.includes('Köşe Menteşe')) {
          return '/kosementeseler/600-kose-mentese.pdf'
        }
      }
      if (code === '700' && fullName?.includes('Klima Santral Menteşesi')) {
        return '/kosementeseler/700-klima-santral-mentesesi.pdf'
      }
    }
    
    // Düz Menteşeler için özel PDF mapping
    if (fullName?.includes('Yaprak Menteşe') || fullName?.includes('Kaldır - Çıkar Menteşe') || fullName?.includes('Tork Menteşe') || fullName?.includes('Ayarlı Tork Menteşe') || fullName?.includes('Yataklı Menteşe') || fullName?.includes('Karoser Menteşe')) {
      if (code === '1299' && fullName?.includes('Mini Yaprak Menteşe')) {
        return '/duzmenteseler/1299-mini-yaprak-mentese.pdf'
      }
      if (code === '299' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/299-yaprak-mentese.pdf'
      }
      if (code === '199' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/199-yaprak-mentese.pdf'
      }
      if (code === '099' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/099-yaprak-mentese.pdf'
      }
      if (code === '399' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/399-yaprak-mentese.pdf'
      }
      if (code === '1399' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/1399-yaprak-mentese.pdf'
      }
      if (code === '1699' && fullName?.includes('Kaldır - Çıkar Menteşe')) {
        return '/duzmenteseler/1699-kaldir-cikar-mentese.pdf'
      }
      if (code === '1499' && fullName?.includes('Kaldır - Çıkar Menteşe')) {
        return '/duzmenteseler/1499-kaldir-cikar-mentese.pdf'
      }
      if (code === '900' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/900-yaprak-mentese.pdf'
      }
      if (code === '899' && fullName?.includes('Kaldır - Çıkar Menteşe')) {
        return '/duzmenteseler/899-kaldir-cikar-mentese.pdf'
      }
      if (code === '499' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/499-yaprak-mentese.pdf'
      }
      if (code === '599' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/599-yaprak-mentese.pdf'
      }
      if (code === '1599' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/1599-yaprak-mentese.pdf'
      }
      if (code === '799' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/799-yaprak-mentese.pdf'
      }
      if (code === '4599' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/4599-yaprak-mentese.pdf'
      }
      if (code === '2899' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/2899-yaprak-mentese.pdf'
      }
      if (code === '4299' && fullName?.includes('Kaldır - Çıkar Menteşe')) {
        return '/duzmenteseler/4299-kaldir-cikar-mentese.pdf'
      }
      if (code === '1199' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/1199-yaprak-mentese.pdf'
      }
      if (code === '2099' && fullName?.includes('Tork Menteşe')) {
        return '/duzmenteseler/2099-tork-mentese.pdf'
      }
      if (code === '2199' && fullName?.includes('Tork Menteşe')) {
        return '/duzmenteseler/2199-tork-mentese.pdf'
      }
      if (code === '2599' && fullName?.includes('Yaprak Menteşe')) {
        return '/duzmenteseler/2599-yaprak-mentese.pdf'
      }
      if (code === '2399' && fullName?.includes('Ayarlı Tork Menteşe')) {
        return '/duzmenteseler/2399-ayarli-tork-mentese.pdf'
      }
      if (code === '2499' && fullName?.includes('Ayarlı Tork Menteşe')) {
        return '/duzmenteseler/2499-ayarli-tork-mentese.pdf'
      }
      if (code === '699' && fullName?.includes('Kaldır - Çıkar Menteşe')) {
        return '/duzmenteseler/699-kaldir-cikar-mentese.pdf'
      }
      if (code === '693' && fullName?.includes('Yataklı Menteşe')) {
        return '/duzmenteseler/693-yatakli-mentese.pdf'
      }
      if (code === '800' && fullName?.includes('Klima Santral Menteşesi (3D)')) {
        return '/duzmenteseler/800-klima-santral-mentesesi-3d.pdf'
      }
      if (code === '500' && fullName?.includes('Klima Santral Menteşesi')) {
        return '/duzmenteseler/500-klima-santral-mentesesi.pdf'
      }
      if (code === '300' && fullName?.includes('Klima Santral Menteşesi')) {
        return '/duzmenteseler/300-klima-santral-mentesesi.pdf'
      }
      if (code === '1500' && fullName?.includes('Klima Santral Menteşesi')) {
        return '/duzmenteseler/1500-klima-santral-mentesesi.pdf'
      }
      if (code === '0000' && fullName?.includes('Karoser Menteşe')) {
        return '/duzmenteseler/0000-karoser-mentese.pdf'
      }
    }
    
    // Kulplar için özel PDF mapping
    if (fullName?.includes('Kulp') || fullName?.includes('Tutamak')) {
      if (code === '084' && fullName?.includes('Milenyum Kulp')) {
        return '/kulplar/084-milenyum-kulp.pdf'
      }
      if (code === '085' && fullName?.includes('Çekme Kulpu')) {
        return '/kulplar/085-cekme-kulpu.pdf'
      }
      if (code === '083' && fullName?.includes('Alüminyum Tutamak')) {
        return '/kulplar/083-aluminyum-tutamak.pdf'
      }
      if (code === '183' && fullName?.includes('Alüminyum Tutamak')) {
        return '/kulplar/183-aluminyum-tutamak.pdf'
      }
      if (code === '184' && fullName?.includes('Metal Kulp')) {
        return '/kulplar/184-metal-kulp.pdf'
      }
      if (code === '484' && fullName?.includes('Metal Kulp')) {
        return '/kulplar/484-metal-kulp.pdf'
      }
      if (code === '884' && fullName?.includes('Alüminyum Kulp')) {
        return '/kulplar/884-aluminyum-kulp.pdf'
      }
      if (code === '284' && fullName?.includes('Metal Kulp')) {
        return '/kulplar/284-metal-kulp.pdf'
      }
      if (code === '384') {
        if (fullName?.includes('Metal Kulp v1')) {
          return '/kulplar/384-metal-kulp v1.pdf'
        }
        if (fullName?.includes('Metal Kulp v2')) {
          return '/kulplar/384-metal-kulp v2.pdf'
        }
      }
      if (code === '584' && fullName?.includes('Katlanabilir Metal Kulp')) {
        return '/kulplar/584-katlanabilir-metal-kulp.pdf'
      }
      if (code === '684' && fullName?.includes('Metal Kulp')) {
        return '/kulplar/684-metal-kulp.pdf'
      }
      if (code === '784' && fullName?.includes('Metal Kulp')) {
        return '/kulplar/784-metal-kulp.pdf'
      }
      if (code === '185' && fullName?.includes('Parmak Kulp')) {
        return '/kulplar/185-parmak-kulp.pdf'
      }
      if (code === '086' && fullName?.includes('Makina Kapak Kulpu')) {
        return '/kulplar/086-makina-kapak-kulpu.pdf'
      }
      if (code === '186' && fullName?.includes('Makina Kapak Kulpu')) {
        return '/kulplar/186-makina-kapak-kulpu.pdf'
      }
      if (code === '386' && fullName?.includes('Kapak Kulpu')) {
        return '/kulplar/386-kapak-kulpu.pdf'
      }
      if (code === '081' && fullName?.includes('Kapak Kulpu')) {
        return '/kulplar/081-kapak-kulpu.pdf'
      }
      if (code === '087' && fullName?.includes('Makina Kapak Kulpu')) {
        return '/kulplar/087-makina-kapak-kulpu.pdf'
      }
      if (code === '287' && fullName?.includes('Makina Kapak Kulpu')) {
        return '/kulplar/287-makina-kapak-kulpu.pdf'
      }
      if (code === '187' && fullName?.includes('Makina Kapak Kulpu')) {
        return '/kulplar/187-makina-kapak-kulpu.pdf'
      }
      if (code === '487' && fullName?.includes('Makina Kapak Kulpu')) {
        return '/kulplar/487-makina-kapak-kulpu.pdf'
      }
      if (code === '286' && fullName?.includes('Kapak Kulpu')) {
        return '/kulplar/286-kapak-kulpu.pdf'
      }
      if (code === '387' && fullName?.includes('Makina Kapak Kulpu')) {
        return '/kulplar/387-makina-kapak-kulpu.pdf'
      }
      if (code === '082' && fullName?.includes('Gömme Yaylı Kulp')) {
        return '/kulplar/082-gomme-yayli-kulp.pdf'
      }
      if (code === '374' && fullName?.includes('Geçme Kapak Tutamağı')) {
        return '/kulplar/374-gecme-kapak-tutamagi.pdf'
      }
      if (code === '274' && fullName?.includes('Geçme Kapak Tutamağı')) {
        return '/kulplar/274-gecme-kapak-tutamagi.pdf'
      }
      if (code === '074' && fullName?.includes('Geçme Kapak Tutamağı')) {
        return '/kulplar/074-gecme-kapak-tutamagi.pdf'
      }
      if (code === '174' && fullName?.includes('Geçme Kapak Tutamağı')) {
        return '/kulplar/174-gecme-kapak-tutamagi.pdf'
      }
      if (code === '674' && fullName?.includes('Geçme Kapak Tutamağı')) {
        return '/kulplar/674-gecme-kapak-tutamagi.pdf'
      }
      if (code === '774' && fullName?.includes('Geçme Kapak Tutamağı')) {
        return '/kulplar/774-gecme-kapak-tutamagi.pdf'
      }
      if (code === '874' && fullName?.includes('Geçme Kapak Tutamağı')) {
        return '/kulplar/874-gecme-kapak-tutamagi.pdf'
      }
      if (code === '574' && fullName?.includes('Gömme Tutamak')) {
        return '/kulplar/574-gomme-tutamak.pdf'
      }
      if (code === '474' && fullName?.includes('Gömme Tutamak')) {
        return '/kulplar/474-gomme-tutamak.pdf'
      }
      if (code === '974' && fullName?.includes('Gömme Tutamak')) {
        return '/kulplar/974-gomme-tutamak.pdf'
      }
    }
    
    // Kod bazlı PDF mapping
    const pdfMap = {
      '001': '/001-kollu-kilit.pdf',
      '006': '/006-kollu-kilit.pdf',
      '008': '/008-kollu-kilit.pdf',
      '101': '/101-kollu-kilit.pdf',
      '106': '/106-kollu-kilit.pdf',
      '108': '/108-kollu-kilit.pdf',
      '201': '/201-kollu-kilit.pdf',
      '205': '/205-kollu-kilit.pdf',
      '206': '/206-kollu-kilit.pdf',
      '208': '/208-kollu-kilit.pdf',
      '308': '/308-kollu-kilit.pdf',
      '406': '/406-kollu-kilit.pdf',
      '408': '/408-kollu-kilit.pdf',
      '501': '/501-kollu-kilit.pdf',
      '504': '/504-dikey-hareketli-kollu-kilit.pdf',
      '508': '/508-kollu-kilit.pdf',
      '601': '/601-kollu-kilit.pdf',
      '708': '/708-kollu-kilit.pdf',
      '808': '/808-kollu-kilit.pdf',
      '908': '/908-kollu-kilit.pdf',
    }
    
    return code ? pdfMap[code] || null : null
  }
  
  const pdfPath = getPdfPath()

  // Tüm marka logoları
  const baseBrandLogos = [
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

  // ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR için ilk logoyu hydropack yap
  const allBrandLogos = productName === 'ALÜMİNYUM GÖVDELİ DİŞLİ POMPALAR'
    ? ['/hydropack.png', ...baseBrandLogos]
    : baseBrandLogos

  return (
    <div className="bg-slate-50 pb-16 text-slate-900">
      <section className="mx-auto max-w-7xl px-1.5 pt-10 sm:px-2 lg:px-3">
        {/* Geri Dön Butonu */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#166534]"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Geri Dön
        </button>

        {hasDetail ? (
          <div className="max-w-6xl mx-auto">
            {/* Ürün Başlığı ve Kod */}
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                {(productDetail?.code || productInfo?.code) && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-sm font-semibold">
                    {productDetail?.code || productInfo?.code}
                  </span>
                )}
                <h1 className="text-3xl font-bold text-slate-900">{productDetail?.name || productInfo?.name || productName}</h1>
              </div>
            </div>

            {/* Ana İçerik Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Sol Kolon - Ürün Görseli */}
              <div className="flex flex-col items-start justify-center gap-6 lg:sticky lg:top-8 lg:h-fit">
                <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden">
                    <img 
                      src={kolluKilitImage} 
                      alt={productDetail?.name || productInfo?.name || productName} 
                      className="max-h-full max-w-full object-contain p-4" 
                    />
                  </div>
                </div>
              </div>

              {/* Sağ Kolon - Ürün Bilgileri */}
              <div className="space-y-6">
                {/* Ürün Bilgisi */}
                {productDetail?.productImage ? (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-1 w-8 rounded-full bg-[#166534]"></div>
                      <h3 className="text-xl font-bold text-slate-900">Ürün Bilgisi</h3>
                    </div>
                    <div className="w-full overflow-x-auto">
                      <img 
                        src={productDetail.productImage} 
                        alt={productDetail.name || productName}
                        className="w-auto h-auto object-contain rounded-lg"
                        style={{ minWidth: '800px', width: 'auto', height: 'auto' }}
                      />
                    </div>
                  </div>
                ) : productDetail?.description && productDetail.description.trim() !== '' ? (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-1 w-8 rounded-full bg-[#166534]"></div>
                      <h3 className="text-xl font-bold text-slate-900">Ürün Bilgisi</h3>
                    </div>
                    <div className="text-base leading-relaxed text-slate-700 whitespace-pre-line">
                      {productDetail.description}
                    </div>
                  </div>
                ) : isLockProduct && !productDetail ? (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-1 w-8 rounded-full bg-[#166534]"></div>
                      <h3 className="text-xl font-bold text-slate-900">Ürün Bilgisi</h3>
                    </div>
                    <div className="text-base leading-relaxed text-slate-700 whitespace-pre-line">
                      Sac ve polyester panolara uygulanır. 40 mm pirinç barel uygulaması yapılabilir.
                    </div>
                  </div>
                ) : null}

                {/* Uygulama Alanı */}
                {productDetail?.applicationArea && Object.keys(productDetail.applicationArea).length > 0 && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-1 w-8 rounded-full bg-[#166534]"></div>
                      <h3 className="text-xl font-bold text-slate-900">UYGULAMA ALANI</h3>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(productDetail.applicationArea).map(([key, value]) => (
                        <div key={key} className="text-base leading-relaxed text-slate-700 whitespace-pre-line">
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Aksesuarlar */}
                {productDetail?.accessories && Object.keys(productDetail.accessories).length > 0 && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-1 w-8 rounded-full bg-[#166534]"></div>
                      <h3 className="text-xl font-bold text-slate-900">AKSESUARLAR</h3>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(productDetail.accessories).map(([key, value]) => (
                        <div key={key} className="text-base leading-relaxed text-slate-700 whitespace-pre-line">
                          {value}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Malzeme Bilgileri */}
                {(productDetail?.materials || isLockProduct) && Object.keys(productDetail?.materials || {}).length > 0 && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-1 w-8 rounded-full bg-[#166534]"></div>
                      <h3 className="text-xl font-bold text-slate-900">MALZEME</h3>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(productDetail?.materials || {}).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                          <div className="min-w-[120px] font-semibold text-slate-900 text-sm sm:text-base">{key}:</div>
                          <div className="text-sm sm:text-base text-slate-600 flex-1 whitespace-pre-line">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Yüzey Bilgileri */}
                {productDetail?.surface && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-1 w-8 rounded-full bg-[#166534]"></div>
                      <h3 className="text-xl font-bold text-slate-900">YÜZEY</h3>
                    </div>
                    <div className="text-base text-slate-700">
                      {productDetail.surface}
                    </div>
                  </div>
                )}

                {/* Teknik Özellikler */}
                {productDetail?.technicalSpecs && Object.keys(productDetail.technicalSpecs).length > 0 && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-1 w-8 rounded-full bg-[#166534]"></div>
                      <h3 className="text-xl font-bold text-slate-900">TEKNİK ÖZELLİKLER</h3>
                    </div>
                    <div className="space-y-4">
                      {Object.entries(productDetail.technicalSpecs).map(([key, value]) => (
                        <div key={key} className="flex flex-col sm:flex-row sm:items-start gap-2 pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                          <div className="min-w-[120px] font-semibold text-slate-900 text-sm sm:text-base">{key}:</div>
                          <div className="text-sm sm:text-base text-slate-600 flex-1">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Versiyon Tablosu - 4001 için */}
                {productDetail?.versions && productDetail.versions.length > 0 && productDetail.code !== '320.02.180' && (() => {
                  // Helper function to check if a column has any non-empty values
                  const hasColumnData = (fieldName) => {
                    return productDetail.versions.some(version => {
                      const value = version[fieldName]
                      return value !== undefined && value !== null && value !== ''
                    })
                  }

                  return (
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="flex items-center gap-2 mb-6">
                        <div className="h-1 w-8 rounded-full bg-[#166534]"></div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {productDetail.code === '018' ? 'Trafo Kabin Kilidi (V1)' : productDetail.versions[0]?.stokKodu ? 'Stok Kodları ve Ölçüler' : productDetail.code === '320.02.180' ? '' : 'Ürün Varyasyonları'}
                      </h3>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-slate-50">
                              {productDetail.versions[0]?.stokKodu ? (
                                <>
                                  <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Stok Kodu</th>
                                  {hasColumnData('CC') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">CC</th>
                                  )}
                                  {hasColumnData('CH') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">CH</th>
                                  )}
                                  {hasColumnData('CL') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">CL</th>
                                  )}
                                  {hasColumnData('LH13') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:13 (H)</th>
                                  )}
                                  {hasColumnData('LH13_5') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:13.5 (H)</th>
                                  )}
                                  {hasColumnData('LH14') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:14 (H)</th>
                                  )}
                                  {hasColumnData('LH16') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:16 (H)</th>
                                  )}
                                  {hasColumnData('LH16_5') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:16.5 (H)</th>
                                  )}
                                  {hasColumnData('LH18') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:18 (H)</th>
                                  )}
                                  {hasColumnData('LH18_5') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:18.5 (H)</th>
                                  )}
                                  {hasColumnData('LH19') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:19 (H)</th>
                                  )}
                                  {hasColumnData('LH20') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:20 (H)</th>
                                  )}
                                  {hasColumnData('LH21') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:21 (H)</th>
                                  )}
                                  {hasColumnData('LH22') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:22 (H)</th>
                                  )}
                                  {hasColumnData('LH25') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:25 (H)</th>
                                  )}
                                  {hasColumnData('LH29') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:29 (H)</th>
                                  )}
                                  {hasColumnData('LH30') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:30 (H)</th>
                                  )}
                                  {hasColumnData('LH32') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:32 (H)</th>
                                  )}
                                  {hasColumnData('LH35') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:35 (H)</th>
                                  )}
                                  {hasColumnData('LH40') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:40 (H)</th>
                                  )}
                                  {hasColumnData('LH50') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:50 (H)</th>
                                  )}
                                  {hasColumnData('LH60') && (
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">LH:60 (H)</th>
                                  )}
                                </>
                              ) : productDetail.versions[0]?.mekanizmaGovde ? (
                              <>
                                {hasColumnData('version') && (
                                  <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Versiyon</th>
                                )}
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Mekanizma Gövde</th>
                                {hasColumnData('mekanizmaLama') && (
                                  <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Mekanizma Lama</th>
                                )}
                                {hasColumnData('A') && (
                                  <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">A</th>
                                )}
                                {hasColumnData('B') && (
                                  <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">B</th>
                                )}
                                {hasColumnData('C') && (
                                  <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">C</th>
                                )}
                                {hasColumnData('D') && (
                                  <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">D</th>
                                )}
                              </>
                            ) : productDetail.versions[0]?.urunKodu ? (
                              <>
                                {productDetail.code === 'AA' && productDetail.versions[0]?.urunAdi ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Adı</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Resim</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Yüzey</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                  </>
                                ) : productDetail.code === '4150' && productDetail.versions[0]?.urunAdi ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Adı</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Yüzey</th>
                                  </>
                                ) : productDetail.code === 'DD' && productDetail.versions[0]?.gobek ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Göbek</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Resim</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Göbek No (DD)</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Yüzey</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                  </>
                                ) : productDetail.code === '060 AX' && productDetail.versions[0]?.urunAdi ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Resmi</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Adı</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Açıklama</th>
                                  </>
                                ) : productDetail.code === 'CY1' && productDetail.versions[0]?.baglantiCivatasi ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Bağlantı Civatası</th>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">H1</th>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">H2</th>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">H3</th>
                                  </>
                                ) : productDetail.versions[0]?.gobekCesidi ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Göbek Çeşidi</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                    {hasColumnData('yuzey') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Yüzey</th>
                                    )}
                                  </>
                                ) : (hasColumnData('R1') && hasColumnData('ambalaj')) ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    {hasColumnData('ul94V0') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">UL 94-V0</th>
                                    )}
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Renk</th>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">R1</th>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">R2</th>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">R3</th>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">R4</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">DT</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ambalaj</th>
                                    {hasColumnData('cad3d') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">3D CAD</th>
                                    )}
                                  </>
                                ) : (productDetail.code === '340.09.966' || productDetail.code === '340.09.968' || productDetail.code === '340.09.969' || productDetail.code === '340.09.970' || productDetail.code === '340.09.383' || productDetail.code === '340.09.611' || productDetail.code === '340.09.384' || productDetail.code === '34001010' || productDetail.code === '34001011' || productDetail.code === '34001012' || productDetail.code === '34001015') ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Renk</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ambalaj</th>
                                    {hasColumnData('cad3d') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">3D CAD</th>
                                    )}
                                  </>
                                ) : productDetail.versions[0]?.malzeme ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    {hasColumnData('urunAdi') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Adı</th>
                                    )}
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                    {hasColumnData('yuzey') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Yüzey</th>
                                    )}
                                  </>
                                ) : productDetail.code === '571' || productDetail.code === '671' ? (
                                  <>
                                    {hasColumnData('aciklama') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Kapı Kalınlığı (DT)</th>
                                    )}
                                    {hasColumnData('silindirFise') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Silindir - Fişe</th>
                                    )}
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                  </>
                                ) : productDetail.code === '071' || productDetail.code === '171' || productDetail.code === '271' || productDetail.code === '371' || productDetail.code === '471' ? (
                                  <>
                                    {hasColumnData('aciklama') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Kapı Kalınlığı (DT)</th>
                                    )}
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                  </>
                                ) : productDetail.versions[0]?.AMM && productDetail.versions[0]?.BMM && productDetail.versions[0]?.ruloUzunlugu ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">A mm</th>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">B mm</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">RULO UZUNLUĞU (M)</th>
                                  </>
                                ) : productDetail.versions[0]?.Hmm && productDetail.versions[0]?.Lmm ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">H mm</th>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">L mm</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                  </>
                                ) : productDetail.versions[0]?.Xmm ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">X mm</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                  </>
                                ) : productDetail.versions[0]?.Lmm ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">L mm</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    {((productDetail.code === 'IC' && productDetail.name === 'İspanyolet Çubuklar 6') || productDetail.code === 'LY40') && hasColumnData('cad3d') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">3D CAD</th>
                                    )}
                                  </>
                                ) : productDetail.versions[0]?.urunKodu && productDetail.versions[0]?.malzeme && productDetail.versions[0]?.yuzey && !productDetail.versions[0]?.urunAdi ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Yüzey</th>
                                    {productDetail.code === 'LY40' && hasColumnData('cad3d') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">3D CAD</th>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    {hasColumnData('urunAdi') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Adı</th>
                                    )}
                                    {hasColumnData('aciklama') && (
                                      <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Açıklama</th>
                                    )}
                                  </>
                                )}
                              </>
                            ) : productDetail.versions[0]?.malzeme ? (
                              <>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                {hasColumnData('urunAdi') && (
                                  <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Adı</th>
                                )}
                                {hasColumnData('aciklama') && (
                                  <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Açıklama</th>
                                )}
                              </>
                            ) : productDetail.versions[0]?.malzeme ? (
                              <>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Versiyon</th>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                {hasColumnData('yuzey') && (
                                  <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Yüzey</th>
                                )}
                                {hasColumnData('dil') && (
                                  <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Dil</th>
                                )}
                              </>
                            ) : null}
                          </tr>
                        </thead>
                        <tbody>
                          {productDetail.versions.map((version, index) => (
                            <tr key={index} className="hover:bg-slate-50 transition-colors">
                              {version.stokKodu ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.stokKodu}</td>
                                  {hasColumnData('CC') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.CC || ''}</td>
                                  )}
                                  {hasColumnData('CH') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.CH || ''}</td>
                                  )}
                                  {hasColumnData('CL') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.CL || ''}</td>
                                  )}
                                  {hasColumnData('LH13') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH13 || ''}</td>
                                  )}
                                  {hasColumnData('LH13_5') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH13_5 || ''}</td>
                                  )}
                                  {hasColumnData('LH14') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH14 || ''}</td>
                                  )}
                                  {hasColumnData('LH16') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH16 || ''}</td>
                                  )}
                                  {hasColumnData('LH16_5') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH16_5 || ''}</td>
                                  )}
                                  {hasColumnData('LH18') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH18 || ''}</td>
                                  )}
                                  {hasColumnData('LH18_5') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH18_5 || ''}</td>
                                  )}
                                  {hasColumnData('LH19') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH19 || ''}</td>
                                  )}
                                  {hasColumnData('LH20') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH20 || ''}</td>
                                  )}
                                  {hasColumnData('LH21') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH21 || ''}</td>
                                  )}
                                  {hasColumnData('LH22') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH22 || ''}</td>
                                  )}
                                  {hasColumnData('LH25') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH25 || ''}</td>
                                  )}
                                  {hasColumnData('LH29') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH29 || ''}</td>
                                  )}
                                  {hasColumnData('LH30') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH30 || ''}</td>
                                  )}
                                  {hasColumnData('LH32') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH32 || ''}</td>
                                  )}
                                  {hasColumnData('LH35') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH35 || ''}</td>
                                  )}
                                  {hasColumnData('LH40') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH40 || ''}</td>
                                  )}
                                  {hasColumnData('LH50') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH50 || ''}</td>
                                  )}
                                  {hasColumnData('LH60') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.LH60 || ''}</td>
                                  )}
                                </>
                              ) : version.mekanizmaGovde ? (
                                <>
                                  {hasColumnData('version') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.version || ''}</td>
                                  )}
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.mekanizmaGovde}</td>
                                  {hasColumnData('mekanizmaLama') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.mekanizmaLama || ''}</td>
                                  )}
                                  {hasColumnData('A') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.A || ''}</td>
                                  )}
                                  {hasColumnData('B') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.B || ''}</td>
                                  )}
                                  {hasColumnData('C') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.C || ''}</td>
                                  )}
                                  {hasColumnData('D') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.D || ''}</td>
                                  )}
                                </>
                              ) : (hasColumnData('R1') && hasColumnData('ambalaj') && version.urunKodu) ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                  {hasColumnData('ul94V0') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.ul94V0 || ''}</td>
                                  )}
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme || ''}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.renk || ''}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.R1 ?? ''}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.R2 ?? ''}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.R3 ?? ''}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.R4 ?? ''}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.DT ?? ''}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.ambalaj ?? ''}</td>
                                  {hasColumnData('cad3d') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.cad3d ?? ''}</td>
                                  )}
                                </>
                              ) : productDetail.code === 'AA' && version.urunAdi ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.urunAdi}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">
                                    <img 
                                      src={`/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/${version.urunKodu || 'AA_kovan_civata'}.jpg`} 
                                      alt={version.urunAdi}
                                      className="h-16 w-auto object-contain"
                                      onError={(e) => { e.target.style.display = 'none' }}
                                    />
                                  </td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.yuzey}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                </>
                              ) : productDetail.code === '4150' && version.urunAdi ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.urunAdi}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.yuzey}</td>
                                </>
                              ) : productDetail.code === 'DD' && version.gobek ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.gobek}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">
                                    <img 
                                      src={`/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/gobekler1.jpg`} 
                                      alt={version.gobek}
                                      className="h-16 w-auto object-contain"
                                      onError={(e) => { e.target.style.display = 'none' }}
                                    />
                                  </td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.gobekNo}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.yuzey}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                </>
                              ) : productDetail.code === '060 AX' && version.urunAdi ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">
                                    <img 
                                      src={`/ceyrekdonuslukilitler/ceyrekdonuslukilitlerdetay/${version.urunKodu || '060-ax'}.jpg`} 
                                      alt={version.urunAdi}
                                      className="h-16 w-auto object-contain"
                                      onError={(e) => { e.target.style.display = 'none' }}
                                    />
                                  </td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.urunAdi}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.aciklama}</td>
                                </>
                              ) : productDetail.code === 'CY1' && version.baglantiCivatasi ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.baglantiCivatasi}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.H1}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.H2}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.H3}</td>
                                </>
                              ) : (productDetail.code === '340.09.966' || productDetail.code === '340.09.968' || productDetail.code === '340.09.969' || productDetail.code === '340.09.970' || productDetail.code === '340.09.383' || productDetail.code === '340.09.611' || productDetail.code === '340.09.384' || productDetail.code === '34001010' || productDetail.code === '34001011' || productDetail.code === '34001012' || productDetail.code === '34001015') && version.urunKodu ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme || ''}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.renk || ''}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.ambalaj || ''}</td>
                                  {hasColumnData('cad3d') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.cad3d || ''}</td>
                                  )}
                                </>
                              ) : version.urunKodu && version.gobekCesidi ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.gobekCesidi}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme}</td>
                                  {hasColumnData('yuzey') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.yuzey || ''}</td>
                                  )}
                                </>
                              ) : version.urunKodu && version.malzeme ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                  {hasColumnData('urunAdi') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.urunAdi || ''}</td>
                                  )}
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme}</td>
                                  {hasColumnData('yuzey') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.yuzey || ''}</td>
                                  )}
                                </>
                              ) : version.urunKodu ? (
                                <>
                                  {productDetail.code === '571' || productDetail.code === '671' ? (
                                    <>
                                      {hasColumnData('aciklama') && (
                                        <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.aciklama || ''}</td>
                                      )}
                                      {hasColumnData('silindirFise') && (
                                        <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.silindirFise || ''}</td>
                                      )}
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                    </>
                                  ) : productDetail.code === '071' || productDetail.code === '171' || productDetail.code === '271' || productDetail.code === '371' || productDetail.code === '471' ? (
                                    <>
                                      {hasColumnData('aciklama') && (
                                        <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.aciklama || ''}</td>
                                      )}
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                    </>
                                  ) : version.AMM && version.BMM && version.ruloUzunlugu ? (
                                    <>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.AMM}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.BMM}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.ruloUzunlugu}</td>
                                    </>
                                  ) : version.Hmm && version.Lmm ? (
                                    <>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.Hmm}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.Lmm}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                    </>
                                  ) : version.Xmm ? (
                                    <>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.Xmm}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                    </>
                                  ) : version.urunKodu && version.malzeme && version.yuzey && !version.urunAdi ? (
                                    <>
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.yuzey}</td>
                                      {productDetail.code === 'LY40' && hasColumnData('cad3d') && (
                                        <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.cad3d || ''}</td>
                                      )}
                                    </>
                                  ) : version.Lmm ? (
                                    <>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.Lmm}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                      {productDetail.code === 'IC' && productDetail.name === 'İspanyolet Çubuklar 6' && hasColumnData('cad3d') && (
                                        <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.cad3d || ''}</td>
                                      )}
                                    </>
                                  ) : (
                                    <>
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                      {hasColumnData('urunAdi') && (
                                        <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.urunAdi || ''}</td>
                                      )}
                                      {hasColumnData('aciklama') && (
                                        <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.aciklama || ''}</td>
                                      )}
                                    </>
                                  )}
                                </>
                              ) : version.malzeme ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.version}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme}</td>
                                  {hasColumnData('yuzey') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.yuzey || ''}</td>
                                  )}
                                  {hasColumnData('dil') && (
                                    <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.dil || ''}</td>
                                  )}
                                </>
                              ) : null}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  )
                })()}

                {/* Katalog Sayfası */}
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-1 w-8 rounded-full bg-[#166534]"></div>
                    <h3 className="text-lg font-bold text-slate-900">Katalog Sayfası</h3>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{productDetail?.name || productInfo?.name || productName}</p>
                  {pdfPath && (
                    <div className="space-y-2">
                      {/* PDF Görüntüleyici - Küçük */}
                      <div className="relative rounded-lg border border-slate-200 bg-slate-50 overflow-auto max-h-96">
                        <iframe
                          src={`${pdfPath}#toolbar=0&navpanes=0&view=FitV&page=1`}
                          className="w-full border-0"
                          style={{ height: '800px' }}
                          title="Katalog PDF"
                        />
                        {/* Büyültme İkonu */}
                        <button
                          onClick={() => setIsPdfFullscreen(true)}
                          className="absolute top-2 right-2 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 shadow-md transition hover:bg-white hover:border-[#166534] hover:text-[#166534]"
                          title="Tam Ekran"
                        >
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                          </svg>
                        </button>
                      </div>
                      
                      {/* İndirme Butonu */}
                      <a
                        href={pdfPath}
                        download
                        className="inline-flex items-center gap-2 rounded-lg bg-[#166534] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#14532d]"
                      >
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        PDF İndir
                      </a>
                      
                      {/* Tam Ekran PDF Modal */}
                      {isPdfFullscreen && (
                        <div 
                          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                          onClick={() => setIsPdfFullscreen(false)}
                        >
                          <div className="relative w-full h-full max-w-7xl max-h-[95vh] bg-white rounded-lg overflow-hidden shadow-2xl">
                            {/* Kapatma Butonu */}
                            <button
                              onClick={() => setIsPdfFullscreen(false)}
                              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 shadow-md transition hover:bg-white hover:border-[#166534] hover:text-[#166534]"
                              title="Kapat"
                            >
                              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                            {/* PDF İframe */}
                            <iframe
                              src={`${pdfPath}#toolbar=0&navpanes=0&view=FitH&page=1`}
                              className="w-full h-full border-0"
                              title="Katalog PDF - Tam Ekran"
                              onClick={(e) => e.stopPropagation()}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sızdırmazlık Profili - en altta, tam genişlik (sadece Sızdırmazlık Profilleri sayfası ürünlerinde) */}
            {(location?.state?.fromSection === 'SIZDIRMAZLIK PROFİLLERİ VE KENAR KORUMA' || (() => {
              const n = String(productDetail?.name || productInfo?.name || productName || '')
              if (n.includes('340.09.') && (n.includes('Geçme Conta') || n.includes('Hijyenik Conta'))) return true
              if (n.includes('U Tipi Fitiller') && /3400101[0-5]/.test(n)) return true
              return false
            })()) && (
              <div className="mt-10 w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <div className="h-1 w-8 rounded-full bg-[#166534]" />
                  <h3 className="text-xl font-bold text-slate-900">Sızdırmazlık Profili</h3>
                </div>
                <div className="flex justify-center items-center bg-slate-50 rounded-xl overflow-hidden w-full px-2 sm:px-4 md:px-6 py-4 min-h-[180px] sm:min-h-[220px] md:min-h-[280px]">
                  <img
                    src="/sizdirmazlikprofilleri/resim1.png"
                    alt="Sızdırmazlık profili"
                    className="w-full max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl h-auto object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Ürün Başlığı */}
            <div className="mb-8">
              <h1 className="text-2xl font-semibold text-slate-900">{productName}</h1>
            </div>

            {/* Marka Logoları */}
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 md:p-8">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 md:gap-8 lg:grid-cols-4 xl:grid-cols-5">
                {allBrandLogos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex h-28 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-[#166534] hover:bg-white hover:shadow-md sm:h-32 sm:p-4 md:h-36 md:p-5 lg:h-40 lg:p-6"
                  >
                    <img 
                      src={logo} 
                      alt={`Brand ${index + 1}`} 
                      className="max-h-16 w-auto object-contain sm:max-h-20 md:max-h-24 lg:max-h-28" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default ProductDetail