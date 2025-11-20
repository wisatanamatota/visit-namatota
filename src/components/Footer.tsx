import { Instagram, Youtube, Mail, Phone } from "lucide-react";
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
              <a href="mailto:info@namatota.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                info@namatota.com
              </a>
              <a href="tel:+62123456789" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                +62 123 456 789 (WhatsApp)
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.follow')}</h4>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube className="w-6 h-6" />
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
