import { MessageCircle, Shield, Eye } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/20 border-t border-border/20">
      <div className="container mx-auto px-6 py-12">
        {/* Legal Notices */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-warning/10 text-warning px-6 py-3 rounded-xl font-semibold mb-4">
            <Shield className="w-5 h-5" />
            +18. Juega con responsabilidad. Rendimientos pasados no garantizan resultados futuros.
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a 
            href="https://wa.me/34653554023" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-success smooth-transition"
          >
            <MessageCircle className="w-4 h-4" />
            Contacto WhatsApp
          </a>
          <button className="text-muted-foreground hover:text-success smooth-transition">
            Términos y Condiciones
          </button>
          <button className="flex items-center gap-2 text-muted-foreground hover:text-success smooth-transition">
            <Eye className="w-4 h-4" />
            Política de Privacidad
          </button>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground border-t border-border/20 pt-8">
          <p>© 2024 AI Tipster Pro. Todos los derechos reservados.</p>
          <p className="mt-2">
            Plataforma de análisis deportivo con IA. No somos una casa de apuestas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;