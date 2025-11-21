import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: Record<string, unknown> | string = translations[language];

    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = value[k] as Record<string, unknown> | string;
      }
    }

    return (typeof value === 'string' ? value : key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  en: {
    nav: {
      experiences: 'Experiences',
      gallery: 'Gallery',
      localProducts: 'Made by Local',
      video: 'Video',
      about: 'About Us',
      contact: 'Contact',
      planTrip: 'Plan Your Trip'
    },
    hero: {
      mainTitle: 'Namatota',
      subtitle: 'The Hidden Gem',
      description: "Discover pristine marine paradise, ancient kingdom heritage, and authentic community-based tourism in West Papua's best-kept secret",
      explore: "Let's Explore"
    },
    value: {
      whaleShark: 'Swim with Whale Sharks',
      whaleSharkDesc: 'A rare, year-round opportunity to encounter gentle giants at the local bagan.',
      pristine: 'Pristine Karst Islands',
      pristineDesc: 'Explore the breathtaking beauty of Triton Bay, an untouched labyrinth of islands and turquoise water.',
      ancient: 'Ancient Culture',
      ancientDesc: 'Discover millennia-old rock art and the living history of the Namatota Kingdom.',
      diving: 'World-Class Diving',
      divingDesc: 'Immerse yourself in vibrant soft coral gardens and unmatched marine biodiversity, far from the crowds.'
    },
    experiences: {
      title: 'Key Experiences',
      subtitle: 'Discover what makes Namatota truly unforgettable',
      whaleSharkTitle: 'Beach and Island Hopping',
      whaleSharkDesc: 'Embark on an unforgettable journey exploring the pristine beaches and stunning islands of Triton Bay. Hop from one secluded beach to another, discovering hidden coves, crystal-clear lagoons, and untouched coastal paradises. Each island offers unique landscapes, from white sandy beaches to dramatic rock formations, providing perfect opportunities for swimming, snorkeling, and beachcombing in one of Indonesia\'s most beautiful marine environments.',
      rockArtTitle: 'Pink Beach Paradise',
      rockArtDesc: 'Discover one of nature\'s rarest wonders at Triton Bay\'s exclusive pink sand beach, creating a breathtaking shoreline found in only a few places worldwide. Wade into the crystal-clear turquoise waters and experience the surreal beauty of swimming alongside a naturally pink beach. This hidden gem offers perfect conditions for photography, relaxation, and creating unforgettable memories in one of Indonesia\'s most unique coastal destinations.',
      villageTitle: 'Namatota Village & Culture',
      villageDesc: 'Immerse yourself in the living culture of the Namatota Kingdom. Visit the traditional village where ancient customs are still practiced today. Meet local families, learn about traditional fishing methods, and hear stories passed down through generations. This is authentic cultural exchange at its finest, supporting the community while gaining deep insights into Papuan life.',
      divingTitle: 'Snorkeling & Diving',
      divingDesc: 'Dive into one of the world\'s most pristine underwater paradises. Triton Bay boasts incredible soft coral gardens in vibrant purples, pinks, and oranges. The marine biodiversity rivals Raja Ampat, but with far fewer visitors. Crystal-clear visibility, healthy reefs teeming with life, and the chance to spot rare species make every dive unforgettable. Perfect for both snorkelers and experienced divers.'
    },
    gallery: {
      title: 'Namatota: A Visual Symphony of Paradise',
      subtitle: 'Immerse yourself in breathtaking visual narratives of Triton Bay\'s most spectacular natural wonders - from ancient stone staircases rising from turquoise waters to rare pink sand beaches, vibrant coral kingdoms teeming with life, and cultural heritage preserved for millennia',
      images: {
        hundredSteps: {
          title: 'Hundred Steps Staircase',
          description: 'Staircase formation rising from crystal waters'
        },
        livingCoral: {
          title: 'Living Coral Gardens',
          description: 'Breathtaking underwater reef teeming with marine biodiversity'
        },
        islandParadise: {
          title: 'Island Paradise View',
          description: 'Spectacular aerial vista of pristine islands and turquoise waters'
        },
        pinkSandWonder: {
          title: 'Pink Sand Wonder',
          description: 'One of nature\'s rarest phenomena - naturally pink shoreline'
        },
        coastalHeritage: {
          title: 'Coastal Heritage',
          description: 'Traditional village nestled between mountains and pristine coastline'
        },
        lompaFishDelicacy: {
          title: 'Lompa Fish Delicacy',
          description: 'Authentic traditional fish specialty representing Namatota\'s rich marine culinary heritage'
        }
      }
    },
    localProducts: {
      title: 'Artisanal Heritage: Handcrafted by Namatota Locals',
      subtitle: 'Experience the soul of Papua through our exclusive collection of masterfully crafted treasures - from ceremonial crowns worn by ancient royalty to traditional delicacies and artisanal creations that embody centuries of cultural wisdom',
      supportText: 'Each piece is a labor of love created by local artisans using time-honored techniques passed down through generations. Your purchase empowers our community, preserves cultural heritage, and ensures these precious traditions continue to flourish.',
      purchaseText: 'Visit our village artisan workshop to witness the craftsmanship firsthand, or contact us for custom pieces created exclusively for you with traditional blessings.',
      products: {
        papuaCrown: {
          title: 'Papua Traditional Crown',
          description: 'Handcrafted ceremonial crown with traditional Papua patterns'
        },
        papayaStick: {
          title: 'Papaya Stick Delicacy',
          description: 'Handcrafted traditional papaya-based specialty with authentic local flavors'
        },
        tomang: {
          title: 'Tomang Artisan Craft',
          description: 'Masterfully crafted traditional item showcasing generations of skilled craftsmanship'
        }
      }
    },
    instagram: {
      title: 'Follow Our Journey',
      subtitle: 'See the latest from Namatota on Instagram',
      followButton: 'Follow @visit.namatota',
      morePosts: 'View more on Instagram'
    },
    video: {
      title: 'See Namatota in Action',
      subtitle: 'Experience the magic of Triton Bay and get a glimpse of the adventures that await you in this hidden paradise of West Papua.',
      video1Caption: 'Journey through Namatota\'s stunning landscapes and authentic cultural experiences',
      video2Caption: 'Dive into the crystal-clear waters and discover the underwater wonders of Triton Bay',
      footerCaption: 'Experience both above and below water adventures that make Namatota a truly unique destination.'
    },
    about: {
      title: 'Welcome to Namatota',
      subtitle: 'A Living Legacy: Where the Namatota Kingdom\'s Heritage Meets Sustainable Tourism',
      para1: 'Nestled in the heart of Kaimana Regency, West Papua, Namatota is more than just a destination—it\'s a journey into Indonesia\'s most pristine marine environment and a window into centuries of royal heritage. Our village, recognized as the 2nd place winner in the Developing Tourism Village category at ADWI 2024, offers an authentic escape from the ordinary.',
      para2: 'Located just 30-45 minutes by boat from Kaimana town, Namatota welcomes you with crystal-clear waters, vibrant coral reefs rivaling Raja Ampat, and the warm hospitality of our community. Here, you can swim alongside gentle whale sharks, discover the rare endemic walking shark, explore historical sites of the ancient Namatota Kingdom, and experience true community-based sustainable tourism.'
    },
    contact: {
      title: 'Plan Your Adventure',
      subtitle: 'Get Your Custom Itinerary',
      description: 'Travel to Namatota is unique. Fill out the form, and our local expert will design a perfect trip just for you.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone / WhatsApp',
      dates: 'Planned Travel Dates',
      travelers: 'Number of Travelers',
      interest: 'Most Interested In',
      interestWhaleShark: 'Whale Sharks',
      interestDiving: 'Diving',
      interestCulture: 'Culture',
      interestEverything: 'Everything!',
      message: 'Message',
      readyTitle: 'Ready for Your Namatota Adventure?',
    readyDescription: 'Start your journey today by chatting with our local experts. We\'ll help you create the perfect itinerary for your dream trip to Namatota.',
    whatsappButton: 'Chat on WhatsApp',
    whatsappResponse: 'Instant response during business hours',
    followUs: 'Follow Us',
    youtubeButton: 'YouTube Channel',
    instagramButton: 'Instagram',
    facebookButton: 'Facebook',
    websiteButton: 'Official Website',
    faq: {
      title: 'Frequently Asked Questions',
      transport: 'How do I get to Kaimana?',
      bestTime: 'When is the best time to visit?',
      safety: 'Is it safe?',
      packing: 'What should I pack?',
      accommodation: 'What about accommodation?',
      byAir: 'By Air (Recommended)',
      byShip: 'By Ship (Adventure Option)',
      recommendation: 'Our Recommendation',
    },
    faqTransport: {
      air: 'Kaimana Airport (KNG) serves regular domestic flights. The most common route is Jakarta → Sorong → Kaimana, with total travel time around 6-8 hours including layovers. Airlines like Wings Air and Garuda Indonesia operate these routes. We can arrange your domestic flights and provide airport transfers to your accommodation.',
      ship: 'Pelni passenger ships serve Kaimana from major Indonesian ports including Jakarta, Surabaya, and Makassar. This is a slower but more scenic journey taking 2-4 days, offering stunning views of the Indonesian coastline. Ship schedules vary monthly, so advance booking is essential. This option is perfect for travelers with flexible schedules who want to experience traditional Indonesian sea travel.',
      recommendation: 'Flying is the most convenient option with reliable schedules, while ship travel offers an authentic adventure experience. Whichever you choose, we\'ll assist with all transportation arrangements and ensure smooth transfers to Namatota.',
    },
    faqContent: {
      bestTime: 'Whale sharks are present year-round! The best overall weather is during the dry season (October to April), but Triton Bay is accessible and beautiful throughout the year. Each season offers unique experiences.',
      safety: 'Absolutely. Kaimana and Namatota are safe, welcoming communities. All our guides are certified, our boats meet safety standards, and we maintain comprehensive insurance. We have an excellent safety record and local knowledge to ensure your comfort and security.',
      packing: 'Essentials: swimwear, reef-safe sunscreen, light clothing, hat, water shoes, underwater camera, and any personal dive/snorkel gear. We provide snorkel equipment and life jackets. Full packing list sent upon booking confirmation.',
      accommodation: 'We partner with comfortable local guesthouses and eco-lodges. Accommodations are clean, simple, and authentic. Some packages include boat-based stays for a true adventure experience. All meals are included featuring fresh local cuisine.',
    },
    success: 'Thank you! We\'ve received your inquiry and will reply within 24 hours.'
  },
    footer: {
      description: 'Experience the untouched beauty of Triton Bay with authentic, community-based sustainable tourism.',
      contact: 'Contact Us',
      follow: 'Follow Us',
      rights: 'All rights reserved.'
    }
  },
  id: {
    nav: {
      experiences: 'Pengalaman',
      gallery: 'Galeri',
      localProducts: 'Buatan Lokal',
      video: 'Video',
      about: 'Tentang Kami',
      contact: 'Kontak',
      planTrip: 'Rencanakan Perjalanan'
    },
    hero: {
      mainTitle: 'Namatota',
      subtitle: 'Permata Tersembunyi',
      description: 'Temukan surga bahari yang masih asli, warisan kerajaan kuno, dan pariwisata berbasis masyarakat yang autentik dalam rahasia terbaik Papua Barat',
      explore: 'Mari Jelajahi'
    },
    value: {
      whaleShark: 'Berenang dengan Hiu Paus',
      whaleSharkDesc: 'Kesempatan langka sepanjang tahun untuk bertemu raksasa lembut di bagan lokal.',
      pristine: 'Pulau Karst Alami',
      pristineDesc: 'Jelajahi keindahan menakjubkan Teluk Triton, labirin pulau-pulau alami dan air biru kehijauan.',
      ancient: 'Budaya Kuno',
      ancientDesc: 'Temukan lukisan batu berusia ribuan tahun dan sejarah hidup Kerajaan Namatota.',
      diving: 'Penyelaman Kelas Dunia',
      divingDesc: 'Selami taman karang lunak berwarna-warni dan keanekaragaman hayati laut yang tak tertandingi, jauh dari keramaian.'
    },
    experiences: {
      title: 'Pengalaman Utama',
      subtitle: 'Temukan apa yang membuat Namatota benar-benar tak terlupakan',
      whaleSharkTitle: 'Jelajah Pantai dan Pulau',
      whaleSharkDesc: 'Mulai perjalanan tak terlupakan menjelajahi pantai alami dan pulau menakjubkan Teluk Triton. Loncati dari satu pantai terpencil ke pantai lainnya, temukan teluk tersembunyi, laguna kristal jernih, dan surga pesisir yang tidak tersentuh. Setiap pulau menawarkan pemandangan unik, dari pantai pasir putih hingga formasi batu dramatis, memberikan kesempatan sempurna untuk berenang, snorkeling, dan mencari kerang di salah satu lingkungan laut terindah Indonesia.',
      rockArtTitle: 'Pantai Pink Surga',
      rockArtDesc: 'Temukan salah satu keajaiban alam paling langka di pantai pasir pink eksklusif Teluk Triton, menciptakan garis pantai yang memukau yang hanya ditemukan di beberapa tempat di dunia. Masuk ke air turquoise yang kristal jernih dan rasakan keindahan surealis berenang di samping pantai pink alami. Permata tersembunyi ini menawarkan kondisi sempurna untuk fotografi, bersantai, dan menciptakan kenangan tak terlupakan di salah satu tujuan pesisir paling unik Indonesia.',
      villageTitle: 'Kampung Namatota & Budaya',
      villageDesc: 'Benamkan diri Anda dalam budaya hidup Kerajaan Namatota. Kunjungi kampung tradisional di mana adat kuno masih dipraktikkan hingga hari ini. Temui keluarga lokal, pelajari metode penangkapan ikan tradisional, dan dengarkan cerita yang diturunkan melalui generasi. Ini adalah pertukaran budaya otentik terbaik, mendukung masyarakat sambil mendapatkan wawasan mendalam tentang kehidupan Papua.',
      divingTitle: 'Snorkeling & Menyelam',
      divingDesc: 'Selami salah satu surga bawah laut paling alami di dunia. Teluk Triton memiliki taman karang lunak yang luar biasa dalam warna ungu, merah muda, dan oranye yang cerah. Keanekaragaman hayati laut menyaingi Raja Ampat, tetapi dengan jauh lebih sedikit pengunjung. Visibilitas kristal jernih, terumbu karang sehat yang dipenuhi kehidupan, dan kesempatan untuk melihat spesies langka membuat setiap penyelaman tak terlupakan. Sempurna untuk snorkeler dan penyelam berpengalaman.'
    },
    gallery: {
      title: 'Namatota: Simfoni Visual Surga',
      subtitle: 'Rasakan narasi visual yang memukau dari keajaiban alam paling spektakuler Teluk Triton - dari tangga batu kuno yang menjulang dari air turquoise hingga pantai pink langka, kerajaan karang yang hidup dengan keanekaragaman hayati, dan warisan budaya yang dilestarikan selama ribuan tahun',
      images: {
        hundredSteps: {
          title: 'Tangga Seratus',
          description: 'Formasi tangga yang menjulang dari air kristal'
        },
        livingCoral: {
          title: 'Kehidupan Karang',
          description: 'Terumbu bawah air yang memukau dengan keanekaragaman hayati laut'
        },
        islandParadise: {
          title: 'Surga Pulau',
          description: 'Pemandangan udara spektakuler pulau alami dan air turquoise'
        },
        pinkSandWonder: {
          title: 'Keajaiban Pasir Pink',
          description: 'Salah satu fenomena alam paling langka - garis pantai pink alami'
        },
        coastalHeritage: {
          title: 'Warisan Pesisir',
          description: 'Kampung tradisional diapit gunung dan garis pantai alami'
        },
        lompaFishDelicacy: {
          title: 'Kelezatan Ikan Lompa',
          description: 'Spesialisasi ikan tradisional otentik mewakili warisan kuliner laut Namatota'
        }
      }
    },
    localProducts: {
      title: 'Warisan Kerajinan: Diciptakan oleh Warga Lokal Namatota',
      subtitle: 'Rasakan jiwa Papua melalui koleksi eksklusif harta karun yang dibuat dengan mahir - dari mahkota upacara yang dikenakan oleh bangsawan kuno hingga hidangan tradisional dan kreasi artisanal yang mewujudkan kebijaksanaan budaya selama berabad-abad',
      supportText: 'Setiap karya adalah cinta kasih yang diciptakan oleh pengrajin lokal menggunakan teknik yang dihormati waktu yang diturunkan melalui generasi. Pembelian Anda memberdayakan komunitas kami, melestarikan warisan budaya, dan memastikan tradisi berharga ini terus berkembang.',
      purchaseText: 'Kunjungi bengkel kerajinan desa kami untuk menyaksikan keahlian secara langsung, atau hubungi kami untuk karya khusus yang dibuat eksklusif untuk Anda dengan berkah tradisional.',
      products: {
        papuaCrown: {
          title: 'Mahkota Tradisional Papua',
          description: 'Mahkota upacara buatan tangan dengan pola tradisional Papua'
        },
        papayaStick: {
          title: 'Kelezatan Stik Pepaya',
          description: 'Spesialitas tradisional berbasis pepaya buatan tangan dengan rasa lokal otentik'
        },
        tomang: {
          title: 'Kerajinan Tomang',
          description: 'Item tradisional dibuat dengan mahir menampilkan generasi keahlian terampil'
        }
      }
    },
    instagram: {
      title: 'Ikuti Perjalanan Kami',
      subtitle: 'Lihat yang terbaru dari Namatota di Instagram',
      followButton: 'Ikuti @visit.namatota',
      morePosts: 'Lihat lainnya di Instagram'
    },
    video: {
      title: 'Lihat Namatota dalam Aksi',
      subtitle: 'Rasakan keajaiban Teluk Triton dan dapatkan gambaran petualangan yang menanti Anda di surga tersembunyi Papua Barat ini.',
      video1Caption: 'Jelajahi pemandangan Namatota yang menakjubkan dan pengalaman budaya otentik',
      video2Caption: 'Selami air jernih dan temukan keajaiban bawah laut di Teluk Triton',
      footerCaption: 'Nikmati petualangan di atas dan bawah air yang membuat Namatota benar-benar unik.'
    },
    about: {
      title: 'Selamat Datang di Namatota',
      subtitle: 'Warisan Hidup: Dimana Warisan Kerajaan Namatota Bertemu dengan Pariwisata Berkelanjutan',
      para1: 'Terletak di jantung Kabupaten Kaimana, Papua Barat, Namatota lebih dari sekadar destinasi—ini adalah perjalanan ke lingkungan laut paling alami di Indonesia dan jendela ke warisan kerajaan berabad-abad. Kampung kami, diakui sebagai pemenang tempat ke-2 dalam kategori Desa Wisata Berkembang di ADWI 2024, menawarkan pelarian otentik dari yang biasa.',
      para2: 'Terletak hanya 30-45 menit dengan perahu dari kota Kaimana, Namatota menyambut Anda dengan air kristal jernih, terumbu karang yang hidup menyaingi Raja Ampat, dan keramahan hangat masyarakat kami. Di sini, Anda dapat berenang bersama hiu paus yang lembut, menemukan hiu berjalan endemik yang langka, menjelajahi situs bersejarah Kerajaan Namatota kuno, dan mengalami pariwisata berkelanjutan berbasis masyarakat yang sejati.'
    },
    contact: {
      title: 'Rencanakan Petualangan Anda',
      subtitle: 'Dapatkan Itinerary Khusus Anda',
      description: 'Perjalanan ke Namatota adalah unik. Isi formulir, dan ahli lokal kami akan merancang perjalanan sempurna khusus untuk Anda.',
      name: 'Nama',
      email: 'Email',
      phone: 'Telepon / WhatsApp',
      dates: 'Tanggal Perjalanan',
      travelers: 'Jumlah Wisatawan',
      interest: 'Paling Tertarik Pada',
      interestWhaleShark: 'Hiu Paus',
      interestDiving: 'Menyelam',
      interestCulture: 'Budaya',
      interestEverything: 'Semuanya!',
      message: 'Pesan',
      readyTitle: 'Siap untuk Petualangan Namatota Anda?',
    readyDescription: 'Mulai perjalanan Anda hari ini dengan mengobrol dengan ahli lokal kami. Kami akan membantu Anda membuat rencana perjalanan sempurna untuk perjalanan impian Anda ke Namatota.',
    whatsappButton: 'Obrolan WhatsApp',
    whatsappResponse: 'Balasan cepat selama jam kerja',
    followUs: 'Ikuti Kami',
    youtubeButton: 'Saluran YouTube',
    instagramButton: 'Instagram',
    facebookButton: 'Facebook',
    websiteButton: 'Situs Web Resmi',
    faq: {
      title: 'Pertanyaan yang Sering Diajukan',
      transport: 'Bagaimana cara sampai ke Kaimana?',
      bestTime: 'Kapan waktu terbaik untuk berkunjung?',
      safety: 'Apakah aman?',
      packing: 'Apa yang harus saya bawa?',
      accommodation: 'Bagaimana dengan akomodasi?',
      byAir: 'Via Udara (Direkomendasikan)',
      byShip: 'Via Kapal (Opsi Petualangan)',
      recommendation: 'Rekomendasi Kami',
    },
    faqTransport: {
      air: 'Bandara Kaimana (KNG) melayani penerbangan domestik reguler. Rute paling umum adalah Jakarta → Sorong → Kaimana, dengan total waktu perjalanan sekitar 6-8 jam termasuk transit. Maskapai seperti Wings Air dan Garuda Indonesia mengoperasikan rute ini. Kami dapat mengatur penerbangan domestik Anda dan menyediakan transfer bandara ke akomodasi.',
      ship: 'Kapal penumpang Pelni melayani Kaimana dari pelabuhan utama Indonesia termasuk Jakarta, Surabaya, dan Makassar. Ini adalah perjalanan yang lebih lambat tetapi lebih indah dengan durasi 2-4 hari, menawarkan pemandangan menakjubkan dari pesisir Indonesia. Jadwal kapal bervariasi setiap bulan, jadi pemesanan di muka sangat penting. Opsi ini sempurna untuk wisatawan dengan jadwal fleksibel yang ingin merasakan perjalanan laut tradisional Indonesia.',
      recommendation: 'Terbang adalah opsi paling nyaman dengan jadwal yang andal, sementara perjalanan kapal menawarkan pengalaman petualangan otentik. Mana pun yang Anda pilih, kami akan membantu semua pengaturan transportasi dan memastikan transfer yang lancar ke Namatota.',
    },
    faqContent: {
      bestTime: 'Hiu paus ada sepanjang tahun! Cuaca terbaik secara keseluruhan adalah selama musim kemarau (Oktober hingga April), tetapi Teluk Triton dapat diakses dan indah sepanjang tahun. Setiap musim menawarkan pengalaman unik.',
      safety: 'Tentu saja. Kaimana dan Namatota adalah komunitas yang aman dan ramah. Semua pemandu kami bersertifikat, kapal kami memenuhi standar keselamatan, dan kami memiliki asuransi komprehensif. Kami memiliki catatan keselamatan yang sangat baik dan pengetahuan lokal untuk memastikan kenyamanan dan keamanan Anda.',
      packing: 'Barang yang perlu dibawa: pakaian renang, tabir surya aman karang, pakaian ringan, topi, sepatu air, kamera bawah air, dan peralatan selam/snorkel pribadi Anda. Kami menyediakan peralatan snorkel dan jaket pelampung. Daftar pengepakan lengkap dikirim setelah konfirmasi pemesanan.',
      accommodation: 'Kami bekerja sama dengan penginapan lokal dan eco-lodge yang nyaman. Akomodasi bersih, sederhana, dan otentik. Beberapa paket termasuk menginap di kapal untuk pengalaman petualangan yang sejati. Semua makanan termasuk dengan masakan segar lokal.',
    },
    success: 'Terima kasih! Kami telah menerima pertanyaan Anda dan akan membalas dalam 24 jam.'
  },
    footer: {
      description: 'Rasakan keindahan alami Teluk Triton dengan pariwisata berkelanjutan berbasis masyarakat yang otentik.',
      contact: 'Hubungi Kami',
      follow: 'Ikuti Kami',
      rights: 'Hak cipta dilindungi.'
    }
  }
};
