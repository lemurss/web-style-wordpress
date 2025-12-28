import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section title */}
          <div className="mb-12 animate-fade-up">
            <h2 className="section-title">
              <span className="font-light">/</span>С ЧЕГО НАЧАТЬ?<span className="font-light">/</span>
            </h2>
          </div>

          {/* Description */}
          <div className="mb-12 animate-fade-up delay-100">
            <p className="text-foreground/70 text-lg leading-relaxed">
              Все просто: напишите мне! Первая встреча поможет нам познакомиться 
              и понять, как я могу быть полезной именно вам
            </p>
          </div>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-200">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-sm tracking-[0.15em] px-8 py-6 gap-3"
              asChild
            >
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-sm tracking-[0.15em] px-8 py-6 gap-3 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              asChild
            >
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                <Send size={20} />
                Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
