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
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
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
      about: 'About Us',
      contact: 'Contact',
      planTrip: 'Plan Your Trip'
    },
    hero: {
      title: 'Namatota: The Hidden Gem',
      subtitle: "Swim with Giants in Triton Bay. Discover Kaimana's Hidden Paradise.",
      explore: 'Explore Experiences'
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
      whaleSharkTitle: 'The Whale Sharks of Triton Bay',
      whaleSharkDesc: 'Experience the magic of swimming alongside gentle giants at the traditional bagan (fishing platforms). These majestic whale sharks visit year-round, feeding on the rich plankton attracted to the lights. Our ethical approach ensures minimal disturbance while you create memories of a lifetime. The best time to visit is during the early morning hours when visibility is perfect and the water is calm.',
      rockArtTitle: 'The Karst Islands & Rock Art',
      rockArtDesc: 'Journey through time as you explore ancient petroglyphs painted on limestone cliffs thousands of years ago. These sacred sites, known locally as \'lukisan purba,\' tell stories of the earliest inhabitants of West Papua. Your boat tour winds through stunning karst islands, each more dramatic than the last, with hidden caves and pristine beaches waiting to be discovered.',
      villageTitle: 'Namatota Village & Culture',
      villageDesc: 'Immerse yourself in the living culture of the Namatota Kingdom. Visit the traditional village where ancient customs are still practiced today. Meet local families, learn about traditional fishing methods, and hear stories passed down through generations. This is authentic cultural exchange at its finest, supporting the community while gaining deep insights into Papuan life.',
      divingTitle: 'Snorkeling & Diving',
      divingDesc: 'Dive into one of the world\'s most pristine underwater paradises. Triton Bay boasts incredible soft coral gardens in vibrant purples, pinks, and oranges. The marine biodiversity rivals Raja Ampat, but with far fewer visitors. Crystal-clear visibility, healthy reefs teeming with life, and the chance to spot rare species make every dive unforgettable. Perfect for both snorkelers and experienced divers.'
    },
    gallery: {
      title: 'Visual Gallery',
      subtitle: 'Experience the beauty of Namatota through our lens'
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
      send: 'Send Inquiry',
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
      about: 'Tentang Kami',
      contact: 'Kontak',
      planTrip: 'Rencanakan Perjalanan'
    },
    hero: {
      title: 'Namatota: Permata Tersembunyi',
      subtitle: 'Berenang Bersama Raksasa di Teluk Triton. Temukan Surga Tersembunyi Kaimana.',
      explore: 'Jelajahi Pengalaman'
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
      whaleSharkTitle: 'Hiu Paus Teluk Triton',
      whaleSharkDesc: 'Rasakan keajaiban berenang bersama raksasa lembut di bagan tradisional (platform penangkapan ikan). Hiu paus megah ini berkunjung sepanjang tahun, memakan plankton kaya yang tertarik pada cahaya. Pendekatan etis kami memastikan gangguan minimal saat Anda menciptakan kenangan seumur hidup. Waktu terbaik untuk berkunjung adalah saat pagi hari ketika visibilitas sempurna dan air tenang.',
      rockArtTitle: 'Pulau Karst & Lukisan Batu',
      rockArtDesc: 'Perjalanan menembus waktu saat Anda menjelajahi petroglyph kuno yang dilukis di tebing batu kapur ribuan tahun yang lalu. Situs suci ini, yang dikenal secara lokal sebagai \'lukisan purba,\' menceritakan kisah penghuni paling awal Papua Barat. Tur perahu Anda berliku melalui pulau-pulau karst yang menakjubkan, masing-masing lebih dramatis dari yang lain, dengan gua tersembunyi dan pantai alami menunggu untuk ditemukan.',
      villageTitle: 'Kampung Namatota & Budaya',
      villageDesc: 'Benamkan diri Anda dalam budaya hidup Kerajaan Namatota. Kunjungi kampung tradisional di mana adat kuno masih dipraktikkan hingga hari ini. Temui keluarga lokal, pelajari metode penangkapan ikan tradisional, dan dengarkan cerita yang diturunkan melalui generasi. Ini adalah pertukaran budaya otentik terbaik, mendukung masyarakat sambil mendapatkan wawasan mendalam tentang kehidupan Papua.',
      divingTitle: 'Snorkeling & Menyelam',
      divingDesc: 'Selami salah satu surga bawah laut paling alami di dunia. Teluk Triton memiliki taman karang lunak yang luar biasa dalam warna ungu, merah muda, dan oranye yang cerah. Keanekaragaman hayati laut menyaingi Raja Ampat, tetapi dengan jauh lebih sedikit pengunjung. Visibilitas kristal jernih, terumbu karang sehat yang dipenuhi kehidupan, dan kesempatan untuk melihat spesies langka membuat setiap penyelaman tak terlupakan. Sempurna untuk snorkeler dan penyelam berpengalaman.'
    },
    gallery: {
      title: 'Galeri Visual',
      subtitle: 'Rasakan keindahan Namatota melalui lensa kami'
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
      send: 'Kirim Pertanyaan',
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
