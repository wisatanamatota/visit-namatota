import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactForm = () => {
  const { t } = useLanguage();

  const handleWhatsAppClick = (phoneNumber: string) => {
    const message = encodeURIComponent("Hi! I'm interested in planning a trip to Namatota. Can you help me?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('contact.title')}</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* WhatsApp CTA Section */}
          <div className="text-center mb-16">
            <div className="bg-card px-6 py-8 rounded-lg shadow-elegant max-w-4xl mx-auto">
              <div className="max-w-2xl mx-auto space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {t('contact.readyTitle')}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {t('contact.readyDescription')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => handleWhatsAppClick("6281342565587")}
                    className="w-full sm:w-auto px-6 py-4 text-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                    size="lg"
                  >
                    📱 +62 813-4256-5587
                  </Button>
                  <Button
                    onClick={() => handleWhatsAppClick("6281345356125")}
                    className="w-full sm:w-auto px-6 py-4 text-lg bg-green-600 hover:bg-green-700 text-white font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                    size="lg"
                  >
                    📱 +62 813-4535-6125
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">{t('contact.faq.title')}</h3>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card px-6 rounded-lg shadow-elegant">
                <AccordionTrigger className="text-left">{t('contact.faq.transport')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <div className="space-y-4">
                    <div>
                      <strong>✈️ {t('contact.faq.byAir')}:</strong> {t('contact.faqTransport.air')}
                    </div>
                    <div>
                      <strong>🚢 {t('contact.faq.byShip')}:</strong> {t('contact.faqTransport.ship')}
                    </div>
                    <div>
                      <strong>📋 {t('contact.faq.recommendation')}:</strong> {t('contact.faqTransport.recommendation')}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card px-6 rounded-lg shadow-elegant">
                <AccordionTrigger className="text-left">{t('contact.faq.bestTime')}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t('contact.faqContent.bestTime')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
