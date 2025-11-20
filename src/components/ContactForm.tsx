import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    travelers: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('contact.success'),
      description: "",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      dates: "",
      travelers: "",
      interest: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t('contact.title')}</h2>
          <p className="text-xl text-muted-foreground">{t('contact.subtitle')}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-elegant">
            <h3 className="text-2xl font-bold text-foreground mb-4">{t('contact.subtitle')}</h3>
            <p className="text-muted-foreground mb-6">
              {t('contact.description')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">{t('contact.name')} *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="email">{t('contact.email')} *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="phone">{t('contact.phone')}</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="dates">{t('contact.dates')}</Label>
                <Input
                  id="dates"
                  placeholder="e.g., March 2026"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="travelers">{t('contact.travelers')}</Label>
                <Input
                  id="travelers"
                  type="number"
                  min="1"
                  value={formData.travelers}
                  onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                />
              </div>

              <div>
                <Label htmlFor="package-interest">{t('contact.interest')}</Label>
                <Select
                  value={formData.interest}
                  onValueChange={(value) => setFormData({ ...formData, interest: value })}
                >
                  <SelectTrigger id="package-interest">
                    <SelectValue placeholder={t('contact.interest')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="whale-sharks">{t('contact.interestWhaleShark')}</SelectItem>
                    <SelectItem value="diving">{t('contact.interestDiving')}</SelectItem>
                    <SelectItem value="culture">{t('contact.interestCulture')}</SelectItem>
                    <SelectItem value="everything">{t('contact.interestEverything')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">{t('contact.message')}</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                {t('contact.send')}
              </Button>
            </form>
          </div>

          {/* FAQ */}
          <div id="faq">
            <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card px-6 rounded-lg shadow-elegant">
                <AccordionTrigger className="text-left">How do I get to Kaimana?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Kaimana has its own airport (KNG) with regular flights from Jakarta and Sorong. We can help arrange your domestic flights and provide airport transfers. Most visitors fly Jakarta → Sorong → Kaimana, with total travel time around 6-8 hours.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card px-6 rounded-lg shadow-elegant">
                <AccordionTrigger className="text-left">When is the best time to visit?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Whale sharks are present year-round! The best overall weather is during the dry season (October to April), but Triton Bay is accessible and beautiful throughout the year. Each season offers unique experiences.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card px-6 rounded-lg shadow-elegant">
                <AccordionTrigger className="text-left">Is it safe?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Absolutely. Kaimana and Namatota are safe, welcoming communities. All our guides are certified, our boats meet safety standards, and we maintain comprehensive insurance. We have an excellent safety record and local knowledge to ensure your comfort and security.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card px-6 rounded-lg shadow-elegant">
                <AccordionTrigger className="text-left">What should I pack?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Essentials: swimwear, reef-safe sunscreen, light clothing, hat, water shoes, underwater camera, and any personal dive/snorkel gear. We provide snorkel equipment and life jackets. Full packing list sent upon booking confirmation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card px-6 rounded-lg shadow-elegant">
                <AccordionTrigger className="text-left">What about accommodation?</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  We partner with comfortable local guesthouses and eco-lodges. Accommodations are clean, simple, and authentic. Some packages include boat-based stays for a true adventure experience. All meals are included featuring fresh local cuisine.
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
