import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/34653554023"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={28} className="group-hover:rotate-12 smooth-transition" />
      <div className="absolute -top-12 right-0 bg-black/90 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 smooth-transition whitespace-nowrap">
        Solicitar información
      </div>
    </a>
  );
};

export default WhatsAppFloat;