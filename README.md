# Premium Koku Sitesi

Modern, premium ve kurumsal bir parfüm e-ticaret sitesi. Türkçe ve İngilizce dil desteği ile geliştirilmiştir.

## Özellikler

- 🌍 **Çok Dilli Destek**: Türkçe ve İngilizce dil seçenekleri
- 🎨 **Premium Tasarım**: Modern ve şık UI/UX tasarımı
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- 🛍️ **Ürün Kataloğu**: Koku araçları ve parfüm koleksiyonları
- 📝 **Blog Bölümü**: Koku dünyasından haberler ve ipuçları
- ⚡ **Hızlı ve Optimize**: Next.js 14 ile yüksek performans

## Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Utility-first CSS framework
- **next-intl** - Çok dilli destek
- **Playfair Display & Inter** - Premium fontlar

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın

## Proje Yapısı

```
├── app/
│   ├── [locale]/          # Çok dilli sayfalar
│   │   ├── page.tsx       # Ana sayfa
│   │   ├── products/      # Ürünler sayfası
│   │   ├── blog/          # Blog sayfası
│   │   ├── about/         # Hakkımızda
│   │   └── contact/       # İletişim
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global stiller
├── components/            # React bileşenleri
│   ├── Navbar.tsx        # Navigasyon
│   ├── Footer.tsx        # Footer
│   ├── Hero.tsx          # Hero bölümü
│   ├── ProductsSection.tsx
│   ├── BlogSection.tsx
│   └── FeaturesSection.tsx
├── messages/             # Çeviri dosyaları
│   ├── tr.json          # Türkçe
│   └── en.json          # İngilizce
└── middleware.ts         # Next-intl middleware
```

## Dil Değiştirme

Site otomatik olarak kullanıcının dil tercihine göre yönlendirme yapar. Manuel olarak dil değiştirmek için navbar'daki TR/EN butonlarını kullanabilirsiniz.

## Özelleştirme

- Renkler: `tailwind.config.ts` dosyasındaki `primary` ve `gold` renk paletlerini düzenleyin
- İçerik: `messages/` klasöründeki JSON dosyalarını düzenleyin
- Bileşenler: `components/` klasöründeki dosyaları özelleştirin

## Production Build

```bash
npm run build
npm start
```

## Lisans

Bu proje özel bir projedir.











