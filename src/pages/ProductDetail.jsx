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
    const match = name.match(/^(\d+(?:\s*[A-Z]\d+)?)\s*>\s*(.+)$/)
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
  const isLockProduct = productInfo && (productInfo.name.includes('Kollu Kilit') || productInfo.name.includes('Dikey Hareketli') || productInfo.name.includes('İspanyolet') || productInfo.name.includes('Dikey Mekanizmalı') || productInfo.name.includes('İç Kilitleme') || productInfo.name.includes('ispanyolet') || productInfo.name.includes('Kabin Kilidi') || productInfo.name.includes('T Kollu') || productInfo.name.includes('"T" Kollu') || productInfo.name.includes('\'T\' Kollu') || productInfo.name.includes('Trafo Kilidi') || productInfo.name.includes('Klima Santral Kilidi') || productInfo.name.includes('Klima Kabin Kilidi') || productInfo.name.includes('Fonsiyonel Kilit Menteşe') || productInfo.name.includes('Profil Bağlantı Parçası') || productInfo.name.includes('Sıkıştırmalı Kilit'))
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
    
    // İspanyolet ürünleri için özel PDF mapping
    if (fullName?.includes('İspanyolet') || fullName?.includes('Dikey Hareketli') || fullName?.includes('Dikey Mekanizmalı') || fullName?.includes('İç Kilitleme') || fullName?.includes('ispanyolet')) {
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
                {productDetail?.description && productDetail.description.trim() !== '' ? (
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
                          <div className="text-sm sm:text-base text-slate-600 flex-1">{value}</div>
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
                {productDetail?.versions && (
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="h-1 w-8 rounded-full bg-[#16a34a]"></div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {productDetail.code === '018' ? 'Trafo Kabin Kilidi (V1)' : 'Ürün Varyasyonları'}
                      </h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-slate-50">
                            {productDetail.versions[0]?.mekanizmaGovde ? (
                              <>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Versiyon</th>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Mekanizma Gövde</th>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Mekanizma Lama</th>
                                <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">A</th>
                                <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">B</th>
                                <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">C</th>
                                <th className="border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-900">D</th>
                              </>
                            ) : productDetail.versions[0]?.urunKodu ? (
                              <>
                                {productDetail.versions[0]?.malzeme ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Adı</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Yüzey</th>
                                  </>
                                ) : productDetail.code === '571' || productDetail.code === '671' ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Kapı Kalınlığı (DT)</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Silindir - Fişe</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                  </>
                                ) : productDetail.code === '071' || productDetail.code === '171' || productDetail.code === '271' || productDetail.code === '371' || productDetail.code === '471' ? (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Kapı Kalınlığı (DT)</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                  </>
                                ) : (
                                  <>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Adı</th>
                                    <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Açıklama</th>
                                  </>
                                )}
                              </>
                            ) : productDetail.versions[0]?.malzeme ? (
                              <>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Kodu</th>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Ürün Adı</th>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Açıklama</th>
                              </>
                            ) : productDetail.versions[0]?.malzeme ? (
                              <>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Versiyon</th>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Malzeme</th>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Yüzey</th>
                                <th className="border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-900">Dil</th>
                              </>
                            ) : null}
                          </tr>
                        </thead>
                        <tbody>
                          {productDetail.versions.map((version, index) => (
                            <tr key={index} className="hover:bg-slate-50 transition-colors">
                              {version.mekanizmaGovde ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.version}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.mekanizmaGovde}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.mekanizmaLama}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.A}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.B}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.C}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-center text-slate-700">{version.D}</td>
                                </>
                              ) : version.urunKodu && version.malzeme ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.urunAdi}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.yuzey}</td>
                                </>
                              ) : version.urunKodu ? (
                                <>
                                  {productDetail.code === '571' || productDetail.code === '671' ? (
                                    <>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.aciklama}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.silindirFise}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                    </>
                                  ) : productDetail.code === '071' || productDetail.code === '171' || productDetail.code === '271' || productDetail.code === '371' || productDetail.code === '471' ? (
                                    <>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.aciklama}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                    </>
                                  ) : (
                                    <>
                                      <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.urunKodu}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.urunAdi}</td>
                                      <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.aciklama}</td>
                                    </>
                                  )}
                                </>
                              ) : version.malzeme ? (
                                <>
                                  <td className="border border-slate-200 px-4 py-3 text-sm font-medium text-slate-900">{version.version}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.malzeme}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.yuzey}</td>
                                  <td className="border border-slate-200 px-4 py-3 text-sm text-slate-700">{version.dil}</td>
                                </>
                              ) : null}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

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