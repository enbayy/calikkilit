import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

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
    description: '• Kolay montaj\n• Farklı kontak seçenekleri (max. 3 kontak)\n• Standart kablo .l.u.su 2.5 m spiral boru ölçüsü 2m dir. İsteğe bağlı değişebilr.',
    materials: {
      'ÇANAK': 'Polyamid DIN-EN ISO 1043-1 PA6 GFR 30',
      'KORUYUCU KAPAK': 'PVC',
      'CONTA': 'EPDM',
      'SPİRAL BORU': 'PA6',
      'RAKOR': 'PA66',
    },
    versions: [
      { urunKodu: '3501', urunResmi: '', urunAdi: 'Acil Durdurma Butonu', malzeme: 'Plastik', yuzey: 'Siyah' },
    ],
    relatedProducts: [
      { name: 'Diller için tıklayınız. (CC: Tırnaksız Diller)', link: '#' },
      { name: 'Anahtarlar için tıklayınız.', link: '#' },
      { name: 'İspanyolet çubuklar ve aksesuarlar için tıklayınız.', link: '#' },
    ],
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

function ProductDetail() {
  const location = useLocation()
  const navigate = useNavigate()
  const { productName, productImage, productLogo } = location.state || {}
  const [isPdfFullscreen, setIsPdfFullscreen] = useState(false)

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

  // Eğer state yoksa geri dön
  if (!productName) {
    return (
      <div className="bg-slate-50 pb-16 text-slate-900">
        <div className="mx-auto max-w-7xl px-1.5 pt-10 sm:px-2 lg:px-3">
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-8 text-center shadow-sm">
            <p className="text-base text-slate-600">Ürün bulunamadı.</p>
            <button
              onClick={() => navigate('/urunler')}
              className="mt-4 rounded-lg bg-[#16a34a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#15803d]"
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
  const productDetail = productDetails[productName]
  
  // Kollu kilit ürünleri için otomatik detay sayfası
  const isLockProduct = productInfo && (productInfo.name.includes('Kollu Kilit') || productInfo.name.includes('Dikey Hareketli') || productInfo.name.includes('İspanyolet') || productInfo.name.includes('Dikey Mekanizmalı') || productInfo.name.includes('İç Kilitleme') || productInfo.name.includes('ispanyolet') || productInfo.name.includes('Kabin Kilidi') || productInfo.name.includes('T Kollu') || productInfo.name.includes('"T" Kollu') || productInfo.name.includes('\'T\' Kollu') || productInfo.name.includes('Trafo Kilidi') || productInfo.name.includes('Klima Santral Kilidi') || productInfo.name.includes('Klima Kabin Kilidi') || productInfo.name.includes('Fonsiyonel Kilit Menteşe') || productInfo.name.includes('Profil Bağlantı Parçası') || productInfo.name.includes('Sıkıştırmalı Kilit') || productInfo.name.includes('Çubuk') || productInfo.code === 'IC' || productInfo.code === 'CT1' || productInfo.code === 'CT2' || productInfo.code === 'CY1' || productInfo.code === 'CY2')
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
    
    // 3331 > Elektronik Kancalı Kilit için özel resim mapping
    if (code === '3331' && productName?.includes('Elektronik Kancalı Kilit')) {
      return '/cu-digerurunler/3331elektronikkancalikilit.jpg'
    }
    
    // 3501 > Acil Durum Durdurma Butonu için özel resim mapping
    if (code === '3501' && productName?.includes('Acil Durum Durdurma Butonu')) {
      return '/cu-digerurunler/3501acildurum.jpg'
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
    
    // 3331 > Elektronik Kancalı Kilit için özel PDF mapping
    if (code === '3331' && fullName?.includes('Elektronik Kancalı Kilit')) {
      return '/cu-digerurunler/3331-elektronik-kancali-kilit.pdf'
    }
    
    // 3501 > Acil Durum Durdurma Butonu için özel PDF mapping
    if (code === '3501' && fullName?.includes('Acil Durum Durdurma Butonu')) {
      return '/cu-digerurunler/3501-acil-durum-durdurma-butonu.pdf'
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
          className="mb-6 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-[#16a34a]"
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
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#16a34a]/10 text-[#16a34a] text-sm font-semibold">
                    {productDetail?.code || productInfo?.code}
                  </span>
                )}
                <h1 className="text-3xl font-bold text-slate-900">{productDetail?.name || productInfo?.name || productName}</h1>
              </div>
            </div>

            {/* Ana İçerik Grid */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Sol Kolon - Ürün Görseli */}
              <div className="flex items-start justify-center lg:sticky lg:top-8 lg:h-fit">
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
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
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
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
                      <h3 className="text-xl font-bold text-slate-900">Ürün Bilgisi</h3>
                    </div>
                    <div className="text-base leading-relaxed text-slate-700 whitespace-pre-line">
                      {productDetail.description}
                    </div>
                  </div>
                ) : isLockProduct && !productDetail ? (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
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
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
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
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
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
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
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
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
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
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
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
                        <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
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
                    <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
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
                          className="absolute top-2 right-2 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 shadow-md transition hover:bg-white hover:border-[#16a34a] hover:text-[#16a34a]"
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
                        className="inline-flex items-center gap-2 rounded-lg bg-[#16a34a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#15803d]"
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
                              className="absolute top-4 right-4 z-10 inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/90 backdrop-blur-sm border border-slate-200 text-slate-700 shadow-md transition hover:bg-white hover:border-[#16a34a] hover:text-[#16a34a]"
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
                    className="flex h-28 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-[#16a34a] hover:bg-white hover:shadow-md sm:h-32 sm:p-4 md:h-36 md:p-5 lg:h-40 lg:p-6"
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