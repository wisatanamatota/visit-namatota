import { Instagram, Youtube, Mail, Phone, Facebook, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Namatota</h3>
            <p className="text-white/80">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
            <div className="space-y-2">
              <a href="mailto:wisata.namatota@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                wisata.namatota@gmail.com
              </a>
              <div className="space-y-2">
                <a href="tel:+6281342565587" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +62 813-4256-5587 (WhatsApp)
                </a>
                <a href="tel:+6281345356125" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  +62 813-4535-6125 (WhatsApp)
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.follow')}</h4>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@PokdawisNamatota" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/visit.namatota/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://web.facebook.com/people/Pokdarwis-Namatota/pfbid0qQ3LsNJaJ1WVwfB6d3u8qesQvmu27V3K7H3o3Zq7cSaogrBmeGDYcPbYnnao7cKfl/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://namatota.kaimanakab.go.id/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>&copy; 2025 Namatota. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
